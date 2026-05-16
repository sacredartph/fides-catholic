// 10 famous Catholic cathedrals/basilicas with real Wikimedia Commons photos.
// All URLs are direct links to Wikimedia Commons high-res JPEGs.
// hotspots: percentages relative to the image (x,y) where 0,0 = top-left.

module.exports = [
  {
    slug: 'st-peters-rome',
    name: 'St. Peter\'s Basilica',
    city: 'Vatican City',
    country: 'Italy',
    built_start: '1506', built_end: '1626',
    style: 'Renaissance / Baroque',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/0_Bas%C3%ADlica_de_San_Pedro_-_Ciudad_del_Vaticano.JPG/1280px-0_Bas%C3%ADlica_de_San_Pedro_-_Ciudad_del_Vaticano.JPG',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/0_Bas%C3%ADlica_de_San_Pedro_-_Ciudad_del_Vaticano.JPG/640px-0_Bas%C3%ADlica_de_San_Pedro_-_Ciudad_del_Vaticano.JPG',
    image_credit: 'Photo by Jean-Pol GRANDMONT / Wikimedia Commons (CC BY-SA)',
    short_summary: 'The largest church in the world. Built directly over the tomb of St. Peter. Heart of Catholicism.',
    full_history: 'St. Peter was crucified upside down in the Circus of Nero around AD 64-67, and buried in a small cemetery on the Vatican Hill. Constantine the Great built the first basilica over his tomb in AD 324. By the 1500s the old basilica was crumbling. Pope Julius II began the new building in 1506 with Bramante as architect. Michelangelo (age 71) took over the project in 1546 and designed the world\'s most famous dome — completed after his death by della Porta. Bernini added the colonnade of St. Peter\'s Square (1656-67) — two arms reaching out to embrace the world. Modern archaeology has confirmed: directly beneath the high altar are bones identified with high probability as those of the Apostle Peter himself.',
    architectural_significance: 'The dome is 136m (448 ft) high — the model for every domed church and capitol since. The Latin cross floor plan can hold 60,000 worshipers. Bernini\'s baldacchino over the high altar is the largest bronze structure of its kind. The piazza\'s elliptical shape (designed by Bernini) symbolizes the embracing arms of the Church.',
    notable_relics: 'Tomb of St. Peter directly below the high altar. Veronica\'s Veil. Lance of Longinus. Tombs of 91 popes.',
    patron_saints: 'St. Peter, St. Paul (jointly the patrons of the city of Rome).',
    hotspots: JSON.stringify([
      { x: 50, y: 30, title: 'Michelangelo\'s Dome',
        body: 'Designed in 1547. 136m (448 ft) high. Inspired by the Pantheon and Florence Cathedral. Inside, look up at the inscription in Latin: "TU ES PETRUS ET SUPER HANC PETRAM AEDIFICABO ECCLESIAM MEAM" — "You are Peter, and on this rock I will build my Church."' },
      { x: 50, y: 65, title: 'The Facade',
        body: 'Designed by Carlo Maderno (1607-1614). 116m wide. Statues of Christ the Redeemer and the eleven apostles (Peter is inside, near his tomb) line the top. The central balcony is where new popes are first announced ("Habemus Papam") and where the Pope gives the Urbi et Orbi blessing.' },
      { x: 30, y: 70, title: 'Bernini\'s Colonnade',
        body: 'Two semicircular colonnades of 284 columns and 88 pillars in 4 rows. Bernini said they were "the arms of Mother Church reaching out to embrace believers, to confirm them in their faith, to reconcile heretics, and to enlighten unbelievers."' },
      { x: 70, y: 70, title: 'Egyptian Obelisk',
        body: 'In the center of the piazza. Brought to Rome from Egypt by Caligula in AD 37. Originally stood at the spina of the Circus of Nero — Peter literally saw it on the day of his crucifixion. Crowned with a cross by Pope Sixtus V in 1586.' },
      { x: 50, y: 50, title: 'The High Altar',
        body: 'Only the Pope may celebrate Mass at this altar. Directly below is the tomb of St. Peter — confirmed archaeologically in 1968. Bernini\'s 28m bronze baldacchino (1623-34) towers above it, twisted columns evoking those of Solomon\'s Temple.' }
    ]),
    fun_facts: JSON.stringify([
      'The dome\'s interior is so vast that an American football field would fit inside it.',
      'The basilica contains 27 chapels, 45 altars, and 800+ columns.',
      'Michelangelo refused payment for designing the dome — he did it "for the love of God."',
      'The bronze for Bernini\'s baldacchino was stripped from the portico of the ancient Pantheon — provoking Pasquino\'s famous Roman quip "What the barbarians did not do, the Barberini did" (Pope Urban VIII was a Barberini).',
      'The body of every Pope since 1903 (except John Paul I, briefly, and Benedict XVI initially) has been displayed here for public viewing before burial.'
    ])
  },

  {
    slug: 'notre-dame-paris',
    name: 'Notre Dame de Paris',
    city: 'Paris',
    country: 'France',
    built_start: '1163', built_end: '1345',
    style: 'French Gothic',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Notre-Dame_de_Paris%2C_4_October_2017.jpg/1280px-Notre-Dame_de_Paris%2C_4_October_2017.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Notre-Dame_de_Paris%2C_4_October_2017.jpg/640px-Notre-Dame_de_Paris%2C_4_October_2017.jpg',
    image_credit: 'Photo by Peter Haas / Wikimedia Commons (CC BY-SA)',
    short_summary: 'The most famous Gothic cathedral in the world. Heart of Paris and of medieval Christendom. Burned in 2019, restoration nearing completion.',
    full_history: 'Bishop Maurice de Sully began Notre Dame in 1163, replacing a Romanesque cathedral on the Île de la Cité. Construction took 180+ years across multiple kings. St. Louis IX brought the Crown of Thorns to Paris in 1239 — eventually housed here. The cathedral witnessed the coronation of Napoleon (1804), the canonization of Joan of Arc (1920), the funerals of De Gaulle and Pompidou. On April 15, 2019, fire devastated the roof and spire — but the stone vaulting held, and the Crown of Thorns was rescued. Restoration completed in late 2024.',
    architectural_significance: 'Among the first Gothic cathedrals — flying buttresses (added c. 1180) allowed enormous walls of stained glass. The three rose windows are masterpieces of medieval glasswork. The 13th-century North Rose survived the fire.',
    notable_relics: 'The Crown of Thorns (brought to Paris by St. Louis IX in 1239). Fragments of the True Cross. The Holy Nail. Tunic of St. Louis IX.',
    patron_saints: 'Our Lady (Notre Dame = Our Lady).',
    hotspots: JSON.stringify([
      { x: 50, y: 55, title: 'West Rose Window',
        body: 'The original 13th-century stained glass window centers on Mary with the Christ Child, surrounded by Old Testament prophets and kings — the lineage that led to the Incarnation. 9.6m diameter.' },
      { x: 50, y: 85, title: 'The Western Portals',
        body: 'Three great doorways: the Portal of the Last Judgment (center), Portal of the Virgin (left), Portal of St. Anne (right). Each is a sermon in stone — the medieval faithful learned doctrine from these sculptures.' },
      { x: 25, y: 40, title: 'North Tower',
        body: 'You can climb 387 steps to the top. From here Quasimodo rang the great bell "Emmanuel" — still the heaviest bell in Notre Dame at 13 tons.' },
      { x: 75, y: 40, title: 'South Tower',
        body: 'Houses the gargoyles and chimeras — the famous grotesques carved during Viollet-le-Duc\'s 19th-century restoration. Symbolically: evil driven OUT of the Church and made to drain rainwater.' }
    ]),
    fun_facts: JSON.stringify([
      'The bees on the cathedral\'s roof survived the 2019 fire — beekeepers feared the worst but the hives were below the inferno.',
      'Joan of Arc was condemned in 1431 but exonerated in 1456; her cause was advanced in Notre Dame; she was canonized here in 1920.',
      'In 1844 the cathedral was so dilapidated that Victor Hugo wrote "The Hunchback of Notre Dame" partly to save it — public outcry led to its restoration.',
      'The fire of April 15, 2019 began during Holy Week. Catholics worldwide watched in horror; the next day President Macron pledged restoration in 5 years — kept by Dec 2024.'
    ])
  },

  {
    slug: 'chartres',
    name: 'Chartres Cathedral',
    city: 'Chartres',
    country: 'France',
    built_start: '1194', built_end: '1220',
    style: 'French High Gothic',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Cath%C3%A9drale_de_Chartres%2C_France_-_panoramio.jpg/1280px-Cath%C3%A9drale_de_Chartres%2C_France_-_panoramio.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Cath%C3%A9drale_de_Chartres%2C_France_-_panoramio.jpg/640px-Cath%C3%A9drale_de_Chartres%2C_France_-_panoramio.jpg',
    image_credit: 'Photo by Marc Ryckaert / Wikimedia Commons (CC BY-SA)',
    short_summary: 'The pinnacle of French Gothic. 176 stained-glass windows from the 13th century survive, in the legendary "Chartres Blue."',
    full_history: 'When the old Romanesque cathedral burned in 1194, the people of Chartres were devastated — but the Sancta Camisa (Mary\'s tunic, brought from Constantinople in 876) was found undamaged in the crypt. The miraculous preservation prompted rebuilding faster than any cathedral of its scale — done in 26 years (1194-1220), an architectural miracle. The unified design and original glass make Chartres the most complete example of High Gothic surviving.',
    architectural_significance: 'The two asymmetrical spires (one Romanesque-old, one Gothic-tall) symbolize the unity of all Christian art. The labyrinth on the nave floor was walked as a pilgrimage substitute by those who could not travel to Jerusalem.',
    notable_relics: 'The Sancta Camisa (the tunic of the Virgin Mary, given to Charlemagne by Empress Irene of Constantinople and to Chartres by Charles the Bald in 876).',
    patron_saints: 'Our Lady.',
    hotspots: JSON.stringify([
      { x: 30, y: 30, title: 'Old Bell Tower (S. Tower)',
        body: 'Begun 1145, Romanesque style, capped with a simple pyramidal roof. Survived the 1194 fire that destroyed the rest of the church.' },
      { x: 70, y: 25, title: 'New Bell Tower (N. Tower)',
        body: 'The taller, more decorated spire — added in the early 16th century in Flamboyant Gothic style.' },
      { x: 50, y: 60, title: 'West (Royal) Portal',
        body: 'Sculpted 1145-1155 — one of the masterpieces of medieval art. The Old Testament kings and queens (statues-columns) are the ancestors of Christ. The central tympanum shows Christ in Glory surrounded by the four Evangelists\' symbols.' },
      { x: 50, y: 80, title: 'The Labyrinth',
        body: 'A path drawn into the nave floor, 261m long. Pilgrims walk it on their knees as a substitute for pilgrimage to Jerusalem — symbolizing the soul\'s journey to God.' }
    ]),
    fun_facts: JSON.stringify([
      'The famous "Chartres Blue" of the stained glass cannot be perfectly recreated — its chemical composition is a lost medieval secret.',
      'During WWII the glass was disassembled and hidden to protect from Allied bombing. American forces verified the cathedral was empty before considering it as a target.',
      'The cathedral has 176 stained glass windows totaling 2,500 square meters — more original 13th-century glass than any cathedral in the world.',
      'St. Bernard of Clairvaux preached the Second Crusade from these steps in 1146.'
    ])
  },

  {
    slug: 'cologne',
    name: 'Cologne Cathedral (Kölner Dom)',
    city: 'Cologne',
    country: 'Germany',
    built_start: '1248', built_end: '1880',
    style: 'High Gothic',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cologne_-_panoramio_-_Frans-Banja_Mulder_%282%29.jpg/1280px-Cologne_-_panoramio_-_Frans-Banja_Mulder_%282%29.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cologne_-_panoramio_-_Frans-Banja_Mulder_%282%29.jpg/640px-Cologne_-_panoramio_-_Frans-Banja_Mulder_%282%29.jpg',
    image_credit: 'Photo by Frans-Banja Mulder / Wikimedia Commons (CC BY)',
    short_summary: 'The largest Gothic cathedral in northern Europe. Built for 632 years. Houses the relics of the Three Magi.',
    full_history: 'Construction began in 1248 to house the relics of the Three Magi (brought from Milan in 1164). Money and politics interrupted; the unfinished cathedral stood half-built for 300 years with a medieval crane on top. Construction resumed in 1842 with the original 13th-century plans and finished in 1880 — exactly to spec. In WWII, 14 air bombs hit it directly; the two towers survived as the only intact landmarks in a flattened city. Allied pilots used the cathedral towers as a navigational reference and avoided dropping on them deliberately.',
    architectural_significance: '157m towers — the tallest cathedral towers in the world from 1880-1884. Largest facade of any church. Treasured Gothic vaulting and stained glass survived WWII intact.',
    notable_relics: 'The Shrine of the Three Magi — the largest reliquary in the Western world, golden, 12th-century. Holds (according to tradition) the bones of the Wise Men who visited the infant Jesus.',
    patron_saints: 'St. Peter (the cathedral\'s formal dedication) and the Blessed Virgin Mary.',
    hotspots: JSON.stringify([
      { x: 50, y: 20, title: 'The Twin Spires',
        body: '157 meters tall. From 1880-1884 they were the tallest structures in the world. Standing 1.5 hours\' climb from the floor. The view at the top reveals the whole Rhine.' },
      { x: 50, y: 70, title: 'The Western Facade',
        body: '7,000 square meters of carved stone. Designed by Master Gerhard in 1248, completed exactly as designed in 1880. The Gothic principle: vertical lines drawing the soul heavenward.' },
      { x: 50, y: 50, title: 'Behind: The Shrine of the Magi',
        body: '(Inside) The 12th-century golden reliquary contains skulls and bones traditionally identified with the Three Wise Men — brought to Cologne from Milan in 1164. Pilgrims have venerated them for 850 years.' }
    ]),
    fun_facts: JSON.stringify([
      'Cologne Cathedral is a UNESCO World Heritage Site.',
      'In 1996 it was placed on the "World Heritage in Danger" list because of a planned tall building nearby — Germany changed the building height to save the listing.',
      'There are over 6 million visitors per year — Germany\'s most visited landmark.',
      'The bells of Cologne, including the 24-ton St. Petersglocke (cast 1923, the largest free-swinging church bell in the world), ring for great feasts.'
    ])
  },

  {
    slug: 'sagrada-familia',
    name: 'Basilica de la Sagrada Família',
    city: 'Barcelona',
    country: 'Spain',
    built_start: '1882', built_end: 'Ongoing (projected 2026)',
    style: 'Modernist (Gaudí)',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sagrada_Familia_01.jpg/1280px-Sagrada_Familia_01.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sagrada_Familia_01.jpg/640px-Sagrada_Familia_01.jpg',
    image_credit: 'Photo by C messier / Wikimedia Commons (CC BY-SA)',
    short_summary: 'Antoni Gaudí\'s masterpiece — under construction since 1882. Every element is theological. Gaudí\'s cause for canonization is open.',
    full_history: 'Begun in 1882 by architect Francesc del Villar. Antoni Gaudí took over in 1883 at age 31 and devoted the next 43 years to it. After 1914 he worked on nothing else, living in a workshop on site. Gaudí was struck by a tram in 1926 — at first not recognized because of his shabby clothes — and died days later. The Spanish Civil War destroyed his models; modern architects work from photographs and recovered fragments. Pope Benedict XVI consecrated the basilica in 2010 (Gaudí lived only to see the crypt and one facade completed). Projected completion 2026 — the centenary of Gaudí\'s death.',
    architectural_significance: 'Every column inside is unique — tilted to imitate trees, creating a "stone forest" effect. The towers (18 in total when complete) represent the 12 Apostles, 4 Evangelists, Mary, and Christ. The central Christ tower will be 172.5m — one meter less than the local Montjuic mountain, "because nothing should be higher than God\'s mountain."',
    notable_relics: 'Gaudí himself is buried in the crypt — his cause for canonization opened by the Archdiocese of Barcelona in 2003.',
    patron_saints: 'The Holy Family (Jesus, Mary, Joseph).',
    hotspots: JSON.stringify([
      { x: 50, y: 25, title: 'The Christ Tower (under construction)',
        body: 'When completed (target 2026), it will be 172.5m tall — Spain\'s tallest religious building. Topped with a 17m cross. Gaudí specified the height so that "the work of man should not surpass the work of God" (the Montjuic hill).' },
      { x: 25, y: 50, title: 'Nativity Facade',
        body: 'Completed in Gaudí\'s lifetime. Joyful, fantastical, every figure a celebration of Christ\'s birth. East-facing — catches the rising sun.' },
      { x: 75, y: 50, title: 'Passion Facade',
        body: 'West-facing. Stark, angular, austere — Gaudí intentionally designed it as a contrast to the Nativity facade. Sculptor Josep Maria Subirachs completed the figures.' },
      { x: 50, y: 70, title: 'Inside: The Stone Forest',
        body: 'Gaudí\'s genius: tilted columns that branch like trees, creating a canopy effect. Filtered through stained glass, the interior becomes a forest in liturgical color.' }
    ]),
    fun_facts: JSON.stringify([
      'Gaudí never made full architectural drawings — he worked from physical models that were destroyed in the Spanish Civil War. Reconstruction relied on photographs.',
      'The basilica is funded entirely by donations and visitor tickets — no state or Church subsidy.',
      'Pope Benedict XVI dedicated it in 2010 as the eighth Roman basilica outside Rome.',
      'When the Christ tower is finished in 2026, the basilica will be among the tallest churches in the world.'
    ])
  },

  {
    slug: 'hagia-sophia',
    name: 'Hagia Sophia',
    city: 'Constantinople (Istanbul)',
    country: 'Turkey',
    built_start: '532', built_end: '537',
    style: 'Byzantine',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hagia_Sophia_Mars_2013.jpg/1280px-Hagia_Sophia_Mars_2013.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hagia_Sophia_Mars_2013.jpg/640px-Hagia_Sophia_Mars_2013.jpg',
    image_credit: 'Photo by Arild Vågen / Wikimedia Commons (CC BY-SA)',
    short_summary: 'The greatest cathedral of the Christian East for 1,000 years. Now a mosque. Built by Justinian in just 5 years. Architectural marvel.',
    full_history: 'Built by Byzantine Emperor Justinian I in 532-537 after the Nika Riots destroyed an earlier basilica on the site. Justinian reportedly said upon entering it: "Solomon, I have surpassed thee!" It was the world\'s largest cathedral and most influential dome for nearly 1,000 years. Site of the formal mutual excommunication between East and West in 1054 — the Great Schism. After the Ottoman conquest of Constantinople in 1453, Sultan Mehmed II converted it to a mosque. In 1934 Atatürk secularized it as a museum. In 2020 the Turkish government re-converted it to a mosque. The Christian mosaics, plastered over by the Ottomans, were partly revealed in the 20th century and remain visible.',
    architectural_significance: 'The 31m-diameter dome appeared to "hover on a chain from heaven" — Procopius. Its engineering was a marvel never equaled until the Renaissance. The whole Eastern Christian architectural tradition derives from it.',
    notable_relics: 'Once held many relics including (tradition) parts of the True Cross, fragments of Mary\'s tomb stone. Most were lost to the 1204 Latin Crusader sack of Constantinople; some made their way to Western European cathedrals.',
    patron_saints: 'Holy Wisdom (Hagia Sophia = "Holy Wisdom," understood as Christ Himself, the Wisdom of God).',
    hotspots: JSON.stringify([
      { x: 50, y: 30, title: 'The Great Dome',
        body: '31m diameter, 56m above the floor. Rests on four pendentives — a Byzantine engineering invention that allows a circular dome to rest on a square base. Has survived earthquakes that destroyed many later buildings.' },
      { x: 50, y: 50, title: 'The Four Minarets',
        body: 'Added by the Ottomans after 1453 to convert the church to a mosque. Each from a different era. The Christian cross was removed from the dome and replaced with the crescent.' },
      { x: 25, y: 70, title: 'Mosaic of Christ Pantocrator (inside)',
        body: 'On the dome and apse, mosaics of Christ, Mary, and the saints were plastered over by the Ottomans but partially uncovered in the 20th century. They remain among the greatest Byzantine works ever made.' }
    ]),
    fun_facts: JSON.stringify([
      'Hagia Sophia served as a Christian cathedral for 916 years, a Catholic cathedral for 60 years (during the Crusader occupation 1204-1261), a mosque for 481 years, a museum for 86 years, and is now a mosque again.',
      'The original Christian inscription "Holy, Holy, Holy" in the dome inscription is still visible to those who know where to look.',
      'During the Latin Empire (1204-1261), a Roman Catholic patriarchate operated from here — the only time the Church in Constantinople was directly under Rome.',
      'Many Catholic traditions (the iconostasis, the use of incense, the eastward orientation of churches) derive from or were perfected here.'
    ])
  },

  {
    slug: 'westminster-cathedral',
    name: 'Westminster Cathedral',
    city: 'London',
    country: 'United Kingdom',
    built_start: '1895', built_end: '1903',
    style: 'Neo-Byzantine',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Westminster_Cathedral_-_geograph.org.uk_-_1126411.jpg/1280px-Westminster_Cathedral_-_geograph.org.uk_-_1126411.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Westminster_Cathedral_-_geograph.org.uk_-_1126411.jpg/640px-Westminster_Cathedral_-_geograph.org.uk_-_1126411.jpg',
    image_credit: 'Photo by Paul Gillett / Geograph.org.uk (CC BY-SA)',
    short_summary: 'The mother church of the Catholic Church in England and Wales. Built after Catholic Emancipation. Striped brick Neo-Byzantine masterpiece.',
    full_history: 'After the Reformation, Catholics in England suffered three centuries of severe persecution and could not legally hold public office or build public churches. Catholic Emancipation (1829) and the Restoration of the Hierarchy (1850) allowed the building of a great Catholic cathedral. Cardinal Manning began fundraising in 1865. Cardinal Vaughan completed it in 1903. Built deliberately NOT in the Gothic style of Anglican Westminster Abbey — a Byzantine basilica to signal continuity with the early undivided Church. The mosaic decoration is being completed gradually — over 120 years now, deliberately.',
    architectural_significance: 'Striped Italian-style brick and Portland stone exterior. The interior follows the Byzantine model with a high nave, gallery, and apse, and is gradually being covered in mosaics. The Stations of the Cross by Eric Gill (1914-1918) are considered masterpieces.',
    notable_relics: 'Body of Cardinal John Henry Newman moved here briefly. Hand of St. John Southworth (martyr, d. 1654). Vestments and other relics of the English Martyrs.',
    patron_saints: 'The Most Precious Blood of Jesus Christ.',
    hotspots: JSON.stringify([
      { x: 50, y: 35, title: 'The Striped Tower',
        body: '87m campanile dedicated to St. Edward the Confessor. The red brick and Portland stone bands (12 of each) deliberately recall Italian basilica towers like St. Mark\'s in Venice.' },
      { x: 50, y: 60, title: 'The Facade',
        body: 'Three great arched portals. Above the main door, mosaic of Christ enthroned. Designed deliberately NOT to copy Westminster Abbey (which is Anglican) — Byzantine basilica instead.' }
    ]),
    fun_facts: JSON.stringify([
      'Westminster Cathedral is the Catholic cathedral of London. Westminster ABBEY is the Anglican royal church — they are different buildings.',
      'The interior is deliberately unfinished. Each generation adds more mosaic work — emphasizing that the Church\'s glory is still under construction.',
      'Eric Gill\'s Stations of the Cross sculptures, completed under censorship pressure 1914-1918, are considered among the greatest religious works of 20th-century England.',
      'The cathedral seats 3,000 and has 12 side chapels.'
    ])
  },

  {
    slug: 'st-patricks-nyc',
    name: 'St. Patrick\'s Cathedral',
    city: 'New York City',
    country: 'United States',
    built_start: '1858', built_end: '1878',
    style: 'Neo-Gothic',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/St_Patrick%27s_Cathedral_Manhattan.jpg/1280px-St_Patrick%27s_Cathedral_Manhattan.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/St_Patrick%27s_Cathedral_Manhattan.jpg/640px-St_Patrick%27s_Cathedral_Manhattan.jpg',
    image_credit: 'Photo by Joe Mabel / Wikimedia Commons (CC BY-SA)',
    short_summary: 'The largest decorated Neo-Gothic Catholic cathedral in North America. Heart of New York Catholicism.',
    full_history: 'When Archbishop John Hughes proposed building a cathedral on rural land "miles outside the city" in 1853, New Yorkers laughed — but he persisted. Construction began 1858. The Civil War interrupted. Cardinal McCloskey dedicated the cathedral in 1879 and was elevated to be the first U.S. Cardinal in 1875. The spires were completed in 1888. Now surrounded by Manhattan\'s most expensive real estate, the cathedral hosts 5 million visitors per year.',
    architectural_significance: 'Stone facing of Tuckahoe marble. 100m long nave. Twin spires 100m high. Stained glass from Chartres workshops in France.',
    notable_relics: 'Tomb of St. Frances Xavier Cabrini (briefly), Archbishop Fulton Sheen. Tombs of New York\'s Cardinals beneath the high altar.',
    patron_saints: 'St. Patrick.',
    hotspots: JSON.stringify([
      { x: 50, y: 40, title: 'Twin Spires',
        body: '100m high. Completed 1888 — 10 years after the cathedral was first opened. They cost as much as the original structure.' },
      { x: 50, y: 70, title: 'The Bronze Doors',
        body: 'The main doors weigh 9,200 pounds each but are so well balanced one person can open them. Cast in 1949. Depict American saints and beatified persons.' },
      { x: 25, y: 50, title: 'The Lady Chapel',
        body: 'Behind the main altar. Added 1901-1906. Houses the cathedral\'s only English-medieval-style stained glass.' }
    ]),
    fun_facts: JSON.stringify([
      'Major restoration was completed in 2015 — gold leaf, stained glass, organ all renewed.',
      'St. Patrick\'s hosts approximately 80 weddings per year and over 700 funerals.',
      'Annual St. Patrick\'s Day Mass on March 17 is the highest-attended event of the year.',
      'The Stations of the Cross won a Catholic art prize at the Paris Exhibition of 1893 before being installed here.'
    ])
  },

  {
    slug: 'guadalupe-basilica',
    name: 'Basilica of Our Lady of Guadalupe',
    city: 'Mexico City',
    country: 'Mexico',
    built_start: '1974', built_end: '1976',
    style: 'Modernist',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Basilica_de_Guadalupe.jpg/1280px-Basilica_de_Guadalupe.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Basilica_de_Guadalupe.jpg/640px-Basilica_de_Guadalupe.jpg',
    image_credit: 'Photo by Alejandro Linares Garcia / Wikimedia Commons (CC BY-SA)',
    short_summary: 'The most-visited Marian shrine in the world. 20 million pilgrims annually. Holds the miraculous tilma of St. Juan Diego.',
    full_history: 'On December 9-12, 1531, the Blessed Virgin Mary appeared to St. Juan Diego, an Aztec convert, at Tepeyac Hill — speaking Nahuatl. She left her miraculous image on his cactus-fiber tilma. Within a decade, 8 million Aztecs were baptized — the largest mass conversion in history. The first chapel was built in 1531; multiple sanctuaries followed. The current Modernist basilica (1976) was designed by Pedro Ramírez Vázquez because the old basilica was sinking and could not accommodate the millions of pilgrims. The tilma is housed behind the high altar with a moving sidewalk allowing the faithful to pass under it.',
    architectural_significance: 'Capacity for 10,000 inside, 40,000 in the plaza. Designed so that pilgrims can view the tilma from anywhere in the building. Inverted-roof design (resembling the Virgin\'s mantle).',
    notable_relics: 'The tilma of Juan Diego (1531) — the miraculous image of Our Lady of Guadalupe.',
    patron_saints: 'Our Lady of Guadalupe — Patroness of the Americas.',
    hotspots: JSON.stringify([
      { x: 50, y: 50, title: 'The Tilma (inside)',
        body: 'The miraculous image left on Juan Diego\'s cactus-fiber cloak in December 1531. Scientific examination cannot explain: the absence of underdrawing, the preservation of cactus fiber for 500 years (it should have decayed within 20), tiny reflected human figures in Mary\'s eyes, stars on her mantle matching the Mexico City sky on Dec 12, 1531.' },
      { x: 50, y: 30, title: 'The Inverted Mantle Roof',
        body: 'The basilica is designed as a giant mantle — like Mary covering her children. The single steel suspension point distributes weight invisibly.' }
    ]),
    fun_facts: JSON.stringify([
      'The Basilica of Guadalupe is the most-visited Catholic shrine in the world — more pilgrims annually than St. Peter\'s in Rome.',
      'In 1921 a bomb hidden in flowers at the altar exploded — the brass crucifix was twisted but the tilma was unharmed. The cross is now displayed.',
      'In 1933, scientific analysis by Richard Kuhn (Nobel-winning chemist) reported the colors on the tilma do not match any known dye, vegetable, animal, or mineral.',
      'The old basilica next door was decommissioned in 1976 because it was sinking into the soft soil of Mexico City — visibly tilted. It is still used for some services.'
    ])
  },

  {
    slug: 'santa-maria-maggiore',
    name: 'Basilica of St. Mary Major',
    city: 'Rome',
    country: 'Italy',
    built_start: '432', built_end: '440',
    style: 'Early Christian / Baroque additions',
    hero_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Basilica_di_Santa_Maria_Maggiore_-_2018.jpg/1280px-Basilica_di_Santa_Maria_Maggiore_-_2018.jpg',
    thumb_image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Basilica_di_Santa_Maria_Maggiore_-_2018.jpg/640px-Basilica_di_Santa_Maria_Maggiore_-_2018.jpg',
    image_credit: 'Photo by Livioandronico2013 / Wikimedia Commons (CC BY-SA)',
    short_summary: 'The largest church in Rome dedicated to Mary. Built right after the Council of Ephesus defined her as Theotokos (431). 5th-century mosaics still survive.',
    full_history: 'According to tradition, the Virgin Mary appeared to Pope Liberius and a Roman patrician in August 358, asking that a church be built where snow would fall the next morning. Snow appeared on the Esquiline Hill on August 5 — in the heart of summer. The first church was built there. The current basilica was built by Pope Sixtus III (432-440) immediately after the Council of Ephesus (431) defined Mary as Theotokos — Mother of God. The 5th-century mosaics in the nave depicting Old Testament scenes are among the oldest Christian mosaic cycles surviving. The Coronation of the Virgin in the apse (1295, Jacopo Torriti) is a masterpiece. Pope Francis was buried here in April 2025 — the first pope since Clement IX (1669) to be buried outside St. Peter\'s.',
    architectural_significance: 'One of only four major papal basilicas in Rome. The Sistine Chapel (named for Sixtus V, not the Sistine Chapel at the Vatican) and the Pauline Chapel contain spectacular Baroque decoration. The nave\'s gold ceiling was reportedly gilded with gold brought by Columbus from the Americas.',
    notable_relics: 'Salus Populi Romani — the ancient icon of Mary attributed by tradition to St. Luke. The wood of the Holy Crib (manger of Bethlehem). Tomb of Pope Pius V, Pope Sixtus V, and Pope Francis.',
    patron_saints: 'The Blessed Virgin Mary.',
    hotspots: JSON.stringify([
      { x: 50, y: 30, title: 'The Bell Tower (Romanesque)',
        body: 'At 75m, it is the tallest in Rome. Built in 1377. Houses the great Sperduta bell, rung at the most solemn occasions.' },
      { x: 50, y: 55, title: 'The Facade (Baroque)',
        body: 'Designed by Ferdinando Fuga (1741-43). Behind it survives the 5th-century original facade and the 13th-century mosaics by Filippo Rusuti.' },
      { x: 50, y: 70, title: 'Behind: The 5th-century Mosaics',
        body: '(Inside the nave) The mosaics from Sixtus III\'s original 5th-century construction depict Old Testament scenes. They are among the oldest Christian narrative art surviving anywhere.' }
    ]),
    fun_facts: JSON.stringify([
      'Pope Francis visited the icon Salus Populi Romani before and after every foreign trip — a daily prayer in his pontificate.',
      'On April 26, 2025, Pope Francis was buried here per his request — the first papal burial outside the Vatican since 1669.',
      'The cathedral celebrates the "Miracle of the Snow" each August 5 by dropping white rose petals from the ceiling.',
      'The Sistine Chapel (small, here at St. Mary Major) was designed by Domenico Fontana for Pope Sixtus V — and is NOT to be confused with the famous Sistine Chapel at the Vatican.'
    ])
  }
];
