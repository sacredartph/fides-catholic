/* Fides — quiz.js : inline quiz at end of lessons + lightning round */
window.Fides = window.Fides || {};

const Quiz = (() => {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  function start(lesson, questions, target) {
    let qi = 0;
    const answers = [];
    function renderQ() {
      const q = questions[qi];
      target.innerHTML = `
        <div class="quiz-shell">
          <div class="quiz-header">
            <h2>${esc(lesson.title)}</h2>
            <div style="margin-top:6px;font-family:var(--font-ui);font-size:12px;letter-spacing:0.1em;">Question ${qi + 1} of ${questions.length}</div>
          </div>
          <div class="quiz-question">
            <div class="quiz-q-num">Question ${qi + 1}</div>
            <h3>${esc(q.question)}</h3>
            <div class="quiz-options">
              ${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${esc(opt)}</button>`).join('')}
            </div>
            <div id="quiz-feedback" style="display:none;"></div>
          </div>
          <div class="lesson-nav" id="qnav" style="display:none;">
            <button class="btn-next" id="next-q">${qi === questions.length - 1 ? 'See Score →' : 'Next Question →'}</button>
          </div>
        </div>`;
      const feedback = target.querySelector('#quiz-feedback');
      const nav = target.querySelector('#qnav');
      target.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', () => {
          if (feedback.style.display !== 'none') return;
          const choice = parseInt(opt.dataset.i, 10);
          answers[qi] = choice;
          target.querySelectorAll('.quiz-option').forEach((el, i) => {
            if (i === q.correct_index) el.classList.add('correct');
            if (i === choice && i !== q.correct_index) el.classList.add('wrong');
            el.style.pointerEvents = 'none';
          });
          if (choice === q.correct_index) window.Fides.audio.correct();
          else window.Fides.audio.wrong();
          feedback.style.display = 'block';
          feedback.className = 'quiz-explanation';
          feedback.innerHTML = `${q.scripture_ref ? `<span class="ref-tag">${esc(q.scripture_ref)}</span>` : ''}${q.ccc_ref ? `<span class="ref-tag">${esc(q.ccc_ref)}</span>` : ''}${esc(q.explanation || '')}`;
          nav.style.display = 'flex';
        });
      });
      target.querySelector('#next-q').addEventListener('click', () => {
        if (qi < questions.length - 1) { qi++; renderQ(); }
        else finish();
      });
    }
    async function finish() {
      const result = await window.Fides.api.grade(lesson.id, answers);
      target.innerHTML = `
        <div class="quiz-shell">
          <div class="quiz-result">
            <h2>${result.passed ? '✦ Well Done' : 'Keep Going'}</h2>
            <div class="quiz-score">${result.score}%</div>
            <p>${result.correct} out of ${result.total} correct</p>
            <p style="margin-top:8px;font-style:italic;">${result.passed ? 'Saint-level work. You\'ve earned the full reward.' : 'Review the explanations and try again to earn full XP.'}</p>
            <div class="actions">
              <button class="hero-btn primary" id="claim-xp">Claim XP →</button>
              <button class="hero-btn secondary" id="review-quiz">Review Answers</button>
            </div>
          </div>
        </div>`;
      target.querySelector('#claim-xp').addEventListener('click', () => window.Fides.lessons.complete(lesson, target, result.score));
      target.querySelector('#review-quiz').addEventListener('click', () => renderReview(result, lesson, target));
    }
    renderQ();
  }

  function renderReview(result, lesson, target) {
    target.innerHTML = `
      <div class="quiz-shell">
        <h2 style="margin-bottom:16px;color:var(--c-deep);font-family:var(--font-display);letter-spacing:0.1em;">Review</h2>
        ${result.review.map((r, i) => `
          <div class="quiz-question">
            <div class="quiz-q-num">Question ${i + 1} — ${r.correct ? '<span style="color:var(--c-forest);">CORRECT</span>' : '<span style="color:var(--c-crimson);">REVIEW</span>'}</div>
            <h3>${esc(r.question)}</h3>
            <div class="quiz-options">
              ${r.options.map((opt, j) => `
                <div class="quiz-option ${j === r.correct_answer ? 'correct' : (j === r.your_answer ? 'wrong' : '')}" style="cursor:default;pointer-events:none;">${esc(opt)}</div>
              `).join('')}
            </div>
            <div class="quiz-explanation">
              ${r.scripture_ref ? `<span class="ref-tag">${esc(r.scripture_ref)}</span>` : ''}
              ${r.ccc_ref ? `<span class="ref-tag">${esc(r.ccc_ref)}</span>` : ''}
              ${esc(r.explanation || '')}
            </div>
          </div>`).join('')}
        <div class="lesson-nav">
          <button class="btn-next" id="claim-xp-2">Claim XP →</button>
        </div>
      </div>`;
    target.querySelector('#claim-xp-2').addEventListener('click', () => window.Fides.lessons.complete(lesson, target, result.score));
  }

  return { start };
})();

window.Fides.quiz = Quiz;
