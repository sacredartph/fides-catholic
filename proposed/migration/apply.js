// Fides v2 migration — applies new schema + seeds without touching v1 data.
// IDEMPOTENT: safe to run multiple times. Backs up the DB first.
//
// Usage:
//   node proposed/migration/apply.js          (apply everything)
//   node proposed/migration/apply.js --dry    (show what would be done)

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });
const projectRoot = path.join(__dirname, '..', '..');
const dbPath = process.env.DB_PATH ? path.resolve(projectRoot, process.env.DB_PATH) : path.join(projectRoot, 'database', 'fides.db');

const dry = process.argv.includes('--dry');

const schemaPath = path.join(__dirname, 'schema-v2.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

const SAINTS_EXTRA = require('../seed/saints-extra');
const FEAST_CAL = require('../seed/feast-calendar');
const READINGS = require('../seed/daily-readings');
const CATHEDRALS = require('../seed/cathedrals');
const ARTWORKS = require('../seed/artworks');
const BIBLE_EXTRA = require('../seed/bible-extra');

function backup() {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const bk = path.join(projectRoot, 'database', 'fides.backup.' + stamp + '.db');
  fs.copyFileSync(dbPath, bk);
  console.log('[backup]', bk);
  return bk;
}

function applySchema(db) {
  console.log('[schema] applying additions...');
  db.exec(schema);
}

function upsertSaintsExtra(db) {
  const ins = db.prepare(`
    INSERT INTO saints (slug, name, feast_day, years, patron_of, short_bio, full_bio, quote, symbol, type)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      name = excluded.name, feast_day = excluded.feast_day, years = excluded.years,
      patron_of = excluded.patron_of, short_bio = excluded.short_bio, full_bio = excluded.full_bio,
      quote = excluded.quote, symbol = excluded.symbol, type = excluded.type
  `);
  const insSearch = db.prepare(`INSERT INTO search_index (content_type, content_id, title, keywords, body_preview) VALUES (?, ?, ?, ?, ?)`);
  let n = 0;
  for (const s of SAINTS_EXTRA) {
    const r = ins.run(s.slug, s.name, s.feast_day, s.years, s.patron_of, s.short_bio, s.full_bio, s.quote, s.symbol, s.type);
    if (r.changes) n++;
    // Refresh search index for this saint (delete any prior + insert new)
    db.prepare(`DELETE FROM search_index WHERE content_type='saint' AND title=?`).run(s.name);
    const id = db.prepare('SELECT id FROM saints WHERE slug = ?').get(s.slug).id;
    insSearch.run('saint', id, s.name, [s.name, s.patron_of || '', s.short_bio || '', s.type].join(' '), s.short_bio || '');
  }
  console.log('[saints-extra]', n, 'rows inserted/updated (', SAINTS_EXTRA.length, 'in seed)');
}

function fillFeastCalendar(db) {
  db.prepare('DELETE FROM feast_calendar').run();
  const ins = db.prepare('INSERT OR IGNORE INTO feast_calendar (month, day, saint_slug, rank, notes) VALUES (?, ?, ?, ?, ?)');
  let n = 0, missing = [];
  for (const [m, d, slug, rank, notes] of FEAST_CAL) {
    const found = db.prepare('SELECT id FROM saints WHERE slug = ?').get(slug);
    if (!found) { missing.push(slug); continue; }
    const r = ins.run(m, d, slug, rank, notes || null);
    if (r.changes) n++;
  }
  console.log('[feast-calendar]', n, 'entries; missing slugs:', missing.length ? missing : 'none');
}

function fillReadings(db) {
  const ins = db.prepare(`
    INSERT INTO daily_readings (date, liturgical_day, season, color,
      first_reading_ref, first_reading_text, psalm_ref, psalm_text, psalm_response,
      second_reading_ref, second_reading_text, gospel_acclamation, gospel_ref, gospel_text,
      reflection, life_application, saint_of_day_slug)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(date) DO UPDATE SET
      liturgical_day = excluded.liturgical_day, season = excluded.season, color = excluded.color,
      first_reading_ref = excluded.first_reading_ref, first_reading_text = excluded.first_reading_text,
      psalm_ref = excluded.psalm_ref, psalm_text = excluded.psalm_text, psalm_response = excluded.psalm_response,
      second_reading_ref = excluded.second_reading_ref, second_reading_text = excluded.second_reading_text,
      gospel_acclamation = excluded.gospel_acclamation, gospel_ref = excluded.gospel_ref,
      gospel_text = excluded.gospel_text, reflection = excluded.reflection,
      life_application = excluded.life_application, saint_of_day_slug = excluded.saint_of_day_slug
  `);
  let n = 0;
  for (const r of READINGS) {
    ins.run(r.date, r.liturgical_day, r.season, r.color,
      r.first_reading_ref || null, r.first_reading_text || null,
      r.psalm_ref || null, r.psalm_text || null, r.psalm_response || null,
      r.second_reading_ref || null, r.second_reading_text || null,
      r.gospel_acclamation || null, r.gospel_ref, r.gospel_text,
      r.reflection, r.life_application, r.saint_of_day_slug || null);
    n++;
  }
  console.log('[readings]', n, 'days seeded');
}

function fillCathedrals(db) {
  const ins = db.prepare(`
    INSERT INTO cathedrals (slug, name, city, country, built_start, built_end, style,
      hero_image_url, thumb_image_url, image_credit, short_summary, full_history,
      architectural_significance, notable_relics, patron_saints, hotspots, fun_facts)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      name = excluded.name, city = excluded.city, country = excluded.country,
      built_start = excluded.built_start, built_end = excluded.built_end, style = excluded.style,
      hero_image_url = excluded.hero_image_url, thumb_image_url = excluded.thumb_image_url,
      image_credit = excluded.image_credit, short_summary = excluded.short_summary,
      full_history = excluded.full_history, architectural_significance = excluded.architectural_significance,
      notable_relics = excluded.notable_relics, patron_saints = excluded.patron_saints,
      hotspots = excluded.hotspots, fun_facts = excluded.fun_facts
  `);
  let n = 0;
  for (const c of CATHEDRALS) {
    ins.run(c.slug, c.name, c.city, c.country, c.built_start, c.built_end, c.style,
      c.hero_image_url, c.thumb_image_url, c.image_credit, c.short_summary, c.full_history,
      c.architectural_significance, c.notable_relics, c.patron_saints, c.hotspots, c.fun_facts);
    n++;
  }
  console.log('[cathedrals]', n, 'seeded');
}

function fillArtworks(db) {
  const ins = db.prepare(`
    INSERT INTO artworks (slug, title, artist, year, era, medium, current_location,
      image_url, thumb_url, image_credit, theological_meaning, historical_context,
      details_to_notice, scripture_ref)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      title = excluded.title, artist = excluded.artist, year = excluded.year, era = excluded.era,
      medium = excluded.medium, current_location = excluded.current_location,
      image_url = excluded.image_url, thumb_url = excluded.thumb_url, image_credit = excluded.image_credit,
      theological_meaning = excluded.theological_meaning, historical_context = excluded.historical_context,
      details_to_notice = excluded.details_to_notice, scripture_ref = excluded.scripture_ref
  `);
  let n = 0;
  for (const a of ARTWORKS) {
    ins.run(a.slug, a.title, a.artist, a.year, a.era, a.medium, a.current_location,
      a.image_url, a.thumb_url, a.image_credit, a.theological_meaning, a.historical_context,
      a.details_to_notice, a.scripture_ref);
    n++;
  }
  console.log('[artworks]', n, 'seeded');
}

function fillBibleExtra(db) {
  const ins = db.prepare(`
    INSERT INTO bible_stories (slug, title, testament, book, scripture_ref, ccc_ref, short_summary, panels)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      title = excluded.title, testament = excluded.testament, book = excluded.book,
      scripture_ref = excluded.scripture_ref, ccc_ref = excluded.ccc_ref,
      short_summary = excluded.short_summary, panels = excluded.panels
  `);
  let n = 0;
  for (const s of BIBLE_EXTRA) {
    ins.run(s.slug, s.title, s.testament, s.book, s.scripture_ref, s.ccc_ref || null,
      s.short_summary, JSON.stringify(s.panels || []));
    n++;
  }
  console.log('[bible-extra]', n, 'stories seeded');
}

function main() {
  if (!fs.existsSync(dbPath)) {
    console.error('[FATAL] DB not found at', dbPath); process.exit(1);
  }
  if (dry) {
    console.log('[DRY-RUN] would back up and apply:');
    console.log('  - schema additions (4 new tables)');
    console.log('  -', SAINTS_EXTRA.length, 'extra saints');
    console.log('  -', FEAST_CAL.length, 'feast-day entries');
    console.log('  -', READINGS.length, 'days of readings');
    console.log('  -', CATHEDRALS.length, 'cathedrals');
    console.log('  -', ARTWORKS.length, 'artworks');
    console.log('  -', BIBLE_EXTRA.length, 'new Bible stories');
    return;
  }

  const bk = backup();
  const db = new Database(dbPath);
  db.pragma('foreign_keys = ON');
  db.pragma('journal_mode = WAL');

  const tx = db.transaction(() => {
    applySchema(db);
    upsertSaintsExtra(db);
    fillFeastCalendar(db);
    fillReadings(db);
    fillCathedrals(db);
    fillArtworks(db);
    fillBibleExtra(db);
  });

  try {
    tx();
    console.log('\n[apply] migration complete. Backup at', bk);
  } catch (e) {
    console.error('[apply] FAILED:', e);
    console.error('Restore from', bk, 'if data is corrupted.');
    process.exit(2);
  }

  db.close();
}

main();
