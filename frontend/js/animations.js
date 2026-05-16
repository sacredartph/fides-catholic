/* Fides — animations.js : XP float, confetti, badge reveal, gold burst */
window.Fides = window.Fides || {};

const Anim = (() => {
  function xpFloat(amount) {
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = '+' + amount + ' XP';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1700);
  }

  function goldBurst() {
    const el = document.createElement('div');
    el.className = 'gold-burst';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }

  function confetti(durationMs) {
    const colors = ['#C9A84C', '#8B1A1A', '#1A1035', '#FAF6EE', '#2D5016', '#1B4F72'];
    const count = 80;
    for (let i = 0; i < count; i++) {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDelay = (Math.random() * 0.6) + 's';
      c.style.animationDuration = (2.5 + Math.random() * 2) + 's';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 5000);
    }
  }

  function levelUp(newLevel, levelName) {
    document.body.classList.add('level-up-flash');
    setTimeout(() => document.body.classList.remove('level-up-flash'), 1500);
    goldBurst();
    confetti();
    if (window.Fides && window.Fides.audio) window.Fides.audio.levelup();
    showCelebrationModal('Level Up!', `You reached <strong>Level ${newLevel} — ${levelName}</strong>!<br><br>You are growing closer to becoming a saint.`);
  }

  function badgeEarned(badge) {
    goldBurst();
    confetti();
    if (window.Fides && window.Fides.audio) window.Fides.audio.badge();
    showCelebrationModal('Badge Earned',
      `<div style="font-size:64px;margin:16px 0;">✦</div>
       <h3 style="font-family:var(--font-display);color:var(--c-deep);font-size:22px;letter-spacing:0.1em;">${escapeHtml(badge.name)}</h3>
       <p style="margin-top:10px;font-style:italic;color:var(--c-ink-soft);">You completed a whole module. Well done!</p>`);
  }

  function showCelebrationModal(title, html) {
    const container = document.getElementById('modal-container');
    const box = document.getElementById('modal-box');
    box.innerHTML =
      `<button class="modal-close" onclick="document.getElementById('modal-container').classList.add('hidden')">×</button>
       <div style="text-align:center;">
         <h2 style="font-family:var(--font-display);font-size:34px;color:var(--c-gold);letter-spacing:0.12em;text-shadow:0 0 22px rgba(201,168,76,0.4);">
           ${escapeHtml(title)}
         </h2>
         <div style="margin-top:14px;font-size:15px;line-height:1.7;color:var(--c-ink);">${html}</div>
         <button class="hero-btn primary" style="margin-top:22px;" onclick="document.getElementById('modal-container').classList.add('hidden')">Praise God</button>
       </div>`;
    container.classList.remove('hidden');
  }

  function toast(message, type) {
    const wrap = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = 'toast ' + (type || '');
    el.textContent = message;
    wrap.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  return { xpFloat, goldBurst, confetti, levelUp, badgeEarned, toast, showCelebrationModal, escapeHtml };
})();

window.Fides.anim = Anim;
window.Fides.esc = Anim.escapeHtml;
