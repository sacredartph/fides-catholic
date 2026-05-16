const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../models/db');
const { postHub } = require('../posthub');

const router = express.Router();

try { db.exec("ALTER TABLE users ADD COLUMN bukidic_uid TEXT"); } catch (e) {}
try { db.exec("CREATE UNIQUE INDEX IF NOT EXISTS idx_users_bukidic_uid ON users(bukidic_uid)"); } catch (e) {}

function extractToken(req) {
  const header = req.headers.authorization || '';
  const fromHeader = header.startsWith('Bearer ') ? header.slice(7) : null;
  return fromHeader || (req.body && req.body.token) || null;
}

function uniqueUsername(base) {
  let candidate = (base || 'family').toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 20) || 'family';
  const root = candidate;
  let n = 1;
  while (db.prepare('SELECT id FROM users WHERE username = ?').get(candidate)) {
    n += 1;
    candidate = (root + n).slice(0, 24);
  }
  return candidate;
}

router.post('/', (req, res) => {
  const token = extractToken(req);
  if (!token) return res.status(400).json({ error: 'missing_token' });

  let payload;
  try { payload = jwt.verify(token, process.env.JWT_SECRET); }
  catch (e) { return res.status(401).json({ error: 'invalid_bukidic_token' }); }

  if (payload.src !== 'bukidic') return res.status(401).json({ error: 'not_bukidic_token' });

  const bukidicUid = String(payload.uid);
  const email = String(payload.email || '').toLowerCase();
  const displayName = String(payload.name || email.split('@')[0] || 'Learner').slice(0, 60);

  let user = db.prepare('SELECT * FROM users WHERE bukidic_uid = ?').get(bukidicUid);

  if (!user) {
    const username = uniqueUsername(email.split('@')[0]);
    const info = db.prepare(`
      INSERT INTO users
        (username, display_name, password_hash, role, bukidic_uid, last_login)
      VALUES (?, ?, '__sso_only__', 'student', ?, datetime('now'))
    `).run(username, displayName, bukidicUid);
    db.prepare('INSERT INTO user_xp (user_id, total_xp, level) VALUES (?, 0, 1)').run(info.lastInsertRowid);
    user = db.prepare('SELECT * FROM users WHERE id = ?').get(info.lastInsertRowid);
  } else {
    db.prepare("UPDATE users SET last_login = datetime('now'), display_name = COALESCE(NULLIF(?, ''), display_name) WHERE id = ?")
      .run(displayName, user.id);
  }

  const appToken = jwt.sign(
    { uid: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '30d', issuer: 'fides-catholic' }
  );
  const xp = db.prepare('SELECT total_xp, level FROM user_xp WHERE user_id = ?').get(user.id) || { total_xp: 0, level: 1 };
  const badges_count = (db.prepare('SELECT COUNT(*) AS c FROM badges WHERE user_id = ?').get(user.id) || { c: 0 }).c;
  const lessons_done = (db.prepare("SELECT COUNT(*) AS c FROM user_progress WHERE user_id = ? AND completed = 1").get(user.id) || { c: 0 }).c;

  postHub(bukidicUid, 'session_start', {
    meta: {
      total_xp: xp.total_xp || 0,
      level: xp.level || 1,
      lessons_completed: lessons_done,
      badges_count,
      streak_days: user.streak_days || 0,
      summary: 'Last opened Fides'
    }
  });

  res.json({
    token: appToken,
    user: {
      id: user.id, username: user.username, display_name: user.display_name,
      confirmation_name: user.confirmation_name, diocese: user.diocese,
      role: user.role, streak_days: user.streak_days || 0,
      total_xp: xp.total_xp, level: xp.level
    }
  });
});

module.exports = router;
