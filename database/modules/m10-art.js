// Module 10 — Catholic Architecture and Art
module.exports = {
  slug: 'art-and-architecture',
  order_index: 10,
  title: 'Catholic Architecture and Art',
  subtitle: 'Theology in stone. Theology in color. Theology in sound.',
  description: 'The Catholic Church built the greatest art and architecture in human history — cathedrals, frescoes, mosaics, sculptures, chant. They were not decoration. They were prayer made visible. Beauty IS a path to God.',
  category: 'culture',
  color: '#C71585',
  gradient_start: '#FFB6C1',
  gradient_end: '#8B0A50',
  badge_name: 'Beholder of Beauty',
  badge_emoji: 'rose-window',
  unlocks_after: null,
  lessons: [
    {
      slug: 'cathedrals-theology',
      title: 'Cathedrals as Theology in Stone',
      subtitle: 'Every stone preaches.',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'Cathedrals as Theology in Stone',
          subtitle: 'Walk through a Gothic cathedral. Walk through Catholic theology.',
          body: 'A Gothic cathedral was designed by faith. Every element was theological. To enter a cathedral was to enter a sermon — illiterate medieval peasants could read the entire Christian story in the stones, glass, and statues.' },
        { type: 'explain', title: 'The Cruciform Plan',
          body: 'The floor plan of a Gothic cathedral is a cross. The long body (the nave, from navis — ship) is where the people gather; we are the Church voyaging through history. The two short arms (the transepts) form the cross-piece — the outstretched arms of Christ. The head of the cross is the apse, with the altar — the head of the Mystical Body.' },
        { type: 'explain', title: 'Orientation',
          body: 'Cathedrals face EAST. Why? Because Christ is the Rising Sun (Malachi 4:2, Luke 1:78). At Mass the priest and people face east together (ad orientem), looking toward the rising of Christ — the parousia (Second Coming).' },
        { type: 'explain', title: 'Vertical Aspiration',
          body: 'Gothic cathedrals SOAR upward. Pointed arches, flying buttresses, towering spires — everything points up. The faithful, looking up, are drawn toward heaven. The walls are thin and full of glass — to flood the interior with colored light, which Pseudo-Dionysius called the most spiritual of all created realities.' },
        { type: 'explain', title: 'The Rose Window',
          body: 'The great circular stained-glass window — usually on the western facade — is the Rose Window. The rose symbolizes Mary (Mystical Rose, Rose of the Cross). Light shines THROUGH the rose, as Christ shone through Mary. The window is divided into petals like a perfect mandala — eternity made visible.' },
        { type: 'explain', title: 'Gargoyles and Saints',
          body: 'Outside the cathedral: gargoyles — grotesque demons, drawn but DRIVEN OUT by the Church. Saints in stone — the cloud of witnesses. Tympanums above the doors usually show the Last Judgment, the Nativity, or Christ in Glory — the first sermon you receive.' },
        { type: 'interactive', component: 'cathedral-explorer',
          title: 'Explore a Gothic Cathedral',
          body: 'Tap on any part of the floor plan: nave, apse, transept, side chapels. Each element will reveal its theology.' }
      ],
      questions: [
        { question: 'Why are cathedrals oriented to face east?',
          options: ['Tradition', 'Christ is the Rising Sun (East symbolizes His coming)', 'It catches morning light', 'Astronomical alignment'],
          correct_index: 1,
          explanation: 'Cathedrals face east because Christ is the Rising Sun (Malachi 4:2). At Mass ad orientem, the priest and people together face east — facing the rising of Christ in glory.' }
      ]
    },
    {
      slug: 'great-cathedrals',
      title: 'The Great Cathedrals of the World',
      subtitle: 'A tour of Catholic architectural wonders.',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'The Great Cathedrals',
          subtitle: 'Worldwide monuments to the glory of God.',
          body: 'Catholics built the greatest religious architecture in history. Here are some of the masterpieces.' },
        { type: 'gallery', title: 'Cathedral Wonders', items: [
          { name: 'St. Peter\'s Basilica, Rome', quote: 'The mother church of all Catholic churches. Built 1506-1626 on the site of the original Constantinian basilica, which was built over the tomb of St. Peter. Michelangelo\'s dome — the model for nearly every dome since. Bernini\'s baldacchino (the bronze canopy over the high altar) and St. Peter\'s Square (a perfect ellipse symbolizing the embrace of the Church).', role: 'Vatican City' },
          { name: 'Notre Dame de Paris', quote: 'Built 1163-1345. The pinnacle of French Gothic. Famous for the great rose windows. Burned April 2019; being restored. The Crown of Thorns, brought from Constantinople by St. Louis IX in 1239, was rescued from the fire.', role: 'Paris, France' },
          { name: 'Chartres Cathedral', quote: 'Built 1194-1220 after fire destroyed an earlier church. Famous for stained glass — 176 windows surviving from the 13th century, including the famous Chartres Blue. Pilgrimage shrine of the Sancta Camisa (the tunic of Mary, brought from Constantinople 876).', role: 'Chartres, France' },
          { name: 'Cologne Cathedral', quote: 'The largest Gothic cathedral north of the Alps. Begun 1248, finished 1880. Houses the Shrine of the Three Magi — a golden reliquary holding what are believed to be the relics of the Wise Men.', role: 'Cologne, Germany' },
          { name: 'Canterbury Cathedral', quote: 'Mother church of the Anglican Communion — but originally Catholic (founded by St. Augustine of Canterbury in 597). St. Thomas Becket was martyred here in 1170. Pilgrimage site for centuries (immortalized in Chaucer\'s Canterbury Tales).', role: 'Canterbury, England' },
          { name: 'Hagia Sophia, Istanbul', quote: 'Built 532-537 under Byzantine Emperor Justinian. The greatest church of the Christian East for nearly 1000 years. Converted to a mosque after the Ottoman conquest of Constantinople in 1453. Still standing — wounded but magnificent.', role: 'Istanbul (formerly Constantinople)' },
          { name: 'Sagrada Familia, Barcelona', quote: 'Antoni Gaudi\'s masterpiece. Begun 1882, still under construction (projected completion 2026). Modernist masterpiece — every element is theological. Gaudi\'s cause for canonization is open.', role: 'Barcelona, Spain' },
          { name: 'Basilica of Our Lady of Guadalupe', quote: 'Mexico City. The new basilica (1976) holds the miraculous tilma of St. Juan Diego. The most-visited Marian shrine in the world — over 20 million pilgrims annually.', role: 'Mexico City' },
          { name: 'St. John Lateran, Rome', quote: 'The Cathedral of Rome — and therefore the Pope\'s actual cathedral, not St. Peter\'s. Founded by Constantine in the 4th century. The "mother and head of all the churches of Rome and of the whole world."', role: 'Rome' }
        ] }
      ],
      questions: [
        { question: 'Which cathedral is technically the Pope\'s cathedral?',
          options: ['St. Peter\'s Basilica', 'St. John Lateran', 'Santa Maria Maggiore', 'Notre Dame'],
          correct_index: 1,
          explanation: 'St. John Lateran is the Cathedral of the Diocese of Rome — and therefore the Pope\'s actual cathedral. It\'s called "the mother and head of all churches." St. Peter\'s is the main papal basilica but not technically the cathedral.' }
      ]
    },
    {
      slug: 'sacred-art',
      title: 'Sacred Art Through the Ages',
      subtitle: 'Icons, Renaissance, Baroque — Catholic mastery of visual beauty.',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'Sacred Art Through the Ages',
          subtitle: 'Catholic artists produced more masterpieces than every other religion combined.',
          body: 'Why? Because Catholicism affirms matter. God became flesh in Christ. The body, paint, marble, sound — all can be sanctified, all can speak of God. The Reformation rejected images and centuries of artistic creativity. Catholic art continued.' },
        { type: 'gallery', title: 'Sacred Art by Era', items: [
          { name: 'Byzantine Icons', quote: 'Icons are not realistic paintings — they are theology in image. No shadows (heaven needs no light source other than God). Reversed perspective (the lines lead INTO the icon, drawing you in). Stylized faces. The icon is a window to heaven. Defended by St. John of Damascus in his Three Treatises on Sacred Images.', role: '500-1400 AD' },
          { name: 'Romanesque Frescoes', quote: 'Bold, simple, monumental. Walls painted with the entire Bible story. Cluny in France; the Pantocrator in Spanish Romanesque churches.', role: '900-1200 AD' },
          { name: 'Giotto (1267-1337)', quote: 'Italian early Renaissance painter. Painted naturalistic figures with real emotion (revolutionary at the time). Frescoes in the Scrovegni Chapel in Padua, the Basilica of St. Francis in Assisi.', role: 'Father of Italian painting' },
          { name: 'Fra Angelico (1395-1455)', quote: 'Dominican friar who painted as prayer. Said to weep when painting the Crucifixion. The Annunciation at San Marco, Florence — among the most beautiful paintings ever made. Beatified.', role: 'Bl. Fra Angelico' },
          { name: 'Raphael (1483-1520)', quote: 'High Renaissance master. The Sistine Madonna. The School of Athens. The Transfiguration (his last work, unfinished at his death at 37).', role: 'Renaissance perfection' },
          { name: 'Michelangelo (1475-1564)', quote: 'Sculptor, painter, architect, poet. The Pietà (Mary holding the dead Christ, carved at age 24). The David. The Sistine Chapel ceiling (Creation of Adam, Last Judgment). St. Peter\'s dome.', role: 'Universal genius' },
          { name: 'Leonardo da Vinci (1452-1519)', quote: 'The Last Supper. The Virgin of the Rocks. The Madonna Litta. Genius of every art and science.', role: 'Renaissance genius' },
          { name: 'Caravaggio (1571-1610)', quote: 'Baroque master of chiaroscuro (dramatic light and shadow). The Calling of St. Matthew. The Conversion of Paul. The Crucifixion of St. Peter. Light bursting from darkness — theology in oil.', role: 'Dramatic Baroque' },
          { name: 'Bernini (1598-1680)', quote: 'Sculptor and architect of Baroque Rome. The Ecstasy of St. Teresa (marble at the peak of mystic transport). St. Peter\'s baldacchino. The colonnade of St. Peter\'s Square.', role: 'Baroque genius' }
        ] }
      ],
      questions: [
        { question: 'Who painted the Sistine Chapel ceiling?',
          options: ['Raphael', 'Leonardo da Vinci', 'Michelangelo', 'Caravaggio'],
          correct_index: 2,
          explanation: 'Michelangelo painted the Sistine Chapel ceiling 1508-1512 (commissioned by Pope Julius II) and the Last Judgment on the altar wall 1536-1541 (commissioned by Pope Paul III).' }
      ]
    },
    {
      slug: 'sistine-chapel',
      title: 'The Sistine Chapel',
      subtitle: 'Michelangelo\'s masterpiece — the Bible in paint.',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'The Sistine Chapel',
          subtitle: 'Salvation history on a single ceiling.',
          body: 'The Sistine Chapel is the Pope\'s private chapel and the place where the conclave elects new popes. Built by Pope Sixtus IV (1473-1481) — hence Sistine. Decorated by Michelangelo from 1508-1512 (ceiling) and 1536-1541 (Last Judgment on the altar wall). Among the supreme achievements of human art.' },
        { type: 'explain', title: 'The Ceiling — Nine Central Panels',
          body: 'Michelangelo painted nine central scenes from Genesis, in three sets of three:\n\nCREATION SCENES: (1) God Separating Light from Darkness, (2) Creation of Sun, Moon, Earth, (3) Separation of Land and Water.\n\nADAM AND EVE: (4) Creation of Adam — the iconic touching fingers, (5) Creation of Eve, (6) The Fall and Expulsion.\n\nNOAH: (7) The Sacrifice of Noah, (8) The Flood, (9) The Drunkenness of Noah.\n\nAround these: prophets (Isaiah, Jeremiah, Ezekiel, Daniel, Joel, Zechariah, Jonah) and pagan sibyls (the Delphic, Erythraean, Cumaean, Persian, Libyan) — pagan prophetesses who Christians believed had foretold Christ. Below: the Ancestors of Christ from Matthew\'s genealogy.' },
        { type: 'explain', title: 'The Last Judgment',
          body: 'Painted on the altar wall 25 years later. Christ in glory, His Mother beside Him, surrounded by saints. The blessed rise on the left; the damned fall on the right. Charon ferries souls to hell. Michelangelo painted himself as the flayed skin of St. Bartholomew — confessing his own need for Christ\'s mercy. The fresco caused scandal for nudity; some figures were later draped (the "Trousers Painter").' },
        { type: 'explain', title: 'Why It Matters',
          body: 'The Sistine Chapel is the greatest single visual statement of Catholic faith ever made. To stand under its ceiling is to be wrapped in the entire story of salvation — creation, fall, redemption, judgment. Michelangelo prayed as he painted. The ceiling is his prayer made visible.' }
      ],
      questions: [
        { question: 'On what wall is Michelangelo\'s Last Judgment painted?',
          options: ['The ceiling', 'The altar wall', 'The entrance wall', 'The side wall'],
          correct_index: 1,
          explanation: 'The Last Judgment fills the entire altar wall — facing the worshiper. Michelangelo painted it 1536-1541, 25 years after the ceiling.' }
      ]
    },
    {
      slug: 'sacred-music',
      title: 'Sacred Music',
      subtitle: 'Gregorian chant to Mozart — Catholic music history.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'Sacred Music',
          subtitle: 'The Church gave the world Gregorian chant — and Bach\'s Mass.',
          body: 'Music is the most spiritual of arts — it has no body. Sacred music is the highest form of music. The Church developed it across two millennia.' },
        { type: 'explain', title: 'Gregorian Chant',
          body: 'Named after St. Gregory the Great (pope 590-604) who promoted and standardized it. Chant is the Church\'s OWN music — a single melodic line, in Latin, freely flowing without modern meter, sung in eight modes (ancient scales).\n\nVatican II affirmed: "Gregorian chant... should be given pride of place in liturgical services" (Sacrosanctum Concilium 116). Many parishes have rediscovered it.' },
        { type: 'explain', title: 'Polyphony',
          body: 'Around 1100, music began layering multiple melodic lines. By 1500 this had developed into polyphony — multiple voices weaving together. The pinnacle: Giovanni Palestrina (1525-1594) — wrote Masses so beautiful they nearly single-handedly saved sacred polyphony from being banned at Trent. His Missa Papae Marcelli is a masterpiece.' },
        { type: 'explain', title: 'Baroque and Classical Sacred Music',
          body: 'BACH (1685-1750) — Lutheran but Catholic in spirit. His B Minor Mass, the Passions, the cantatas — among the greatest sacred music ever written. Bach signed his manuscripts "Soli Deo Gloria" — to God alone the glory.\n\nMOZART (1756-1791) — Catholic. Requiem, Coronation Mass, Vespers. His Ave Verum Corpus is one of the most perfect short choral works.\n\nHAYDN, BEETHOVEN, BRUCKNER — all wrote great Masses.' },
        { type: 'explain', title: 'Contemporary Sacred Music',
          body: 'The Church\'s instruction is clear: sacred music must be SACRED (oriented to God), BEAUTIFUL (excellence in form), and UNIVERSAL (accessible across cultures). Not all "Christian music" is sacred music. The Mass deserves the best.\n\nGood contemporary composers: Arvo Pärt, Sir James MacMillan, John Tavener, Eric Whitacre.' }
      ],
      questions: [
        { question: 'Who is Gregorian chant named after?',
          options: ['St. Gregory the Great (Pope 590-604)', 'St. Gregory of Nyssa', 'A medieval monk named Gregory', 'Pope Gregory VII'],
          correct_index: 0,
          explanation: 'St. Gregory the Great (Pope 590-604) is traditionally credited with collecting and standardizing the chant that bears his name.' }
      ]
    },
    {
      slug: 'mary-in-art',
      title: 'Mary in Art',
      subtitle: 'The most painted woman in history.',
      xp_reward: 60, duration_minutes: 11,
      slides: [
        { type: 'hero', title: 'Mary in Art',
          subtitle: 'No human being has inspired more art than Mary.',
          body: 'From the catacombs to today, Catholic artists have depicted Mary in every era and style. Each captures something of her mystery — Virgin Mother, Mother of God, Queen of Heaven, our Mother.' },
        { type: 'gallery', title: 'Marian Masterpieces', items: [
          { name: 'Byzantine Theotokos', quote: 'The earliest Christian images of Mary. She always holds the Child Jesus. Her pose: pointing to Him — "He is the way." She is never alone in early icons; always with Christ.', role: 'Constantinople, 6th-15th c.' },
          { name: 'Gothic Madonnas', quote: 'Gentler, more human. Mary as the ideal of Christian womanhood. The Vierge of Chartres. The Black Madonnas (centuries-old icons that have darkened with age and prayer).', role: '11th-15th c.' },
          { name: 'Michelangelo\'s Pietà', quote: 'Carved 1499 when Michelangelo was just 24. Mary holding the dead Christ. Mary is shown as young — eternally pure, untouched by time. The body of Christ rests in her arms with profound peace. Marble made flesh. Still in St. Peter\'s Basilica.', role: 'Vatican' },
          { name: 'Raphael\'s Madonnas', quote: 'Raphael painted Mary dozens of times. The Sistine Madonna (with the two famous cherubs at the bottom). The Madonna of the Goldfinch. The Madonna della Sedia. Pure Renaissance ideals — beauty, gentleness, love.', role: 'Renaissance Italy' },
          { name: 'Tilma of Guadalupe', quote: 'Not painted by human hand. The miraculous image left on St. Juan Diego\'s cactus-fiber cloak in 1531. Mary is shown brown-skinned, pregnant, surrounded by the sun, the moon under her feet, twelve stars on her mantle — Revelation 12 made visible. Scientifically inexplicable preservation for 500 years.', role: 'Mexico, 1531' },
          { name: 'The Immaculate Conception', quote: 'Murillo, Velazquez, and other Spanish Baroque painters made the Immaculate Conception their signature subject. Mary crushing the serpent\'s head, surrounded by clouds and stars and cherubs.', role: 'Spanish Baroque' }
        ] }
      ],
      questions: [
        { question: 'How old was Michelangelo when he carved the Pietà?',
          options: ['15', '24', '40', '60'],
          correct_index: 1,
          explanation: 'Michelangelo carved the Pietà 1498-1499 when he was just 24 years old. It remains his only signed sculpture — he carved his name on Mary\'s sash after overhearing visitors attribute it to another artist.' }
      ]
    }
  ]
};
