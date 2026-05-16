/* Fides — api.js : thin wrapper over fetch with JWT in localStorage */
window.Fides = window.Fides || {};

const API = (() => {
  const TOKEN_KEY = 'fides_token';
  const USER_KEY = 'fides_user';

  function token() { return localStorage.getItem(TOKEN_KEY); }
  function setToken(t) { localStorage.setItem(TOKEN_KEY, t); }
  function user() { try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch (e) { return null; } }
  function setUser(u) { localStorage.setItem(USER_KEY, JSON.stringify(u)); }
  function clear() { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem(USER_KEY); }

  async function req(method, path, body) {
    const headers = { 'Content-Type': 'application/json' };
    const t = token();
    if (t) headers['Authorization'] = 'Bearer ' + t;
    const opts = { method, headers };
    if (body !== undefined) opts.body = JSON.stringify(body);
    const r = await fetch(path, opts);
    if (r.status === 401) {
      clear();
      window.dispatchEvent(new Event('fides:auth-required'));
      throw new Error('auth_required');
    }
    const text = await r.text();
    let data; try { data = text ? JSON.parse(text) : null; } catch (e) { data = { error: 'parse_error', text }; }
    if (!r.ok) {
      const err = new Error(data && data.error ? data.error : ('http_' + r.status));
      err.payload = data; err.status = r.status; throw err;
    }
    return data;
  }

  return {
    token, setToken, user, setUser, clear,
    login: (username, password) => req('POST', '/api/auth/login', { username, password }),
    register: (data) => req('POST', '/api/auth/register', data),
    me: () => req('GET', '/api/auth/me'),

    listModules: () => req('GET', '/api/modules'),
    getModule: (id) => req('GET', '/api/modules/' + id),
    getLesson: (id) => req('GET', '/api/lessons/' + id),
    completeLesson: (id, payload) => req('POST', '/api/lessons/' + id + '/complete', payload || {}),
    bookmarkLesson: (id) => req('POST', '/api/lessons/' + id + '/bookmark'),
    saveReflection: (id, text) => req('POST', '/api/lessons/' + id + '/reflection', { text }),

    grade: (lesson_id, answers) => req('POST', '/api/quizzes/grade', { lesson_id, answers }),
    lightningQuestions: () => req('GET', '/api/quizzes/lightning'),

    progress: () => req('GET', '/api/progress/me'),
    logPrayer: (prayer_type) => req('POST', '/api/progress/prayer', { prayer_type }),

    leaderboard: () => req('GET', '/api/leaderboard'),

    search: (q) => req('GET', '/api/search/?q=' + encodeURIComponent(q)),
    saints: () => req('GET', '/api/search/saints'),
    saint: (id) => req('GET', '/api/search/saints/' + id),
    popes: () => req('GET', '/api/search/popes'),
    bibleStories: () => req('GET', '/api/search/bible'),
    bibleStory: (slug) => req('GET', '/api/search/bible/' + slug)
  };
})();

window.Fides.api = API;
