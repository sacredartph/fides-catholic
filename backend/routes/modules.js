const express = require('express');
const db = require('../models/db');
const { authOptional, authRequired } = require('../middleware/auth');

const router = express.Router();

router.get('/', authOptional, (req, res) => {
  const userId = req.user && req.user.uid;
  const modules = db.prepare(`
    SELECT m.*, (SELECT COUNT(*) FROM lessons WHERE module_id = m.id) AS lesson_count
    FROM modules m
    ORDER BY m.order_index
  `).all();
  let progressMap = {};
  if (userId) {
    const rows = db.prepare(`
      SELECT module_id, COUNT(*) AS done
      FROM user_progress WHERE user_id = ? AND completed = 1
      GROUP BY module_id
    `).all(userId);
    rows.forEach(r => { progressMap[r.module_id] = r.done; });
  }
  const result = modules.map(m => {
    const done = progressMap[m.id] || 0;
    let unlocked = !m.unlocks_after;
    if (m.unlocks_after && userId) {
      const prereq = db.prepare(`
        SELECT COUNT(*) AS c FROM user_progress
        WHERE user_id = ? AND module_id = ? AND completed = 1
      `).get(userId, m.unlocks_after).c;
      const prereqTotal = db.prepare('SELECT COUNT(*) AS c FROM lessons WHERE module_id = ?').get(m.unlocks_after).c;
      unlocked = prereqTotal > 0 && prereq >= 1;
    } else if (m.unlocks_after) {
      unlocked = false;
    }
    return {
      ...m,
      lessons_done: done,
      unlocked: m.order_index === 1 ? true : unlocked
    };
  });
  res.json({ modules: result });
});

router.get('/:id', authOptional, (req, res) => {
  const userId = req.user && req.user.uid;
  const m = db.prepare('SELECT * FROM modules WHERE id = ?').get(req.params.id);
  if (!m) return res.status(404).json({ error: 'not_found' });
  const lessons = db.prepare(`
    SELECT id, slug, title, subtitle, type, order_index, xp_reward, duration_minutes,
           has_quiz, has_interactive, scripture_ref, ccc_ref
    FROM lessons WHERE module_id = ? ORDER BY order_index
  `).all(m.id);
  let progress = {};
  if (userId) {
    const rows = db.prepare(`
      SELECT lesson_id, completed, quiz_score, xp_earned
      FROM user_progress WHERE user_id = ? AND module_id = ?
    `).all(userId, m.id);
    rows.forEach(r => { progress[r.lesson_id] = r; });
  }
  res.json({
    module: m,
    lessons: lessons.map(l => ({ ...l, progress: progress[l.id] || null }))
  });
});

module.exports = router;
