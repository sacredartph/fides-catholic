const express = require('express');
const db = require('../models/db');

const router = express.Router();

router.get('/', (req, res) => {
  const q = (req.query.q || '').trim().toLowerCase();
  if (q.length < 2) return res.json({ results: { lessons: [], saints: [], scripture: [], ccc: [] } });
  const like = '%' + q + '%';
  const lessons = db.prepare(`
    SELECT l.id, l.title, l.subtitle, l.scripture_ref, l.ccc_ref,
           m.title AS module_title, m.id AS module_id
    FROM lessons l
    JOIN modules m ON m.id = l.module_id
    WHERE LOWER(l.title) LIKE ? OR LOWER(l.subtitle) LIKE ? OR LOWER(l.content) LIKE ?
    LIMIT 20
  `).all(like, like, like);
  const saints = db.prepare(`
    SELECT id, name, feast_day, short_bio, type FROM saints
    WHERE LOWER(name) LIKE ? OR LOWER(short_bio) LIKE ? OR LOWER(patron_of) LIKE ?
    LIMIT 20
  `).all(like, like, like);
  const popes = db.prepare(`
    SELECT id, number, name, regnal_name, key_event, start_year, end_year FROM popes
    WHERE LOWER(name) LIKE ? OR LOWER(key_event) LIKE ?
    LIMIT 15
  `).all(like, like);
  const scripture = db.prepare(`
    SELECT id, title, scripture_ref, short_summary, testament FROM bible_stories
    WHERE LOWER(title) LIKE ? OR LOWER(short_summary) LIKE ? OR LOWER(scripture_ref) LIKE ?
    LIMIT 20
  `).all(like, like, like);
  res.json({ query: q, results: { lessons, saints, popes, scripture } });
});

router.get('/saints', (req, res) => {
  const type = req.query.type;
  let sql = 'SELECT * FROM saints';
  const args = [];
  if (type) {
    sql += ' WHERE type = ?';
    args.push(type);
  }
  sql += ' ORDER BY name';
  const rows = db.prepare(sql).all(...args);
  res.json({ saints: rows });
});

router.get('/saints/:id', (req, res) => {
  const s = db.prepare('SELECT * FROM saints WHERE id = ?').get(req.params.id);
  if (!s) return res.status(404).json({ error: 'not_found' });
  res.json({ saint: s });
});

router.get('/popes', (req, res) => {
  const rows = db.prepare('SELECT * FROM popes ORDER BY number').all();
  res.json({ popes: rows });
});

router.get('/bible', (req, res) => {
  const rows = db.prepare(`
    SELECT id, slug, title, testament, book, scripture_ref, short_summary
    FROM bible_stories ORDER BY id
  `).all();
  res.json({ stories: rows });
});

router.get('/bible/:slug', (req, res) => {
  const s = db.prepare('SELECT * FROM bible_stories WHERE slug = ?').get(req.params.slug);
  if (!s) return res.status(404).json({ error: 'not_found' });
  let panels = [];
  try { panels = JSON.parse(s.panels || '[]'); } catch (e) {}
  res.json({ story: { ...s, panels } });
});

module.exports = router;
