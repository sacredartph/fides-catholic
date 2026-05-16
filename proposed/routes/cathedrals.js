// Cathedrals & Sacred Art routes
const express = require('express');
const db = require('../../backend/models/db');
const router = express.Router();

router.get('/cathedrals', (req, res) => {
  const style = req.query.style;
  let sql = `SELECT id, slug, name, city, country, built_start, built_end, style,
                    hero_image_url, thumb_image_url, short_summary
             FROM cathedrals`;
  const args = [];
  if (style) { sql += ' WHERE style LIKE ?'; args.push('%' + style + '%'); }
  sql += ' ORDER BY name';
  res.json({ cathedrals: db.prepare(sql).all(...args) });
});

router.get('/cathedrals/:slug', (req, res) => {
  const c = db.prepare('SELECT * FROM cathedrals WHERE slug = ?').get(req.params.slug);
  if (!c) return res.status(404).json({ error: 'not_found' });
  res.json({
    cathedral: {
      ...c,
      hotspots: safeJSON(c.hotspots) || [],
      fun_facts: safeJSON(c.fun_facts) || []
    }
  });
});

router.get('/art', (req, res) => {
  const era = req.query.era;
  let sql = 'SELECT id, slug, title, artist, year, era, current_location, thumb_url, image_url FROM artworks';
  const args = [];
  if (era) { sql += ' WHERE era = ?'; args.push(era); }
  sql += ' ORDER BY year';
  res.json({ artworks: db.prepare(sql).all(...args) });
});

router.get('/art/:slug', (req, res) => {
  const a = db.prepare('SELECT * FROM artworks WHERE slug = ?').get(req.params.slug);
  if (!a) return res.status(404).json({ error: 'not_found' });
  res.json({ artwork: { ...a, details_to_notice: safeJSON(a.details_to_notice) || [] } });
});

function safeJSON(s) { try { return JSON.parse(s || ''); } catch (e) { return null; } }

module.exports = router;
