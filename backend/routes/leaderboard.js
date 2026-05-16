const express = require('express');
const db = require('../models/db');

const router = express.Router();

const LEVEL_NAMES = [
  'Seeker','Learner','Inquirer','Catechumen','Baptized','Confirmed','Pilgrim','Crusader',
  'Scholar','Apologist','Mystic','Confessor','Deacon','Priest','Bishop','Doctor',
  'Patriarch','Prophet','Apostle','Saint'
];

router.get('/', (req, res) => {
  const rows = db.prepare(`
    SELECT u.id, u.username, u.display_name, u.confirmation_name, u.diocese,
           u.avatar, u.streak_days, x.total_xp, x.level
    FROM users u
    LEFT JOIN user_xp x ON x.user_id = u.id
    WHERE u.role != 'admin'
    ORDER BY COALESCE(x.total_xp, 0) DESC
    LIMIT 50
  `).all();
  const enriched = rows.map((r, i) => ({
    rank: i + 1,
    user_id: r.id,
    display_name: r.display_name,
    confirmation_name: r.confirmation_name,
    diocese: r.diocese,
    total_xp: r.total_xp || 0,
    level: r.level || 1,
    level_name: LEVEL_NAMES[(r.level || 1) - 1] || 'Seeker',
    streak_days: r.streak_days || 0,
    avatar: r.avatar
  }));
  res.json({ leaderboard: enriched, level_names: LEVEL_NAMES });
});

module.exports = router;
