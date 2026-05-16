/* Fides — app.js : main orchestrator (auth, routing, home, profile, season) */
(function () {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  // ============ LITURGICAL SEASON ============
  function liturgicalSeason(d) {
    d = d || new Date();
    const y = d.getFullYear();
    const easter = computeEaster(y);
    const ashWed = new Date(easter); ashWed.setDate(easter.getDate() - 46);
    const pentecost = new Date(easter); pentecost.setDate(easter.getDate() + 49);
    const advent4Sunday = new Date(y, 11, 25); // Dec 25 - approx ; we'll compute the first advent below
    const christmas = new Date(y, 11, 25);
    // First Sunday of Advent: 4 Sundays before Christmas
    const firstAdvent = new Date(christmas);
    firstAdvent.setDate(christmas.getDate() - ((christmas.getDay() === 0 ? 7 : christmas.getDay()) + 21));
    const epiphany = new Date(y, 0, 6);
    const baptismOfLord = new Date(epiphany); baptismOfLord.setDate(epiphany.getDate() + (epiphany.getDay() === 0 ? 7 : 7 - epiphany.getDay() + 7));
    if (d >= firstAdvent && d < christmas) return 'advent';
    if ((d >= christmas && d.getFullYear() === y) || (d.getFullYear() === y + 1 && d < new Date(y + 1, 0, 9))) return 'christmas';
    if (d >= ashWed && d < easter) return 'lent';
    if (d >= easter && d < pentecost) return 'easter';
    return 'ordinary';
  }
  function computeEaster(y) {
    const a = y % 19;
    const b = Math.floor(y / 100);
    const c = y % 100;
    const dd = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - dd - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const L = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * L) / 451);
    const month = Math.floor((h + L - 7 * m + 114) / 31);
    const day = ((h + L - 7 * m + 114) % 31) + 1;
    return new Date(y, month - 1, day);
  }

  // ============ DAILY CONTENT ============
  function dailySaint(saints) {
    const today = new Date().toISOString().slice(0, 10);
    const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return saints[seed % saints.length];
  }
  const DAILY_VERSES = [
    { v: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.', r: 'John 3:16' },
    { v: 'I am the way, and the truth, and the life. No one comes to the Father except through me.', r: 'John 14:6' },
    { v: 'The Lord is my shepherd; I shall not want.', r: 'Psalm 23:1' },
    { v: 'Be still, and know that I am God.', r: 'Psalm 46:10' },
    { v: 'For with God nothing will be impossible.', r: 'Luke 1:37' },
    { v: 'Behold, I make all things new.', r: 'Revelation 21:5' },
    { v: 'I can do all things through Christ who strengthens me.', r: 'Philippians 4:13' },
    { v: 'And we know that for those who love God all things work together for good.', r: 'Romans 8:28' },
    { v: 'Faith, hope, love abide, these three; but the greatest of these is love.', r: '1 Corinthians 13:13' },
    { v: 'My grace is sufficient for you, for my power is made perfect in weakness.', r: '2 Corinthians 12:9' },
    { v: 'Come to me, all who labor and are heavy laden, and I will give you rest.', r: 'Matthew 11:28' },
    { v: 'You are the salt of the earth... You are the light of the world.', r: 'Matthew 5:13-14' },
    { v: 'Seek first the kingdom of God and his righteousness, and all these things shall be yours as well.', r: 'Matthew 6:33' },
    { v: 'In the beginning was the Word, and the Word was with God, and the Word was God.', r: 'John 1:1' },
    { v: 'Greater love has no man than this, that a man lay down his life for his friends.', r: 'John 15:13' },
    { v: 'The harvest is plentiful, but the laborers are few.', r: 'Matthew 9:37' },
    { v: 'Whoever wishes to be great among you shall be your servant.', r: 'Matthew 20:26' },
    { v: 'Where two or three are gathered in my name, there am I in the midst of them.', r: 'Matthew 18:20' },
    { v: 'My soul magnifies the Lord, and my spirit rejoices in God my Savior.', r: 'Luke 1:46-47' },
    { v: 'You shall love the Lord your God with all your heart, and with all your soul, and with all your mind.', r: 'Matthew 22:37' },
    { v: 'Take, eat; this is my body... This is my blood of the covenant.', r: 'Matthew 26:26-28' },
    { v: 'Father, into your hands I commend my spirit.', r: 'Luke 23:46' },
    { v: 'He is not here, for he is risen, as he said.', r: 'Matthew 28:6' },
    { v: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.', r: 'Matthew 28:19' },
    { v: 'Lord, to whom shall we go? You have the words of eternal life.', r: 'John 6:68' },
    { v: 'Behold the Lamb of God, who takes away the sin of the world!', r: 'John 1:29' },
    { v: 'Do not let your hearts be troubled. Believe in God; believe also in me.', r: 'John 14:1' },
    { v: 'Peace I leave with you; my peace I give to you.', r: 'John 14:27' },
    { v: 'You did not choose me, but I chose you.', r: 'John 15:16' },
    { v: 'I have fought the good fight, I have finished the race, I have kept the faith.', r: '2 Timothy 4:7' },
    { v: 'Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight... and let us run with perseverance the race that is set before us.', r: 'Hebrews 12:1' },
    { v: 'God is love, and whoever abides in love abides in God, and God abides in him.', r: '1 John 4:16' },
    { v: 'Let the children come to me, and do not hinder them, for to such belongs the kingdom of God.', r: 'Mark 10:14' },
    { v: 'Pray without ceasing.', r: '1 Thessalonians 5:17' },
    { v: 'Trust in the Lord with all your heart, and do not lean on your own understanding.', r: 'Proverbs 3:5' },
    { v: 'Have I not commanded you? Be strong and courageous.', r: 'Joshua 1:9' },
    { v: 'The Lord is near to all who call on him in truth.', r: 'Psalm 145:18' },
    { v: 'Cast all your anxieties on him, because he cares for you.', r: '1 Peter 5:7' },
    { v: 'Rejoice in the Lord always; again I will say, rejoice.', r: 'Philippians 4:4' },
    { v: 'Whatever you do, do all to the glory of God.', r: '1 Corinthians 10:31' }
  ];
  function dailyVerse() {
    const day = Math.floor(Date.now() / 86400000);
    return DAILY_VERSES[day % DAILY_VERSES.length];
  }

  // ============ VIEWS ============
  let viewState = { view: 'home', payload: null };

  async function render() {
    const target = document.getElementById('main-content');
    target.innerHTML = '<div class="loading-state"><div class="loading-chi-rho"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" fill="none" stroke="#C9A84C" stroke-width="2" opacity="0.4"/><text x="40" y="52" text-anchor="middle" font-family="Cinzel" font-size="34" fill="#C9A84C">✝</text></svg></div><p>Loading...</p></div>';

    try {
      const v = viewState.view;
      if (v === 'home') await renderHome(target);
      else if (v === 'modules') await window.Fides.lessons.renderModulesList(target);
      else if (v === 'module') await window.Fides.lessons.renderModuleDetail(viewState.payload, target);
      else if (v === 'lesson') await window.Fides.lessons.renderLesson(viewState.payload, target);
      else if (v === 'bible') await window.Fides.timeline.renderBible(target);
      else if (v === 'saints') await window.Fides.timeline.renderSaints(target);
      else if (v === 'popes') await window.Fides.timeline.renderPopes(target);
      else if (v === 'mass') window.Fides.games.renderMass(target);
      else if (v === 'rosary') window.Fides.games.renderRosary(target);
      else if (v === 'stations') window.Fides.games.renderStations(target);
      else if (v === 'cathedral') window.Fides.games.renderCathedral(target);
      else if (v === 'cathedrals') await window.Fides.viewCathedrals.renderGallery(target);
      else if (v === 'art') await window.Fides.viewArt.renderGallery(target);
      else if (v === 'today') await window.Fides.viewToday.render(target);
      else if (v === 'games') window.Fides.games.renderGames(target);
      else if (v === 'prayer') window.Fides.games.renderPrayer(target);
      else if (v === 'profile') await renderProfile(target);
      else if (v === 'search') window.Fides.search.renderSearchPanel(target);
      else target.innerHTML = '<p>Unknown view.</p>';
    } catch (e) {
      console.error(e);
      target.innerHTML = `<p style="text-align:center;padding:40px;color:var(--c-crimson);">Error: ${esc(e.message)}</p>`;
    }
  }

  async function renderHome(target) {
    const user = window.Fides.api.user() || { display_name: 'Faithful', confirmation_name: '' };
    const season = liturgicalSeason();
    document.body.className = '';
    document.body.classList.add('season-' + season);
    const seasonLabel = {advent:'Advent', christmas:'Christmas', lent:'Lent', easter:'Easter', ordinary:'Ordinary Time'}[season];

    const [progress, saintsResp] = await Promise.all([
      window.Fides.api.progress().catch(() => null),
      window.Fides.api.saints().catch(() => ({ saints: [] }))
    ]);
    const ds = dailySaint(saintsResp.saints || []);
    const dv = dailyVerse();
    const prog = progress || { lessons_completed: 0, total_lessons: 90, streak_days: 0, badges: [], prayer_days: 0, quiz_average: 0, xp: { total_xp: 0, level: 1 } };

    target.innerHTML = `
      <div class="view-home">
        <div class="home-hero">
          <span class="season-badge">${seasonLabel}</span>
          <h1><span class="drop-cap">P</span>eace be with you, ${esc(user.display_name)}.</h1>
          <p>The Catholic Faith Experience — a 2,000-year-old tradition, brought to you in 12 modules of beauty, history, and truth.</p>
          <div class="home-hero-cta">
            <button class="hero-btn primary" onclick="window.Fides.app.go('modules')">Continue Learning →</button>
            <button class="hero-btn secondary" onclick="window.Fides.app.go('search')">Search the Faith</button>
          </div>
        </div>

        <div class="home-grid">
          ${ds ? `
          <div class="home-panel">
            <h3>Saint of the Day</h3>
            <div class="home-saint-card">
              <div class="home-saint-symbol">✦</div>
              <div>
                <div class="home-saint-name">${esc(ds.name)}</div>
                <div class="home-saint-meta">${esc(ds.feast_day || '')} · ${esc(ds.years || '')}</div>
              </div>
            </div>
            <div class="home-saint-quote">${esc((ds.short_bio || '').slice(0, 220))}</div>
            <button class="hero-btn secondary" style="margin-top:14px;font-size:12px;padding:8px 14px;" onclick="window.Fides.timeline.showSaintModal(${ds.id})">Read full life</button>
          </div>` : ''}

          <div class="home-panel">
            <h3>Verse for Today</h3>
            <div class="home-verse">
              <blockquote>${esc(dv.v)}</blockquote>
              <cite>${esc(dv.r)}</cite>
            </div>
          </div>

          <div class="home-panel home-continue">
            <h3>Continue Where You Left Off</h3>
            <div class="continue-row" id="continue-row">
              <div class="continue-chip" onclick="window.Fides.app.go('modules')">▶ View All 12 Modules</div>
              <div class="continue-chip" onclick="window.Fides.app.go('rosary')">◉ Pray the Rosary</div>
              <div class="continue-chip" onclick="window.Fides.app.go('stations')">⊕ Stations of the Cross</div>
              <div class="continue-chip" onclick="window.Fides.app.go('games')">⚡ Catechism Lightning</div>
              <div class="continue-chip" onclick="window.Fides.app.go('mass')">♰ Mass Guide</div>
            </div>
          </div>

          <div class="home-stats">
            <div class="stat-card"><div class="stat-num">${prog.lessons_completed}</div><div class="stat-lab">Lessons</div></div>
            <div class="stat-card"><div class="stat-num">${prog.xp.total_xp || 0}</div><div class="stat-lab">XP</div></div>
            <div class="stat-card"><div class="stat-num">${prog.streak_days || 0}</div><div class="stat-lab">Day Streak</div></div>
            <div class="stat-card"><div class="stat-num">${(prog.badges || []).length}</div><div class="stat-lab">Badges</div></div>
          </div>
        </div>
      </div>
    `;
  }

  async function renderProfile(target) {
    const prog = await window.Fides.api.progress();
    const u = window.Fides.api.user();
    const LEVEL_NAMES = ['Seeker','Learner','Inquirer','Catechumen','Baptized','Confirmed','Pilgrim','Crusader','Scholar','Apologist','Mystic','Confessor','Deacon','Priest','Bishop','Doctor','Patriarch','Prophet','Apostle','Saint'];
    const lvl = prog.xp.level || 1;
    const levelName = LEVEL_NAMES[lvl - 1] || 'Seeker';
    const xpInLevel = (prog.xp.total_xp || 0) % 200;
    target.innerHTML = `
      <header class="view-header">
        <h1>Your Profile</h1>
        <p>Your journey on the road to sainthood.</p>
      </header>
      <div class="profile-grid">
        <div>
          <div class="profile-card">
            <div class="profile-avatar">${esc((u.display_name || 'F').charAt(0))}</div>
            <div class="profile-name">${esc(u.display_name)}</div>
            ${u.confirmation_name ? `<div class="profile-conf">"${esc(u.confirmation_name)}"</div>` : ''}
            ${u.diocese ? `<div style="font-size:12px;color:var(--c-ink-soft);margin-top:4px;">Diocese of ${esc(u.diocese)}</div>` : ''}
            <div class="profile-level">${esc(levelName)} · Level ${lvl}</div>
            <div class="profile-xp-bar"><div class="profile-xp-fill" style="width:${(xpInLevel / 200) * 100}%"></div></div>
            <div class="profile-xp-label">${xpInLevel} / 200 XP to next level</div>
            <div style="margin-top:14px;font-family:var(--font-ui);font-size:13px;color:var(--c-ink-soft);">
              ${prog.xp.total_xp} total XP · ${prog.streak_days} day streak · ${prog.prayer_days || 0} days prayed
            </div>
          </div>

          <div class="profile-panel" style="margin-top:14px;">
            <h3>Badges</h3>
            <div class="badges-wall">
              ${(prog.badges || []).map(b => `
                <div class="badge-tile earned">
                  <div class="badge-icon">✦</div>
                  <div class="badge-name">${esc(b.badge_name)}</div>
                </div>`).join('') || '<p style="font-style:italic;color:var(--c-ink-soft);font-size:13px;">Complete a module to earn your first badge!</p>'}
            </div>
          </div>
        </div>

        <div>
          <div class="profile-panel">
            <h3>Module Progress</h3>
            ${(prog.modules || []).map(m => {
              const pct = m.total ? Math.round(100 * m.done / m.total) : 0;
              return `
                <div style="margin-bottom:12px;">
                  <div style="display:flex;justify-content:space-between;font-family:var(--font-display);font-size:14px;">
                    <span>${esc(m.title)}</span>
                    <span style="color:${pct === 100 ? 'var(--c-forest)' : 'var(--c-ink-soft)'};">${m.done}/${m.total}</span>
                  </div>
                  <div class="module-progress-bar" style="margin-top:6px;"><div class="module-progress-fill" style="width:${pct}%"></div></div>
                </div>
              `;
            }).join('')}
          </div>

          ${(prog.bookmarks || []).length ? `
          <div class="profile-panel">
            <h3>Bookmarks</h3>
            ${prog.bookmarks.map(b => `
              <div class="search-result" onclick="window.Fides.app.openLesson(${b.id})">
                <div class="res-title">${esc(b.title)}</div>
                <div class="res-meta">${esc(b.module_title)}</div>
              </div>
            `).join('')}
          </div>
          ` : ''}

          ${(prog.reflections || []).length ? `
          <div class="profile-panel">
            <h3>Your Reflections (private)</h3>
            ${prog.reflections.slice(0, 5).map(r => `
              <div style="padding:12px 14px;background:var(--c-cream);border-radius:var(--r-sm);margin-bottom:8px;">
                <div style="font-family:var(--font-display);font-size:13px;color:var(--c-deep);">${esc(r.lesson_title)}</div>
                <div style="font-family:var(--font-quote);font-style:italic;font-size:14px;color:var(--c-ink);margin-top:6px;line-height:1.5;">${esc(r.text)}</div>
                <div style="font-size:11px;color:var(--c-ink-soft);margin-top:6px;">${esc(r.saved_at)}</div>
              </div>
            `).join('')}
          </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ============ AUTH ============
  // BUKIDIC LEARNING: per-app auth screen removed. Unauthenticated visitors
  // bounce to the hub at learn.sacredartph.com. We wait ~2s first in case the
  // BUKIDIC SSO snippet is mid-flight (it will reload the page on success).
  function showAuthScreen() {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('app').classList.add('hidden');
    setTimeout(function () {
      if (window.Fides.api.token()) {
        window.location.reload();
      } else {
        window.location.href = 'http://learn.sacredartph.com';
      }
    }, 2000);
  }
  function showAppScreen() {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    refreshUser();
    render();
  }

  async function refreshUser() {
    try {
      const { user, badges } = await window.Fides.api.me();
      window.Fides.api.setUser(user);
      const LEVEL_NAMES = ['Seeker','Learner','Inquirer','Catechumen','Baptized','Confirmed','Pilgrim','Crusader','Scholar','Apologist','Mystic','Confessor','Deacon','Priest','Bishop','Doctor','Patriarch','Prophet','Apostle','Saint'];
      const lv = user.level || 1;
      const levelName = LEVEL_NAMES[lv - 1] || 'Seeker';
      const el = document.getElementById('sidebar-user');
      el.innerHTML = `
        <div class="user-avatar">${esc((user.display_name || 'F').charAt(0))}</div>
        <div class="user-meta">
          <span class="user-name">${esc(user.display_name)}</span>
          <span class="user-level">${esc(levelName)} · Level ${lv}</span>
        </div>
      `;
      const sc = document.getElementById('streak-counter');
      sc.innerHTML = `<span class="flame">🕯</span><span class="streak-days">${user.streak_days || 0} day streak</span>`;
    } catch (e) { /* not logged in */ }
  }

  function bindAuth() {
    // BUKIDIC LEARNING: auth-form DOM is removed. Skip binding if it's not present.
    if (!document.getElementById('auth-form')) return;
    const tabs = document.querySelectorAll('.auth-tab');
    let mode = 'login';
    tabs.forEach(t => t.addEventListener('click', () => {
      mode = t.dataset.mode;
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      document.getElementById('auth-screen').classList.toggle('register-mode', mode === 'register');
      document.getElementById('auth-submit').textContent = mode === 'register' ? 'Create Account' : 'Sign In';
      document.getElementById('auth-error').textContent = '';
    }));
    document.querySelectorAll('.demo-btn').forEach(b => b.addEventListener('click', async () => {
      document.getElementById('auth-username').value = b.dataset.user;
      document.getElementById('auth-password').value = 'fides123';
      try {
        const { token, user } = await window.Fides.api.login(b.dataset.user, 'fides123');
        window.Fides.api.setToken(token);
        window.Fides.api.setUser(user);
        showAppScreen();
      } catch (e) { document.getElementById('auth-error').textContent = 'Could not log in: ' + e.message; }
    }));
    document.getElementById('auth-form').addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const u = document.getElementById('auth-username').value.trim();
      const p = document.getElementById('auth-password').value;
      const err = document.getElementById('auth-error');
      err.textContent = '';
      try {
        let result;
        if (mode === 'login') {
          result = await window.Fides.api.login(u, p);
        } else {
          const display = document.getElementById('auth-display').value.trim() || u;
          const conf = document.getElementById('auth-confirmation').value.trim();
          const dio = document.getElementById('auth-diocese').value.trim();
          result = await window.Fides.api.register({ username: u, password: p, display_name: display, confirmation_name: conf, diocese: dio });
        }
        window.Fides.api.setToken(result.token);
        window.Fides.api.setUser(result.user);
        showAppScreen();
      } catch (e) {
        err.textContent = mode === 'login' ? 'Wrong username or password.' : ('Could not register: ' + e.message);
      }
    });
  }

  // ============ NAV / ROUTING ============
  function go(view) {
    viewState = { view, payload: null };
    document.querySelectorAll('.nav-item').forEach(x => x.classList.toggle('active', x.dataset.view === view));
    render();
  }
  function openModule(id) { viewState = { view: 'module', payload: id }; render(); }
  function openLesson(id) { viewState = { view: 'lesson', payload: id }; render(); }

  function closeDrawer() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    const hb = document.getElementById('hamburger');
    if (sb) sb.classList.remove('open');
    if (bd) bd.classList.remove('open');
    if (hb) { hb.classList.remove('open'); hb.setAttribute('aria-expanded', 'false'); }
  }
  function openDrawer() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    const hb = document.getElementById('hamburger');
    if (sb) sb.classList.add('open');
    if (bd) bd.classList.add('open');
    if (hb) { hb.classList.add('open'); hb.setAttribute('aria-expanded', 'true'); }
  }

  function bindNav() {
    document.querySelectorAll('.nav-item').forEach(b => b.addEventListener('click', () => {
      go(b.dataset.view);
      closeDrawer();
    }));
    // BUKIDIC LEARNING: logout button removed; bind guarded for safety.
    const lo = document.getElementById('logout-btn');
    if (lo) lo.addEventListener('click', () => {
      window.Fides.api.clear();
      window.Fides.audio.stopAmbient();
      closeDrawer();
      window.location.href = 'http://learn.sacredartph.com';
    });
    const audioBtn = document.getElementById('audio-toggle');
    if (window.Fides.audio.isMuted()) audioBtn.classList.add('muted');
    audioBtn.addEventListener('click', () => {
      const muted = window.Fides.audio.toggleMute();
      audioBtn.classList.toggle('muted', muted);
      if (!muted) window.Fides.audio.startAmbient();
    });

    const hb = document.getElementById('hamburger');
    const bd = document.getElementById('sidebar-backdrop');
    if (hb) hb.addEventListener('click', () => {
      const sb = document.getElementById('sidebar');
      if (sb && sb.classList.contains('open')) closeDrawer();
      else openDrawer();
    });
    if (bd) bd.addEventListener('click', closeDrawer);
  }

  window.addEventListener('fides:auth-required', showAuthScreen);

  // ============ BOOT ============
  function boot() {
    bindAuth();
    bindNav();
    setTimeout(() => {
      const splash = document.getElementById('splash');
      splash.classList.add('fading');
      setTimeout(() => splash.classList.add('hidden'), 1000);

      if (window.Fides.api.token()) {
        // ensure server still accepts the token
        window.Fides.api.me().then(() => showAppScreen()).catch(() => showAuthScreen());
      } else {
        showAuthScreen();
      }
    }, 1200);

    // Start audio on first user interaction
    const startAudio = () => {
      window.Fides.audio.ensure();
      if (!window.Fides.audio.isMuted()) window.Fides.audio.startAmbient();
      document.removeEventListener('click', startAudio);
      document.removeEventListener('keydown', startAudio);
    };
    document.addEventListener('click', startAudio);
    document.addEventListener('keydown', startAudio);
  }

  window.Fides.app = { go, openModule, openLesson, refreshUser };
  document.addEventListener('DOMContentLoaded', boot);
})();
