const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');
const { signToken, authRequired } = require('../middleware/auth');

const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password, display_name, confirmation_name, diocese } = req.body || {};
  if (!username || !password || !display_name) {
    return res.status(400).json({ error: 'missing_fields' });
  }
  if (password.length < 4) return res.status(400).json({ error: 'password_too_short' });
  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username.toLowerCase());
  if (existing) return res.status(409).json({ error: 'username_taken' });
  const hash = bcrypt.hashSync(password, 10);
  const result = db.prepare(`
    INSERT INTO users (username, display_name, password_hash, confirmation_name, diocese, last_login)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
  `).run(username.toLowerCase(), display_name, hash, confirmation_name || null, diocese || null);
  const userId = result.lastInsertRowid;
  db.prepare('INSERT INTO user_xp (user_id, total_xp, level) VALUES (?, 0, 1)').run(userId);
  const token = signToken({ uid: userId, username: username.toLowerCase() });
  const user = db.prepare('SELECT id, username, display_name, confirmation_name, diocese, role FROM users WHERE id = ?').get(userId);
  res.json({ token, user });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'missing_fields' });
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username.toLowerCase());
  if (!user) return res.status(401).json({ error: 'invalid_credentials' });
  if (!bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }
  db.prepare("UPDATE users SET last_login = datetime('now') WHERE id = ?").run(user.id);
  const today = new Date().toISOString().slice(0, 10);
  const lastActivity = user.last_activity_date;
  let streak = user.streak_days || 0;
  if (lastActivity !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (lastActivity === yesterday) streak += 1;
    else if (!lastActivity) streak = 1;
    else streak = 1;
    db.prepare('UPDATE users SET streak_days = ?, last_activity_date = ? WHERE id = ?')
      .run(streak, today, user.id);
  }
  const token = signToken({ uid: user.id, username: user.username });
  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      display_name: user.display_name,
      confirmation_name: user.confirmation_name,
      diocese: user.diocese,
      role: user.role,
      streak_days: streak
    }
  });
});

router.get('/me', authRequired, (req, res) => {
  const user = db.prepare(`
    SELECT u.id, u.username, u.display_name, u.confirmation_name, u.diocese, u.role,
           u.streak_days, u.created_at, u.last_login, u.avatar,
           COALESCE(x.total_xp, 0) AS total_xp, COALESCE(x.level, 1) AS level
    FROM users u
    LEFT JOIN user_xp x ON x.user_id = u.id
    WHERE u.id = ?
  `).get(req.user.uid);
  if (!user) return res.status(404).json({ error: 'not_found' });
  const badges = db.prepare('SELECT badge_id, badge_name, badge_emoji, earned_at FROM badges WHERE user_id = ?').all(user.id);
  const lessonsDone = db.prepare('SELECT COUNT(*) AS c FROM user_progress WHERE user_id = ? AND completed = 1').get(user.id).c;
  res.json({ user, badges, lessons_completed: lessonsDone });
});

module.exports = router;
