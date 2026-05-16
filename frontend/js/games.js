/* Fides — games.js : Rosary, Stations, Mass Guide, Games, Cathedral, Prayer */
window.Fides = window.Fides || {};

const Games = (() => {
  const esc = (s) => window.Fides.anim ? window.Fides.anim.escapeHtml(s) : String(s || '');

  // ====== ROSARY DATA ======
  const ROSARY_SETS = {
    joyful: {
      name: 'Joyful Mysteries',
      day: 'Monday, Saturday',
      mysteries: [
        { name: 'The Annunciation', verse: 'Behold, I am the handmaid of the Lord; let it be done to me according to your word. (Luke 1:38)', meditation: 'Gabriel appears to Mary in Nazareth. The Word becomes flesh in her womb at her free Yes.' },
        { name: 'The Visitation', verse: 'My soul magnifies the Lord. (Luke 1:46)', meditation: 'Mary visits Elizabeth. John the Baptist leaps in the womb. The Magnificat is sung.' },
        { name: 'The Nativity', verse: 'She wrapped him in swaddling clothes and laid him in a manger. (Luke 2:7)', meditation: 'Jesus is born in a stable in Bethlehem. Shepherds adore. Angels praise.' },
        { name: 'The Presentation', verse: 'A sword shall pierce through your own soul also. (Luke 2:35)', meditation: 'Mary and Joseph present the infant Jesus in the Temple. Simeon prophesies.' },
        { name: 'Finding in the Temple', verse: 'Did you not know I must be about my Father\'s business? (Luke 2:49)', meditation: 'After three days, Mary and Joseph find Jesus teaching in the Temple at twelve.' }
      ]
    },
    luminous: {
      name: 'Luminous Mysteries',
      day: 'Thursday',
      mysteries: [
        { name: 'Baptism in the Jordan', verse: 'This is my beloved Son, with whom I am well pleased. (Matthew 3:17)', meditation: 'Jesus is baptized by John. The Spirit descends. The Father\'s voice declares Him beloved Son.' },
        { name: 'The Wedding at Cana', verse: 'Do whatever he tells you. (John 2:5)', meditation: 'Christ\'s first miracle. Water becomes wine at Mary\'s request.' },
        { name: 'Proclamation of the Kingdom', verse: 'The kingdom of God is at hand; repent and believe in the gospel. (Mark 1:15)', meditation: 'Jesus calls all to conversion. Heals. Teaches. Forgives sins.' },
        { name: 'The Transfiguration', verse: 'His face shone like the sun. (Matthew 17:2)', meditation: 'On Mount Tabor, Peter, James, and John see Christ in glory with Moses and Elijah.' },
        { name: 'Institution of the Eucharist', verse: 'This is my Body, which is given for you. (Luke 22:19)', meditation: 'At the Last Supper, Christ gives Himself as food. The Eucharist is born.' }
      ]
    },
    sorrowful: {
      name: 'Sorrowful Mysteries',
      day: 'Tuesday, Friday',
      mysteries: [
        { name: 'Agony in the Garden', verse: 'Not as I will, but as you will. (Matthew 26:39)', meditation: 'Jesus sweats blood in Gethsemane. Submits to the Father\'s will.' },
        { name: 'Scourging at the Pillar', verse: 'By his stripes we are healed. (Isaiah 53:5)', meditation: 'Jesus is scourged for our sins. The price of our redemption.' },
        { name: 'Crowning with Thorns', verse: 'Hail, King of the Jews. (John 19:3)', meditation: 'A crown of thorns is forced on His head. He is mocked as a king.' },
        { name: 'Carrying of the Cross', verse: 'He went out, bearing his own cross. (John 19:17)', meditation: 'Jesus carries His Cross to Calvary. Falls three times. Meets His Mother. Simon helps.' },
        { name: 'The Crucifixion', verse: 'Father, forgive them, for they know not what they do. (Luke 23:34)', meditation: 'Jesus dies on the Cross. The veil is torn. The world is saved.' }
      ]
    },
    glorious: {
      name: 'Glorious Mysteries',
      day: 'Wednesday, Sunday',
      mysteries: [
        { name: 'The Resurrection', verse: 'He is not here, for he is risen. (Matthew 28:6)', meditation: 'Christ rises on the third day. Death is conquered forever.' },
        { name: 'The Ascension', verse: 'He was lifted up, and a cloud took him out of their sight. (Acts 1:9)', meditation: 'Jesus ascends to the Father. Sends the apostles to make disciples of all nations.' },
        { name: 'Descent of the Holy Spirit', verse: 'They were all filled with the Holy Spirit. (Acts 2:4)', meditation: 'On Pentecost the Spirit descends. The Church is born. 3,000 baptized.' },
        { name: 'Assumption of Mary', verse: 'Hail, full of grace. (Luke 1:28)', meditation: 'At the end of her earthly life, Mary is assumed body and soul into heaven.' },
        { name: 'Coronation of Mary', verse: 'A woman clothed with the sun, with a crown of twelve stars. (Revelation 12:1)', meditation: 'Mary is crowned Queen of Heaven and Earth.' }
      ]
    }
  };

  function renderRosary(target) {
    let currentSet = 'joyful';
    let currentDecade = 0;
    function render() {
      const set = ROSARY_SETS[currentSet];
      const m = set.mysteries[currentDecade];
      target.innerHTML = `
        <header class="view-header">
          <h1>The Holy Rosary</h1>
          <p>Our Lady\'s gift. A meditation on Christ\'s life with Mary as our guide.</p>
        </header>
        <div class="rosary-wrap">
          <div class="rosary-set-tabs" id="rs-tabs">
            ${Object.entries(ROSARY_SETS).map(([k, v]) => `<button class="rosary-set-tab ${k === currentSet ? 'active' : ''}" data-set="${k}">${v.name}</button>`).join('')}
          </div>
          <svg class="rosary-canvas" viewBox="0 0 600 320">
            <defs>
              <radialGradient id="beadGold"><stop offset="0%" stop-color="#FFE08A"/><stop offset="100%" stop-color="#9C7F2E"/></radialGradient>
              <radialGradient id="beadActive"><stop offset="0%" stop-color="#FF7B6B"/><stop offset="100%" stop-color="#8B1A1A"/></radialGradient>
            </defs>
            ${renderRosaryBeads(currentDecade)}
          </svg>
          <div class="rosary-mystery">
            <div class="mystery-num">${set.name} · Decade ${currentDecade + 1} of 5</div>
            <h3>${esc(m.name)}</h3>
            <div class="mystery-scene">${esc(m.meditation)}</div>
            <div class="mystery-verse">${esc(m.verse)}</div>
            <div class="rosary-prayer">
              <h4>Pray</h4>
              <p>One <strong>Our Father</strong>, then ten <strong>Hail Marys</strong> while meditating on this mystery, then one <strong>Glory Be</strong> and the Fatima prayer: <em>"O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of Thy mercy."</em></p>
            </div>
            <div class="lesson-nav" style="margin-top:12px;">
              <button class="btn-prev" id="prev-dec" ${currentDecade === 0 ? 'disabled' : ''}>← Previous Decade</button>
              <button class="btn-next" id="next-dec" ${currentDecade === 4 ? 'disabled' : ''}>Next Decade →</button>
            </div>
            ${currentDecade === 4 ? `<button class="hero-btn primary" style="margin-top:14px;width:100%;" id="rosary-complete">I prayed the full Rosary</button>` : ''}
          </div>
        </div>
      `;
      target.querySelectorAll('.rosary-set-tab').forEach(t => t.addEventListener('click', () => { currentSet = t.dataset.set; currentDecade = 0; window.Fides.audio.bead(); render(); }));
      const prev = target.querySelector('#prev-dec');
      const next = target.querySelector('#next-dec');
      if (prev) prev.addEventListener('click', () => { if (currentDecade > 0) { currentDecade--; window.Fides.audio.bead(); render(); } });
      if (next) next.addEventListener('click', () => { if (currentDecade < 4) { currentDecade++; window.Fides.audio.bead(); render(); } });
      const cb = target.querySelector('#rosary-complete');
      if (cb) cb.addEventListener('click', async () => {
        try {
          const r = await window.Fides.api.logPrayer('rosary');
          window.Fides.audio.prayerComplete();
          window.Fides.anim.goldBurst();
          window.Fides.anim.toast(`Rosary complete! Streak: ${r.streak_days} day(s).`, 'gold');
        } catch (e) { window.Fides.anim.toast(e.message, 'error'); }
      });
      target.querySelectorAll('.rosary-bead').forEach(b => b.addEventListener('click', () => {
        const d = parseInt(b.dataset.decade, 10);
        if (!isNaN(d)) { currentDecade = d; window.Fides.audio.bead(); render(); }
      }));
    }
    render();
  }

  function renderRosaryBeads(activeDecade) {
    // Draw 5 decades around an ellipse + chain to crucifix
    const cx = 300, cy = 160, rx = 240, ry = 110;
    let svg = '';
    // Crucifix at top
    svg += `<line x1="300" y1="290" x2="300" y2="310" stroke="#9C7F2E" stroke-width="2"/>`;
    svg += `<path d="M285 305 L315 305 M300 295 L300 320" stroke="#8B1A1A" stroke-width="3" stroke-linecap="round"/>`;
    // 5 large "Our Father" beads
    for (let d = 0; d < 5; d++) {
      const angle = (d / 5) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(angle) * rx;
      const y = cy + Math.sin(angle) * ry;
      const isActive = d === activeDecade;
      svg += `<circle class="rosary-bead ${isActive ? 'active' : ''}" data-decade="${d}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${isActive ? 12 : 9}" fill="url(#${isActive ? 'beadActive' : 'beadGold'})" stroke="#1A1035" stroke-width="1.4"/>`;
      // 10 Hail Mary beads between this and next OF bead
      for (let h = 1; h <= 10; h++) {
        const t = (d * 10 + h) / 50;
        const a = t * Math.PI * 2 - Math.PI / 2;
        const hx = cx + Math.cos(a) * rx;
        const hy = cy + Math.sin(a) * ry;
        svg += `<circle class="rosary-bead" cx="${hx.toFixed(1)}" cy="${hy.toFixed(1)}" r="4" fill="url(#beadGold)" stroke="#9C7F2E" stroke-width="0.8"/>`;
      }
    }
    return svg;
  }

  // ====== STATIONS OF THE CROSS ======
  const STATIONS = [
    { name: 'Jesus is Condemned to Death', verse: 'Pilate said: "Take him yourselves and crucify him; I find no crime in him." (John 19:6)', meditation: 'Pilate yields. Jesus accepts the verdict in silence. He chose this for us.' },
    { name: 'Jesus Carries His Cross', verse: 'He went out, bearing his own cross. (John 19:17)', meditation: 'The wood is laid upon His scourged shoulders. He embraces it.' },
    { name: 'Jesus Falls the First Time', verse: 'A bruised reed he will not break. (Isaiah 42:3)', meditation: 'Exhausted, beaten, He falls. The weight is the weight of every sin.' },
    { name: 'Jesus Meets His Mother', verse: 'Behold this child... a sword will pierce your own soul also. (Luke 2:34-35)', meditation: 'Their eyes meet. Her sword is fulfilled. He sees His mother\'s grief.' },
    { name: 'Simon of Cyrene Helps Jesus', verse: 'They compelled a passer-by, Simon of Cyrene, to carry his cross. (Mark 15:21)', meditation: 'A stranger is forced into the mystery. Simon becomes part of salvation history.' },
    { name: 'Veronica Wipes the Face of Jesus', verse: 'No tradition in Scripture — preserved in the Church.', meditation: 'A woman pushes through the crowd. She wipes His face. The image of Christ remains on her veil.' },
    { name: 'Jesus Falls the Second Time', verse: 'He has borne our griefs and carried our sorrows. (Isaiah 53:4)', meditation: 'He falls again. The dust rises. He rises again, for love.' },
    { name: 'Jesus Meets the Women of Jerusalem', verse: 'Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children. (Luke 23:28)', meditation: 'Even now He thinks of others, prophesies their suffering.' },
    { name: 'Jesus Falls the Third Time', verse: 'He was wounded for our transgressions. (Isaiah 53:5)', meditation: 'The third fall. The flesh broken. The will undefeated.' },
    { name: 'Jesus is Stripped of His Garments', verse: 'They divided his garments among them, casting lots. (John 19:24)', meditation: 'Naked, vulnerable, exposed — He embraces our shame.' },
    { name: 'Jesus is Nailed to the Cross', verse: 'They crucified him. (John 19:18)', meditation: 'Each blow of the hammer. Each piercing of the nails. The terrible price of love.' },
    { name: 'Jesus Dies on the Cross', verse: 'It is finished. (John 19:30)', meditation: 'Three hours of darkness. The work of redemption is complete. He gives up His Spirit.' },
    { name: 'Jesus is Taken Down from the Cross', verse: 'Joseph of Arimathea... asked for the body of Jesus. (John 19:38)', meditation: 'They lay Him in His Mother\'s arms. The Pieta — Mary holding her crucified Son.' },
    { name: 'Jesus is Laid in the Tomb', verse: 'They laid Jesus there. (John 19:42)', meditation: 'The stone is rolled across. Heaven holds its breath. The third day is coming.' },
    { name: 'The Resurrection of Jesus', verse: 'He is not here, for he is risen, as he said. (Matthew 28:6)', meditation: 'On the third day, the tomb is empty. Death is defeated. Alleluia.' }
  ];

  function renderStations(target) {
    let active = null;
    function list() {
      target.innerHTML = `
        <header class="view-header">
          <h1>Stations of the Cross</h1>
          <p>Walk with Christ from Pilate\'s court to the empty tomb. 15 stations including the Resurrection.</p>
        </header>
        <div class="stations-list">
          ${STATIONS.map((s, i) => `
            <div class="station-card" data-i="${i}">
              <div class="station-num">Station ${i + 1}</div>
              <div class="station-name">${esc(s.name)}</div>
            </div>`).join('')}
        </div>
        <div style="margin-top:18px;text-align:center;">
          <button class="hero-btn primary" id="stations-pray">I prayed the Stations</button>
        </div>
      `;
      target.querySelectorAll('.station-card').forEach(c => c.addEventListener('click', () => { active = parseInt(c.dataset.i, 10); detail(); }));
      target.querySelector('#stations-pray').addEventListener('click', async () => {
        try { const r = await window.Fides.api.logPrayer('stations'); window.Fides.audio.prayerComplete(); window.Fides.anim.toast(`Stations complete! Streak: ${r.streak_days}.`, 'gold'); }
        catch (e) { window.Fides.anim.toast(e.message, 'error'); }
      });
    }
    function detail() {
      const s = STATIONS[active];
      target.innerHTML = `
        <a class="back-link" id="back-stations">← All Stations</a>
        <div class="station-detail">
          <div class="station-detail-num">Station ${active + 1} of ${STATIONS.length}</div>
          <h2>${esc(s.name)}</h2>
          <div class="station-verse">${esc(s.verse)}</div>
          <div class="station-prayer">${esc(s.meditation)}</div>
          <div class="station-prayer" style="margin-top:18px;font-family:var(--font-quote);">We adore Thee, O Christ, and we praise Thee. Because by Thy Holy Cross Thou hast redeemed the world.</div>
        </div>
        <div class="lesson-nav" style="max-width:880px;margin:18px auto 0;">
          <button class="btn-prev" id="prev-s" ${active === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn-next" id="next-s" ${active === STATIONS.length - 1 ? 'disabled' : ''}>Next →</button>
        </div>
      `;
      target.querySelector('#back-stations').addEventListener('click', list);
      target.querySelector('#prev-s').addEventListener('click', () => { if (active > 0) { active--; window.Fides.audio.pageTurn(); detail(); } });
      target.querySelector('#next-s').addEventListener('click', () => { if (active < STATIONS.length - 1) { active++; window.Fides.audio.pageTurn(); detail(); } });
    }
    list();
  }

  // ====== MASS GUIDE ======
  const MASS_PARTS = [
    { section: 'Introductory Rites', parts: [
      { rubric: 'Stand', name: 'Entrance', priest: '(Procession; reverence to the altar)', people: '' },
      { rubric: 'Stand', name: 'Sign of the Cross + Greeting', priest: 'In the name of the Father, and of the Son, and of the Holy Spirit. ... The Lord be with you.', people: 'Amen. ... And with your spirit.' },
      { rubric: 'Stand', name: 'Penitential Act', priest: 'Brethren, let us acknowledge our sins, and so prepare ourselves to celebrate the sacred mysteries.', people: 'I confess to almighty God and to you, my brothers and sisters, that I have greatly sinned... through my fault, through my fault, through my most grievous fault...' },
      { rubric: 'Stand', name: 'Gloria (Sundays / feasts)', priest: '', people: 'Glory to God in the highest, and on earth peace to people of good will. We praise you, we bless you, we adore you, we glorify you...' },
      { rubric: 'Stand', name: 'Collect', priest: 'Let us pray. (brief silence, then collect for the day)', people: 'Amen.' }
    ] },
    { section: 'Liturgy of the Word', parts: [
      { rubric: 'Sit', name: 'First Reading (usually OT)', priest: 'A reading from... The word of the Lord.', people: 'Thanks be to God.' },
      { rubric: 'Sit', name: 'Responsorial Psalm', priest: '', people: '(Sing or recite the response)' },
      { rubric: 'Sit', name: 'Second Reading (NT epistle)', priest: 'A reading from... The word of the Lord.', people: 'Thanks be to God.' },
      { rubric: 'Stand', name: 'Gospel Acclamation', priest: '', people: 'Alleluia, Alleluia, Alleluia. (Verse) Alleluia, Alleluia, Alleluia.' },
      { rubric: 'Stand', name: 'Gospel', priest: 'The Lord be with you. A reading from the holy Gospel according to N. ... The Gospel of the Lord.', people: 'And with your spirit. Glory to you, O Lord. ... Praise to you, Lord Jesus Christ.' },
      { rubric: 'Sit', name: 'Homily', priest: '(Preaching on the readings)', people: '' },
      { rubric: 'Stand', name: 'Nicene Creed', priest: '', people: 'I believe in one God, the Father almighty, maker of heaven and earth... [bow] and by the Holy Spirit was incarnate of the Virgin Mary, and became man...' },
      { rubric: 'Stand', name: 'Universal Prayer', priest: '(Petitions)', people: 'Lord, hear our prayer.' }
    ] },
    { section: 'Liturgy of the Eucharist', parts: [
      { rubric: 'Sit', name: 'Preparation of the Gifts', priest: 'Blessed are you, Lord God of all creation, for through your goodness we have received the bread we offer you...', people: 'Blessed be God for ever.' },
      { rubric: 'Stand', name: 'Orate Fratres', priest: 'Pray, brethren, that my sacrifice and yours may be acceptable to God, the almighty Father.', people: 'May the Lord accept the sacrifice at your hands for the praise and glory of his name, for our good and the good of all his holy Church.' },
      { rubric: 'Stand', name: 'Preface and Holy, Holy, Holy', priest: 'The Lord be with you. Lift up your hearts. Let us give thanks to the Lord our God.', people: 'And with your spirit. We lift them up to the Lord. It is right and just. ... Holy, Holy, Holy Lord God of hosts!' },
      { rubric: 'Kneel', name: 'Eucharistic Prayer (Words of Consecration)', priest: 'TAKE THIS, ALL OF YOU, AND EAT OF IT: FOR THIS IS MY BODY, WHICH WILL BE GIVEN UP FOR YOU. ... TAKE THIS, ALL OF YOU, AND DRINK FROM IT: FOR THIS IS THE CHALICE OF MY BLOOD...', people: '(Silent adoration. Bow as the Host and Chalice are elevated.)' },
      { rubric: 'Kneel', name: 'Mystery of Faith', priest: 'The mystery of faith.', people: 'We proclaim your Death, O Lord, and profess your Resurrection until you come again.' },
      { rubric: 'Kneel', name: 'Doxology and Great Amen', priest: 'Through him, and with him, and in him, O God almighty Father, in the unity of the Holy Spirit, all glory and honor is yours, for ever and ever.', people: 'AMEN.' }
    ] },
    { section: 'Communion Rite', parts: [
      { rubric: 'Stand', name: 'Our Father', priest: 'At the Saviour\'s command and formed by divine teaching, we dare to say:', people: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven...' },
      { rubric: 'Stand', name: 'Sign of Peace', priest: 'The peace of the Lord be with you always.', people: 'And with your spirit.' },
      { rubric: 'Kneel', name: 'Agnus Dei', priest: '', people: 'Lamb of God, you take away the sins of the world, have mercy on us. (×2) ... grant us peace.' },
      { rubric: 'Kneel', name: 'Ecce Agnus Dei', priest: 'Behold the Lamb of God, behold him who takes away the sins of the world. Blessed are those called to the supper of the Lamb.', people: 'Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.' },
      { rubric: 'Procession', name: 'Holy Communion', priest: 'The Body of Christ. / The Blood of Christ.', people: 'Amen.' },
      { rubric: 'Sit/Kneel', name: 'Prayer after Communion', priest: 'Let us pray. ...', people: 'Amen.' }
    ] },
    { section: 'Concluding Rites', parts: [
      { rubric: 'Stand', name: 'Final Blessing', priest: 'The Lord be with you. May almighty God bless you, the Father, and the Son, and the Holy Spirit.', people: 'And with your spirit. Amen.' },
      { rubric: 'Stand', name: 'Dismissal', priest: 'Go forth, the Mass is ended. (or: Go in peace, glorifying the Lord by your life.)', people: 'Thanks be to God.' }
    ] }
  ];

  function renderMass(target) {
    target.innerHTML = `
      <header class="view-header">
        <h1>The Order of the Mass</h1>
        <p>Follow along — every prayer, every gesture, every meaning.</p>
      </header>
      <div class="mass-guide">
        ${MASS_PARTS.map(section => `
          <h2 style="font-family:var(--font-display);color:var(--c-crimson);letter-spacing:0.1em;margin:22px 0 10px;">${esc(section.section)}</h2>
          ${section.parts.map(p => `
            <div class="mass-part">
              <div class="rubric">${esc(p.rubric)}</div>
              <h3>${esc(p.name)}</h3>
              ${p.priest ? `<div class="priest">Priest: ${esc(p.priest)}</div>` : ''}
              ${p.people ? `<div class="people">People: ${esc(p.people)}</div>` : ''}
            </div>`).join('')}
        `).join('')}
      </div>
    `;
  }

  // ====== CATHEDRAL EXPLORER ======
  const CATHEDRAL_PARTS = {
    nave: { name: 'The Nave', body: 'The body of the church where the faithful gather. From the Latin "navis" — ship. The Church is the ship voyaging through history. The long axis of the nave forms the body of the cross.' },
    transept: { name: 'The Transept', body: 'The arms of the cross. Symbolizing Christ\'s arms outstretched on the cross. The transept gives the cathedral its cruciform floor plan.' },
    apse: { name: 'The Apse', body: 'The semicircular sanctuary at the east end, behind the high altar. Symbolizes the head of the Mystical Body of Christ. Often decorated with mosaics or paintings of Christ in glory.' },
    altar: { name: 'The High Altar', body: 'The center of the cathedral. The table of sacrifice where Christ\'s sacrifice is made present. Often contains relics of martyrs. Reverenced with a kiss at the start and end of Mass.' },
    chapel: { name: 'Side Chapels', body: 'Smaller chapels along the sides of the cathedral, dedicated to specific saints or mysteries. Often house specific relics and allow private devotion.' },
    rose: { name: 'Rose Window', body: 'The great circular stained-glass window on the western facade. The rose symbolizes Mary. Light shining through the rose is Christ shining through Mary.' },
    spire: { name: 'The Spire / Bell Tower', body: 'Points heavenward — drawing the eye and the soul up. The bells call the faithful to prayer and Mass.' },
    portal: { name: 'The Western Portal', body: 'The main entrance. Usually decorated with sculptures of the Last Judgment, the Nativity, or Christ in Glory — the first sermon you receive as you enter.' },
    crypt: { name: 'The Crypt', body: 'Below the sanctuary. Often contains the tombs of bishops, founders, and significant saints. Place of quiet prayer.' }
  };

  function renderCathedral(target) {
    let activePart = 'nave';
    function render() {
      const info = CATHEDRAL_PARTS[activePart];
      target.innerHTML = `
        <header class="view-header">
          <h1>The Cathedral Explorer</h1>
          <p>Every stone is theology. Tap a part of the cathedral to learn its meaning.</p>
        </header>
        <div class="cathedral-wrap">
          <div class="cathedral-svg-box">
            <svg class="cathedral-svg" viewBox="0 0 400 600">
              <defs>
                <pattern id="stone" patternUnits="userSpaceOnUse" width="20" height="14">
                  <rect width="20" height="14" fill="#FAF6EE"/>
                  <path d="M0 7 L20 7 M10 0 L10 7 M10 7 L10 14" stroke="#D9CFB3" stroke-width="0.6"/>
                </pattern>
              </defs>
              <!-- spire -->
              <polygon class="cathedral-part ${activePart === 'spire' ? 'active' : ''}" data-part="spire" points="200,20 180,90 220,90" fill="url(#stone)" stroke="#9C7F2E" stroke-width="2"/>
              <rect class="cathedral-part ${activePart === 'spire' ? 'active' : ''}" data-part="spire" x="175" y="90" width="50" height="60" fill="url(#stone)" stroke="#9C7F2E" stroke-width="2"/>
              <!-- rose window -->
              <circle class="cathedral-part ${activePart === 'rose' ? 'active' : ''}" data-part="rose" cx="200" cy="200" r="30" fill="rgba(201,168,76,0.5)" stroke="#9C7F2E" stroke-width="2"/>
              <path d="M170 200 L230 200 M200 170 L200 230 M178 178 L222 222 M178 222 L222 178" stroke="#9C7F2E" stroke-width="1" opacity="0.6"/>
              <!-- western portal -->
              <rect class="cathedral-part ${activePart === 'portal' ? 'active' : ''}" data-part="portal" x="180" y="250" width="40" height="50" fill="rgba(75,0,130,0.4)" stroke="#9C7F2E" stroke-width="2"/>
              <!-- nave (main body) -->
              <rect class="cathedral-part ${activePart === 'nave' ? 'active' : ''}" data-part="nave" x="140" y="150" width="120" height="280" fill="url(#stone)" stroke="#9C7F2E" stroke-width="2"/>
              <!-- transepts -->
              <rect class="cathedral-part ${activePart === 'transept' ? 'active' : ''}" data-part="transept" x="80" y="320" width="240" height="60" fill="url(#stone)" stroke="#9C7F2E" stroke-width="2"/>
              <!-- apse -->
              <ellipse class="cathedral-part ${activePart === 'apse' ? 'active' : ''}" data-part="apse" cx="200" cy="430" rx="60" ry="60" fill="url(#stone)" stroke="#9C7F2E" stroke-width="2"/>
              <!-- altar -->
              <rect class="cathedral-part ${activePart === 'altar' ? 'active' : ''}" data-part="altar" x="180" y="420" width="40" height="20" fill="#8B1A1A" stroke="#9C7F2E" stroke-width="2"/>
              <!-- side chapels -->
              <rect class="cathedral-part ${activePart === 'chapel' ? 'active' : ''}" data-part="chapel" x="100" y="200" width="40" height="100" fill="rgba(201,168,76,0.2)" stroke="#9C7F2E" stroke-width="1"/>
              <rect class="cathedral-part ${activePart === 'chapel' ? 'active' : ''}" data-part="chapel" x="260" y="200" width="40" height="100" fill="rgba(201,168,76,0.2)" stroke="#9C7F2E" stroke-width="1"/>
              <!-- crypt -->
              <rect class="cathedral-part ${activePart === 'crypt' ? 'active' : ''}" data-part="crypt" x="170" y="500" width="60" height="40" fill="rgba(0,0,0,0.4)" stroke="#9C7F2E" stroke-width="1"/>
              <!-- East arrow -->
              <text x="370" y="430" text-anchor="end" font-family="Cinzel" font-size="11" fill="#9C7F2E">EAST →</text>
            </svg>
            <p style="text-align:center;margin-top:10px;font-family:var(--font-ui);font-size:12px;color:var(--c-ink-soft);letter-spacing:0.06em;">Cruciform floor plan, facing east — the rising sun</p>
          </div>
          <div class="cathedral-info">
            <h3>${esc(info.name)}</h3>
            <p style="font-size:15px;line-height:1.7;color:var(--c-ink);">${esc(info.body)}</p>
            <hr style="margin:18px 0;border:none;border-top:1px dashed rgba(201,168,76,0.4);"/>
            <p style="font-style:italic;color:var(--c-ink-soft);font-size:13px;">Click any part of the floor plan to explore.</p>
          </div>
        </div>
      `;
      target.querySelectorAll('.cathedral-part').forEach(p => p.addEventListener('click', () => { activePart = p.dataset.part; render(); }));
    }
    render();
  }

  // ====== GAMES HUB ======
  function renderGames(target) {
    target.innerHTML = `
      <header class="view-header">
        <h1>Games & Quizzes</h1>
        <p>Compete with your siblings. Climb the leaderboard. Learn the Faith.</p>
      </header>
      <div class="games-grid">
        <div class="game-card" data-game="lightning">
          <h3>⚡ Catechism Lightning Round</h3>
          <p>30 questions. 30 seconds each. Test your knowledge across all 12 modules.</p>
        </div>
        <div class="game-card" data-game="leaderboard">
          <h3>♛ Leaderboard</h3>
          <p>See who in your family is closest to becoming a saint (by XP).</p>
        </div>
        <div class="game-card" data-game="daily">
          <h3>☼ Daily Question</h3>
          <p>One Catholic question every day. +50 XP for the correct answer.</p>
        </div>
      </div>
    `;
    target.querySelectorAll('.game-card').forEach(c => c.addEventListener('click', () => {
      const g = c.dataset.game;
      if (g === 'lightning') renderLightning(target);
      else if (g === 'leaderboard') renderLeaderboard(target);
      else if (g === 'daily') renderDailyQuestion(target);
    }));
  }

  async function renderLightning(target) {
    const { questions } = await window.Fides.api.lightningQuestions();
    let qi = 0, score = 0;
    let timer = null;
    function render() {
      if (qi >= questions.length) return finish();
      const q = questions[qi];
      let secs = 30;
      target.innerHTML = `
        <a class="back-link" id="back-games">← Games</a>
        <div class="lightning-game">
          <h2>Catechism Lightning Round</h2>
          <div class="lightning-stats">
            <div class="lightning-stat">Q ${qi + 1} / ${questions.length}</div>
            <div class="lightning-stat">Score: ${score}</div>
            <div class="lightning-stat" id="time-stat">${secs}s</div>
          </div>
          <div class="lightning-timer"><div class="lightning-timer-fill" id="timer-fill" style="width:100%;"></div></div>
          <div class="lightning-q">
            <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:0.1em;color:var(--c-crimson);text-transform:uppercase;">${esc(q.lesson_title)}</div>
            <h3 style="margin:8px 0 14px;color:var(--c-deep);">${esc(q.question)}</h3>
            <div class="quiz-options">${q.options.map((o, i) => `<button class="quiz-option" data-i="${i}">${esc(o)}</button>`).join('')}</div>
          </div>
        </div>
      `;
      target.querySelector('#back-games').addEventListener('click', () => { if (timer) clearInterval(timer); renderGames(target); });
      const onAnswer = (choice) => {
        if (timer) { clearInterval(timer); timer = null; }
        const correct = choice === q.correct_index;
        if (correct) { score++; window.Fides.audio.correct(); }
        else { window.Fides.audio.wrong(); }
        target.querySelectorAll('.quiz-option').forEach((el, i) => {
          if (i === q.correct_index) el.classList.add('correct');
          if (i === choice && !correct) el.classList.add('wrong');
          el.style.pointerEvents = 'none';
        });
        setTimeout(() => { qi++; render(); }, 1300);
      };
      target.querySelectorAll('.quiz-option').forEach(b => b.addEventListener('click', () => onAnswer(parseInt(b.dataset.i, 10))));
      timer = setInterval(() => {
        secs -= 1;
        const fill = target.querySelector('#timer-fill');
        const stat = target.querySelector('#time-stat');
        if (fill) fill.style.width = (secs / 30 * 100) + '%';
        if (stat) stat.textContent = secs + 's';
        if (secs <= 0) { clearInterval(timer); timer = null; onAnswer(-1); }
      }, 1000);
    }
    function finish() {
      target.innerHTML = `
        <div class="lightning-game">
          <h2>Lightning Round Complete</h2>
          <div style="font-family:var(--font-display);font-size:72px;color:var(--c-gold);margin:20px 0;text-shadow:0 0 22px rgba(201,168,76,0.5);">${score}/${questions.length}</div>
          <p style="font-style:italic;">${score >= 25 ? 'Saint-level mastery!' : score >= 18 ? 'Strong work — a Doctor in training!' : score >= 10 ? 'Keep studying — Catechism is a lifetime journey.' : 'Open Module 1 and start the journey!'}</p>
          <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;">
            <button class="hero-btn primary" onclick="window.Fides.games.renderLightning(document.getElementById('main-content'))">Play Again</button>
            <button class="hero-btn secondary" onclick="window.Fides.games.renderGames(document.getElementById('main-content'))">Back to Games</button>
          </div>
        </div>
      `;
      window.Fides.audio.complete();
    }
    render();
  }

  async function renderLeaderboard(target) {
    const { leaderboard, level_names } = await window.Fides.api.leaderboard();
    target.innerHTML = `
      <header class="view-header">
        <h1>Leaderboard</h1>
        <p>The Communion of Seekers — top 50 by XP.</p>
      </header>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${leaderboard.map(u => `
          <div class="lesson-row">
            <div class="lesson-num">${u.rank}</div>
            <div class="lesson-info">
              <div class="lesson-name">${esc(u.display_name)}${u.confirmation_name ? ` <span style="color:var(--c-crimson);font-family:var(--font-quote);font-style:italic;font-size:13px;">"${esc(u.confirmation_name)}"</span>` : ''}</div>
              <div class="lesson-sub">${esc(u.level_name)} · Level ${u.level}${u.diocese ? ' · ' + esc(u.diocese) : ''}</div>
            </div>
            <div class="lesson-meta">
              <span>${u.total_xp} XP</span>
              <span>${u.streak_days}🕯 days</span>
            </div>
          </div>`).join('')}
      </div>
    `;
  }

  async function renderDailyQuestion(target) {
    // Use a deterministic daily pick based on date
    const { questions } = await window.Fides.api.lightningQuestions();
    const today = new Date().toISOString().slice(0, 10);
    const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const q = questions[seed % questions.length];
    target.innerHTML = `
      <a class="back-link" id="back-games">← Games</a>
      <header class="view-header">
        <h1>Daily Question</h1>
        <p>${today}</p>
      </header>
      <div class="quiz-question" style="max-width:760px;">
        <div class="quiz-q-num">From ${esc(q.lesson_title)}</div>
        <h3>${esc(q.question)}</h3>
        <div class="quiz-options">${q.options.map((o, i) => `<button class="quiz-option" data-i="${i}">${esc(o)}</button>`).join('')}</div>
        <div id="dq-feedback" style="display:none;"></div>
      </div>
    `;
    target.querySelector('#back-games').addEventListener('click', () => renderGames(target));
    target.querySelectorAll('.quiz-option').forEach(b => b.addEventListener('click', () => {
      const c = parseInt(b.dataset.i, 10);
      const correct = c === q.correct_index;
      target.querySelectorAll('.quiz-option').forEach((el, i) => {
        if (i === q.correct_index) el.classList.add('correct');
        if (i === c && !correct) el.classList.add('wrong');
        el.style.pointerEvents = 'none';
      });
      if (correct) { window.Fides.audio.correct(); window.Fides.anim.toast('+50 XP for daily question — well done!', 'gold'); window.Fides.anim.xpFloat(50); }
      else { window.Fides.audio.wrong(); }
      const fb = target.querySelector('#dq-feedback');
      fb.style.display = 'block';
      fb.className = 'quiz-explanation';
      fb.innerHTML = esc(q.explanation || '');
    }));
  }

  // ====== PRAYER LIBRARY ======
  const PRAYERS = [
    { name: 'Sign of the Cross', text: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.', type: 'sign-of-the-cross' },
    { name: 'Our Father', text: 'Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.', type: 'our-father' },
    { name: 'Hail Mary', text: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.', type: 'hail-mary' },
    { name: 'Glory Be', text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.', type: 'glory-be' },
    { name: 'Apostles\' Creed', text: 'I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.', type: 'creed' },
    { name: 'Morning Offering', text: 'O Jesus, through the Immaculate Heart of Mary, I offer you my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of your Sacred Heart: the salvation of souls, reparation for sin, the reunion of all Christians; and the intentions of our Bishops and of all members of the Apostleship of Prayer, and in particular for those recommended this month by our Holy Father. Amen.', type: 'morning-offering' },
    { name: 'Angelus', text: 'V. The Angel of the Lord declared unto Mary.\nR. And she conceived of the Holy Spirit. (Hail Mary)\nV. Behold the handmaid of the Lord.\nR. Be it done unto me according to thy word. (Hail Mary)\nV. And the Word was made flesh.\nR. And dwelt among us. (Hail Mary)\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ.\nLet us pray. Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ Our Lord. Amen.', type: 'angelus' },
    { name: 'Act of Contrition', text: 'O my God, I am heartily sorry for having offended Thee, and I detest all my sins, because I dread the loss of heaven and the pains of hell; but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.', type: 'contrition' },
    { name: 'Guardian Angel Prayer', text: 'Angel of God, my guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.', type: 'guardian-angel' },
    { name: 'Prayer to St. Michael', text: 'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.', type: 'st-michael' },
    { name: 'Memorare', text: 'Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother. To thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.', type: 'memorare' },
    { name: 'Sub Tuum Praesidium (3rd century)', text: 'We fly to thy patronage, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.', type: 'sub-tuum' },
    { name: 'Prayer before Study (St. Thomas Aquinas)', text: 'Creator of all things, true source of light and wisdom, origin of all being, graciously let a ray of your light penetrate the darkness of my understanding. Take from me the double darkness in which I have been born, an obscurity of sin and ignorance. Give me a keen understanding, a retentive memory, and the ability to grasp things correctly and fundamentally. Grant me the talent of being exact in my explanations and the ability to express myself with thoroughness and charm. Point out the beginning, direct the progress, and help in the completion. I ask this through Christ our Lord. Amen.', type: 'study-prayer' },
    { name: 'Grace Before Meals', text: 'Bless us, O Lord, and these Thy gifts which we are about to receive from Thy bounty, through Christ our Lord. Amen.', type: 'grace-before' },
    { name: 'Grace After Meals', text: 'We give Thee thanks, almighty God, for all Thy benefits, who livest and reignest forever. Amen.', type: 'grace-after' }
  ];

  function renderPrayer(target) {
    target.innerHTML = `
      <header class="view-header">
        <h1>Daily Prayer Companion</h1>
        <p>The classic Catholic prayers. Pray them daily. Build your streak.</p>
      </header>
      <div class="prayer-grid">
        ${PRAYERS.map(p => `
          <div class="prayer-card">
            <h3>${esc(p.name)}</h3>
            <div class="prayer-text">${esc(p.text)}</div>
            <div class="prayer-actions">
              <button class="btn-pray" data-type="${esc(p.type)}">I prayed this</button>
            </div>
          </div>`).join('')}
      </div>
    `;
    target.querySelectorAll('.btn-pray').forEach(b => b.addEventListener('click', async () => {
      try {
        const r = await window.Fides.api.logPrayer(b.dataset.type);
        b.textContent = '✓ Prayed';
        b.classList.add('done');
        b.disabled = true;
        window.Fides.audio.prayerComplete();
        window.Fides.anim.toast(`Prayer logged — streak: ${r.streak_days} day(s)`, 'gold');
      } catch (e) { window.Fides.anim.toast(e.message, 'error'); }
    }));
  }

  return { renderRosary, renderStations, renderMass, renderCathedral, renderGames, renderPrayer, renderLightning, renderLeaderboard, renderDailyQuestion };
})();

window.Fides.games = Games;
