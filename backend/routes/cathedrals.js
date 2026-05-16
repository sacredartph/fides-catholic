// Cathedrals & Sacred Art routes
const express = require('express');
const db = require('../models/db');
const router = express.Router();

// Wikipedia hotlink images get blocked by Chrome's ORB and Wikipedia's referrer
// policy. Proxy them through this backend so the kids actually see the
// cathedrals and artworks. Strict host allow-list.
const PROXY_HOSTS = new Set([
  'commons.wikimedia.org',
  'upload.wikimedia.org',
  'en.wikipedia.org'
]);

function proxifyUrl(u) {
  if (!u || typeof u !== 'string') return u;
  try {
    const url = new URL(u);
    if (PROXY_HOSTS.has(url.hostname)) {
      return '/api/img?u=' + encodeURIComponent(u);
    }
    return u;
  } catch (e) { return u; }
}

function proxifyRow(row, fields) {
  if (!row) return row;
  const out = { ...row };
  for (const f of fields) {
    if (typeof out[f] === 'string') out[f] = proxifyUrl(out[f]);
  }
  return out;
}

const IMG_FIELDS_CATHEDRAL = ['hero_image_url', 'thumb_image_url'];
const IMG_FIELDS_ART = ['image_url', 'thumb_url'];

router.get('/cathedrals', (req, res) => {
  const style = req.query.style;
  let sql = `SELECT id, slug, name, city, country, built_start, built_end, style,
                    hero_image_url, thumb_image_url, short_summary
             FROM cathedrals`;
  const args = [];
  if (style) { sql += ' WHERE style LIKE ?'; args.push('%' + style + '%'); }
  sql += ' ORDER BY name';
  const rows = db.prepare(sql).all(...args).map(r => proxifyRow(r, IMG_FIELDS_CATHEDRAL));
  res.json({ cathedrals: rows });
});

router.get('/cathedrals/:slug', (req, res) => {
  const c = db.prepare('SELECT * FROM cathedrals WHERE slug = ?').get(req.params.slug);
  if (!c) return res.status(404).json({ error: 'not_found' });
  const proxied = proxifyRow(c, IMG_FIELDS_CATHEDRAL);
  res.json({
    cathedral: {
      ...proxied,
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
  const rows = db.prepare(sql).all(...args).map(r => proxifyRow(r, IMG_FIELDS_ART));
  res.json({ artworks: rows });
});

router.get('/art/:slug', (req, res) => {
  const a = db.prepare('SELECT * FROM artworks WHERE slug = ?').get(req.params.slug);
  if (!a) return res.status(404).json({ error: 'not_found' });
  const proxied = proxifyRow(a, IMG_FIELDS_ART);
  res.json({ artwork: { ...proxied, details_to_notice: safeJSON(a.details_to_notice) || [] } });
});

// Image proxy: strict allow-list, server-side fetch with proper UA + Referer,
// CORS-friendly response, week-long browser cache.
router.get('/img', async (req, res) => {
  const u = String(req.query.u || '');
  let parsed;
  try { parsed = new URL(u); } catch (e) { return res.status(400).json({ error: 'bad_url' }); }
  if (!PROXY_HOSTS.has(parsed.hostname)) {
    return res.status(400).json({ error: 'host_not_allowed' });
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const upstream = await fetch(u, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'BUKIDIC-Learning/1.0 (Sacred Art PH; learn.sacredartph.com)',
        'Referer': 'https://en.wikipedia.org/',
        'Accept': 'image/*'
      }
    });
    clearTimeout(timer);
    if (!upstream.ok) return res.status(upstream.status).json({ error: 'upstream', status: upstream.status });
    res.set('Content-Type', upstream.headers.get('content-type') || 'image/jpeg');
    res.set('Cache-Control', 'public, max-age=604800, immutable');
    res.set('Access-Control-Allow-Origin', '*');
    const buf = Buffer.from(await upstream.arrayBuffer());
    res.send(buf);
  } catch (e) {
    res.status(502).json({ error: 'fetch_failed', message: e && e.message });
  }
});

function safeJSON(s) { try { return JSON.parse(s || ''); } catch (e) { return null; } }

module.exports = router;
