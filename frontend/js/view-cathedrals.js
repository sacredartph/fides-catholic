// Frontend module: Cathedral Explorer 2.0
// Gallery → cathedral detail with hero image + clickable hotspots

window.Fides = window.Fides || {};

window.Fides.viewCathedrals = (function () {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  async function renderGallery(target) {
    target.innerHTML = '<div class="loading-state"><p>Loading the cathedrals...</p></div>';
    const r = await fetch('/api/cathedrals').then(x => x.json());
    target.innerHTML = `
      <header class="view-header">
        <h1>Cathedrals of the World</h1>
        <p>Ten of the greatest churches ever built — each one theology made of stone.</p>
      </header>
      <div class="cath-gallery">
        ${r.cathedrals.map(c => `
          <div class="cath-card" data-slug="${esc(c.slug)}">
            <div class="cath-card-img" style="background-image:url('${esc(c.thumb_image_url || c.hero_image_url)}');"></div>
            <div class="cath-card-body">
              <h3>${esc(c.name)}</h3>
              <div class="cath-card-meta">${esc(c.city)}, ${esc(c.country)} · ${esc(c.style)}</div>
              <div class="cath-card-years">${esc(c.built_start)}${c.built_end ? ' – ' + esc(c.built_end) : ''}</div>
              <p class="cath-card-sum">${esc(c.short_summary)}</p>
            </div>
          </div>`).join('')}
      </div>
    `;
    target.querySelectorAll('.cath-card').forEach(card => {
      card.addEventListener('click', () => renderDetail(card.dataset.slug, target));
    });
  }

  async function renderDetail(slug, target) {
    target.innerHTML = '<div class="loading-state"><p>Opening the doors...</p></div>';
    const { cathedral: c } = await fetch('/api/cathedrals/' + slug).then(x => x.json());

    target.innerHTML = `
      <a class="back-link" id="back-to-cath">← All Cathedrals</a>
      <div class="cath-detail">
        <div class="cath-hero">
          <img src="${esc(c.hero_image_url)}" alt="${esc(c.name)}" class="cath-hero-img" id="cath-hero-img" />
          ${c.hotspots.map((h, i) => `
            <button class="cath-hotspot" data-i="${i}" style="left:${h.x}%;top:${h.y}%;" aria-label="${esc(h.title)}">
              <span class="hotspot-pulse"></span>
              <span class="hotspot-number">${i + 1}</span>
            </button>
          `).join('')}
        </div>
        <div class="cath-image-credit">${esc(c.image_credit || '')}</div>

        <h1 class="cath-title">${esc(c.name)}</h1>
        <div class="cath-subtitle">${esc(c.city)}, ${esc(c.country)} · ${esc(c.style)} · ${esc(c.built_start)}${c.built_end ? ' – ' + esc(c.built_end) : ''}</div>

        <div class="cath-tabs">
          <button class="cath-tab active" data-tab="history">History</button>
          <button class="cath-tab" data-tab="hotspots">Tour (${c.hotspots.length})</button>
          <button class="cath-tab" data-tab="architecture">Architecture</button>
          <button class="cath-tab" data-tab="relics">Relics & Saints</button>
          <button class="cath-tab" data-tab="facts">Did You Know</button>
        </div>

        <div class="cath-tab-panel" id="cath-panel-history">
          <h3>Full History</h3>
          <p>${esc(c.full_history)}</p>
        </div>

        <div class="cath-tab-panel hidden" id="cath-panel-hotspots">
          <h3>Tour the Cathedral</h3>
          <p class="muted">Tap a numbered hotspot above to focus on it. Then read its meaning here.</p>
          <div id="hotspot-detail"></div>
          <div class="hotspot-list">
            ${c.hotspots.map((h, i) => `
              <button class="hotspot-list-item" data-i="${i}">
                <span class="hotspot-list-num">${i + 1}</span>
                <span class="hotspot-list-title">${esc(h.title)}</span>
              </button>`).join('')}
          </div>
        </div>

        <div class="cath-tab-panel hidden" id="cath-panel-architecture">
          <h3>Architectural Significance</h3>
          <p>${esc(c.architectural_significance || 'Information not yet added.')}</p>
        </div>

        <div class="cath-tab-panel hidden" id="cath-panel-relics">
          <h3>Notable Relics</h3>
          <p>${esc(c.notable_relics || 'Information not yet added.')}</p>
          <h3 style="margin-top:14px;">Patron Saints</h3>
          <p>${esc(c.patron_saints || 'Information not yet added.')}</p>
        </div>

        <div class="cath-tab-panel hidden" id="cath-panel-facts">
          <h3>Did You Know?</h3>
          <ul class="facts-list">
            ${c.fun_facts.map(f => `<li>${esc(f)}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

    target.querySelector('#back-to-cath').addEventListener('click', () => renderGallery(target));

    target.querySelectorAll('.cath-tab').forEach(tab => tab.addEventListener('click', () => {
      target.querySelectorAll('.cath-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      target.querySelectorAll('.cath-tab-panel').forEach(p => p.classList.add('hidden'));
      target.querySelector('#cath-panel-' + tab.dataset.tab).classList.remove('hidden');
    }));

    const showHotspot = (i) => {
      const h = c.hotspots[i];
      if (!h) return;
      // switch to tour tab
      target.querySelectorAll('.cath-tab').forEach(t => t.classList.remove('active'));
      target.querySelector('.cath-tab[data-tab="hotspots"]').classList.add('active');
      target.querySelectorAll('.cath-tab-panel').forEach(p => p.classList.add('hidden'));
      target.querySelector('#cath-panel-hotspots').classList.remove('hidden');
      target.querySelector('#hotspot-detail').innerHTML = `
        <div class="hotspot-detail-card">
          <div class="hotspot-detail-num">${i + 1} of ${c.hotspots.length}</div>
          <h4>${esc(h.title)}</h4>
          <p>${esc(h.body)}</p>
        </div>`;
      // highlight active hotspot
      target.querySelectorAll('.cath-hotspot').forEach((b, j) => b.classList.toggle('active', j === i));
      target.querySelector('#cath-panel-hotspots').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    target.querySelectorAll('.cath-hotspot').forEach((btn, i) => btn.addEventListener('click', () => showHotspot(i)));
    target.querySelectorAll('.hotspot-list-item').forEach((btn, i) => btn.addEventListener('click', () => showHotspot(i)));
  }

  return { renderGallery };
})();
