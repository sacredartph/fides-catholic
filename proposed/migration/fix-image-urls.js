// Hotfix: rewrite cathedral + artwork image URLs to use Wikimedia's
// Special:FilePath redirector — works regardless of hash directory and is
// stable across Wikimedia's pre-generated thumbnail sizes.
//
// Pattern:
//   https://commons.wikimedia.org/wiki/Special:FilePath/<Filename>?width=N

const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });
const projectRoot = path.join(__dirname, '..', '..');
const dbPath = process.env.DB_PATH ? path.resolve(projectRoot, process.env.DB_PATH) : path.join(projectRoot, 'database', 'fides.db');

function filenameFromOldUrl(url) {
  // takes ".../thumb/X/YY/FOO.jpg/640px-FOO.jpg" or ".../X/YY/FOO.jpg"
  // returns just FOO.jpg
  if (!url) return null;
  const m = url.match(/\/([^\/]+\.(jpg|jpeg|png|JPG|JPEG|PNG))(?:\/\d+px-|$)/);
  if (m) return m[1];
  // fallback: last segment before query
  return url.split('/').pop().split('?')[0];
}

function pathTo(file, w) {
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file) + '?width=' + w;
}

const db = new Database(dbPath);

// Cathedrals
const caths = db.prepare('SELECT id, hero_image_url, thumb_image_url FROM cathedrals').all();
const updC = db.prepare('UPDATE cathedrals SET hero_image_url = ?, thumb_image_url = ? WHERE id = ?');
let c = 0;
for (const row of caths) {
  const f = filenameFromOldUrl(row.hero_image_url) || filenameFromOldUrl(row.thumb_image_url);
  if (!f) continue;
  const hero = pathTo(f, 1280);
  const thumb = pathTo(f, 640);
  updC.run(hero, thumb, row.id);
  c++;
}
console.log('[cathedrals]', c, 'image URLs rewritten');

// Artworks
const arts = db.prepare('SELECT id, image_url, thumb_url FROM artworks').all();
const updA = db.prepare('UPDATE artworks SET image_url = ?, thumb_url = ? WHERE id = ?');
let a = 0;
for (const row of arts) {
  const f = filenameFromOldUrl(row.image_url) || filenameFromOldUrl(row.thumb_url);
  if (!f) continue;
  const big = pathTo(f, 1200);
  const small = pathTo(f, 400);
  updA.run(big, small, row.id);
  a++;
}
console.log('[artworks]', a, 'image URLs rewritten');

db.close();
