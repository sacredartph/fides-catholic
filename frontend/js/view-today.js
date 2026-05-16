// Frontend module: "Today's Readings" view + Saint of the Day
// Expects window.Fides.api to support /api/daily/* (added in apply.js)

window.Fides = window.Fides || {};

window.Fides.viewToday = (function () {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  async function render(target) {
    target.innerHTML = '<div class="loading-state"><div class="loading-chi-rho"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="30" fill="none" stroke="#C9A84C" stroke-width="2" opacity="0.4"/><text x="40" y="52" text-anchor="middle" font-family="Cinzel" font-size="34" fill="#C9A84C">+</text></svg></div><p>Opening today\'s lectionary...</p></div>';
    const r = await fetch('/api/daily/today').then(x => x.json());

    if (r.placeholder) {
      target.innerHTML = `
        <header class="view-header">
          <h1>Today's Readings</h1>
          <p>${esc(r.date)}</p>
        </header>
        <div class="today-placeholder">
          <p style="font-style:italic;color:var(--c-ink-soft);">${esc(r.message)}</p>
          <p style="margin-top:14px;">${esc(r.suggestion)}</p>
          ${r.saints && r.saints.length ? renderSaints(r.saints) : ''}
        </div>`;
      return;
    }

    const c = r.color || 'white';
    const colorMap = {
      white: 'linear-gradient(135deg,#FAF6EE,#FFFDF7)',
      red: 'linear-gradient(135deg,#8B1A1A,#5C0D0D)',
      green: 'linear-gradient(135deg,#2D5016,#1B3A0E)',
      purple: 'linear-gradient(135deg,#4B0082,#2A0040)',
      rose: 'linear-gradient(135deg,#C0392B,#6B1A12)',
      gold: 'linear-gradient(135deg,#C9A84C,#9C7F2E)'
    };
    const heroBg = colorMap[c] || colorMap.white;
    const textColor = c === 'white' ? 'var(--c-deep)' : '#fff';

    target.innerHTML = `
      <div class="today-shell">
        <div class="today-hero" style="background:${heroBg};color:${textColor};">
          <div class="today-date">${formatLongDate(r.date)}</div>
          <h1 class="today-title">${esc(r.liturgical_day)}</h1>
          <div class="today-season">${esc(r.season || '')} · liturgical color: ${esc(c)}</div>
        </div>

        ${r.saints && r.saints.length ? `
          <div class="today-saint-strip">
            ${r.saints.map(s => `
              <div class="today-saint-card">
                <div class="saint-card-rank">${esc(s.rank || '')}</div>
                <div class="saint-card-name">${esc(s.name)}</div>
                <div class="saint-card-bio">${esc((s.short_bio || '').slice(0, 200))}</div>
                <button class="hero-btn secondary" onclick="window.Fides.timeline.showSaintModal(${s.id})" style="margin-top:10px;font-size:12px;padding:7px 14px;">Read full life</button>
              </div>
            `).join('')}
          </div>` : ''}

        <section class="reading-block">
          <h2 class="reading-block-title">First Reading</h2>
          <div class="reading-block-ref">${esc(r.first_reading.ref)}</div>
          <p class="reading-block-text">${esc(r.first_reading.text)}</p>
          <p class="reading-block-footer">The word of the Lord. <em>Thanks be to God.</em></p>
        </section>

        <section class="reading-block psalm">
          <h2 class="reading-block-title">Responsorial Psalm</h2>
          <div class="reading-block-ref">${esc(r.psalm.ref)}</div>
          <div class="psalm-response">R. ${esc(r.psalm.response || '')}</div>
          <p class="reading-block-text">${esc(r.psalm.text)}</p>
        </section>

        ${r.second_reading ? `
          <section class="reading-block">
            <h2 class="reading-block-title">Second Reading</h2>
            <div class="reading-block-ref">${esc(r.second_reading.ref)}</div>
            <p class="reading-block-text">${esc(r.second_reading.text)}</p>
            <p class="reading-block-footer">The word of the Lord. <em>Thanks be to God.</em></p>
          </section>` : ''}

        <section class="reading-block acclamation">
          <p class="acclamation-text">${esc(r.gospel_acclamation)}</p>
        </section>

        <section class="reading-block gospel">
          <h2 class="reading-block-title">✠ Gospel</h2>
          <div class="reading-block-ref">${esc(r.gospel.ref)}</div>
          <p class="reading-block-text">${esc(r.gospel.text)}</p>
          <p class="reading-block-footer">The Gospel of the Lord. <em>Praise to you, Lord Jesus Christ.</em></p>
        </section>

        <section class="reflection-block">
          <h2>Reflection</h2>
          <p>${esc(r.reflection)}</p>
        </section>

        <section class="life-app-block">
          <h2>Live It Today</h2>
          <p>${esc(r.life_application)}</p>
        </section>

        <div class="today-actions">
          <button class="hero-btn primary" id="log-today-readings">I read today\'s Word</button>
        </div>
      </div>
    `;

    const btn = target.querySelector('#log-today-readings');
    if (btn) btn.addEventListener('click', async () => {
      try {
        const r2 = await fetch('/api/progress/prayer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (localStorage.getItem('fides_token') || '') },
          body: JSON.stringify({ prayer_type: 'daily-readings' })
        }).then(x => x.json());
        if (window.Fides.audio) window.Fides.audio.prayerComplete();
        if (window.Fides.anim) window.Fides.anim.toast('Word received. Streak: ' + (r2.streak_days || 0) + ' day(s)', 'gold');
      } catch (e) {}
    });
  }

  function renderSaints(saints) {
    return `<div class="today-saint-strip" style="margin-top:14px;">${saints.map(s => `
      <div class="today-saint-card">
        <div class="saint-card-rank">${esc(s.rank || '')}</div>
        <div class="saint-card-name">${esc(s.name)}</div>
        <div class="saint-card-bio">${esc((s.short_bio || '').slice(0, 200))}</div>
      </div>`).join('')}</div>`;
  }

  function formatLongDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dt = new Date(y, m - 1, d);
    return `${days[dt.getDay()]}, ${months[m-1]} ${d}, ${y}`;
  }

  return { render };
})();
