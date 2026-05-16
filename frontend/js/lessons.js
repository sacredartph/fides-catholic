/* Fides — lessons.js : module list, lesson detail, slide engine, reflection saving */
window.Fides = window.Fides || {};

const Lessons = (() => {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  async function renderModulesList(target) {
    const { modules } = await window.Fides.api.listModules();
    const prog = await window.Fides.api.progress().catch(() => ({ modules: [] }));
    const progMap = {};
    (prog.modules || []).forEach(m => { progMap[m.id] = m; });

    target.innerHTML = `
      <header class="view-header">
        <h1>The Twelve Modules</h1>
        <p>Your complete journey through the Catholic Faith — 90 lessons, 12 modules, infinite depth.</p>
      </header>
      <div class="modules-grid">
        ${modules.map((m, i) => {
          const pm = progMap[m.id] || { total: m.lesson_count, done: 0 };
          const pct = pm.total ? Math.round(100 * pm.done / pm.total) : 0;
          const grad = `linear-gradient(135deg, ${m.gradient_start || m.color || '#1A1035'} 0%, ${m.gradient_end || '#251748'} 100%)`;
          return `
          <div class="module-card" data-id="${m.id}" style="background:${grad};">
            <div class="module-num">Module ${m.order_index}</div>
            <div>
              <div class="module-title">${esc(m.title)}</div>
              <div class="module-subtitle">${esc(m.subtitle || '')}</div>
            </div>
            <div>
              <div class="module-progress-bar"><div class="module-progress-fill" style="width:${pct}%"></div></div>
              <div class="module-meta">
                <span>${pm.done}/${pm.total || m.lesson_count} lessons</span>
                <span>${esc(m.badge_name || '')}</span>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    `;
    target.querySelectorAll('.module-card').forEach(card => {
      card.addEventListener('click', () => window.Fides.app.openModule(card.dataset.id));
    });
  }

  async function renderModuleDetail(id, target) {
    const { module, lessons } = await window.Fides.api.getModule(id);
    const grad = `linear-gradient(135deg, ${module.gradient_start || module.color || '#1A1035'} 0%, ${module.gradient_end || '#251748'} 100%)`;
    target.innerHTML = `
      <a class="back-link" id="back-to-modules">← All Modules</a>
      <div class="module-detail-hero" style="background:${grad};">
        <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.7;">Module ${module.order_index}</div>
        <h1>${esc(module.title)}</h1>
        <p>${esc(module.subtitle || '')}</p>
        <p style="margin-top:10px;font-family:var(--font-body);font-style:normal;opacity:0.9;font-size:14px;line-height:1.6;">${esc(module.description || '')}</p>
      </div>
      <div class="lesson-list">
        ${lessons.map((l, i) => {
          const done = l.progress && l.progress.completed;
          return `
          <div class="lesson-row ${done ? 'done' : ''}" data-id="${l.id}">
            <div class="lesson-num">${done ? '✓' : (i + 1)}</div>
            <div class="lesson-info">
              <div class="lesson-name">${esc(l.title)}</div>
              <div class="lesson-sub">${esc(l.subtitle || '')}</div>
            </div>
            <div class="lesson-meta">
              <span>${l.xp_reward} XP</span>
              <span>${l.duration_minutes} min</span>
              ${l.has_quiz ? '<span>Quiz</span>' : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
    `;
    target.querySelector('#back-to-modules').addEventListener('click', () => window.Fides.app.go('modules'));
    target.querySelectorAll('.lesson-row').forEach(row => {
      row.addEventListener('click', () => window.Fides.app.openLesson(row.dataset.id));
    });
  }

  async function renderLesson(id, target) {
    const data = await window.Fides.api.getLesson(id);
    const lesson = data.lesson;
    const slides = (lesson.content && lesson.content.slides) || [];
    const questions = data.questions || [];
    let idx = 0;

    function renderSlide() {
      const slide = slides[idx];
      const isLast = idx === slides.length - 1;
      const total = slides.length + (questions.length ? 1 : 0);
      const stepNum = idx + 1;
      const pct = Math.round((100 * stepNum) / total);
      target.innerHTML = `
        <div class="lesson-shell">
          <a class="back-link" id="back-to-mod">← Back to module</a>
          <div class="lesson-progress">
            <div class="lesson-progress-bar"><div class="lesson-progress-fill" style="width:${pct}%"></div></div>
            <div class="lesson-progress-meta">
              <span>${esc(lesson.title)}</span>
              <span>Slide ${stepNum} of ${total}</span>
            </div>
          </div>
          <div id="slide-host" class="page-flip">${renderSlideHTML(slide)}</div>
          <div class="lesson-nav">
            <button class="btn-prev" id="prev-btn" ${idx === 0 ? 'disabled' : ''}>← Previous</button>
            <button class="btn-next" id="next-btn">${isLast && questions.length ? 'Take Quiz →' : (isLast ? 'Complete Lesson →' : 'Next →')}</button>
          </div>
        </div>
      `;
      const host = document.getElementById('slide-host');
      bindSlide(slide, host, lesson, id);
      target.querySelector('#back-to-mod').addEventListener('click', () => window.Fides.app.openModule(lesson.module_id));
      target.querySelector('#prev-btn').addEventListener('click', () => {
        if (idx > 0) { idx--; window.Fides.audio.pageTurn(); renderSlide(); }
      });
      target.querySelector('#next-btn').addEventListener('click', () => {
        if (idx < slides.length - 1) { idx++; window.Fides.audio.pageTurn(); renderSlide(); }
        else if (questions.length) { window.Fides.quiz.start(lesson, questions, target); }
        else { window.Fides.lessons.complete(lesson, target, null); }
      });
    }
    renderSlide();
  }

  function renderSlideHTML(slide) {
    const t = slide.type || 'explain';
    if (t === 'hero') {
      return `<div class="slide hero">
        <div class="slide-title">${esc(slide.title || '')}</div>
        <div class="slide-subtitle">${esc(slide.subtitle || '')}</div>
        <div class="slide-body">${esc(slide.body || '')}</div>
        ${slide.mascot ? `<div class="mascot-line">${esc(slide.mascot)}</div>` : ''}
      </div>`;
    }
    if (t === 'scripture') {
      const verse = slide.verse || '';
      const dropChar = verse.charAt(0);
      const rest = verse.slice(1);
      return `<div class="slide scripture">
        <div class="scripture-verse"><span class="scripture-drop-cap">${esc(dropChar)}</span>${esc(rest)}</div>
        <div class="scripture-ref">${esc(slide.reference || '')}</div>
        ${slide.ccc_tie ? `<div class="slide-ccc">${esc(slide.ccc_tie)}</div>` : ''}
      </div>`;
    }
    if (t === 'compare') {
      return `<div class="slide compare">
        <div class="slide-title">${esc(slide.title || '')}</div>
        <table>${(slide.rows || []).map(r => `<tr><td>${esc(r.left)}</td><td>${esc(r.right)}</td></tr>`).join('')}</table>
      </div>`;
    }
    if (t === 'timeline') {
      return `<div class="slide timeline">
        <div class="slide-title">${esc(slide.title || '')}</div>
        ${(slide.events || []).map(e => `
          <div class="tl-event">
            <div class="tl-year">${esc(e.year)}</div>
            <div><div class="tl-title">${esc(e.title)}</div><div class="tl-body">${esc(e.body)}</div></div>
          </div>`).join('')}
      </div>`;
    }
    if (t === 'gallery') {
      return `<div class="slide gallery">
        <div class="slide-title">${esc(slide.title || '')}</div>
        <div class="gal-grid">
          ${(slide.items || []).map(it => `
            <div class="gal-item">
              <div class="gal-name">${esc(it.name)}</div>
              <div class="gal-quote">${esc(it.quote || '')}</div>
              <div class="gal-role">${esc(it.role || '')}</div>
            </div>`).join('')}
        </div>
      </div>`;
    }
    if (t === 'reflection') {
      return `<div class="slide reflection">
        <div class="slide-title">${esc(slide.title || 'For Reflection')}</div>
        <ul class="ref-prompts">${(slide.prompts || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        <textarea id="reflection-text" placeholder="Write your reflection here (private — only you will see this)..."></textarea>
        <div style="text-align:right;margin-top:10px;">
          <button class="hero-btn primary" id="save-reflection">Save Reflection</button>
        </div>
      </div>`;
    }
    if (t === 'interactive') {
      return `<div class="slide interactive">
        <div class="slide-title">${esc(slide.title || 'Interactive')}</div>
        <div class="slide-body">${esc(slide.body || '')}</div>
        <div class="interactive-box">
          <div style="font-family:var(--font-display);font-size:18px;color:var(--c-deep);margin-bottom:10px;">${esc(slide.instruction || 'Open the interactive companion')}</div>
          ${slide.component === 'papal-timeline-preview' ? `<button onclick="window.Fides.app.go('popes')">Open Papal Timeline</button>` : ''}
          ${slide.component === 'cathedral-explorer' ? `<button onclick="window.Fides.app.go('cathedral')">Open Cathedral Explorer</button>` : ''}
          ${(slide.component !== 'papal-timeline-preview' && slide.component !== 'cathedral-explorer') ? `<button onclick="alert('Interactive component coming alive — for now imagine the experience.')">Begin</button>` : ''}
        </div>
      </div>`;
    }
    if (t === 'map') {
      return `<div class="slide map">
        <div class="slide-title">${esc(slide.title || '')}</div>
        <div class="map-list">${(slide.regions || []).map(r => `
          <div class="map-item">
            <div class="map-region">${esc(r.region)}</div>
            <div class="map-body">${esc(r.body)}</div>
          </div>`).join('')}</div>
      </div>`;
    }
    // explain (default)
    return `<div class="slide explain">
      <h3 class="slide-title">${esc(slide.title || '')}</h3>
      <div class="slide-body">${esc(slide.body || '')}</div>
      ${slide.extra ? `<div class="slide-extra">${esc(slide.extra)}</div>` : ''}
      ${slide.ccc ? `<div class="slide-ccc">${esc(slide.ccc)}</div>` : ''}
    </div>`;
  }

  function bindSlide(slide, host, lesson, lessonId) {
    if (slide.type === 'reflection') {
      const btn = host.querySelector('#save-reflection');
      const txt = host.querySelector('#reflection-text');
      if (btn) btn.addEventListener('click', async () => {
        if (!txt.value.trim()) return window.Fides.anim.toast('Write something first', 'error');
        try {
          await window.Fides.api.saveReflection(lessonId, txt.value.trim());
          window.Fides.anim.toast('Reflection saved (private)', 'success');
        } catch (e) { window.Fides.anim.toast('Could not save: ' + e.message, 'error'); }
      });
    }
  }

  async function complete(lesson, target, quizScore) {
    try {
      const r = await window.Fides.api.completeLesson(lesson.id, quizScore != null ? { quiz_score: quizScore } : {});
      window.Fides.audio.complete();
      window.Fides.anim.xpFloat(r.xp_earned);
      window.Fides.anim.goldBurst();
      if (r.leveled_up) {
        const names = ['Seeker','Learner','Inquirer','Catechumen','Baptized','Confirmed','Pilgrim','Crusader','Scholar','Apologist','Mystic','Confessor','Deacon','Priest','Bishop','Doctor','Patriarch','Prophet','Apostle','Saint'];
        window.Fides.anim.levelUp(r.level, names[r.level - 1]);
      }
      if (r.badge) window.Fides.anim.badgeEarned(r.badge);

      target.innerHTML = `
        <div class="lesson-shell" style="text-align:center;">
          <div class="quiz-result">
            <h2>${quizScore != null ? 'Lesson + Quiz Complete' : 'Lesson Complete'}</h2>
            ${quizScore != null ? `<div class="quiz-score">${quizScore}</div>` : ''}
            <p>+${r.xp_earned} XP earned · You are now level ${r.level}</p>
            <p style="margin-top:10px;">Module progress: ${r.lessons_done_in_module} of ${r.lessons_in_module} lessons</p>
            <div class="actions">
              <button class="hero-btn primary" id="next-lesson">Next Lesson →</button>
              <button class="hero-btn secondary" id="back-mod">Back to Module</button>
            </div>
          </div>
        </div>`;
      target.querySelector('#back-mod').addEventListener('click', () => window.Fides.app.openModule(lesson.module_id));
      target.querySelector('#next-lesson').addEventListener('click', async () => {
        const { lessons } = await window.Fides.api.getModule(lesson.module_id);
        const next = lessons.find(l => !l.progress || !l.progress.completed);
        if (next) window.Fides.app.openLesson(next.id);
        else window.Fides.app.openModule(lesson.module_id);
      });
      // refresh sidebar user level
      window.Fides.app.refreshUser();
    } catch (e) {
      window.Fides.anim.toast('Could not save progress: ' + e.message, 'error');
    }
  }

  return { renderModulesList, renderModuleDetail, renderLesson, complete };
})();

window.Fides.lessons = Lessons;
