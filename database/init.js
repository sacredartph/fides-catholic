const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const dbPath = process.env.DB_PATH
  ? path.resolve(process.cwd(), process.env.DB_PATH)
  : path.join(__dirname, 'fides.db');

if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  ['-shm', '-wal'].forEach(suf => {
    const p = dbPath + suf;
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });
  console.log('[init] Removed existing database');
}

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

const schema = `
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  avatar TEXT,
  role TEXT DEFAULT 'student',
  confirmation_name TEXT,
  diocese TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  last_login TEXT,
  streak_days INTEGER DEFAULT 0,
  last_activity_date TEXT
);

CREATE TABLE modules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  icon TEXT,
  color TEXT,
  gradient_start TEXT,
  gradient_end TEXT,
  category TEXT,
  order_index INTEGER,
  unlocks_after INTEGER,
  badge_name TEXT,
  badge_emoji TEXT,
  total_lessons INTEGER DEFAULT 0
);

CREATE TABLE lessons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  module_id INTEGER NOT NULL,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  type TEXT,
  content TEXT NOT NULL,
  order_index INTEGER,
  xp_reward INTEGER DEFAULT 50,
  duration_minutes INTEGER DEFAULT 10,
  has_quiz INTEGER DEFAULT 0,
  has_interactive INTEGER DEFAULT 0,
  scripture_ref TEXT,
  ccc_ref TEXT,
  FOREIGN KEY (module_id) REFERENCES modules(id)
);

CREATE TABLE quiz_questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_id INTEGER NOT NULL,
  question TEXT NOT NULL,
  options TEXT NOT NULL,
  correct_index INTEGER NOT NULL,
  explanation TEXT,
  ccc_ref TEXT,
  scripture_ref TEXT,
  order_index INTEGER,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

CREATE TABLE user_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  lesson_id INTEGER NOT NULL,
  module_id INTEGER NOT NULL,
  completed INTEGER DEFAULT 0,
  quiz_score INTEGER,
  xp_earned INTEGER DEFAULT 0,
  completed_at TEXT,
  attempts INTEGER DEFAULT 0,
  reflection_saved INTEGER DEFAULT 0,
  UNIQUE(user_id, lesson_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (lesson_id) REFERENCES lessons(id),
  FOREIGN KEY (module_id) REFERENCES modules(id)
);

CREATE TABLE user_xp (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER UNIQUE NOT NULL,
  total_xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE badges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  badge_id TEXT NOT NULL,
  badge_name TEXT,
  badge_emoji TEXT,
  earned_at TEXT DEFAULT (datetime('now')),
  UNIQUE(user_id, badge_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE reflections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  lesson_id INTEGER NOT NULL,
  text TEXT NOT NULL,
  saved_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

CREATE TABLE prayer_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  prayer_type TEXT NOT NULL,
  prayed_at TEXT DEFAULT (datetime('now')),
  streak INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE bookmarks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  lesson_id INTEGER NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  UNIQUE(user_id, lesson_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

CREATE TABLE search_index (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content_type TEXT NOT NULL,
  content_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  keywords TEXT,
  body_preview TEXT
);

CREATE TABLE saints (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  feast_day TEXT,
  years TEXT,
  patron_of TEXT,
  short_bio TEXT,
  full_bio TEXT,
  quote TEXT,
  symbol TEXT,
  type TEXT
);

CREATE TABLE popes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  number INTEGER NOT NULL,
  name TEXT NOT NULL,
  regnal_name TEXT,
  birth_name TEXT,
  start_year TEXT,
  end_year TEXT,
  nationality TEXT,
  era TEXT,
  key_event TEXT,
  fun_fact TEXT
);

CREATE TABLE bible_stories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  testament TEXT NOT NULL,
  book TEXT,
  scripture_ref TEXT,
  ccc_ref TEXT,
  short_summary TEXT,
  panels TEXT
);

CREATE INDEX idx_lessons_module ON lessons(module_id);
CREATE INDEX idx_quiz_lesson ON quiz_questions(lesson_id);
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_module ON user_progress(module_id);
CREATE INDEX idx_search_keywords ON search_index(keywords);
CREATE INDEX idx_popes_number ON popes(number);
CREATE INDEX idx_saints_type ON saints(type);
`;

db.exec(schema);

const tables = db.prepare(
  "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
).all();

console.log('[init] Database created at', dbPath);
console.log('[init] Tables:', tables.map(t => t.name).join(', '));

db.close();
