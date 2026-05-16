// Module 5 — The Saints
module.exports = {
  slug: 'the-saints',
  order_index: 5,
  title: 'The Saints',
  subtitle: 'The cloud of witnesses surrounding us.',
  description: 'The saints are the proof that holiness is possible — for shepherds, kings, students, slaves, princesses, teenagers, mothers. They are not statues. They are alive in Christ, praying for you right now.',
  category: 'inspiration',
  color: '#FF8C00',
  gradient_start: '#FFB347',
  gradient_end: '#8B0000',
  badge_name: 'Friend of the Saints',
  badge_emoji: 'halo',
  unlocks_after: null,
  lessons: [
    {
      slug: 'what-is-a-saint',
      title: 'What is a Saint?',
      subtitle: 'Canonization, intercession, and the Communion of Saints.',
      xp_reward: 60, duration_minutes: 11, ccc_ref: 'CCC 956',
      slides: [
        { type: 'hero', title: 'What is a Saint?',
          subtitle: 'A friend of God — and our friend in heaven.',
          body: 'A saint is anyone in heaven. Many millions of saints — most unnamed. A canonized saint is one the Church has officially declared, after careful investigation, to be in heaven. The canonized are placed in the calendar of the Church so the faithful can confidently ask their intercession and imitate their lives.' },
        { type: 'explain', title: 'The Canonization Process',
          body: 'After a Catholic of holy reputation dies, a cause may be opened (usually waiting at least 5 years).\n\n1. SERVANT OF GOD — cause opened. Life and writings examined.\n2. VENERABLE — declared to have lived heroic virtue.\n3. BLESSED (Beatified) — one verified miracle through intercession. Public veneration permitted in local area.\n4. SAINT (Canonized) — second verified miracle. Universal Church may invoke and honor.\n\nMartyrs need only one miracle (or sometimes none) since their martyrdom is the supreme witness.' },
        { type: 'explain', title: 'We Don\'t Worship Saints',
          body: 'Catholics worship God alone (latria). We venerate saints (dulia) — honor them as God\'s heroes. We give Mary special honor (hyperdulia) — the highest creature, but still a creature. Latria, hyperdulia, dulia — three different levels. To miss this distinction is to misread what Catholics do.',
          ccc: 'CCC 957 — The witness of the saints is the strongest sign that we have of the resurrection of the body.' },
        { type: 'explain', title: 'Intercession Explained',
          body: 'Asking a saint to pray for you is no different from asking your friend on earth to pray for you. The saints are MORE alive than we are — closer to God\'s throne. James 5:16 — "The prayer of a righteous man has great power." If a living friend\'s prayer helps, how much more the prayer of saints already in glory? The Body of Christ is not divided by death.' }
      ],
      questions: [
        { question: 'How many miracles are required for canonization (after beatification)?',
          options: ['Three', 'Two', 'One', 'None'],
          correct_index: 2,
          explanation: 'One miracle is required for beatification (after life of heroic virtue is verified), and a second miracle is required for canonization. Martyrs may sometimes skip the miracle requirements.' },
        { question: 'What kind of honor does the Catholic Church give to God alone?',
          options: ['Dulia', 'Hyperdulia', 'Latria', 'Veneration'],
          correct_index: 2,
          explanation: 'Latria — adoration/worship — is given to God alone. Dulia is the honor given to saints. Hyperdulia is the higher honor given to Mary. Three distinct categories.' }
      ]
    },
    {
      slug: 'the-apostles',
      title: 'The Twelve Apostles',
      subtitle: 'The first witnesses — the foundation.',
      xp_reward: 65, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'The Twelve Apostles',
          subtitle: 'Fishermen, tax collectors, zealots — sent to change the world.',
          body: 'Christ chose twelve men to be His closest disciples and to continue His mission after His Ascension. Each was uniquely formed by Him. Each was sent to a different corner of the world. Most died as martyrs. The Catholic Church is built on these twelve.' },
        { type: 'gallery', title: 'The Twelve + Mary Magdalene + Paul', items: [
          { name: 'Peter', quote: 'First Pope. Crucified upside down in Rome.', role: 'The Rock' },
          { name: 'Andrew', quote: 'Peter\'s brother. Crucified on an X-shaped cross in Patras.', role: 'First-called' },
          { name: 'James the Greater', quote: 'Son of Zebedee. Beheaded by Herod (AD 44). Spain his patronage.', role: 'First apostle martyr' },
          { name: 'John', quote: 'The Beloved Disciple. Wrote the Fourth Gospel, three letters, Revelation. Only apostle to die naturally — at Ephesus, in extreme old age.', role: 'The Beloved' },
          { name: 'Philip', quote: 'From Bethsaida. Brought Nathanael. Martyred at Hierapolis.', role: 'Bringer of others' },
          { name: 'Bartholomew (Nathanael)', quote: 'Flayed alive in Armenia. Founded the Armenian Church.', role: 'No guile' },
          { name: 'Matthew (Levi)', quote: 'Tax collector. Wrote the First Gospel. Martyred in Ethiopia.', role: 'The publican' },
          { name: 'Thomas', quote: '"My Lord and my God." Founded the Church in India. Martyred near Madras.', role: 'The Doubter who confessed' },
          { name: 'James the Less', quote: 'First Bishop of Jerusalem. Wrote the Epistle of James. Martyred AD 62.', role: 'Brother of the Lord' },
          { name: 'Thaddeus (Jude)', quote: 'Patron of impossible causes. Martyred in Persia with Simon.', role: 'Lost causes' },
          { name: 'Simon the Zealot', quote: 'Former Jewish nationalist turned apostle. Martyred in Persia.', role: 'The Zealot' },
          { name: 'Matthias', quote: 'Replaced Judas after Pentecost. Preached in Judea and Ethiopia.', role: 'The chosen' },
          { name: 'Paul', quote: 'Pharisee turned apostle. Greatest missionary. Wrote 13 epistles. Beheaded in Rome.', role: 'Apostle to the Gentiles' },
          { name: 'Mary Magdalene', quote: 'Apostle to the Apostles. First witness of the Resurrection.', role: 'First witness of the Resurrection' }
        ] }
      ],
      questions: [
        { question: 'Which apostle was the only one not martyred?',
          options: ['Peter', 'John', 'James', 'Andrew'],
          correct_index: 1,
          explanation: 'St. John the Beloved was the only apostle to die a natural death — at Ephesus, in extreme old age, around 100 AD. All the other apostles (and Paul) were martyred.' },
        { question: 'Who replaced Judas Iscariot among the Twelve?',
          options: ['Paul', 'Stephen', 'Matthias', 'Mark'],
          correct_index: 2,
          explanation: 'Acts 1:23-26 — Two candidates were nominated: Matthias and Joseph Barsabbas. Lots were cast after prayer; Matthias was chosen.' }
      ]
    },
    {
      slug: 'early-martyrs',
      title: 'The Early Martyrs',
      subtitle: 'The blood of the martyrs is the seed of the Church.',
      xp_reward: 60, duration_minutes: 11,
      slides: [
        { type: 'hero', title: 'The Early Martyrs',
          subtitle: 'They chose death over denying Christ.',
          body: 'For nearly 300 years, being Christian could cost you your life. The Roman Empire demanded a small act of worship to Caesar; Christians refused. Many died horribly — and yet their courage converted Rome itself.' },
        { type: 'gallery', title: 'Famous Early Martyrs', items: [
          { name: 'St. Stephen (d. 34 AD)', quote: 'First Christian martyr. Stoned outside Jerusalem praying "Lord, do not hold this sin against them."', role: 'Protomartyr' },
          { name: 'St. Ignatius of Antioch (d. 107)', quote: 'Bishop. Devoured by lions in the Colosseum. "I am God\'s wheat, ground by the teeth of beasts to become pure bread."', role: 'Apostolic Father' },
          { name: 'St. Polycarp (d. 155)', quote: 'Burned at the stake at 86. "Eighty and six years have I served Him."', role: 'Disciple of John' },
          { name: 'Sts. Perpetua and Felicity (d. 203)', quote: 'Noblewoman and her slave-servant. Martyred together in Carthage. Perpetua\'s prison diary survives.', role: 'Mothers' },
          { name: 'St. Lawrence (d. 258)', quote: 'Deacon roasted on a gridiron. "Turn me over — I\'m done on this side."', role: 'The cheerful' },
          { name: 'St. Sebastian (d. 288)', quote: 'Roman soldier shot with arrows. Healed. Then clubbed to death.', role: 'The athlete' },
          { name: 'St. Agnes (d. 304)', quote: '12-year-old virgin martyr. "Christ is my Spouse."', role: 'Virgin' },
          { name: 'St. Lucy (d. 304)', quote: 'Sicilian virgin. Patroness of the blind. "My body is ready for any torment."', role: 'Light' },
          { name: 'St. Cecilia (d. 3rd c.)', quote: 'Patroness of music. Sang in her heart during her martyrdom.', role: 'Music' }
        ] },
        { type: 'explain', title: 'The Catacombs',
          body: 'For centuries, Christians worshipped in underground burial chambers beneath Rome — the catacombs. There they buried their dead, celebrated Mass on the tombs of martyrs, and carved Christian symbols (fish, anchor, Chi-Rho) on the walls. Over 60 catacombs honeycomb the earth under Rome. The most famous: the Catacombs of St. Callixtus (where many popes are buried).' }
      ],
      questions: [
        { question: 'Who was the first Christian martyr?',
          options: ['Peter', 'Paul', 'James', 'Stephen'],
          correct_index: 3,
          explanation: 'St. Stephen, one of the first seven deacons, was stoned to death around 34 AD (Acts 7). Saul (later Paul) watched. Stephen prayed for his killers: "Lord, do not hold this sin against them."' }
      ]
    },
    {
      slug: 'doctors',
      title: 'The Doctors of the Church',
      subtitle: '37 great teachers across 2,000 years.',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'The Doctors of the Church',
          subtitle: 'Saints whose teaching shapes the Church\'s mind.',
          body: '"Doctor" comes from the Latin docere — to teach. The Church has declared 37 saints to be Doctors of the Church — saints whose theological writings and preaching have particularly enriched and clarified the deposit of faith. Each has a special title.' },
        { type: 'gallery', title: 'Some Greatest Doctors', items: [
          { name: 'St. Augustine of Hippo (354-430) — Doctor of Grace', quote: '"You have made us for yourself, O Lord, and our hearts are restless until they rest in You." Confessions, City of God.', role: 'The greatest theologian after Paul' },
          { name: 'St. Thomas Aquinas (1225-1274) — Angelic Doctor', quote: '"To one who has faith, no explanation is necessary." Summa Theologiae, the synthesis of faith and reason.', role: 'Master of theology' },
          { name: 'St. Jerome (342-420) — Doctor of Scripture', quote: '"Ignorance of Scripture is ignorance of Christ." Translated the Vulgate.', role: 'Scripture scholar' },
          { name: 'St. Ambrose (339-397) — Doctor of the Church', quote: 'Baptized Augustine. Defied Emperor Theodosius. Hymn writer.', role: 'Bishop of Milan' },
          { name: 'St. Gregory the Great (540-604) — Doctor of the Church', quote: 'Pope. Gregorian Chant. Sent Augustine to England.', role: 'Servant of servants' },
          { name: 'St. Teresa of Avila (1515-1582) — Doctor of Prayer', quote: '"Let nothing disturb you." Reformed Carmel. Wrote the Interior Castle.', role: 'Mystic' },
          { name: 'St. John of the Cross (1542-1591) — Doctor of Mystical Theology', quote: '"In the evening of life, we shall be judged on love alone." Dark Night of the Soul.', role: 'Poet of the soul' },
          { name: 'St. Therese of Lisieux (1873-1897) — Doctor of the Little Way', quote: '"I will spend my heaven doing good upon earth." Taught the way of small things done with great love.', role: 'The Little Flower' },
          { name: 'St. Catherine of Siena (1347-1380) — Doctor of the Church', quote: '"Be who God meant you to be." Persuaded Pope to return to Rome from Avignon.', role: 'Reformer' },
          { name: 'St. John Henry Newman (1801-1890) — Doctor of the Church (declared 2025)', quote: 'Anglican turned Catholic. Apologia Pro Vita Sua. The conscience.', role: 'English convert' }
        ] }
      ],
      questions: [
        { question: 'What does the title "Doctor of the Church" mean?',
          options: ['A medical doctor', 'A saint whose teaching has enriched Catholic doctrine', 'A type of bishop', 'A theology professor'],
          correct_index: 1,
          explanation: 'Doctor of the Church is a title given to 37 saints whose writings particularly enriched and clarified Catholic teaching. The first four Western Doctors (Ambrose, Augustine, Jerome, Gregory) were so named in 1295.' }
      ]
    },
    {
      slug: 'mystics-visionaries',
      title: 'Great Mystics and Visionaries',
      subtitle: 'Saints who saw what we cannot — and brought it back.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'Great Mystics and Visionaries',
          subtitle: 'They saw heaven open.',
          body: 'Throughout Church history, certain saints have received private revelations — apparitions of Christ, Mary, angels — and have brought to the Church specific messages and devotions. The Church carefully evaluates each. The greatest were approved as worthy of belief — though private revelations never add to the public Deposit of Faith.' },
        { type: 'gallery', title: 'Famous Mystics', items: [
          { name: 'St. Faustina Kowalska', quote: 'Polish nun. Received Divine Mercy revelations 1931-38. Diary contains messages of Christ\'s infinite mercy. Divine Mercy Sunday established by JPII in 2000.', role: 'Apostle of Mercy' },
          { name: 'St. Bernadette Soubirous', quote: '14-year-old French shepherd girl. Saw Mary 18 times at Lourdes in 1858. Mary called herself "the Immaculate Conception." Spring at Lourdes — 70 medically verified miraculous healings.', role: 'Lourdes' },
          { name: 'St. Juan Diego', quote: 'Aztec convert. Saw Our Lady of Guadalupe in 1531. Tilma still intact 500 years later. 8 million baptisms followed.', role: 'Guadalupe' },
          { name: 'Sts. Francisco, Jacinta, and Bl. Lucia', quote: 'Three shepherd children at Fatima, Portugal, 1917. Six apparitions of Mary. The Miracle of the Sun before 70,000 witnesses on Oct 13, 1917.', role: 'Fatima' },
          { name: 'St. Padre Pio', quote: 'Capuchin priest. Bore the visible stigmata for 50 years. Bilocator. Reader of souls.', role: 'Stigmatic priest' },
          { name: 'St. Margaret Mary Alacoque', quote: 'French Visitation nun. Received Sacred Heart apparitions 1673-75. Origin of Sacred Heart devotion.', role: 'Sacred Heart' },
          { name: 'Bl. Anne Catherine Emmerich', quote: 'Stigmatic German nun (d. 1824) whose visions of the Passion shaped Mel Gibson\'s film "The Passion of the Christ."', role: 'Visionary' }
        ] }
      ],
      questions: [
        { question: 'At Fatima in 1917, the Miracle of the Sun was witnessed by approximately how many people?',
          options: ['Hundreds', '70,000', '500,000', '12'],
          correct_index: 1,
          explanation: 'Approximately 70,000 people, including atheist journalists, witnessed the sun spin and seem to plunge toward the earth on October 13, 1917 — the date Mary had announced 3 months in advance.' }
      ]
    },
    {
      slug: 'saints-for-teens',
      title: 'Saints for Teens',
      subtitle: 'Holy heroes your age. Their lives are possible.',
      xp_reward: 75, duration_minutes: 14,
      slides: [
        { type: 'hero', title: 'Saints for Teens',
          subtitle: 'They were exactly your age. They became saints.',
          body: 'Sanctity is not for old monks only. Some of the Church\'s greatest saints died as teenagers. Their lives prove what is possible for you, right now, in this moment.' },
        { type: 'gallery', title: 'Teen Saints', items: [
          { name: 'St. Maria Goretti (1890-1902)', quote: 'Died at 11 forgiving her attacker. Patroness of purity. "May God forgive you, for I have already forgiven you."', role: '11' },
          { name: 'St. Dominic Savio (1842-1857)', quote: 'Died at 14, student of St. John Bosco. "Death rather than sin."', role: '14' },
          { name: 'Bl. Carlo Acutis (1991-2006)', quote: 'Died at 15 of leukemia. Tech-savvy teen. Documented Eucharistic miracles. "The Eucharist is my highway to heaven." Canonization confirmed 2025.', role: '15' },
          { name: 'Bl. Chiara Badano (1971-1990)', quote: 'Died at 18 of bone cancer. Refused morphine to offer her sufferings. "For you, Jesus, if you want it, I want it too."', role: '18' },
          { name: 'Sts. Francisco and Jacinta Marto', quote: 'Fatima visionaries. Died at 11 and 10 of Spanish flu, offering their sufferings for sinners. Canonized 2017.', role: '10 and 11' },
          { name: 'Bl. Pier Giorgio Frassati (1901-1925)', quote: 'Died at 24 of polio caught from a sick person he was helping. Athlete, mountain climber, lover of the poor. Motto: "Verso l\'alto" — To the heights!', role: '24' },
          { name: 'St. Aloysius Gonzaga (1568-1591)', quote: 'Italian Jesuit who died at 23 nursing plague victims.', role: '23' },
          { name: 'St. Joan of Arc (1412-1431)', quote: 'French peasant girl led armies to save France at age 17. Burned at the stake at 19. "I am not afraid... I was born to do this."', role: '17-19' }
        ] },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'Carlo Acutis was a normal teen who loved video games and the Eucharist. What would your life look like if you lived like him?',
            'Maria Goretti chose death over sin. What would you choose if pressured?',
            'If you knew you would die next year, what would you change today?'
          ] }
      ],
      questions: [
        { question: 'What was Bl. Carlo Acutis\'s famous saying about the Eucharist?',
          options: ['The Eucharist is my food', 'The Eucharist is my highway to heaven', 'The Eucharist saves us', 'The Eucharist is life'],
          correct_index: 1,
          explanation: 'Bl. Carlo Acutis called the Eucharist "my highway to heaven" and went to daily Mass from his First Communion at age 7. His website cataloging Eucharistic miracles is still active.' }
      ]
    },
    {
      slug: 'how-to-become-saint',
      title: 'How to Become a Saint',
      subtitle: 'The universal call to holiness — and the daily practice.',
      xp_reward: 75, duration_minutes: 14,
      ccc_ref: 'CCC 2013-2016',
      slides: [
        { type: 'hero', title: 'How to Become a Saint',
          subtitle: 'God is calling YOU.',
          body: 'Vatican II rediscovered the universal call to holiness: "All the faithful, whatever their condition or state, are called to the fullness of Christian life and to the perfection of love" (Lumen Gentium 40). Holiness is not for clergy or religious only. It is for you.' },
        { type: 'explain', title: 'The State of Grace',
          body: 'Holiness begins with the state of grace — being right with God, no unrepented mortal sin. This is maintained by Confession when needed, regular Communion (especially Sunday Mass), and the avoidance of serious sin and its near occasions.' },
        { type: 'explain', title: 'The Daily Practice of a Saint',
          body: 'What did the saints actually DO? A typical day:\n\n- Morning Offering on waking\n- Mass (daily if possible)\n- The Rosary (often more than once)\n- Spiritual reading (Bible, lives of saints, Imitation of Christ, Catechism)\n- The Angelus at noon\n- Examination of conscience at evening\n- Acts of charity throughout the day\n- Sufferings offered to God\n- Confession monthly or more often\n- Trust in God\'s providence\n\nNothing magical. Just consistent love. Repeated daily for a lifetime.' },
        { type: 'explain', title: 'Practice the Virtues',
          body: 'Saints become saints by practicing the virtues until they become habits. Cardinal virtues: prudence, justice, fortitude, temperance. Theological virtues: faith, hope, charity. Pick one. Practice it deliberately for 90 days. Build the habit.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'What would your day look like if you wanted to become a saint?',
            'Which virtue do you most need to grow in right now?',
            'Pick one saint as your patron for this year. Read their life. Imitate one thing they did.'
          ] }
      ],
      questions: [
        { question: 'Who is called to be a saint?',
          options: ['Only priests and nuns', 'Only people who do great deeds', 'Every baptized Catholic', 'Only those who suffer greatly'],
          correct_index: 2,
          explanation: 'Vatican II clearly taught the universal call to holiness (Lumen Gentium 40): every Christian is called to perfect love. CCC 2013: "All Christians in any state or walk of life are called to the fullness of Christian life and to the perfection of love."',
          ccc_ref: 'CCC 2013-2016' }
      ]
    },
    {
      slug: 'angels',
      title: 'The Angels',
      subtitle: 'Nine choirs. Three named archangels. Your own guardian.',
      xp_reward: 65, duration_minutes: 12,
      ccc_ref: 'CCC 328-336',
      slides: [
        { type: 'hero', title: 'The Angels',
          subtitle: 'God created the spiritual world before the visible world.',
          body: 'Angels are pure spirits — created beings without bodies. They have intellect and will. They were created good; some chose pride and fell with Lucifer to become demons. The faithful angels eternally praise God and serve His plan.' },
        { type: 'explain', title: 'The Nine Choirs',
          body: 'Tradition (following Dionysius the Areopagite) describes nine choirs of angels in three hierarchies:\n\nHIGHEST HIERARCHY: Seraphim ("burning ones") — closest to God, on fire with love. Cherubim — guardians of God\'s glory. Thrones — bearers of divine judgment.\n\nMIDDLE HIERARCHY: Dominions — govern lesser angels. Virtues — work miracles. Powers — combat evil.\n\nLOWEST HIERARCHY: Principalities — protect nations. Archangels — messengers for major events. Angels — guardians of individuals.' },
        { type: 'explain', title: 'The Three Named Archangels',
          body: 'Only three angels are named in Scripture:\n\nST. MICHAEL ("Who is like God?") — Warrior of God. Cast Satan out of heaven (Rev 12:7-9). Protector of the Church.\n\nST. GABRIEL ("Strength of God") — Messenger. Announced the births of John the Baptist and Jesus.\n\nST. RAPHAEL ("God heals") — Healer. Companion of Tobias in the Book of Tobit.' },
        { type: 'explain', title: 'Your Guardian Angel',
          body: 'Christ Himself spoke of children\'s angels: "See that you do not despise one of these little ones; for I tell you that in heaven their angels always behold the face of my Father" (Mt 18:10). Every person has a guardian angel — assigned at conception or baptism — who protects, prompts, and prays for them. Talk to your angel. Ask their help.',
          extra: 'Traditional prayer: "Angel of God, my Guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen."' },
        { type: 'explain', title: 'Prayer to St. Michael',
          body: 'Pope Leo XIII\'s 1886 Prayer to St. Michael, said after every Low Mass for decades and now being revived: "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do you, O Prince of the heavenly host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen."' }
      ],
      questions: [
        { question: 'What does the name "Michael" mean?',
          options: ['Strength of God', 'God heals', 'Who is like God?', 'Servant of God'],
          correct_index: 2,
          explanation: 'Michael (Hebrew: Mi-cha-El) means "Who is like God?" — the rallying cry against Lucifer, who in pride sought to be like God.' },
        { question: 'According to Catholic teaching, what is a guardian angel?',
          options: ['A myth', 'A loved one in heaven', 'A spiritual being assigned by God to protect each person', 'The Holy Spirit'],
          correct_index: 2,
          explanation: 'Each person has a guardian angel — a pure spirit assigned by God to protect, guide, and pray for them. Jesus Himself spoke of these angels (Matthew 18:10).',
          ccc_ref: 'CCC 336' }
      ]
    }
  ]
};
