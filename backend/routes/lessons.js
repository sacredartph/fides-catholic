const express = require('express');
const db = require('../models/db');
const { authOptional, authRequired } = require('../middleware/auth');

const router = express.Router();

router.get('/:id', authOptional, (req, res) => {
  const lesson = db.prepare('SELECT * FROM lessons WHERE id = ?').get(req.params.id);
  if (!lesson) return res.status(404).json({ error: 'not_found' });
  let content;
  try { content = JSON.parse(lesson.content); }
  catch (e) { return res.status(500).json({ error: 'content_parse_error' }); }
  const questions = db.prepare(`
    SELECT id, question, options, explanation, ccc_ref, scripture_ref, order_index
    FROM quiz_questions WHERE lesson_id = ? ORDER BY order_index
  `).all(lesson.id).map(q => ({
    ...q,
    options: JSON.parse(q.options)
  }));
  const userId = req.user && req.user.uid;
  let progress = null;
  let bookmarked = false;
  let reflection = null;
  if (userId) {
    progress = db.prepare('SELECT * FROM user_progress WHERE user_id = ? AND lesson_id = ?')
      .get(userId, lesson.id) || null;
    bookmarked = !!db.prepare('SELECT id FROM bookmarks WHERE user_id = ? AND lesson_id = ?')
      .get(userId, lesson.id);
    const ref = db.prepare('SELECT text FROM reflections WHERE user_id = ? AND lesson_id = ? ORDER BY saved_at DESC LIMIT 1')
      .get(userId, lesson.id);
    reflection = ref ? ref.text : null;
  }
  res.json({
    lesson: { ...lesson, content },
    questions,
    progress,
    bookmarked,
    reflection
  });
});

router.post('/:id/complete', authRequired, (req, res) => {
  const userId = req.user.uid;
  const lessonId = parseInt(req.params.id, 10);
  const { quiz_score = null } = req.body || {};
  const lesson = db.prepare('SELECT * FROM lessons WHERE id = ?').get(lessonId);
  if (!lesson) return res.status(404).json({ error: 'not_found' });
  const baseXP = lesson.xp_reward || 50;
  let xp = baseXP;
  if (typeof quiz_score === 'number') {
    xp = Math.round(baseXP * (0.5 + 0.5 * (quiz_score / 100)));
  }
  const existing = db.prepare('SELECT * FROM user_progress WHERE user_id = ? AND lesson_id = ?')
    .get(userId, lessonId);
  if (existing) {
    if (existing.completed) {
      xp = Math.floor(xp * 0.3);
    }
    db.prepare(`
      UPDATE user_progress
      SET completed = 1, quiz_score = COALESCE(?, quiz_score),
          xp_earned = xp_earned + ?, completed_at = datetime('now'),
          attempts = attempts + 1
      WHERE user_id = ? AND lesson_id = ?
    `).run(quiz_score, xp, userId, lessonId);
  } else {
    db.prepare(`
      INSERT INTO user_progress (user_id, lesson_id, module_id, completed, quiz_score, xp_earned, completed_at, attempts)
      VALUES (?, ?, ?, 1, ?, ?, datetime('now'), 1)
    `).run(userId, lessonId, lesson.module_id, quiz_score, xp);
  }
  db.prepare(`
    INSERT INTO user_xp (user_id, total_xp, level) VALUES (?, ?, 1)
    ON CONFLICT(user_id) DO UPDATE SET total_xp = total_xp + ?
  `).run(userId, xp, xp);
  const xpRow = db.prepare('SELECT total_xp, level FROM user_xp WHERE user_id = ?').get(userId);
  const newLevel = Math.min(20, 1 + Math.floor(xpRow.total_xp / 200));
  const leveledUp = newLevel > xpRow.level;
  db.prepare('UPDATE user_xp SET level = ? WHERE user_id = ?').run(newLevel, userId);
  const totalInModule = db.prepare('SELECT COUNT(*) AS c FROM lessons WHERE module_id = ?').get(lesson.module_id).c;
  const doneInModule = db.prepare(`
    SELECT COUNT(*) AS c FROM user_progress
    WHERE user_id = ? AND module_id = ? AND completed = 1
  `).get(userId, lesson.module_id).c;
  let badgeEarned = null;
  if (totalInModule > 0 && doneInModule >= totalInModule) {
    const mod = db.prepare('SELECT badge_name, badge_emoji, slug FROM modules WHERE id = ?').get(lesson.module_id);
    if (mod && mod.badge_name) {
      try {
        db.prepare(`
          INSERT INTO badges (user_id, badge_id, badge_name, badge_emoji)
          VALUES (?, ?, ?, ?)
        `).run(userId, 'module-' + mod.slug, mod.badge_name, mod.badge_emoji);
        badgeEarned = { id: 'module-' + mod.slug, name: mod.badge_name, emoji: mod.badge_emoji };
      } catch (e) { /* already earned */ }
    }
  }
  res.json({
    xp_earned: xp, total_xp: xpRow.total_xp, level: newLevel,
    leveled_up: leveledUp, badge: badgeEarned,
    module_done: doneInModule >= totalInModule,
    lessons_done_in_module: doneInModule, lessons_in_module: totalInModule
  });
});

router.post('/:id/bookmark', authRequired, (req, res) => {
  const userId = req.user.uid;
  const lessonId = parseInt(req.params.id, 10);
  const existing = db.prepare('SELECT id FROM bookmarks WHERE user_id = ? AND lesson_id = ?').get(userId, lessonId);
  if (existing) {
    db.prepare('DELETE FROM bookmarks WHERE id = ?').run(existing.id);
    return res.json({ bookmarked: false });
  }
  db.prepare('INSERT INTO bookmarks (user_id, lesson_id) VALUES (?, ?)').run(userId, lessonId);
  res.json({ bookmarked: true });
});

router.post('/:id/reflection', authRequired, (req, res) => {
  const userId = req.user.uid;
  const lessonId = parseInt(req.params.id, 10);
  const { text } = req.body || {};
  if (!text || typeof text !== 'string') return res.status(400).json({ error: 'missing_text' });
  db.prepare('INSERT INTO reflections (user_id, lesson_id, text) VALUES (?, ?, ?)').run(userId, lessonId, text.slice(0, 5000));
  db.prepare(`
    INSERT INTO user_progress (user_id, lesson_id, module_id, reflection_saved)
    VALUES (?, ?, (SELECT module_id FROM lessons WHERE id = ?), 1)
    ON CONFLICT(user_id, lesson_id) DO UPDATE SET reflection_saved = 1
  `).run(userId, lessonId, lessonId);
  res.json({ ok: true });
});

router.get('/:id/reflections', authRequired, (req, res) => {
  const rows = db.prepare(`
    SELECT id, text, saved_at FROM reflections
    WHERE user_id = ? AND lesson_id = ?
    ORDER BY saved_at DESC LIMIT 20
  `).all(req.user.uid, req.params.id);
  res.json({ reflections: rows });
});

module.exports = router;
