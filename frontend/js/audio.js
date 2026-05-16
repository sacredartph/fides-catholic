/* Fides — audio.js : Web Audio API synth — Gregorian-style ambient + sound effects */
window.Fides = window.Fides || {};

const Audio = (() => {
  let ctx = null;
  let ambientNodes = [];
  let muted = localStorage.getItem('fides_muted') === '1';
  let ambientOn = false;

  function ensure() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function envelope(node, t0, attack, sustain, release, peak) {
    const g = node.gain;
    g.cancelScheduledValues(t0);
    g.setValueAtTime(0, t0);
    g.linearRampToValueAtTime(peak, t0 + attack);
    g.linearRampToValueAtTime(peak * 0.75, t0 + attack + sustain);
    g.linearRampToValueAtTime(0, t0 + attack + sustain + release);
  }

  function tone(freq, duration, type, peak, attack, release, when) {
    if (muted) return;
    const c = ensure();
    const t = (when || c.currentTime);
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type || 'sine';
    o.frequency.value = freq;
    o.connect(g); g.connect(c.destination);
    envelope(g, t, attack || 0.02, duration - (attack || 0.02) - (release || 0.1), release || 0.1, peak || 0.18);
    o.start(t);
    o.stop(t + duration + 0.05);
  }

  function chord(freqs, duration, type, peak) {
    freqs.forEach((f, i) => tone(f, duration, type, (peak || 0.13) / Math.sqrt(freqs.length), 0.04, 0.25, ensure().currentTime + i * 0.01));
  }

  function correct() { chord([523.25, 659.25, 783.99], 0.55, 'sine', 0.18); }
  function wrong() {
    if (muted) return;
    const c = ensure();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(330, c.currentTime); o.frequency.linearRampToValueAtTime(220, c.currentTime + 0.35);
    o.connect(g); g.connect(c.destination);
    envelope(g, c.currentTime, 0.02, 0.18, 0.18, 0.16);
    o.start(); o.stop(c.currentTime + 0.5);
  }
  function complete() {
    chord([293.66, 369.99, 440, 587.33], 1.2, 'sine', 0.18);
    setTimeout(() => chord([293.66, 440, 587.33, 880], 0.9, 'sine', 0.15), 400);
  }
  function levelup() {
    chord([261.63, 329.63, 392.00, 523.25], 1.8, 'sine', 0.16);
    setTimeout(() => chord([392.00, 523.25, 659.25, 783.99], 1.2, 'sine', 0.14), 700);
  }
  function badge() {
    const c = ensure();
    [0, 0.08, 0.18, 0.32].forEach((d, i) => tone(880 + i * 220, 0.18, 'sine', 0.16, 0.005, 0.12, c.currentTime + d));
  }
  function bead() { tone(659.25, 0.25, 'sine', 0.2, 0.005, 0.2); tone(987.77, 0.18, 'sine', 0.08, 0.005, 0.16); }
  function pageTurn() {
    if (muted) return;
    const c = ensure();
    const noise = c.createBufferSource();
    const buf = c.createBuffer(1, c.sampleRate * 0.18, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
    noise.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = 'highpass'; f.frequency.value = 1200;
    const g = c.createGain();
    g.gain.setValueAtTime(0.12, c.currentTime); g.gain.linearRampToValueAtTime(0, c.currentTime + 0.18);
    noise.connect(f); f.connect(g); g.connect(c.destination);
    noise.start();
  }
  function prayerComplete() { chord([261.63, 329.63, 392.00], 1.5, 'sine', 0.16); }

  function startAmbient() {
    if (ambientOn || muted) return;
    const c = ensure();
    // Drone: two slow oscillators with subtle detune for warm choral feel
    const freqs = [110, 164.81, 220]; // A2 + E3 + A3 (open fifth + octave)
    ambientNodes = freqs.map((f, i) => {
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = 'sine';
      o.frequency.value = f * (1 + (Math.random() - 0.5) * 0.0015);
      g.gain.value = 0;
      g.gain.linearRampToValueAtTime(0.025, c.currentTime + 6);
      // gentle LFO modulating gain
      const lfo = c.createOscillator();
      const lfoG = c.createGain();
      lfo.frequency.value = 0.08 + i * 0.03;
      lfoG.gain.value = 0.008;
      lfo.connect(lfoG); lfoG.connect(g.gain);
      o.connect(g); g.connect(c.destination);
      o.start(); lfo.start();
      return { o, g, lfo };
    });
    ambientOn = true;
  }
  function stopAmbient() {
    if (!ambientOn) return;
    const c = ensure();
    ambientNodes.forEach(n => {
      n.g.gain.cancelScheduledValues(c.currentTime);
      n.g.gain.linearRampToValueAtTime(0, c.currentTime + 1.5);
      n.o.stop(c.currentTime + 1.6);
      n.lfo.stop(c.currentTime + 1.6);
    });
    ambientNodes = [];
    ambientOn = false;
  }

  function toggleMute() {
    muted = !muted;
    localStorage.setItem('fides_muted', muted ? '1' : '0');
    if (muted) stopAmbient();
    return muted;
  }

  function isMuted() { return muted; }

  return { ensure, correct, wrong, complete, levelup, badge, bead, pageTurn, prayerComplete, startAmbient, stopAmbient, toggleMute, isMuted };
})();

window.Fides.audio = Audio;
