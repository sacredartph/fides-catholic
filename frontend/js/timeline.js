/* Fides — timeline.js : Papal timeline, Saints list, Bible explorer, Cathedral, Stations */
window.Fides = window.Fides || {};

const Timeline = (() => {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  async function renderPopes(target) {
    const { popes } = await window.Fides.api.popes();
    const eras = ['All', ...Array.from(new Set(popes.map(p => p.era)))];
    target.innerHTML = `
      <header class="view-header">
        <h1>The Papal Timeline</h1>
        <p>${popes.length} successors of St. Peter — an unbroken chain of nearly 2,000 years.</p>
      </header>
      <div class="timeline-wrap">
        <input type="text" id="pope-search" class="timeline-search" placeholder="Search by name, century, event..." />
        <div class="timeline-filters" id="pope-filters">
          ${eras.map(e => `<button class="timeline-filter ${e === 'All' ? 'active' : ''}" data-era="${esc(e)}">${esc(e)}</button>`).join('')}
        </div>
        <div class="papal-list" id="pope-list">
          ${renderPopeCards(popes)}
        </div>
      </div>
    `;

    function filter() {
      const search = target.querySelector('#pope-search').value.toLowerCase();
      const activeEra = target.querySelector('.timeline-filter.active').dataset.era;
      const list = popes.filter(p => {
        if (activeEra !== 'All' && p.era !== activeEra) return false;
        if (search) {
          const hay = (p.name + ' ' + p.regnal_name + ' ' + p.key_event + ' ' + p.start_year + ' ' + p.fun_fact + ' ' + p.nationality).toLowerCase();
          return hay.includes(search);
        }
        return true;
      });
      target.querySelector('#pope-list').innerHTML = renderPopeCards(list);
    }
    target.querySelector('#pope-search').addEventListener('input', filter);
    target.querySelectorAll('.timeline-filter').forEach(b => b.addEventListener('click', () => {
      target.querySelectorAll('.timeline-filter').forEach(x => x.classList.remove('active'));
      b.classList.add('active'); filter();
    }));
  }

  function renderPopeCards(popes) {
    return popes.map((p, i) => `
      <div class="pope-card" style="animation-delay:${Math.min(i * 0.01, 1)}s;">
        <div class="pope-num">№ ${p.number} · ${esc(p.era || '')}</div>
        <div class="pope-name">${esc(p.name)}</div>
        <div class="pope-years">${esc(p.start_year || '')} – ${esc(p.end_year || '')} · ${esc(p.nationality || '')}</div>
        <div class="pope-event">${esc(p.key_event || '')}</div>
        ${p.fun_fact ? `<div class="pope-fact">${esc(p.fun_fact)}</div>` : ''}
      </div>`).join('');
  }

  async function renderSaints(target) {
    const { saints } = await window.Fides.api.saints();
    const types = ['all', ...Array.from(new Set(saints.map(s => s.type)))];
    target.innerHTML = `
      <header class="view-header">
        <h1>The Communion of Saints</h1>
        <p>${saints.length} saints. Each one a friend in heaven, praying for you right now.</p>
      </header>
      <div class="timeline-filters" id="saint-filters">
        ${types.map(t => `<button class="timeline-filter ${t === 'all' ? 'active' : ''}" data-type="${esc(t)}">${esc(t)}</button>`).join('')}
      </div>
      <div class="saints-grid" id="saints-grid">${renderSaintCards(saints)}</div>
    `;
    target.querySelectorAll('.timeline-filter').forEach(b => b.addEventListener('click', () => {
      target.querySelectorAll('.timeline-filter').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      const t = b.dataset.type;
      const filtered = t === 'all' ? saints : saints.filter(s => s.type === t);
      target.querySelector('#saints-grid').innerHTML = renderSaintCards(filtered);
      attachSaintHandlers(target);
    }));
    attachSaintHandlers(target);
  }

  function renderSaintCards(saints) {
    return saints.map(s => `
      <div class="saint-card" data-id="${s.id}">
        <div class="saint-name">${esc(s.name)}</div>
        <div class="saint-meta">${esc(s.feast_day || '')} · ${esc(s.years || '')}</div>
        <div class="saint-bio">${esc(s.short_bio || '')}</div>
      </div>`).join('');
  }

  function attachSaintHandlers(target) {
    target.querySelectorAll('.saint-card').forEach(c => {
      c.addEventListener('click', () => showSaintModal(c.dataset.id));
    });
  }

  async function showSaintModal(id) {
    const { saint } = await window.Fides.api.saint(id);
    const box = document.getElementById('modal-box');
    box.innerHTML = `
      <button class="modal-close" onclick="document.getElementById('modal-container').classList.add('hidden')">×</button>
      <h2 style="font-family:var(--font-display);font-size:28px;color:var(--c-deep);letter-spacing:0.08em;">${esc(saint.name)}</h2>
      <div style="font-family:var(--font-ui);font-size:12px;letter-spacing:0.1em;color:var(--c-crimson);text-transform:uppercase;margin-top:4px;">${esc(saint.feast_day || '')} · ${esc(saint.years || '')} · ${esc(saint.type)}</div>
      ${saint.patron_of ? `<div style="margin-top:8px;font-style:italic;color:var(--c-ink-soft);">Patron of: ${esc(saint.patron_of)}</div>` : ''}
      <div style="margin-top:16px;line-height:1.7;font-size:15px;color:var(--c-ink);white-space:pre-line;">${esc(saint.full_bio || saint.short_bio || '')}</div>
      ${saint.quote ? `<blockquote style="margin-top:16px;padding:14px 18px;background:rgba(201,168,76,0.1);border-left:3px solid var(--c-gold);font-family:var(--font-quote);font-style:italic;font-size:16px;">${esc(saint.quote)}</blockquote>` : ''}
      ${saint.symbol ? `<div style="margin-top:10px;font-size:12px;color:var(--c-ink-soft);font-family:var(--font-ui);letter-spacing:0.06em;">Symbol: ${esc(saint.symbol)}</div>` : ''}
    `;
    document.getElementById('modal-container').classList.remove('hidden');
  }

  async function renderBible(target) {
    const { stories } = await window.Fides.api.bibleStories();
    target.innerHTML = `
      <header class="view-header">
        <h1>Bible Story Explorer</h1>
        <p>Walk through Scripture story by story, panel by panel.</p>
      </header>
      <div class="timeline-filters">
        <button class="timeline-filter active" data-test="all">All</button>
        <button class="timeline-filter" data-test="Old">Old Testament</button>
        <button class="timeline-filter" data-test="New">New Testament</button>
      </div>
      <div class="saints-grid" id="bible-grid">${renderBibleCards(stories)}</div>
    `;
    target.querySelectorAll('.timeline-filter').forEach(b => b.addEventListener('click', () => {
      target.querySelectorAll('.timeline-filter').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      const v = b.dataset.test;
      const filt = v === 'all' ? stories : stories.filter(s => s.testament === v);
      target.querySelector('#bible-grid').innerHTML = renderBibleCards(filt);
      attachBibleHandlers(target);
    }));
    attachBibleHandlers(target);
  }

  function renderBibleCards(stories) {
    return stories.map(s => `
      <div class="saint-card" data-slug="${esc(s.slug)}">
        <div class="saint-name">${esc(s.title)}</div>
        <div class="saint-meta">${esc(s.testament)} Testament · ${esc(s.book)} · ${esc(s.scripture_ref || '')}</div>
        <div class="saint-bio">${esc(s.short_summary || '')}</div>
      </div>`).join('');
  }

  function attachBibleHandlers(target) {
    target.querySelectorAll('.saint-card[data-slug]').forEach(c => {
      c.addEventListener('click', () => showBibleStory(c.dataset.slug));
    });
  }

  async function showBibleStory(slug) {
    const { story } = await window.Fides.api.bibleStory(slug);
    const box = document.getElementById('modal-box');
    let panelIdx = 0;
    function render() {
      const panel = story.panels[panelIdx];
      box.innerHTML = `
        <button class="modal-close" onclick="document.getElementById('modal-container').classList.add('hidden')">×</button>
        <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:0.15em;color:var(--c-crimson);text-transform:uppercase;">${esc(story.scripture_ref)}</div>
        <h2 style="font-family:var(--font-display);font-size:28px;color:var(--c-deep);letter-spacing:0.08em;">${esc(story.title)}</h2>
        ${panel ? `
        <div style="margin-top:18px;padding:22px;background:linear-gradient(135deg,var(--c-cream),var(--c-cream-2));border-left:4px solid var(--c-gold);border-radius:var(--r-md);">
          <div style="font-family:var(--font-display);font-size:18px;color:var(--c-deep);margin-bottom:10px;">Panel ${panelIdx + 1} of ${story.panels.length} — ${esc(panel.title)}</div>
          <div style="font-size:15px;line-height:1.7;color:var(--c-ink);">${esc(panel.narrative)}</div>
          ${panel.verse ? `<div style="margin-top:14px;font-family:var(--font-quote);font-style:italic;color:var(--c-crimson);">${esc(panel.verse)}</div>` : ''}
        </div>` : ''}
        <div class="lesson-nav" style="margin-top:18px;">
          <button class="btn-prev" id="bp" ${panelIdx === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn-next" id="bn" ${panelIdx === story.panels.length - 1 ? 'disabled' : ''}>Next →</button>
        </div>
      `;
      box.querySelector('#bp').addEventListener('click', () => { if (panelIdx > 0) { panelIdx--; window.Fides.audio.pageTurn(); render(); } });
      box.querySelector('#bn').addEventListener('click', () => { if (panelIdx < story.panels.length - 1) { panelIdx++; window.Fides.audio.pageTurn(); render(); } });
    }
    render();
    document.getElementById('modal-container').classList.remove('hidden');
  }

  return { renderPopes, renderSaints, renderBible, showSaintModal, showBibleStory };
})();

window.Fides.timeline = Timeline;
