// Frontend module: Sacred Art Gallery

window.Fides = window.Fides || {};

window.Fides.viewArt = (function () {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  async function renderGallery(target) {
    target.innerHTML = '<div class="loading-state"><p>Hanging the masterpieces...</p></div>';
    const r = await fetch('/api/art').then(x => x.json());
    const eras = [...new Set(r.artworks.map(a => a.era))];
    target.innerHTML = `
      <header class="view-header">
        <h1>Sacred Art Gallery</h1>
        <p>Twelve masterpieces of Catholic art — across 1,500 years.</p>
      </header>
      <div class="timeline-filters" id="art-filters">
        <button class="timeline-filter active" data-era="all">All Eras</button>
        ${eras.map(e => `<button class="timeline-filter" data-era="${esc(e)}">${esc(e[0].toUpperCase() + e.slice(1))}</button>`).join('')}
      </div>
      <div class="art-grid" id="art-grid">${cards(r.artworks)}</div>
    `;
    bindFilters(target, r.artworks);
    bindCards(target);
  }

  function cards(artworks) {
    return artworks.map(a => `
      <div class="art-card" data-slug="${esc(a.slug)}">
        <div class="art-card-img" style="background-image:url('${esc(a.thumb_url || a.image_url)}');"></div>
        <div class="art-card-body">
          <h3>${esc(a.title)}</h3>
          <div class="art-card-meta">${esc(a.artist)} · ${esc(a.year)}</div>
          <div class="art-card-era">${esc(a.era)}</div>
          <div class="art-card-loc">${esc(a.current_location)}</div>
        </div>
      </div>`).join('');
  }

  function bindFilters(target, all) {
    target.querySelectorAll('.timeline-filter').forEach(b => b.addEventListener('click', () => {
      target.querySelectorAll('.timeline-filter').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      const era = b.dataset.era;
      const list = era === 'all' ? all : all.filter(a => a.era === era);
      target.querySelector('#art-grid').innerHTML = cards(list);
      bindCards(target);
    }));
  }

  function bindCards(target) {
    target.querySelectorAll('.art-card').forEach(card => {
      card.addEventListener('click', () => renderDetail(card.dataset.slug, target));
    });
  }

  async function renderDetail(slug, target) {
    target.innerHTML = '<div class="loading-state"><p>Opening the canvas...</p></div>';
    const { artwork: a } = await fetch('/api/art/' + slug).then(x => x.json());
    target.innerHTML = `
      <a class="back-link" id="back-art">← Gallery</a>
      <div class="art-detail">
        <div class="art-detail-img-wrap">
          <img src="${esc(a.image_url)}" alt="${esc(a.title)}" class="art-detail-img" />
          <div class="art-detail-credit">${esc(a.image_credit || '')}</div>
        </div>
        <h1 class="art-detail-title">${esc(a.title)}</h1>
        <div class="art-detail-meta">
          <span><strong>Artist:</strong> ${esc(a.artist)}</span>
          <span><strong>Year:</strong> ${esc(a.year)}</span>
          <span><strong>Medium:</strong> ${esc(a.medium)}</span>
          <span><strong>Where:</strong> ${esc(a.current_location)}</span>
        </div>

        <section class="art-section">
          <h2>Theological Meaning</h2>
          <p>${esc(a.theological_meaning)}</p>
        </section>

        ${a.historical_context ? `
        <section class="art-section">
          <h2>Historical Context</h2>
          <p>${esc(a.historical_context)}</p>
        </section>` : ''}

        ${a.details_to_notice && a.details_to_notice.length ? `
        <section class="art-section details">
          <h2>Things to Notice</h2>
          <ol class="details-list">
            ${a.details_to_notice.map(d => `<li>${esc(d)}</li>`).join('')}
          </ol>
        </section>` : ''}

        ${a.scripture_ref ? `<p class="art-scripture">Scripture: <em>${esc(a.scripture_ref)}</em></p>` : ''}
      </div>
    `;
    target.querySelector('#back-art').addEventListener('click', () => renderGallery(target));
  }

  return { renderGallery };
})();
