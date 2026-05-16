// Daily Readings + Saint-of-the-Day route
// Mounted in apply.js at /api/daily/*

const express = require('express');
const db = require('../../backend/models/db');

const router = express.Router();

function fmtDate(d) {
  if (typeof d === 'string') return d;
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return yyyy + '-' + mm + '-' + dd;
}

router.get('/today', (req, res) => {
  const today = fmtDate(new Date());
  serveDay(today, res);
});

router.get('/:date', (req, res) => {
  const date = req.params.date;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return res.status(400).json({ error: 'bad_date_format' });
  serveDay(date, res);
});

router.get('/week/upcoming', (req, res) => {
  const today = new Date();
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(fmtDate(d));
  }
  const placeholders = days.map(() => '?').join(',');
  const rows = db.prepare(
    'SELECT date, liturgical_day, season, color, gospel_ref, saint_of_day_slug ' +
    'FROM daily_readings WHERE date IN (' + placeholders + ') ORDER BY date'
  ).all(...days);
  res.json({ week: rows, requested: days });
});

function serveDay(date, res) {
  const r = db.prepare('SELECT * FROM daily_readings WHERE date = ?').get(date);

  // Always try to identify the saint of the day from feast_calendar
  const [_, mm, dd] = date.split('-').map(Number);
  const feasts = db.prepare(`
    SELECT fc.rank, fc.notes, s.slug, s.name, s.feast_day, s.years, s.patron_of, s.short_bio, s.full_bio, s.quote, s.symbol, s.type
    FROM feast_calendar fc
    JOIN saints s ON s.slug = fc.saint_slug
    WHERE fc.month = ? AND fc.day = ?
    ORDER BY CASE fc.rank
      WHEN 'solemnity' THEN 1
      WHEN 'feast' THEN 2
      WHEN 'memorial' THEN 3
      WHEN 'optional-memorial' THEN 4
      ELSE 5 END
  `).all(mm, dd);

  if (!r) {
    return res.json({
      date,
      placeholder: true,
      message: 'Readings for this date have not yet been added. We add them ongoing.',
      saints: feasts,
      suggestion: 'Visit usccb.org/bible/readings for the full readings of the day.'
    });
  }
  res.json({
    date: r.date,
    liturgical_day: r.liturgical_day,
    season: r.season,
    color: r.color,
    first_reading: { ref: r.first_reading_ref, text: r.first_reading_text },
    psalm: { ref: r.psalm_ref, text: r.psalm_text, response: r.psalm_response },
    second_reading: r.second_reading_ref ? { ref: r.second_reading_ref, text: r.second_reading_text } : null,
    gospel_acclamation: r.gospel_acclamation,
    gospel: { ref: r.gospel_ref, text: r.gospel_text },
    reflection: r.reflection,
    life_application: r.life_application,
    saints: feasts
  });
}

router.get('/saint/today', (req, res) => {
  const today = new Date();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const feasts = db.prepare(`
    SELECT fc.rank, fc.notes, s.*
    FROM feast_calendar fc
    JOIN saints s ON s.slug = fc.saint_slug
    WHERE fc.month = ? AND fc.day = ?
    ORDER BY CASE fc.rank
      WHEN 'solemnity' THEN 1
      WHEN 'feast' THEN 2
      WHEN 'memorial' THEN 3
      WHEN 'optional-memorial' THEN 4
      ELSE 5 END
  `).all(mm, dd);
  if (feasts.length) return res.json({ date: fmtDate(today), saints: feasts });
  const fallback = db.prepare('SELECT * FROM saints WHERE type = ? ORDER BY RANDOM() LIMIT 1').get('teen')
    || db.prepare('SELECT * FROM saints ORDER BY RANDOM() LIMIT 1').get();
  return res.json({ date: fmtDate(today), saints: [{ ...fallback, rank: 'no-feast', notes: 'No fixed feast today — meet a saint.' }] });
});

module.exports = router;
