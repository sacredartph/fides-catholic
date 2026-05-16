const express = require('express');
const db = require('../models/db');
const { authRequired } = require('../middleware/auth');

const router = express.Router();

router.get('/me', authRequired, (req, res) => {
  const userId = req.user.uid;
  const xp = db.prepare('SELECT total_xp, level FROM user_xp WHERE user_id = ?').get(userId)
    || { total_xp: 0, level: 1 };
  const lessonCount = db.prepare('SELECT COUNT(*) AS c FROM user_progress WHERE user_id = ? AND completed = 1').get(userId).c;
  const totalLessons = db.prepare('SELECT COUNT(*) AS c FROM lessons').get().c;
  const moduleProgress = db.prepare(`
    SELECT m.id, m.title, m.badge_emoji,
      (SELECT COUNT(*) FROM lessons WHERE module_id = m.id) AS total,
      (SELECT COUNT(*) FROM user_progress WHERE user_id = ? AND module_id = m.id AND completed = 1) AS done
    FROM modules m ORDER BY m.order_index
  `).all(userId);
  const badges = db.prepare('SELECT * FROM badges WHERE user_id = ? ORDER BY earned_at').all(userId);
  const bookmarks = db.prepare(`
    SELECT l.id, l.title, l.subtitle, l.module_id, m.title AS module_title, b.created_at
    FROM bookmarks b
    JOIN lessons l ON l.id = b.lesson_id
    JOIN modules m ON m.id = l.module_id
    WHERE b.user_id = ?
    ORDER BY b.created_at DESC
  `).all(userId);
  const reflections = db.prepare(`
    SELECT r.id, r.text, r.saved_at, l.title AS lesson_title, l.id AS lesson_id
    FROM reflections r
    JOIN lessons l ON l.id = r.lesson_id
    WHERE r.user_id = ?
    ORDER BY r.saved_at DESC LIMIT 50
  `).all(userId);
  const user = db.prepare('SELECT streak_days FROM users WHERE id = ?').get(userId);
  const quizAvg = db.prepare(`
    SELECT AVG(quiz_score) AS avg FROM user_progress
    WHERE user_id = ? AND quiz_score IS NOT NULL
  `).get(userId).avg;
  const prayerDays = db.prepare(`
    SELECT COUNT(DISTINCT date(prayed_at)) AS c FROM prayer_log WHERE user_id = ?
  `).get(userId).c;
  res.json({
    xp,
    lessons_completed: lessonCount,
    total_lessons: totalLessons,
    modules: moduleProgress,
    badges,
    bookmarks,
    reflections,
    streak_days: user ? user.streak_days : 0,
    quiz_average: quizAvg != null ? Math.round(quizAvg) : null,
    prayer_days: prayerDays
  });
});

router.post('/prayer', authRequired, (req, res) => {
  const userId = req.user.uid;
  const { prayer_type } = req.body || {};
  if (!prayer_type) return res.status(400).json({ error: 'missing_type' });
  const today = new Date().toISOString().slice(0, 10);
  const todayCount = db.prepare(`
    SELECT COUNT(*) AS c FROM prayer_log WHERE user_id = ? AND date(prayed_at) = ?
  `).get(userId, today).c;
  db.prepare('INSERT INTO prayer_log (user_id, prayer_type) VALUES (?, ?)').run(userId, prayer_type);
  const user = db.prepare('SELECT streak_days, last_activity_date FROM users WHERE id = ?').get(userId);
  let streak = user.streak_days || 0;
  if (user.last_activity_date !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    streak = user.last_activity_date === yesterday ? streak + 1 : 1;
    db.prepare('UPDATE users SET streak_days = ?, last_activity_date = ? WHERE id = ?')
      .run(streak, today, userId);
  }
  res.json({ ok: true, streak_days: streak, prayed_today: todayCount + 1 });
});

router.get('/prayer-log', authRequired, (req, res) => {
  const rows = db.prepare(`
    SELECT prayer_type, prayed_at FROM prayer_log
    WHERE user_id = ? ORDER BY prayed_at DESC LIMIT 200
  `).all(req.user.uid);
  res.json({ log: rows });
});

module.exports = router;
