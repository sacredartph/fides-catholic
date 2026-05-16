// Module 11 — Living the Faith Daily
module.exports = {
  slug: 'living-the-faith',
  order_index: 11,
  title: 'Living the Faith Daily',
  subtitle: 'Catholic life in real teen terms.',
  description: 'Doctrine matters. Sacraments matter. But all of it has to be lived — in your bedroom, at school, on social media, with your friends. This module shows you how to actually live Catholic.',
  category: 'practical',
  color: '#DAA520',
  gradient_start: '#FFE4B5',
  gradient_end: '#8B6914',
  badge_name: 'Living Saint',
  badge_emoji: 'candle',
  unlocks_after: null,
  lessons: [
    {
      slug: 'day-of-catholic-teen',
      title: 'A Day in the Life of a Catholic Teen',
      subtitle: 'Hour by hour — what could it look like?',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'A Day in the Life',
          subtitle: 'You don\'t need a monastery. You need a rhythm.',
          body: 'Here\'s what a day shaped by Catholic rhythm could look like. Not legalism — anchors. Habits that hold you to Christ across the chaos.' },
        { type: 'explain', title: 'Morning',
          body: 'AS YOU WAKE — Sign of the Cross. Three breaths. Offer the day.\n\nMORNING OFFERING: "O Jesus, through the Immaculate Heart of Mary, I offer you my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of your Sacred Heart..."\n\nFIRST 10 MINUTES — A Decade of the Rosary, or a Psalm, or Scripture.\n\nDAILY MASS (if possible — even one weekday) — the surge of grace.\n\nSILENT PRAYER (5-10 minutes) — just be with God before the day grabs you.' },
        { type: 'explain', title: 'Midday',
          body: 'NOON — The Angelus. Three Hail Marys with a short reflection on the Annunciation. (Apps exist that play the Angelus bells.)\n\nGRACE BEFORE MEALS — "Bless us O Lord and these thy gifts which we are about to receive from thy bounty, through Christ our Lord. Amen."\n\nA SAINT-OF-THE-DAY MOMENT — read a one-paragraph life of today\'s saint.\n\nBE PRESENT — at school, at work — Christ is in the people around you. Treat them accordingly.' },
        { type: 'explain', title: 'Evening',
          body: 'EXAMINATION OF CONSCIENCE — 5 minutes before bed. Where was God today? Where did I fail? What needs amendment?\n\nROSARY OR ANOTHER DECADE — if not done in morning.\n\nNIGHT PRAYER / COMPLINE (apps make this easy) — the Church\'s own night prayer.\n\nGUARDIAN ANGEL PRAYER — "Angel of God, my guardian dear..."\n\nSIGN OF THE CROSS — to bed.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'How does your current daily rhythm compare?',
            'Pick THREE habits to add this week. Just three. Make them real.',
            'Saints didn\'t do everything perfectly. They did SOMETHING faithfully.'
          ] }
      ],
      questions: [
        { question: 'What is the "Morning Offering"?',
          options: ['Eating breakfast', 'A prayer dedicating the day\'s actions to God', 'A morning Mass', 'A type of donation'],
          correct_index: 1,
          explanation: 'The Morning Offering is a prayer offered first thing on waking, dedicating the day\'s prayers, works, joys, and sufferings to God in union with the Holy Sacrifice of the Mass.' }
      ]
    },
    {
      slug: 'catholic-home',
      title: 'The Catholic Home',
      subtitle: 'Make your room a sacred space.',
      xp_reward: 55, duration_minutes: 10,
      slides: [
        { type: 'hero', title: 'The Catholic Home',
          subtitle: 'The home is the first church — the domestic church.',
          body: 'Vatican II rediscovered the ancient teaching: "The family is, so to speak, the domestic Church" (Lumen Gentium 11). Your home — your room — should look and feel Catholic.' },
        { type: 'explain', title: 'Catholic Home Practices',
          body: '- CRUCIFIX in main rooms. Not just a cross — a Crucifix (with the body of Christ). To remind you what He paid.\n- HOLY WATER FONT near the front door — bless yourself entering and leaving.\n- ICONS / SACRED ART of Mary, your favorite saints.\n- ROSARY visible — on a bedpost or wall.\n- BIBLE in a prominent place.\n- TABLE GRACE before all meals.\n- FAMILY ROSARY weekly minimum — "The family that prays together stays together" (Venerable Patrick Peyton, the Rosary Priest).' },
        { type: 'explain', title: 'Your Bedroom — Your Prayer Space',
          body: 'A specific corner with: a crucifix, a candle (or LED), an image of Mary, a Bible, a prayer book or devotional. THIS is where you go to pray. Daily. Don\'t pray in bed (you\'ll fall asleep). Sit or kneel.\n\nDeliberate space → deliberate prayer. The body teaches the soul.' },
        { type: 'explain', title: 'Liturgical Seasons at Home',
          body: 'ADVENT — Advent wreath, daily devotions.\nCHRISTMAS — Nativity scene (manger), kept up until Epiphany (or Feb 2 — Presentation).\nLENT — Crucifix more prominent, fewer decorations, ashes from Ash Wednesday.\nEASTER — Easter candle, white flowers.\n\nLet the seasons shape your home.' }
      ],
      questions: [
        { question: 'What did Vatican II call the family?',
          options: ['The basic unit of society', 'The domestic church', 'A community of love', 'The school of life'],
          correct_index: 1,
          explanation: 'Vatican II called the family "the domestic church" (Lumen Gentium 11) — the first place where children encounter Christ.' }
      ]
    },
    {
      slug: 'faith-at-school',
      title: 'Faith at School',
      subtitle: 'How to be Catholic at a school that isn\'t.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'Faith at School',
          subtitle: 'You don\'t need to be loud. You need to be real.',
          body: 'You may be the only practicing Catholic in your class. That\'s okay. Christ promised it would be like this. Your job is not to win arguments. Your job is to be a clean, joyful, courageous witness.' },
        { type: 'explain', title: 'How to Witness Without Preaching',
          body: '- BE EXCELLENT — at your work. Catholics are not lazy. "Whatever you do, do all to the glory of God" (1 Cor 10:31).\n\n- BE KIND — especially to outsiders, the bullied, the lonely. People notice this.\n\n- BE HONEST — never cheat. Even on small things. Your reputation is your witness.\n\n- BE CHASTE — in dress, speech, dating. People notice this too.\n\n- BE PEACEFUL — you don\'t need to win every argument. You need to BE the answer.\n\n- BE READY TO EXPLAIN — when someone asks why you\'re Catholic, have an answer ready. Not a sermon. A real answer from your heart.' },
        { type: 'explain', title: 'Handling Peer Pressure',
          body: 'You will be pressured: to swear, to look at things you shouldn\'t, to drink, to lie, to participate in sin.\n\n- Have your "no" decided in advance. Don\'t wait for the moment.\n- Have one Catholic friend at least — someone who shares your standards.\n- Pray Saint Michael\'s prayer when you feel tempted.\n- Remember: the people pressuring you do not love you the way Christ does.' },
        { type: 'gallery', title: 'Saints Who Were Students', items: [
          { name: 'St. Thomas Aquinas (1225-1274)', quote: 'Greatest theologian of the Middle Ages. Patron saint of students.', role: 'Patron of students' },
          { name: 'St. Edith Stein (1891-1942)', quote: 'Brilliant Jewish philosopher converted to Catholicism, became a Carmelite nun (Sister Teresa Benedicta of the Cross), martyred at Auschwitz.', role: 'Convert philosopher' },
          { name: 'Bl. Pier Giorgio Frassati (1901-1925)', quote: 'Italian engineering student. Athletic, social, deeply Catholic. Helped the poor in secret.', role: 'Student saint' },
          { name: 'Bl. Carlo Acutis (1991-2006)', quote: 'High school student in Milan. Tech-savvy. Loved soccer. Lived for the Eucharist.', role: 'Millennial blessed' }
        ] }
      ],
      questions: [
        { question: 'Who is the patron saint of students?',
          options: ['St. Francis of Assisi', 'St. Thomas Aquinas', 'St. Maria Goretti', 'St. Catherine of Siena'],
          correct_index: 1,
          explanation: 'St. Thomas Aquinas, the Angelic Doctor and brilliant theologian, is the patron saint of students. He prayed before every study session.' }
      ]
    },
    {
      slug: 'catholic-friendships',
      title: 'Catholic Friendships and Relationships',
      subtitle: 'Friendships that build up, not tear down.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'Catholic Friendships',
          subtitle: 'Aristotle and Aquinas on the kinds of friends you should have.',
          body: 'Not all friendships are equal. Aristotle (followed by Aquinas) distinguished three kinds of friendship:' },
        { type: 'explain', title: 'Three Kinds of Friendship',
          body: '1. FRIENDSHIP OF UTILITY — based on what you get from the other person (homework help, rides, social position). Real but shallow. Dissolves when usefulness ends.\n\n2. FRIENDSHIP OF PLEASURE — based on shared fun (sports, gaming, parties). More valuable than utility but still incomplete.\n\n3. FRIENDSHIP OF VIRTUE — based on mutual love of the good. Each helps the other become a better person. THIS is the friendship the saints had.\n\nMost people have many friends of utility and pleasure. The challenge: develop one or two friends of virtue. People who love God and who love YOU enough to push you toward Him.' },
        { type: 'explain', title: 'Social Media and Catholic Conscience',
          body: 'Social media is not neutral. It shapes you whether you notice or not.\n\n- IF YOU CAN\'T LOOK AT IT IN FRONT OF CHRIST — don\'t look at it.\n- IF IT MAKES YOU ENVIOUS, ANXIOUS, OR LUSTFUL — limit it.\n- IF IT REPLACES REAL FRIENDS — replace it.\n- TIME LIMITS — set them. Phone outside bedroom at night.\n- Use it for good — share your faith, encourage friends, support good causes.\n- The 30 minutes you doom-scroll = 30 minutes of Adoration you could have had instead.' },
        { type: 'explain', title: 'Dating, Catholic',
          body: 'Dating in the Catholic sense is not "trying out partners." It is a stage of DISCERNMENT — could this person be my spouse?\n\nQuestions to ask:\n- Does this person help me become holier?\n- Could they be a holy spouse?\n- Are we open to chastity, marriage, family?\n- Do they pray? Do they share my faith?\n\nGuidelines: Group dates first. Public places. Keep physical affection chaste (modest. No genital touching. Restrain kissing. The Eucharist tells you what total self-gift means — save it.). End if it isn\'t leading toward marriage or virtue.' }
      ],
      questions: [
        { question: 'According to Aristotle/Aquinas, what is the highest form of friendship?',
          options: ['Friendship of utility', 'Friendship of pleasure', 'Friendship of virtue', 'Friendship of family'],
          correct_index: 2,
          explanation: 'Friendship of virtue — based on mutual love of the good, each helping the other become better. The friendship of the saints. The rarest and most valuable.' }
      ]
    },
    {
      slug: 'vocation',
      title: 'Vocation',
      subtitle: 'What is God calling YOU to?',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'Vocation',
          subtitle: 'Marriage, priesthood, religious life, consecrated single.',
          body: 'Vocation means "calling." God calls every Catholic to a specific state of life that uniquely opens us to holiness. There are four basic vocations.' },
        { type: 'explain', title: 'The Four Vocations',
          body: '1. MARRIAGE — Most are called here. A holy marriage is a path to sainthood for both spouses and their children.\n\n2. PRIESTHOOD — Ordained ministry. Sacrificial. Spiritual fatherhood to many.\n\n3. RELIGIOUS LIFE — Consecrated as monks, nuns, friars, sisters. Living the evangelical counsels (poverty, chastity, obedience) in community.\n\n4. CONSECRATED SINGLE LIFE — Living the evangelical counsels in the world, often dedicated to specific apostolic work. Carlo Acutis was on this path.\n\nAll four are equally holy paths. None is "second best."' },
        { type: 'explain', title: 'How to Discern',
          body: '- PRAY DAILY for guidance. "Lord, what do you want me to do with my life?"\n- READ saints\' lives in each state.\n- TALK to a holy priest spiritual director.\n- EXPERIENCE different vocations: visit a monastery, attend a vocational discernment retreat.\n- WATCH WHERE GOD GIVES PEACE.\n- NOTICE YOUR GIFTS — God\'s gifts and calling are connected.\n\nVocation is discovered, not invented. God already has a plan for you. Your job is to listen.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'When you imagine being deeply happy and fulfilled at age 30 — what does that look like?',
            'Could God be inviting you to consider religious life or priesthood? Most teens don\'t even let themselves think it.',
            'Whatever your vocation, are you preparing for it now — in virtue, prayer, study?'
          ] }
      ],
      questions: [
        { question: 'What does the word "vocation" mean?',
          options: ['Job', 'Calling', 'Career', 'Hobby'],
          correct_index: 1,
          explanation: 'Vocation is from the Latin vocare — to call. It is God\'s calling to a specific state of life.' }
      ]
    },
    {
      slug: 'priesthood-religious',
      title: 'How to Become a Priest or Religious',
      subtitle: 'Seminaries, religious orders, the long beautiful path.',
      xp_reward: 60, duration_minutes: 11,
      slides: [
        { type: 'hero', title: 'Priesthood and Religious Life',
          subtitle: 'The most exciting adventure of a lifetime.',
          body: 'The world needs holy priests and consecrated religious now more than ever. Could that be you?' },
        { type: 'explain', title: 'Becoming a Diocesan Priest',
          body: 'A diocesan priest serves a particular diocese (e.g., Archdiocese of Cebu, Archdiocese of New York) under his bishop. Path:\n\n1. Talk to your parish priest and the diocese\'s vocations director.\n2. Application and interviews. Psychological evaluation.\n3. Pre-seminary (philosophy) for college-age men: 2 years.\n4. Major seminary (theology): 4 years.\n5. Diaconate ordination (transitional, before priesthood): a year before.\n6. Priestly ordination by the bishop.\n\nTotal: 6-8 years from college beginning. The vocations director walks with you.' },
        { type: 'explain', title: 'Becoming a Religious',
          body: 'Religious orders have specific charisms:\n\n- BENEDICTINES — Pray and work. Stability. Liturgy.\n- DOMINICANS — Preachers. Study and teaching.\n- FRANCISCANS (various branches) — Radical poverty, joy.\n- JESUITS — Missions, education, the Pope\'s special men.\n- CARMELITES — Contemplative. Discalced (Teresa, John of the Cross).\n- BENEDICTINE/TRAPPIST monks — Cloistered. Silent.\n\nFor women: corresponding orders + many others (Carmelites, Visitation, Poor Clares, Daughters of Charity, Missionaries of Charity — Mother Teresa\'s sisters).\n\nPath:\n1. Contact the order.\n2. Visit. Discern with their formators.\n3. Postulancy (~1 year).\n4. Novitiate (1-2 years).\n5. Temporary vows.\n6. Final vows (after several more years).' },
        { type: 'explain', title: 'The Vows',
          body: 'Religious typically take three "evangelical counsels":\n\nPOVERTY — Renouncing personal ownership. Everything belongs to the community.\n\nCHASTITY — Celibacy for the sake of the Kingdom. Total self-gift to God.\n\nOBEDIENCE — Submission to legitimate superiors. Trusting God\'s will through them.\n\nThese are not restrictions but freedoms. The vows free you from the things that distract most people, so you can love God totally.' }
      ],
      questions: [
        { question: 'What are the three evangelical counsels (religious vows)?',
          options: ['Faith, Hope, Charity', 'Prayer, Fasting, Almsgiving', 'Poverty, Chastity, Obedience', 'Silence, Stability, Conversion'],
          correct_index: 2,
          explanation: 'The three evangelical counsels are Poverty, Chastity, and Obedience. Religious profess them publicly through vows. Christ Himself lived them.' }
      ]
    },
    {
      slug: 'purpose-of-life',
      title: 'Purpose of Life',
      subtitle: 'Why are you here?',
      xp_reward: 75, duration_minutes: 14, ccc_ref: 'CCC 1-3',
      slides: [
        { type: 'hero', title: 'Purpose of Life',
          subtitle: 'The Baltimore Catechism asked. The answer still stands.',
          body: 'Question 1 of the Baltimore Catechism: "Why did God make you?"\n\nAnswer: "God made me to know Him, to love Him, and to serve Him in this world, and to be happy with Him forever in the next."\n\nThat is the meaning of your life. Everything else is context.' },
        { type: 'explain', title: 'Why Pleasure is Not the Purpose',
          body: 'Pleasure is a finite good. Money, fame, sex, food, achievement — all pleasure. None of them ultimately satisfies. Augustine: "Our hearts are restless, O Lord, until they rest in Thee."\n\nEvery rich, famous, "successful" celebrity who falls into depression, addiction, suicide is proof that worldly pleasure does not satisfy. The infinite cannot be satisfied by the finite. Only God can fill the God-shaped hole in you.' },
        { type: 'explain', title: 'The Happiness Argument',
          body: 'The Catholic faith makes a bold claim: living as God designed you to live will make you most truly happy. Not necessarily comfortable. Not necessarily rich. But MOST FULLY ALIVE.\n\nLook at the saints. They suffered. Many were martyred. Most were poor. Yet their faces shine in photographs. There was a joy in them the world cannot give.\n\nC.S. Lewis (a convert from atheism): "If we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world."' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'What do you currently think will make you happy?',
            'How much of your time/energy actually goes to knowing, loving, serving God?',
            'What would change if you really believed your purpose was God Himself?'
          ] }
      ],
      questions: [
        { question: 'According to the Baltimore Catechism, why did God make you?',
          options: ['To enjoy life', 'To make the world better', 'To know, love, and serve God in this life, and to be happy with Him forever in the next', 'To have a family'],
          correct_index: 2,
          explanation: 'The classic answer from the Baltimore Catechism — and the perfect summary of the human vocation.' }
      ]
    },
    {
      slug: 'suffering',
      title: 'Suffering and the Cross',
      subtitle: 'Why suffering matters — and how to bear it.',
      xp_reward: 75, duration_minutes: 14, ccc_ref: 'CCC 1500-1532',
      slides: [
        { type: 'hero', title: 'Suffering and the Cross',
          subtitle: 'The deepest mystery of Christianity.',
          body: 'If God is all-good and all-powerful, why is there suffering? This is the deepest "objection" against Christianity. The answer is not in a syllogism. The answer is on the Cross.' },
        { type: 'explain', title: 'Original Sin and the Fall',
          body: 'Suffering entered through sin. CCC 400 — "Disrupted harmony with the creator, harmony with himself, harmony with creation." The world is not as God designed it. We live in a fallen world.\n\nGod did not create suffering — but He allows it because love requires freedom, and freedom requires the possibility of refusal. To prevent all suffering would require eliminating all freedom — eliminating love itself.' },
        { type: 'explain', title: 'Christ\'s Answer to Suffering',
          body: 'God did not stand at a distance from human suffering. He entered it. He took it on Himself. The crucified God is the answer.\n\nChrist sanctified suffering. By accepting His Passion, He gave suffering a meaning it never had before. United with His Cross, our suffering becomes redemptive — for ourselves, for others, for the world.\n\nCCC 1521 — Suffering, a consequence of original sin, acquires a new meaning; it becomes a participation in the saving work of Jesus.' },
        { type: 'explain', title: '"Offering It Up"',
          body: 'Older Catholic spirituality emphasized "offering it up" — uniting our daily annoyances and big sufferings with Christ\'s Passion, offering them for some intention (someone\'s conversion, the souls in Purgatory, the missions).\n\nThis isn\'t Catholic masochism. It\'s realism. Suffering will come whether we like it or not. We can waste it on bitterness — or use it for grace.' },
        { type: 'gallery', title: 'Saints of Suffering', items: [
          { name: 'Bl. Chiara Badano', quote: '18, bone cancer. Refused morphine to offer her suffering to Christ. Smiling to the end. "For you, Jesus, if you want it, I want it too."', role: '18, cancer' },
          { name: 'St. Padre Pio', quote: 'Stigmata for 50 years. Offered his physical suffering for sinners. "Pray, hope, and don\'t worry."', role: 'Stigmatic priest' },
          { name: 'Job', quote: 'Lost everything. Refused to curse God. "The Lord gave, and the Lord has taken away; blessed be the name of the Lord."', role: 'Old Testament' },
          { name: 'Mary at the Foot of the Cross', quote: 'Sword pierced her soul (Lk 2:35). Stood and did not flee. The Mother of Sorrows is mother to all who suffer.', role: 'Mother of Sorrows' }
        ] },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'What suffering are you carrying right now?',
            'Have you offered it to Christ?',
            'Would you accept a great suffering if it saved a soul?'
          ] }
      ],
      questions: [
        { question: 'Why does Catholicism say suffering can have redemptive meaning?',
          options: ['Because suffering is good', 'Because united with Christ\'s Cross, our sufferings participate in His saving work', 'Because God enjoys our suffering', 'Suffering has no meaning'],
          correct_index: 1,
          explanation: 'CCC 1521 — Christ\'s Passion gave suffering a new meaning. United with Him, our sufferings can be redemptive — for ourselves, for others.' }
      ]
    }
  ]
};
