// Module 7 — Prayer and the Interior Life
module.exports = {
  slug: 'prayer-interior-life',
  order_index: 7,
  title: 'Prayer and the Interior Life',
  subtitle: 'Lord, teach us to pray.',
  description: 'Prayer is the lifting of the heart to God. Without prayer, no Christian life is possible. Learn the great prayers, the great methods, the great heights — from the Our Father to contemplative union with the Holy Trinity.',
  category: 'spirituality',
  color: '#008B8B',
  gradient_start: '#5F9EA0',
  gradient_end: '#1A5F7A',
  badge_name: 'Soul of Prayer',
  badge_emoji: 'praying-hands',
  unlocks_after: null,
  lessons: [
    {
      slug: 'what-is-prayer',
      title: 'What is Prayer?',
      subtitle: 'The lifting of the heart and mind to God.',
      xp_reward: 60, duration_minutes: 11, ccc_ref: 'CCC 2559-2565',
      slides: [
        { type: 'hero', title: 'What is Prayer?',
          subtitle: 'A conversation with God who loves you.',
          body: 'St. Therese of Lisieux: "Prayer is a surge of the heart; it is a simple look turned toward heaven, it is a cry of recognition and of love, embracing both trial and joy" (CCC 2558).' },
        { type: 'explain', title: 'Five Forms of Prayer',
          body: '1. BLESSING and ADORATION — recognizing God\'s greatness and our dependence.\n2. PETITION — asking God for what we need.\n3. INTERCESSION — asking God for others.\n4. THANKSGIVING — gratitude for what God has done.\n5. PRAISE — praise of God for His own sake, not because of what He gives.\n\nThe Mass includes all five.',
          ccc: 'CCC 2626-2643' },
        { type: 'explain', title: 'How God Answers',
          body: 'God always answers prayer. The answer is one of four: (1) YES — what you asked. (2) NO — because what you asked is not good for you or others. (3) WAIT — because the timing is not right. (4) SOMETHING BETTER — God answers above and beyond what we ask. Trust Him with all four.' }
      ],
      questions: [
        { question: 'What are the five forms of prayer?',
          options: ['Morning, noon, evening, night, before bed', 'Vocal, mental, contemplative, charismatic, mystical', 'Blessing, Petition, Intercession, Thanksgiving, Praise', 'Catholic, Orthodox, Protestant, Jewish, Muslim'],
          correct_index: 2,
          explanation: 'CCC 2626-2643: The five forms are Blessing/Adoration, Petition, Intercession, Thanksgiving, and Praise.' }
      ]
    },
    {
      slug: 'our-father',
      title: 'The Our Father',
      subtitle: 'The prayer Jesus Himself taught us.',
      xp_reward: 80, duration_minutes: 16, ccc_ref: 'CCC 2759-2865',
      scripture_ref: 'Matthew 6:9-13',
      slides: [
        { type: 'hero', title: 'The Our Father',
          subtitle: '"Lord, teach us to pray." He did.',
          body: 'The Lord\'s Prayer is the perfect summary of the Gospel (Tertullian). When the disciples asked Jesus to teach them to pray, He gave them these words — seven petitions, the first three about God\'s glory, the last four about our needs.' },
        { type: 'explain', title: 'Our Father',
          body: 'We dare to call God "Father" only because the Son makes us sons. "OUR" — we never pray alone; we pray with the whole Church. "FATHER" — God is not a force or a distant deity but a Father who knows our needs before we ask. "WHO ART IN HEAVEN" — not a place out there but the realm of God\'s being.' },
        { type: 'explain', title: 'Hallowed Be Thy Name',
          body: 'First petition: that God\'s name be honored, recognized, treated as holy. In Hebrew thought, the name is the person. We pray that God Himself be glorified — by us, by all.' },
        { type: 'explain', title: 'Thy Kingdom Come',
          body: 'Second petition: that Christ\'s reign extend over all hearts — first our own, then through us to others. The Kingdom is both already here (in the Church) and coming in fullness at the end of time.' },
        { type: 'explain', title: 'Thy Will Be Done',
          body: 'Third petition: that we align our will with God\'s. The hardest words in the prayer. Mary prayed them perfectly: "Let it be done to me according to your word." Jesus prayed them in Gethsemane: "Not as I will, but as you will."' },
        { type: 'explain', title: 'Give Us This Day Our Daily Bread',
          body: 'Fourth petition. "Bread" includes physical needs but also THE Bread — the Eucharist. The Greek word epiousios is unique to this prayer; many Fathers translated it "super-substantial bread" — pointing to the Eucharist. We ask for today\'s bread; tomorrow trust to God.' },
        { type: 'explain', title: 'Forgive Us... As We Forgive',
          body: 'Fifth petition: forgiveness of sins. And the conditional terror: AS WE FORGIVE. Jesus emphasized this immediately after: "If you forgive others their trespasses, your heavenly Father will also forgive you; but if you do not forgive others their trespasses, neither will your Father forgive your trespasses" (Mt 6:14-15). Hold grudges at your peril.' },
        { type: 'explain', title: 'Lead Us Not Into Temptation',
          body: 'Sixth petition: that God not allow us to enter into temptation — not that He tempts (He never does, James 1:13), but that we be kept from the trial we cannot bear (1 Cor 10:13).' },
        { type: 'explain', title: 'Deliver Us From Evil',
          body: 'Seventh petition. Not just from evil things — from the Evil One. The devil is a person, and we ask deliverance from his attacks. The Doxology added in some traditions ("for thine is the kingdom...") is liturgical, not in Matthew\'s text but ancient.' }
      ],
      questions: [
        { question: 'In the Our Father, the petition "Give us this day our daily bread" — what does "bread" particularly point to?',
          options: ['Money', 'The Eucharist (super-substantial bread) and our daily needs', 'Vegetables', 'Knowledge'],
          correct_index: 1,
          explanation: 'The Greek word "epiousios" is unique to this prayer. Many Church Fathers translated it "super-substantial bread" — pointing to the Eucharist as well as our material needs.' },
        { question: 'How many petitions are in the Our Father?',
          options: ['Five', 'Seven', 'Ten', 'Twelve'],
          correct_index: 1,
          explanation: 'Seven petitions: 3 about God (hallowed name, kingdom, will) and 4 about us (bread, forgiveness, temptation, evil).',
          ccc_ref: 'CCC 2803-2854' }
      ]
    },
    {
      slug: 'rosary',
      title: 'The Rosary',
      subtitle: 'Our Lady\'s gift. A school of meditation.',
      xp_reward: 75, duration_minutes: 14, ccc_ref: 'CCC 971, 2708',
      slides: [
        { type: 'hero', title: 'The Rosary',
          subtitle: 'A garland of Hail Marys, a meditation on Christ\'s life.',
          body: 'The Rosary is not "Mary worship." It is a meditation on the life of Christ, with Mary as our guide. Each decade — 10 Hail Marys — accompanies one "mystery" of Christ\'s life. The vocal prayers occupy the surface of the mind while the heart contemplates the events of salvation.' },
        { type: 'explain', title: 'The Four Sets of Mysteries',
          body: 'JOYFUL (Monday/Saturday): Annunciation, Visitation, Nativity, Presentation, Finding in the Temple.\n\nLUMINOUS (Thursday — added by John Paul II in 2002): Baptism of the Lord, Wedding at Cana, Proclamation of the Kingdom, Transfiguration, Institution of the Eucharist.\n\nSORROWFUL (Tuesday/Friday): Agony in the Garden, Scourging at the Pillar, Crowning with Thorns, Carrying the Cross, Crucifixion.\n\nGLORIOUS (Wednesday/Sunday): Resurrection, Ascension, Descent of the Holy Spirit, Assumption of Mary, Coronation of Mary.\n\n20 mysteries total. The whole Gospel.' },
        { type: 'explain', title: 'How to Pray the Rosary',
          body: '1. Sign of the Cross.\n2. Apostles\' Creed.\n3. Our Father (large bead).\n4. Three Hail Marys (for faith, hope, charity).\n5. Glory Be.\n6. Announce first mystery.\n7. Our Father.\n8. Ten Hail Marys (one for each small bead) while meditating on the mystery.\n9. Glory Be. Fatima prayer: "O my Jesus, forgive us our sins..."\n10. Repeat for 5 mysteries.\n11. Hail Holy Queen.\n12. Sign of the Cross.\n\nTakes about 20 minutes. Try it. Daily.' },
        { type: 'explain', title: 'The Power of the Rosary',
          body: 'The Battle of Lepanto (1571) — Christendom outnumbered by Ottoman forces. Pope Pius V called for the Rosary across Europe. The Christian fleet won. Pius V instituted Our Lady of the Rosary feast (Oct 7) in thanksgiving.\n\nFatima 1917 — Mary asked for the Rosary daily to bring peace to the world.\n\nMother Teresa carried a Rosary everywhere. Padre Pio: "I have nothing but the Rosary." JPII prayed 4 Rosaries a day in his last years. The Rosary works.' }
      ],
      questions: [
        { question: 'Who added the Luminous Mysteries to the Rosary in 2002?',
          options: ['Pope Pius V', 'Pope Pius XII', 'Pope John Paul II', 'Pope Benedict XVI'],
          correct_index: 2,
          explanation: 'Pope St. John Paul II added the five Luminous Mysteries (Mysteries of Light) in his 2002 apostolic letter Rosarium Virginis Mariae. They focus on Christ\'s public ministry.' },
        { question: 'How many "mysteries" are there in the complete Rosary?',
          options: ['10', '15', '20', '50'],
          correct_index: 2,
          explanation: '20 mysteries: 5 Joyful, 5 Luminous, 5 Sorrowful, 5 Glorious. Each is meditated during one decade of Hail Marys.' }
      ]
    },
    {
      slug: 'lectio-divina',
      title: 'Lectio Divina',
      subtitle: 'Praying with Scripture — the monastic way.',
      xp_reward: 60, duration_minutes: 10,
      slides: [
        { type: 'hero', title: 'Lectio Divina',
          subtitle: 'Reading the Word as prayer, not study.',
          body: 'Lectio Divina (Latin for "divine reading") is the classic monastic way of praying Scripture. It is not Bible study. It is letting the Bible speak to your soul and responding.' },
        { type: 'explain', title: 'The Four Steps',
          body: '1. LECTIO (Read) — Read a short passage slowly. Notice the words. Listen for the one that catches you.\n\n2. MEDITATIO (Reflect) — Sit with that word or phrase. What is God saying through it? Why this verse today?\n\n3. ORATIO (Respond) — Speak to God about it. Praise, thank, ask, confess.\n\n4. CONTEMPLATIO (Rest) — Stop speaking. Be silent. Rest in God\'s presence.\n\n15-30 minutes is plenty. Daily.' },
        { type: 'reflection', title: 'Try It Now',
          prompts: [
            'Try Lectio Divina with Psalm 23 or Luke 1:46-55 (the Magnificat).',
            'Read slowly. What word or phrase strikes you?',
            'Sit with it. What is God saying?',
            'Respond. Then be quiet.'
          ] }
      ],
      questions: [
        { question: 'What does "Lectio Divina" mean?',
          options: ['Holy Mass', 'Divine reading', 'Studying the Bible', 'Daily prayer'],
          correct_index: 1,
          explanation: 'Lectio Divina is Latin for "divine reading" — a monastic method of praying with Scripture in four steps: Lectio, Meditatio, Oratio, Contemplatio.' }
      ]
    },
    {
      slug: 'eucharistic-adoration',
      title: 'Eucharistic Adoration',
      subtitle: 'Spending time with Christ in the Blessed Sacrament.',
      xp_reward: 60, duration_minutes: 10,
      slides: [
        { type: 'hero', title: 'Eucharistic Adoration',
          subtitle: 'Just you and the Lord.',
          body: 'Eucharistic Adoration is prayer before the consecrated Host — Jesus Himself, present in the Blessed Sacrament. The Host is placed in a monstrance (or kept in the tabernacle) and the faithful spend time in His presence. There is no other religion on earth that offers this — God, physically present, available to be visited.' },
        { type: 'explain', title: 'How to Do It',
          body: '1. Genuflect when entering. He is there.\n2. Take a kneeler. Sit if needed.\n3. Quiet your heart. He sees you.\n4. Open with a prayer of love and thanks.\n5. Speak to Him simply. Tell Him everything.\n6. Listen. Be silent. Let Him speak to your heart.\n7. Bring a Bible, a Rosary, a journal — or nothing.\n8. End with thanks. Genuflect. Leave changed.' },
        { type: 'gallery', title: 'Saints Who Loved Adoration', items: [
          { name: 'St. John Vianney', quote: '"There is the silent saint. There is the saint who simply looks at the Tabernacle and is looked back at by Him." A French parish priest who would notice a peasant spending hours before the Eucharist. The peasant: "I look at Him, and He looks at me, and we are happy together."', role: 'Curé of Ars' },
          { name: 'Bl. Carlo Acutis', quote: '"The Eucharist is my highway to heaven." Spent hours weekly in adoration.', role: 'Teen blessed' },
          { name: 'St. Teresa of Calcutta', quote: 'Mother Teresa\'s sisters spend an hour in daily adoration. She insisted on it: "The time you spend with Jesus in the Blessed Sacrament is the best time you will spend on earth."', role: 'Saint of Calcutta' }
        ] }
      ],
      questions: [
        { question: 'What is in the monstrance during Eucharistic Adoration?',
          options: ['A relic of a saint', 'A consecrated Host — Jesus truly present', 'A symbol of Jesus', 'A piece of the True Cross'],
          correct_index: 1,
          explanation: 'The monstrance ("to show") holds a consecrated Host — the Body of Christ — exposed for worship. Catholics adore the actual Real Presence of Jesus.' }
      ]
    },
    {
      slug: 'liturgy-of-hours',
      title: 'The Liturgy of the Hours',
      subtitle: 'The Divine Office — the prayer of the whole Church.',
      xp_reward: 60, duration_minutes: 10,
      slides: [
        { type: 'hero', title: 'The Liturgy of the Hours',
          subtitle: 'The Church praying around the clock.',
          body: 'The Liturgy of the Hours (also called the Divine Office or Breviary) is the official prayer of the Church. Clergy and religious are bound to pray it daily; laity are warmly encouraged. At every hour somewhere in the world, the Church is praying these psalms together.' },
        { type: 'explain', title: 'The Hours',
          body: 'OFFICE OF READINGS — long readings of Scripture and the Fathers, may be said at any time.\n\nLAUDS (Morning Prayer) — the first hour, said at sunrise.\n\nDAYTIME PRAYER (Terce, Sext, None) — three short hours during the working day.\n\nVESPERS (Evening Prayer) — sunset.\n\nCOMPLINE (Night Prayer) — before bed. Always ends with a Marian antiphon.\n\nThe core is the Psalms — all 150 prayed across the week or month.' },
        { type: 'explain', title: 'How to Start',
          body: 'Apps and websites (iBreviary, Universalis, Laudate) give you the daily readings. Start with Compline (Night Prayer) — short and beautiful. Or Lauds and Vespers as a daily rhythm. You will be praying the same psalms the Pope, every priest, every monk and nun, and millions of laity are praying around the world.' }
      ],
      questions: [
        { question: 'What is the Divine Office (Liturgy of the Hours) primarily composed of?',
          options: ['Hymns', 'The Psalms', 'The Gospels', 'New prayers daily'],
          correct_index: 1,
          explanation: 'The core of the Liturgy of the Hours is the 150 Psalms, distributed across the week. Plus Scripture readings, hymns, intercessions, and the Magnificat (Vespers) / Benedictus (Lauds).' }
      ]
    },
    {
      slug: 'examination',
      title: 'Examination of Conscience',
      subtitle: 'The mirror of the soul.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'Examination of Conscience',
          subtitle: 'Self-knowledge is the start of holiness.',
          body: 'The Examination of Conscience is a regular review of one\'s life — where one has loved well, where one has fallen short, what needs to be confessed, what needs to be amended. The saints did it daily. So should we.' },
        { type: 'explain', title: 'St. Ignatius\'s Daily Examen',
          body: 'St. Ignatius of Loyola taught a 5-step Examen, ideally done in the evening:\n\n1. GRATITUDE — Recall the gifts of the day.\n2. PETITION — Ask the Holy Spirit for light.\n3. REVIEW — Walk through the day. Where was God? Where was I?\n4. SORROW — Repent of sins. Resolve amendment.\n5. RESOLVE — Look to tomorrow with hope.\n\n15 minutes. Daily. Transformative.' },
        { type: 'explain', title: 'Pre-Confession Examination — By Commandment',
          body: 'A fuller examination before Confession can use the Ten Commandments:\n\nFIRST — Have I given God His proper place? Practiced superstition or occult? Doubted? Despaired?\n\nSECOND — Used God\'s name in vain? Cursed? Sworn falsely?\n\nTHIRD — Missed Mass on Sunday or Holy Day? Done unnecessary work? Failed to keep the day holy?\n\nFOURTH — Disrespected parents? Authorities? Spouse?\n\nFIFTH — Hatred? Violence? Hurtful words? Gossip? Substance abuse? Suicide thoughts?\n\nSIXTH — Impure acts? Pornography? Masturbation? Sexual sin?\n\nSEVENTH — Stealing? Cheating? Failed to make restitution?\n\nEIGHTH — Lying? Detraction? Calumny? Rash judgment?\n\nNINTH — Lustful thoughts and desires entertained?\n\nTENTH — Envy? Greed for things?' },
        { type: 'explain', title: 'For Teens Specifically',
          body: '- School: Have I been honest in tests? In effort?\n- Internet: Have I used it for good or harm? Pornography? Social media bullying?\n- Family: Honored parents? Loved siblings?\n- Friends: Been a good friend? Pulled others toward Christ or away?\n- Purity: Guarded my heart, eyes, and body? Modesty?\n- Honesty: Lied to get out of trouble?\n- Prayer: Daily prayer? Sunday Mass?' }
      ],
      questions: [
        { question: 'How often did the saints typically do an Examination of Conscience?',
          options: ['Annually', 'Once a month', 'Weekly', 'Daily — often more than once'],
          correct_index: 3,
          explanation: 'Saints like Ignatius, Francis de Sales, and Therese examined their consciences daily. Ignatius said even the morning Examen was crucial.' }
      ]
    },
    {
      slug: 'contemplative-prayer',
      title: 'Contemplative Prayer',
      subtitle: 'Beyond words. The deepest prayer.',
      xp_reward: 65, duration_minutes: 12, ccc_ref: 'CCC 2709-2719',
      slides: [
        { type: 'hero', title: 'Contemplative Prayer',
          subtitle: 'Loving silence with God.',
          body: 'St. Teresa of Avila: "Contemplative prayer in my opinion is nothing else than a close sharing between friends; it means taking time frequently to be alone with him who we know loves us." CCC 2709. The saints went there. So can we — by grace.' },
        { type: 'explain', title: 'Three Stages of the Spiritual Life',
          body: 'Spiritual tradition (especially St. John of the Cross) describes three stages:\n\n1. PURGATIVE WAY — the beginner stage. Battle against habitual sin. Active prayer.\n\n2. ILLUMINATIVE WAY — purified soul receives more light. Deeper insight, joy, virtue.\n\n3. UNITIVE WAY — close union with God. Mystical graces. Saints.\n\nMost of us spend a lifetime in purgative. That\'s okay. Be faithful.' },
        { type: 'explain', title: 'The Dark Night of the Soul',
          body: 'St. John of the Cross taught that as the soul advances, God will purify it through "dark nights" — periods when prayer feels dry, God seems absent, faith is tested. This is not abandonment; it is deeper purification. The soul is being drawn beyond consolations to God Himself.\n\nMother Teresa\'s long dark night (50 years of feeling God\'s absence while serving the poor) is a famous modern example. She remained faithful. So can you.' },
        { type: 'explain', title: 'Be Still, and Know',
          body: 'Psalm 46:10 — "Be still, and know that I am God." Modern life screams. Contemplation listens. Make space. Turn off the phone. Sit in silence. He will come — and is already present.' }
      ],
      questions: [
        { question: 'According to St. Teresa of Avila, contemplative prayer is:',
          options: ['Memorized prayers', 'Close sharing between friends with him who we know loves us', 'Reading the Bible', 'Mental gymnastics'],
          correct_index: 1,
          explanation: 'CCC 2709 quotes Teresa: contemplative prayer is "a close sharing between friends; it means taking time frequently to be alone with him who we know loves us."' }
      ]
    }
  ]
};
