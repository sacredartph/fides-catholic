// Fides v2 rollback — restores the database from the most recent backup,
// OR drops just the v2-added tables (less destructive).
//
// Usage:
//   node proposed/migration/rollback.js              (drop only v2 tables; keep v1 data)
//   node proposed/migration/rollback.js --restore    (restore most recent backup)
//   node proposed/migration/rollback.js --list       (show available backups)

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });
const projectRoot = path.join(__dirname, '..', '..');
const dbPath = process.env.DB_PATH ? path.resolve(projectRoot, process.env.DB_PATH) : path.join(projectRoot, 'database', 'fides.db');
const dbDir = path.dirname(dbPath);

const mode = process.argv.includes('--restore') ? 'restore' : process.argv.includes('--list') ? 'list' : 'drop';

function listBackups() {
  return fs.readdirSync(dbDir).filter(f => f.startsWith('fides.backup.') && f.endsWith('.db'))
    .map(f => ({ name: f, full: path.join(dbDir, f), mtime: fs.statSync(path.join(dbDir, f)).mtime }))
    .sort((a, b) => b.mtime - a.mtime);
}

if (mode === 'list') {
  const list = listBackups();
  if (!list.length) { console.log('No backups found in', dbDir); process.exit(0); }
  console.log('Backups (most recent first):');
  list.forEach(b => console.log(' ', b.mtime.toISOString(), b.name));
  process.exit(0);
}

if (mode === 'restore') {
  const list = listBackups();
  if (!list.length) { console.error('No backup found.'); process.exit(1); }
  const latest = list[0];
  fs.copyFileSync(latest.full, dbPath);
  ['-shm','-wal'].forEach(suf => { const p = dbPath + suf; if (fs.existsSync(p)) fs.unlinkSync(p); });
  console.log('Restored from', latest.name);
  process.exit(0);
}

// drop-only mode: drop v2 tables, keep v1 intact
const db = new Database(dbPath);
db.pragma('foreign_keys = OFF');
const v2Tables = ['daily_readings', 'feast_calendar', 'cathedrals', 'artworks'];
for (const t of v2Tables) {
  db.exec('DROP TABLE IF EXISTS ' + t);
  console.log('dropped', t);
}
db.pragma('foreign_keys = ON');
db.close();
console.log('v2 tables removed. v1 data (users, modules, lessons, saints, popes, etc.) untouched.');
