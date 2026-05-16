/* Fides — search.js : full-text search across lessons / saints / popes / scripture */
window.Fides = window.Fides || {};

const Search = (() => {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  function renderSearchPanel(target) {
    target.innerHTML = `
      <header class="view-header">
        <h1>Search the Catechism, the Bible, the Saints, the Popes</h1>
        <p>Type any question, name, or topic.</p>
      </header>
      <input type="text" class="search-bar" id="search-input" placeholder="Try 'transubstantiation' or 'Aquinas' or 'why pray to saints?'" autofocus />
      <div id="search-results"></div>
    `;
    const input = target.querySelector('#search-input');
    const results = target.querySelector('#search-results');
    let timeoutHandle;
    input.addEventListener('input', () => {
      clearTimeout(timeoutHandle);
      timeoutHandle = setTimeout(() => doSearch(input.value, results), 200);
    });
  }

  async function doSearch(q, target) {
    if (!q || q.trim().length < 2) { target.innerHTML = ''; return; }
    try {
      const { results } = await window.Fides.api.search(q.trim());
      const sections = [];
      if (results.lessons && results.lessons.length) {
        sections.push(`
          <div class="search-section">
            <h3>Lessons (${results.lessons.length})</h3>
            ${results.lessons.map(r => `
              <div class="search-result" data-type="lesson" data-id="${r.id}" data-module="${r.module_id}">
                <div class="res-title">${esc(r.title)}</div>
                <div class="res-meta">${esc(r.module_title)} ${r.ccc_ref ? ' · ' + esc(r.ccc_ref) : ''} ${r.scripture_ref ? ' · ' + esc(r.scripture_ref) : ''}</div>
              </div>`).join('')}
          </div>`);
      }
      if (results.saints && results.saints.length) {
        sections.push(`
          <div class="search-section">
            <h3>Saints (${results.saints.length})</h3>
            ${results.saints.map(r => `
              <div class="search-result" data-type="saint" data-id="${r.id}">
                <div class="res-title">${esc(r.name)}</div>
                <div class="res-meta">${esc(r.feast_day || '')} · ${esc(r.type)} · ${esc(r.short_bio || '').slice(0, 100)}</div>
              </div>`).join('')}
          </div>`);
      }
      if (results.popes && results.popes.length) {
        sections.push(`
          <div class="search-section">
            <h3>Popes (${results.popes.length})</h3>
            ${results.popes.map(r => `
              <div class="search-result">
                <div class="res-title">№${r.number} · ${esc(r.name)}</div>
                <div class="res-meta">${esc(r.start_year || '')}-${esc(r.end_year || '')} · ${esc(r.key_event || '')}</div>
              </div>`).join('')}
          </div>`);
      }
      if (results.scripture && results.scripture.length) {
        sections.push(`
          <div class="search-section">
            <h3>Scripture (${results.scripture.length})</h3>
            ${results.scripture.map(r => `
              <div class="search-result" data-type="bible" data-slug="${esc(r.slug || r.id)}">
                <div class="res-title">${esc(r.title)}</div>
                <div class="res-meta">${esc(r.testament)} Testament · ${esc(r.scripture_ref || '')}</div>
              </div>`).join('')}
          </div>`);
      }
      target.innerHTML = sections.length ? sections.join('') : `<p style="text-align:center;padding:30px;color:var(--c-ink-soft);">No results for "${esc(q)}" yet. Try a different word.</p>`;
      target.querySelectorAll('.search-result').forEach(r => r.addEventListener('click', () => {
        const t = r.dataset.type;
        if (t === 'lesson') window.Fides.app.openLesson(r.dataset.id);
        else if (t === 'saint') window.Fides.timeline.showSaintModal(r.dataset.id);
        else if (t === 'bible') window.Fides.timeline.showBibleStory(r.dataset.slug);
      }));
    } catch (e) {
      target.innerHTML = `<p style="text-align:center;color:var(--c-crimson);">Search error: ${esc(e.message)}</p>`;
    }
  }

  return { renderSearchPanel };
})();

window.Fides.search = Search;
