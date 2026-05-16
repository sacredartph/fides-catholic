const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const dbPath = process.env.DB_PATH
  ? path.resolve(process.cwd(), process.env.DB_PATH)
  : path.join(__dirname, 'fides.db');

const { SAINTS, POPES, BIBLE_STORIES, MODULES } = require('./seed-content');

const db = new Database(dbPath);
db.pragma('foreign_keys = ON');

const tablesToClear = [
  'search_index', 'bible_stories', 'popes', 'saints', 'badges',
  'reflections', 'prayer_log', 'bookmarks', 'user_progress',
  'user_xp', 'quiz_questions', 'lessons', 'modules', 'users'
];
for (const t of tablesToClear) {
  try { db.prepare('DELETE FROM ' + t).run(); } catch (e) { /* table may not exist */ }
}
db.prepare("DELETE FROM sqlite_sequence").run();

console.log('[seed] Cleared existing data');

const users = [
  { username: 'papa', display_name: 'Papa Bryan', password: 'fides123', role: 'admin', confirmation_name: 'Joseph', diocese: 'Cebu' },
  { username: 'daughter1', display_name: 'Faith Seeker', password: 'fides123', role: 'student', confirmation_name: 'Therese', diocese: 'Cebu' },
  { username: 'daughter2', display_name: 'Light Bearer', password: 'fides123', role: 'student', confirmation_name: 'Faustina', diocese: 'Cebu' },
  { username: 'daughter3', display_name: 'Truth Finder', password: 'fides123', role: 'student', confirmation_name: 'Clare', diocese: 'Cebu' }
];

const insertUser = db.prepare(`
  INSERT INTO users (username, display_name, password_hash, role, confirmation_name, diocese, last_login)
  VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
`);
const insertXP = db.prepare('INSERT INTO user_xp (user_id, total_xp, level) VALUES (?, 0, 1)');

for (const u of users) {
  const hash = bcrypt.hashSync(u.password, 10);
  const result = insertUser.run(u.username, u.display_name, hash, u.role, u.confirmation_name, u.diocese);
  insertXP.run(result.lastInsertRowid);
}
console.log('[seed] Created', users.length, 'demo users');

const insertModule = db.prepare(`
  INSERT INTO modules (slug, title, subtitle, description, icon, color, gradient_start, gradient_end,
                       category, order_index, unlocks_after, badge_name, badge_emoji, total_lessons)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertLesson = db.prepare(`
  INSERT INTO lessons (module_id, slug, title, subtitle, type, content, order_index, xp_reward,
                       duration_minutes, has_quiz, has_interactive, scripture_ref, ccc_ref)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertQuiz = db.prepare(`
  INSERT INTO quiz_questions (lesson_id, question, options, correct_index, explanation,
                              ccc_ref, scripture_ref, order_index)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertSearch = db.prepare(`
  INSERT INTO search_index (content_type, content_id, title, keywords, body_preview)
  VALUES (?, ?, ?, ?, ?)
`);

let totalLessons = 0, totalQuestions = 0;
for (const m of MODULES) {
  const mr = insertModule.run(
    m.slug, m.title, m.subtitle, m.description, m.icon || null,
    m.color || null, m.gradient_start || null, m.gradient_end || null,
    m.category || null, m.order_index, m.unlocks_after || null,
    m.badge_name || null, m.badge_emoji || null, (m.lessons || []).length
  );
  const moduleId = mr.lastInsertRowid;
  insertSearch.run('module', moduleId, m.title, [m.title, m.subtitle, m.description].join(' '), m.description || '');

  let li = 1;
  for (const lesson of (m.lessons || [])) {
    const content = JSON.stringify({
      slides: lesson.slides || [],
      mascot: lesson.mascot || null
    });
    const lr = insertLesson.run(
      moduleId, lesson.slug, lesson.title, lesson.subtitle || null,
      lesson.type || 'lesson', content, li++,
      lesson.xp_reward || 50, lesson.duration_minutes || 10,
      (lesson.questions && lesson.questions.length) ? 1 : 0,
      0, lesson.scripture_ref || null, lesson.ccc_ref || null
    );
    totalLessons += 1;
    const lessonId = lr.lastInsertRowid;
    const preview = (lesson.subtitle || '') + ' ' +
      (lesson.slides || []).map(s => (s.body || '') + ' ' + (s.verse || '')).join(' ').slice(0, 500);
    insertSearch.run('lesson', lessonId, lesson.title, [lesson.title, lesson.subtitle || '', lesson.scripture_ref || '', lesson.ccc_ref || ''].join(' '), preview);

    let qi = 1;
    for (const q of (lesson.questions || [])) {
      insertQuiz.run(
        lessonId, q.question, JSON.stringify(q.options), q.correct_index,
        q.explanation || null, q.ccc_ref || null, q.scripture_ref || null, qi++
      );
      totalQuestions += 1;
    }
  }
}
console.log('[seed] Inserted', MODULES.length, 'modules,', totalLessons, 'lessons,', totalQuestions, 'quiz questions');

const insertSaint = db.prepare(`
  INSERT INTO saints (slug, name, feast_day, years, patron_of, short_bio, full_bio, quote, symbol, type)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
for (const s of SAINTS) {
  const r = insertSaint.run(s.slug, s.name, s.feast_day, s.years, s.patron_of,
    s.short_bio, s.full_bio, s.quote, s.symbol, s.type);
  insertSearch.run('saint', r.lastInsertRowid, s.name,
    [s.name, s.patron_of || '', s.short_bio || '', s.type].join(' '),
    s.short_bio || '');
}
console.log('[seed] Inserted', SAINTS.length, 'saints');

const insertPope = db.prepare(`
  INSERT INTO popes (number, name, regnal_name, start_year, end_year, nationality, era, key_event, fun_fact)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
for (const p of POPES) {
  const r = insertPope.run(p.number, p.name, p.regnal_name, p.start_year, p.end_year,
    p.nationality, p.era, p.key_event, p.fun_fact);
  insertSearch.run('pope', r.lastInsertRowid, p.name,
    [p.name, p.era, p.key_event || ''].join(' '),
    p.key_event || '');
}
console.log('[seed] Inserted', POPES.length, 'popes');

const insertBible = db.prepare(`
  INSERT INTO bible_stories (slug, title, testament, book, scripture_ref, ccc_ref, short_summary, panels)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);
for (const story of BIBLE_STORIES) {
  const r = insertBible.run(
    story.slug, story.title, story.testament, story.book,
    story.scripture_ref, story.ccc_ref || null, story.short_summary,
    JSON.stringify(story.panels || [])
  );
  insertSearch.run('scripture', r.lastInsertRowid, story.title,
    [story.title, story.scripture_ref, story.book, story.short_summary].join(' '),
    story.short_summary || '');
}
console.log('[seed] Inserted', BIBLE_STORIES.length, 'bible stories');

const counts = {
  users: db.prepare('SELECT COUNT(*) AS c FROM users').get().c,
  modules: db.prepare('SELECT COUNT(*) AS c FROM modules').get().c,
  lessons: db.prepare('SELECT COUNT(*) AS c FROM lessons').get().c,
  questions: db.prepare('SELECT COUNT(*) AS c FROM quiz_questions').get().c,
  saints: db.prepare('SELECT COUNT(*) AS c FROM saints').get().c,
  popes: db.prepare('SELECT COUNT(*) AS c FROM popes').get().c,
  bible: db.prepare('SELECT COUNT(*) AS c FROM bible_stories').get().c,
  search: db.prepare('SELECT COUNT(*) AS c FROM search_index').get().c
};

console.log('\n=== SEED COMPLETE ===');
console.log(JSON.stringify(counts, null, 2));

db.close();
