// Module 9 — Catholic History
module.exports = {
  slug: 'catholic-history',
  order_index: 9,
  title: 'Catholic History',
  subtitle: 'Two thousand years of God walking with His Church.',
  description: 'From Pentecost to today, the Catholic Church has lived through persecution, heresy, scandal, glory, missionary expansion, and reform. To know our history is to know why we believe what we believe — and to know that we are part of the longest continuing story on earth.',
  category: 'history',
  color: '#8B4513',
  gradient_start: '#D2691E',
  gradient_end: '#5C3317',
  badge_name: 'Living the Tradition',
  badge_emoji: 'scroll',
  unlocks_after: null,
  lessons: [
    {
      slug: 'first-century',
      title: 'The First Century',
      subtitle: 'From Pentecost to the destruction of Jerusalem.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'The First Century',
          subtitle: 'A handful of disciples — and a fire that would never go out.',
          body: 'At Pentecost (30 AD), 120 disciples received the Holy Spirit. By the year 100, Christianity had spread to Antioch, Rome, Alexandria, North Africa, India, and beyond. Peter and Paul had been martyred in Rome. The Gospels had been written. The Bishop of Rome was already exercising primacy.' },
        { type: 'timeline', title: 'The First Century', events: [
          { year: '30', title: 'Pentecost', body: 'Holy Spirit descends. 3,000 baptized. The Church is born.' },
          { year: '34', title: 'Stephen Martyred', body: 'First Christian martyr. Saul approves.' },
          { year: '36', title: 'Paul Converts', body: 'On the road to Damascus.' },
          { year: '49', title: 'Council of Jerusalem', body: 'First council. Decides Gentiles need not become Jewish to follow Christ.' },
          { year: '50s', title: 'Paul\'s Missionary Journeys', body: 'Three journeys through Asia Minor and Greece. Churches founded.' },
          { year: '64', title: 'Great Fire of Rome', body: 'Nero blames Christians. Begins first imperial persecution.' },
          { year: '64-67', title: 'Peter and Paul Martyred', body: 'Both in Rome. Peter crucified upside down. Paul beheaded.' },
          { year: '70', title: 'Jerusalem Destroyed', body: 'Roman legions under Titus destroy the Temple. End of Old Covenant Temple worship.' },
          { year: '90s', title: 'John Writes Revelation', body: 'Exiled on Patmos.' },
          { year: '100', title: 'John Dies', body: 'Last living apostle. At Ephesus, in extreme old age.' }
        ] }
      ],
      questions: [
        { question: 'When did the Roman Temple in Jerusalem fall?',
          options: ['30 AD', '50 AD', '70 AD', '313 AD'],
          correct_index: 2,
          explanation: 'The Temple in Jerusalem was destroyed by Roman forces under Titus in AD 70 — ending Old Covenant Temple worship. Jesus had prophesied this (Mt 24:2).' }
      ]
    },
    {
      slug: 'age-of-martyrs',
      title: 'The Age of Martyrs (100-313)',
      subtitle: 'Christianity in the catacombs.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'The Age of Martyrs',
          subtitle: 'Ten major persecutions over 200 years.',
          body: 'For two centuries, Christianity was illegal in the Roman Empire. Christians refused to burn incense to Caesar; that was treason. Persecutions came in waves under various emperors. Yet the Church grew.' },
        { type: 'explain', title: 'The Persecutions',
          body: 'NERO (64) — first persecution; Peter and Paul martyred.\nDOMITIAN (95) — second persecution; John exiled.\nTRAJAN (109) — third; Ignatius of Antioch martyred.\nMARCUS AURELIUS (165) — fourth; Justin Martyr, Polycarp.\nSEPTIMIUS SEVERUS (202) — fifth; Perpetua and Felicity.\nMAXIMINUS (235) — sixth.\nDECIUS (249-251) — seventh; required certificate of pagan sacrifice.\nVALERIAN (257-260) — eighth; Cyprian, Sixtus II, Lawrence.\nAURELIAN (275) — ninth.\nDIOCLETIAN (303-311) — tenth and worst; "Great Persecution"; Agnes, Sebastian, Lucy.' },
        { type: 'explain', title: 'Why They Died',
          body: 'Christians refused to:\n- Worship Caesar as a god\n- Burn even a pinch of incense to pagan deities\n- Renounce Christ\n- Hand over the Scriptures\n\nThey were offered life for any of these. They chose death. Tertullian, writing around 197 AD: "The blood of the martyrs is the seed of the Church." He was right. The Empire tried to crush them; instead they crushed the Empire.' }
      ],
      questions: [
        { question: 'In what year did Christianity become legal in the Roman Empire?',
          options: ['33 AD', '70 AD', '313 AD (Edict of Milan)', '380 AD'],
          correct_index: 2,
          explanation: 'Emperor Constantine\'s Edict of Milan in 313 AD ended Roman persecution of Christians. Christianity became the official state religion in 380 under Theodosius.' }
      ]
    },
    {
      slug: 'constantinian-era',
      title: 'The Constantinian Era and Councils (313-500)',
      subtitle: 'Christianity becomes the religion of the Empire.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'The Constantinian Era',
          subtitle: 'From catacombs to cathedrals.',
          body: 'In 312, Constantine — facing his rival Maxentius at the Milvian Bridge — had a vision of the Chi-Rho with the words "In this sign you shall conquer." He won, gave Christians liberty in 313, and became their patron. The Empire that had killed Christians now built their churches.' },
        { type: 'explain', title: 'The First Four Councils',
          body: 'NICAEA I (325) — Constantine summoned 318 bishops. Condemned Arianism (denying Christ\'s divinity). Produced the Nicene Creed.\n\nCONSTANTINOPLE I (381) — Theodosius. Defined the Holy Spirit\'s divinity. Completed the Creed we still pray.\n\nEPHESUS (431) — Defined Mary as Theotokos against Nestorius.\n\nCHALCEDON (451) — Defined Christ as one Person in two natures (divine and human).' },
        { type: 'explain', title: 'St. Augustine',
          body: 'Born 354 in North Africa. Brilliant rhetorician, lived a worldly life. Converted at 33 after years of his mother Monica\'s prayers. Baptized by St. Ambrose. Became Bishop of Hippo. Wrote Confessions (his autobiography), City of God, On the Trinity. The greatest theologian of the West. Died 430 as the Vandals besieged his city.' },
        { type: 'explain', title: 'The Fall of Rome',
          body: 'In 476 the Western Roman Empire fell. The Church remained — taking over civic functions, preserving culture, evangelizing the barbarian tribes. The Catholic Church became the institutional anchor of Western civilization.' }
      ],
      questions: [
        { question: 'At the Council of Nicaea (325), what heresy was condemned?',
          options: ['Pelagianism', 'Arianism (denying Christ\'s divinity)', 'Donatism', 'Modalism'],
          correct_index: 1,
          explanation: 'Arius taught that Jesus was the first and highest created being but not truly God. Nicaea condemned this and defined that Christ is "of one substance" (homoousios) with the Father.' }
      ]
    },
    {
      slug: 'middle-ages-1',
      title: 'The Middle Ages (500-1000)',
      subtitle: 'Benedict, Charlemagne, and the rise of Christendom.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'The Middle Ages',
          subtitle: 'When Christ\'s Church saved Europe.',
          body: 'The so-called "Dark Ages" were not dark for the Church. While Roman civilization crumbled, Catholic monasteries preserved literacy, agriculture, manuscripts, and the Faith. Missionaries evangelized the new Germanic, Celtic, and Slavic peoples.' },
        { type: 'explain', title: 'St. Benedict — Father of Western Monasticism',
          body: 'Around 529, St. Benedict founded the monastery of Monte Cassino in Italy. He wrote the Rule of St. Benedict — a moderate, balanced rule for monastic life with the motto Ora et Labora (Pray and Work). Benedictine monasteries spread across Europe — they were the engines of agriculture, education, art, and evangelization for centuries.' },
        { type: 'explain', title: 'St. Patrick and Irish Christianity',
          body: 'Around 432, the British-born Patrick returned to Ireland (where he had been a slave in his youth) and converted the entire island peacefully. Irish monasteries became the brightest lights of learning in Europe through the 700s.' },
        { type: 'explain', title: 'Charlemagne',
          body: 'On Christmas Day 800, Pope Leo III crowned Charlemagne Emperor of the Romans. This created the Holy Roman Empire — Catholic civilization made political. Charlemagne reformed education, supported the Church, and consolidated Western Europe under Catholic Christianity.' },
        { type: 'explain', title: 'Cyril and Methodius — Apostles to the Slavs',
          body: 'In 863, the brothers Cyril and Methodius were sent from Constantinople to evangelize the Slavs. They invented the Cyrillic alphabet (still used in Russia, Bulgaria, Serbia) to translate Scripture and liturgy into Slavic. Most of Eastern Europe became Christian through their work.' }
      ],
      questions: [
        { question: 'Who is called the "Father of Western Monasticism"?',
          options: ['St. Augustine', 'St. Patrick', 'St. Benedict', 'St. Francis'],
          correct_index: 2,
          explanation: 'St. Benedict of Nursia (c. 480-547) wrote the Rule that became the foundation of Western monasticism. His motto: Ora et Labora — Pray and Work.' }
      ]
    },
    {
      slug: 'middle-ages-2',
      title: 'The High Middle Ages (1000-1300)',
      subtitle: 'Cathedrals, Crusades, and Aquinas.',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'The High Middle Ages',
          subtitle: 'The most Catholic centuries in human history.',
          body: 'The High Middle Ages saw the great Gothic cathedrals built, scholasticism flourish, the Franciscan and Dominican orders founded, the Crusades fought, and St. Thomas Aquinas produce his Summa Theologiae. This was the height of Christendom.' },
        { type: 'explain', title: 'The Crusades — An Honest Look',
          body: 'The Crusades (1095-1291) were Christian military campaigns to retake the Holy Land from Muslim conquest. Pope Urban II called the First Crusade in 1095 at Clermont, responding to the Byzantine Emperor\'s plea for help and Muslim atrocities against Christian pilgrims.\n\nThe First Crusade succeeded — Jerusalem was retaken in 1099. But the Crusades were marked by both genuine heroism (St. Louis IX of France) and shameful abuses (the sack of Constantinople in 1204; massacres of Jews).\n\nThe Church does not glorify the abuses. But the Crusades were not unprovoked aggression — they were a defensive response to centuries of Muslim conquest of formerly Christian lands. Honest history is messy. The Church confesses what was sinful and praises what was holy.' },
        { type: 'explain', title: 'The Gothic Cathedrals',
          body: 'Chartres, Notre Dame de Paris, Cologne, Canterbury, Rheims, Westminster, Salisbury — built between 1100 and 1400 with primitive tools and astonishing skill. Flying buttresses allowed walls of glass — the stained glass that filled the cathedrals with light is theology in color. Everything in a Gothic cathedral points up — heavenward.' },
        { type: 'explain', title: 'Francis and Dominic',
          body: '1209 — St. Francis of Assisi founds the Franciscans (Friars Minor) — itinerant preachers of radical poverty and Gospel simplicity.\n\n1216 — St. Dominic founds the Dominicans (Order of Preachers) — friars dedicated to preaching, study, and contemplation. The Dominicans gave the Church Aquinas, Catherine of Siena, Fra Angelico.' },
        { type: 'explain', title: 'St. Thomas Aquinas',
          body: 'Born around 1225 in Italy. Joined the Dominicans (against his noble family\'s wishes — they imprisoned him for over a year to dissuade him). Studied under St. Albert the Great. At the University of Paris, he wrote the Summa Theologiae — the most comprehensive synthesis of Catholic theology ever produced. He integrated the philosophy of Aristotle with Christian revelation. His Five Ways prove God\'s existence from reason. He died at 49, having received a mystical experience three months earlier so profound that he stopped writing, saying everything he had written was "straw" compared to what was revealed.' }
      ],
      questions: [
        { question: 'Who wrote the Summa Theologiae?',
          options: ['St. Augustine', 'St. Francis of Assisi', 'St. Thomas Aquinas', 'Pope Innocent III'],
          correct_index: 2,
          explanation: 'St. Thomas Aquinas (1225-1274), the Angelic Doctor, wrote the Summa Theologiae — the most influential theological work of the Middle Ages.' }
      ]
    },
    {
      slug: 'renaissance-reformation',
      title: 'The Renaissance and Reformation (1300-1600)',
      subtitle: 'Glory and crisis — and the Counter-Reformation\'s reply.',
      xp_reward: 75, duration_minutes: 14,
      slides: [
        { type: 'hero', title: 'Renaissance and Reformation',
          subtitle: 'The Church\'s darkest centuries — and her holiest renewal.',
          body: 'The 1300s and 1400s brought the Black Death, the Avignon Papacy, the Western Schism, Renaissance worldliness in the curia. Then the Reformation broke out — and the Catholic Church responded with the Counter-Reformation, the Council of Trent, and an explosion of saints.' },
        { type: 'explain', title: 'The Avignon Papacy and Great Schism',
          body: 'From 1309-1377 the Popes lived in Avignon, France — under heavy French influence. Catherine of Siena and others called for return to Rome. Gregory XI finally returned in 1377.\n\nThen the Great Western Schism (1378-1417) — first one antipope, then two, then three men claiming to be Pope. The Church was confused. Saints argued about which was the real Pope (even St. Catherine and St. Vincent Ferrer disagreed). The Council of Constance (1414-1418) ended the Schism by deposing the various claimants and electing Martin V.' },
        { type: 'explain', title: 'The Reformation — What Actually Happened',
          body: 'In 1517 Martin Luther — a German Augustinian monk — posted 95 Theses challenging indulgence abuses. These were real abuses. The Church had problems Luther rightly named.\n\nBut Luther went further: rejecting papal authority, rejecting purgatory, rejecting many sacraments, eventually rejecting seven books of the Old Testament.\n\nThe break became permanent. King Henry VIII\'s Anglican break (1534) was political, not theological — he wanted a divorce Rome would not grant. Calvin emerged in Geneva. Within decades there were many Protestant traditions, each disagreeing with the others.' },
        { type: 'explain', title: 'The Council of Trent (1545-1563)',
          body: 'The Catholic Church\'s response. Trent met over 18 years across three popes. It:\n- Defined justification (against Luther) — by grace through faith working in love.\n- Reaffirmed the seven sacraments.\n- Reaffirmed Scripture AND Tradition as the rule of faith.\n- Confirmed the 73-book canon.\n- Reformed clergy training (seminaries required).\n- Standardized the Roman Missal, Breviary, Catechism (Tridentine).\n\nTrent was the most important council between Nicaea and Vatican II.' },
        { type: 'explain', title: 'The English Martyrs',
          body: 'In England, Henry VIII\'s break led to centuries of persecution of Catholics. St. Thomas More and St. John Fisher were beheaded for refusing the Oath of Supremacy. The Forty Martyrs of England and Wales died for the Faith. The English Catholic recusants kept the Faith in secret across centuries until Catholic Emancipation in 1829.' }
      ],
      questions: [
        { question: 'What council was the Catholic response to the Protestant Reformation?',
          options: ['Vatican I', 'Vatican II', 'Council of Trent', 'Council of Florence'],
          correct_index: 2,
          explanation: 'The Council of Trent (1545-1563) was the Catholic Counter-Reformation council. It defined doctrine and reformed Church discipline.' }
      ]
    },
    {
      slug: 'counter-reformation-saints',
      title: 'The Counter-Reformation Saints (1500-1650)',
      subtitle: 'A flood of holiness.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'Counter-Reformation Saints',
          subtitle: 'Holiness was the answer to the Reformation.',
          body: 'In the very century when Luther split the West, the Catholic Church produced perhaps the greatest concentration of canonized saints in her history. Reform began with the heart.' },
        { type: 'gallery', title: 'The Great Saints of the Era', items: [
          { name: 'St. Ignatius of Loyola (1491-1556)', quote: 'Founded the Society of Jesus (Jesuits). Wrote the Spiritual Exercises. Motto: Ad Maiorem Dei Gloriam — For the Greater Glory of God.', role: 'Soldier turned saint' },
          { name: 'St. Francis Xavier (1506-1552)', quote: 'Jesuit missionary to India and Japan. Baptized hundreds of thousands.', role: 'Apostle to the East' },
          { name: 'St. Teresa of Avila (1515-1582)', quote: 'Reformed the Carmelites. Doctor of the Church. The Interior Castle.', role: 'Reformer mystic' },
          { name: 'St. John of the Cross (1542-1591)', quote: 'Co-reformer with Teresa. Doctor of Mystical Theology. Dark Night of the Soul.', role: 'Poet of the soul' },
          { name: 'St. Philip Neri (1515-1595)', quote: 'Apostle of Rome. Founded the Oratory. Re-evangelized the Eternal City with joy.', role: 'Joyful saint' },
          { name: 'St. Charles Borromeo (1538-1584)', quote: 'Cardinal Archbishop of Milan. Implemented Trent\'s reforms. Models holy bishop.', role: 'Reforming bishop' },
          { name: 'St. Robert Bellarmine (1542-1621)', quote: 'Jesuit Cardinal. Defended Catholic teaching against Reformers. Doctor of the Church.', role: 'Apologist' },
          { name: 'St. Peter Canisius (1521-1597)', quote: 'Jesuit. Re-Catholicized much of German-speaking Europe.', role: 'Second Apostle of Germany' },
          { name: 'St. Francis de Sales (1567-1622)', quote: 'Bishop of Geneva. Introduction to the Devout Life — holiness for laity.', role: 'Gentle doctor' }
        ] },
        { type: 'explain', title: 'Our Lady of Guadalupe (1531)',
          body: 'In Mexico, just 12 years after the Spanish conquest, Mary appeared to St. Juan Diego (Dec 9-12, 1531). She left her image on his tilma — still preserved today. In the next decade, 8 million Aztecs were baptized — the largest mass conversion in history. This happened while Europe was tearing itself apart in religious wars. Mary brought the New World fully into the Church.' }
      ],
      questions: [
        { question: 'Who founded the Society of Jesus (Jesuits)?',
          options: ['St. Francis Xavier', 'St. Ignatius of Loyola', 'St. Philip Neri', 'St. Charles Borromeo'],
          correct_index: 1,
          explanation: 'St. Ignatius of Loyola (1491-1556), a former soldier converted during convalescence, founded the Jesuits in 1540.' }
      ]
    },
    {
      slug: 'modern-era',
      title: 'The Modern Era (1800-2000)',
      subtitle: 'Revolution, Industrial Age, Two World Wars, Vatican II.',
      xp_reward: 75, duration_minutes: 14,
      slides: [
        { type: 'hero', title: 'The Modern Era',
          subtitle: 'The Church meets the modern world.',
          body: 'The French Revolution had tried to abolish the Church (1789-1815). The 19th century brought industrialization, scientific revolution, secularism, communism. The Church answered with new saints, new doctrines, and finally Vatican II.' },
        { type: 'explain', title: 'Catholic Social Teaching Begins',
          body: 'Pope Leo XIII (Pope 1878-1903) saw the suffering of industrial workers — abused by capitalist factory owners and exploited by communist agitators. In 1891 he issued Rerum Novarum — defending workers\' rights AND private property; defending the family AND the common good. This was the start of Catholic Social Teaching, which continues through every Pope to today (Laudato Si\' on the environment, Fratelli Tutti on brotherhood).' },
        { type: 'explain', title: 'The Marian Dogmas',
          body: '1854 — Pius IX defines the Immaculate Conception.\n1950 — Pius XII defines the Assumption.\n\nFour years after the Immaculate Conception was defined, Mary appeared at Lourdes calling herself "the Immaculate Conception." The supernatural confirms the magisterial.' },
        { type: 'explain', title: 'World Wars',
          body: 'Two World Wars devastated Christian Europe. Pope Benedict XV tried to broker peace in WWI. Pope Pius XII secretly worked to save 800,000+ Jews during WWII — historians have confirmed this in recent decades after the slander that "Pius was silent" was finally addressed in archive openings.' },
        { type: 'explain', title: 'Vatican II (1962-1965)',
          body: 'The 21st ecumenical council. Convened by St. John XXIII to renew the Church\'s engagement with the modern world. Completed by St. Paul VI.\n\nMisrepresentations are rampant. Vatican II:\n- Did NOT change doctrine. It clarified and pastorally applied it.\n- Did NOT abolish the Latin Mass. It permitted vernacular while preserving Latin.\n- Did NOT teach religious indifferentism. It affirmed Catholic primacy while engaging in respectful dialogue.\n- Did NOT abandon Tradition. It rooted itself in Scripture, the Fathers, and continuity.\n\nWhat went wrong after the Council was not the Council itself but a "spirit of Vatican II" claimed by progressives going beyond what the Council taught.' },
        { type: 'explain', title: 'St. John Paul II',
          body: '1978-2005. The Polish Pope. Survived an assassination attempt in 1981 (Mary saved him, he said). Helped bring down Communism in Eastern Europe. Traveled more than any Pope. Wrote the Theology of the Body. Canonized more saints than all previous popes combined. Established World Youth Day. Released the Catechism of the Catholic Church (1992). One of the giants of papal history.' }
      ],
      questions: [
        { question: 'When was the Catechism of the Catholic Church (the CCC we still use) promulgated?',
          options: ['1965', '1992', '2005', '2013'],
          correct_index: 1,
          explanation: 'St. John Paul II promulgated the Catechism of the Catholic Church on October 11, 1992 — the 30th anniversary of the opening of Vatican II.' }
      ]
    },
    {
      slug: '21st-century',
      title: 'The 21st Century Church',
      subtitle: 'New evangelization, ongoing reform, global growth.',
      xp_reward: 60, duration_minutes: 11,
      slides: [
        { type: 'hero', title: 'The 21st Century',
          subtitle: 'The Church lives. The Church grows. The Church purifies.',
          body: 'The 21st century has brought new challenges: secularism in the West, the sex abuse crisis, religious persecution in Muslim-majority countries, and explosive growth in Africa and Asia.' },
        { type: 'explain', title: 'The Sex Abuse Crisis',
          body: 'In the late 20th and early 21st centuries it became known that some priests had abused minors over decades, and some bishops had covered it up. This was — and is — a profound wound on the Church. The Church\'s response:\n\n- Zero tolerance policies.\n- Independent review boards.\n- Mandatory reporting.\n- Vetting of seminarians.\n- Settlements and apologies to victims.\n- Penalties up to laicization for offenders.\n\nThe abuse was committed by a small percentage of clergy — but EVERY case was one too many. The Church has been purified through this scandal — at terrible cost.\n\nThe sin and crime were real. The Faith is unchanged. The Church remains the Church Christ founded — but holier members are needed.' },
        { type: 'explain', title: 'New Evangelization',
          body: 'JPII, Benedict XVI, and Francis have all called for "New Evangelization" — re-evangelizing once-Christian Western nations now secularized. This is your generation\'s mission.\n\nGlobal Catholicism is exploding in Africa (over 230 million Catholics there now), Asia (the Philippines has 80+ million; South Korea 6 million and growing; India 20 million), Latin America (still over 400 million).' },
        { type: 'explain', title: 'Recent Popes',
          body: 'BENEDICT XVI (2005-2013) — Brilliant theologian. Continued JPII\'s teaching. Resigned in 2013 — the first papal resignation in 600 years — for health reasons. His writings (Jesus of Nazareth trilogy) are essential reading.\n\nFRANCIS (2013-2025) — First Jesuit pope. First from the Americas. Emphasized mercy, the peripheries, environmental stewardship (Laudato Si\'), human fraternity (Fratelli Tutti). Died 2025.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'You are part of a 2,000-year-old story. You are a chapter being written.',
            'What will you contribute? Who will you become? How will you be remembered?',
            'The next saints are being formed today. Could one of them be you?'
          ] }
      ],
      questions: [
        { question: 'Who was the first Pope from the Americas?',
          options: ['John Paul II', 'Benedict XVI', 'Francis', 'Pius XII'],
          correct_index: 2,
          explanation: 'Pope Francis (Jorge Bergoglio, b. Buenos Aires, Argentina, 1936) was elected in 2013 — the first Pope from the Americas and the first Jesuit Pope.' }
      ]
    }
  ]
};
