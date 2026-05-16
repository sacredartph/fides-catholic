// Module 4 — Sacred Scripture
module.exports = {
  slug: 'sacred-scripture',
  order_index: 4,
  title: 'Sacred Scripture',
  subtitle: 'The Word of God — given to the Church, by the Church, for the world.',
  description: 'The Bible is a Catholic book — compiled, translated, copied, and preserved by the Church for nearly two thousand years before a Protestant ever opened one. Learn to read it as the Church does, with the four senses, with the saints, with the living Tradition that gave it to us.',
  category: 'foundations',
  color: '#2D5016',
  gradient_start: '#7CB342',
  gradient_end: '#2D5016',
  badge_name: 'Scripture Scholar',
  badge_emoji: 'bible',
  unlocks_after: null,
  lessons: [
    {
      slug: 'bible-catholic-book',
      title: 'The Bible is a Catholic Book',
      subtitle: 'Who gave us the Bible? The Catholic Church.',
      xp_reward: 70, duration_minutes: 13, ccc_ref: 'CCC 120',
      slides: [
        { type: 'hero', title: 'The Bible is a Catholic Book',
          subtitle: 'The Church gave it to the world.',
          body: 'For 350 years after Christ, Christians had no defined Bible. There were many writings — some authentic apostolic writings, some forgeries, some pious but uninspired. Who decided which were Scripture? The Catholic Church. Pope Damasus I commissioned Jerome\'s Vulgate. The Synod of Rome (382), Council of Hippo (393), Council of Carthage (397) — Catholic councils — defined the 73-book canon.' },
        { type: 'explain', title: 'The 73 Books',
          body: '46 Old Testament + 27 New Testament = 73 books. Protestants removed 7 Old Testament books (the deuterocanonicals: Tobit, Judith, Wisdom, Sirach, Baruch, 1 and 2 Maccabees, plus parts of Esther and Daniel) at the Reformation — books that had been in the Bible for 1,500 years. Why? Luther didn\'t like Maccabees because it explicitly teaches prayer for the dead (2 Mac 12:46), which supports the doctrine of Purgatory.',
          ccc: 'CCC 120 — The complete list of the sacred books is called the canon of Scripture.' },
        { type: 'explain', title: 'The Septuagint',
          body: 'The Septuagint is the Greek translation of the Old Testament made about 250 BC by 72 Jewish scholars. It was the standard Bible of Jews outside Palestine. It included the deuterocanonicals. It is the Bible the apostles used — about 300 of 350 Old Testament quotations in the New Testament come from the Septuagint. To reject the deuterocanonicals is to reject the Bible the early Christians used.',
          extra: 'Even today, the Eastern Orthodox Bible has the same Old Testament canon as Catholics (plus a few more books).' },
        { type: 'explain', title: 'The Vulgate',
          body: 'Pope Damasus commissioned St. Jerome around 382 AD to translate the Bible into Latin from the original Hebrew and Greek. Jerome spent thirty years in a cave near Bethlehem doing this work. His translation — the Vulgate — was the standard Bible of the Western Church for over a thousand years.' }
      ],
      questions: [
        { question: 'Who defined the canon of Scripture?',
          options: ['Martin Luther', 'The Catholic Church in the late 4th century', 'A council of rabbis', 'King James'],
          correct_index: 1,
          explanation: 'The Catholic Church defined the canon at the Synod of Rome (382), Council of Hippo (393), and Council of Carthage (397). The same 73 books were reaffirmed at the Council of Trent (1546) in response to Protestants who had removed 7.',
          ccc_ref: 'CCC 120' },
        { question: 'How many books does the Catholic Bible contain?',
          options: ['66', '73', '80', '40'],
          correct_index: 1,
          explanation: 'The Catholic Bible has 73 books: 46 Old Testament + 27 New Testament. Protestant Bibles have 66 because they removed 7 deuterocanonical books at the Reformation.' }
      ]
    },
    {
      slug: 'how-to-read-bible',
      title: 'How to Read the Bible',
      subtitle: 'The four senses of Scripture.',
      xp_reward: 65, duration_minutes: 12, ccc_ref: 'CCC 115-118',
      slides: [
        { type: 'hero', title: 'How to Read the Bible',
          subtitle: 'Not like any other book.',
          body: 'The Bible is the inspired Word of God. It has both a human and a divine author. Every word is true and inspired — but truth comes through human idiom, genre, historical context. The Church teaches us to read Scripture with four senses, in the heart of Tradition, with the Magisterium\'s guidance.' },
        { type: 'explain', title: 'The Four Senses',
          body: 'CCC 115-118 — Two main senses: LITERAL and SPIRITUAL. The spiritual sense has three sub-senses:\n\n1. LITERAL — what the text actually means in its historical context.\n2. ALLEGORICAL — how the text points to Christ. (The crossing of the Red Sea is a type of Baptism.)\n3. MORAL — how the text guides our conduct.\n4. ANAGOGICAL — how the text points to eternal life. (Jerusalem is a sign of heaven.)\n\nMedieval rhyme: "The letter teaches deeds, allegory what to believe, the moral what to do, anagogy where we are bound."' },
        { type: 'explain', title: 'Lectio Divina',
          body: 'The classic monastic method of Scripture prayer, in four steps:\n\n1. LECTIO — Read a short passage slowly.\n2. MEDITATIO — Reflect on what God is saying.\n3. ORATIO — Respond to God in prayer.\n4. CONTEMPLATIO — Rest silently with God.\n\nThis is not Bible study (head). This is Bible prayer (heart). Try it with one Psalm a day.' },
        { type: 'explain', title: 'Reading with the Church',
          body: 'The Catholic does not read the Bible alone. We read it with the Church — with the Fathers, the Doctors, the saints, the Magisterium. CCC 113: "Read the Scripture within the living Tradition of the whole Church." The Holy Spirit guarantees the Church\'s reading; the Holy Spirit does not necessarily guarantee mine — unless mine matches hers.' }
      ],
      questions: [
        { question: 'What are the four senses of Scripture?',
          options: ['Old, New, Hidden, Revealed', 'Literal, Allegorical, Moral, Anagogical', 'Past, Present, Future, Eternal', 'Easy, Medium, Hard, Mystical'],
          correct_index: 1,
          explanation: 'The four senses are Literal, Allegorical (about Christ), Moral (about conduct), and Anagogical (about heaven). CCC 115-118.',
          ccc_ref: 'CCC 115-118' }
      ]
    },
    {
      slug: 'old-testament-stories',
      title: 'The Old Testament Stories',
      subtitle: 'Creation, Fall, Promise, Covenant, Kingdom, Exile, Return.',
      xp_reward: 75, duration_minutes: 16,
      slides: [
        { type: 'hero', title: 'The Old Testament',
          subtitle: 'God\'s 2,000-year preparation for the Coming of Christ.',
          body: 'The Old Testament is not a different religion. It is the same God, gradually revealing Himself to His people. From Genesis to Malachi, God is preparing humanity for the Messiah. Every Old Testament story finds its meaning in Christ.' },
        { type: 'gallery', title: 'The Great Stories', items: [
          { name: 'Creation', quote: 'God created the heavens and the earth. He created man in His own image, male and female. (Gen 1)', role: 'Genesis 1-2' },
          { name: 'The Fall', quote: 'Adam and Eve disobeyed and lost the original holiness. God promised a Redeemer through the Woman\'s seed (Gen 3:15 — the Protoevangelium).', role: 'Genesis 3' },
          { name: 'Noah', quote: 'When wickedness covered the earth, God preserved a remnant in the Ark. Rainbow covenant: never again by flood.', role: 'Genesis 6-9' },
          { name: 'Abraham', quote: 'Called from Ur. Father of faith. Promised land, descendants, blessing for all nations. Almost sacrificed Isaac on Moriah — God provided a ram.', role: 'Genesis 12-25' },
          { name: 'Joseph', quote: 'Sold by his brothers, rose to second in Egypt, saved his family from famine. "You meant evil; God meant it for good."', role: 'Genesis 37-50' },
          { name: 'Moses and the Exodus', quote: 'Burning bush. Ten plagues. Passover (foreshadowing the Eucharist). Red Sea crossing. Forty years in the desert. Ten Commandments at Sinai. Death at the threshold of the Promised Land.', role: 'Exodus, Numbers, Deuteronomy' },
          { name: 'Joshua', quote: 'Successor of Moses. Conquered Canaan. Battle of Jericho — walls fell at the trumpet.', role: 'Joshua' },
          { name: 'David', quote: 'Shepherd boy who killed Goliath. King of Israel. "A man after God\'s own heart." Father of the Davidic line that would produce Christ. Wrote many Psalms.', role: '1 and 2 Samuel' },
          { name: 'Solomon', quote: 'David\'s son. Asked for wisdom. Built the first Temple. Wrote Proverbs, Ecclesiastes, Song of Songs. But his heart turned away to many wives and idols.', role: '1 Kings' },
          { name: 'The Prophets', quote: 'Elijah, Isaiah, Jeremiah, Ezekiel, Daniel, the Twelve Minor Prophets. They called Israel back to God and foretold the Messiah, His suffering, His kingdom.', role: 'Isaiah to Malachi' },
          { name: 'The Exile', quote: 'Babylonians destroyed Jerusalem and the First Temple in 586 BC. Israel suffered 70 years in exile. Cyrus the Persian let them return.', role: 'Lamentations, Ezra, Nehemiah' },
          { name: 'The Maccabees', quote: 'The fight for Jewish religious freedom against the Greek tyrant Antiochus IV. The temple cleansed (Hanukkah). Martyrs preferring death to defiling the Law.', role: '1 and 2 Maccabees' }
        ] },
        { type: 'explain', title: 'The Ten Commandments — Catholic Numbering',
          body: '1. I am the Lord your God; you shall have no other gods before me. (No idols.)\n2. You shall not take the name of the Lord your God in vain.\n3. Remember the Sabbath day, to keep it holy.\n4. Honor your father and your mother.\n5. You shall not kill.\n6. You shall not commit adultery.\n7. You shall not steal.\n8. You shall not bear false witness.\n9. You shall not covet your neighbor\'s wife.\n10. You shall not covet your neighbor\'s goods.\n\nNote: Some Protestants split the first commandment into two and merge the 9th and 10th. Catholic numbering follows Augustine and the Western tradition.' }
      ],
      questions: [
        { question: 'What is the Protoevangelium?',
          options: ['The first Gospel', 'The first prophecy of a Redeemer — Genesis 3:15', 'The first letter of St. Paul', 'The first Mass'],
          correct_index: 1,
          explanation: 'Genesis 3:15 is the Protoevangelium — "the first gospel." God promised the Woman\'s seed would crush the serpent\'s head. This is the first prophecy of Christ and Mary.' }
      ]
    },
    {
      slug: 'life-of-christ',
      title: 'The Life of Christ',
      subtitle: 'From Bethlehem to Calvary to the Empty Tomb.',
      xp_reward: 85, duration_minutes: 18,
      ccc_ref: 'CCC 512-682',
      slides: [
        { type: 'hero', title: 'The Life of Christ',
          subtitle: 'God walked among us.',
          body: 'The Gospels — Matthew, Mark, Luke, John — tell the same story from four angles. Together they show us the most consequential life ever lived: God Himself entered His own creation, walked our roads, ate our food, suffered our suffering, and won our salvation.' },
        { type: 'gallery', title: 'Key Moments', items: [
          { name: 'The Annunciation', quote: 'Gabriel appears to Mary at Nazareth. Mary\'s "fiat" — Let it be done. The Word becomes flesh in her womb. (Luke 1)', role: 'Conception' },
          { name: 'The Nativity', quote: 'Born in a stable at Bethlehem. Shepherds adore. Magi from the East bring gold, frankincense, myrrh. (Luke 2, Matthew 2)', role: 'Birth' },
          { name: 'The Hidden Life', quote: 'Thirty years in Nazareth. The Holy Family — Mary, Joseph, Jesus. Jesus learns the trade of a carpenter. We have almost no details — but the saints meditated endlessly on what it meant that the Son of God lived as one of us.', role: 'Hidden Life' },
          { name: 'Baptism in the Jordan', quote: 'John baptizes Jesus. Spirit descends as dove. Father\'s voice: "This is my beloved Son." The Trinity revealed. (Matthew 3)', role: 'Public Ministry begins' },
          { name: 'The Temptations', quote: '40 days in the desert. Satan tempts Him three times. Jesus rebukes each with Scripture. He wins where Adam failed. (Matthew 4)', role: 'The Wilderness' },
          { name: 'Sermon on the Mount', quote: 'The Beatitudes. The new law. Love your enemies. Our Father. Build on the rock. (Matthew 5-7)', role: 'The Great Sermon' },
          { name: 'Miracles', quote: 'Cana (water to wine). Loaves and fishes (feeding 5,000). Walking on water. Healing the blind, lame, lepers, demoniacs. Raising the dead — Jairus\'s daughter, the widow\'s son at Nain, Lazarus.', role: 'Signs of the Kingdom' },
          { name: 'The Transfiguration', quote: 'On Mount Tabor — Peter, James, John see Jesus shining like the sun, with Moses and Elijah. The Father\'s voice: "This is my beloved Son." (Matthew 17)', role: 'Glory' },
          { name: 'Palm Sunday', quote: 'Enters Jerusalem on a donkey, fulfilling Zechariah 9:9. Crowds cry "Hosanna! Blessed is he who comes in the name of the Lord!" (Matthew 21)', role: 'Triumphal Entry' },
          { name: 'The Last Supper', quote: 'Institutes the Eucharist and the priesthood. Washes the disciples\' feet. Gives the new commandment to love. (Matthew 26, John 13-17)', role: 'Holy Thursday' },
          { name: 'The Passion', quote: 'Agony in Gethsemane. Betrayal by Judas. Trials before Annas, Caiaphas, Pilate, Herod. Scourging. Crown of thorns. Way of the Cross. Crucifixion between two thieves. Seven Last Words. Death.', role: 'Good Friday' },
          { name: 'The Resurrection', quote: 'Three days in the tomb. On the first day of the week, the stone rolled away. Empty tomb. Appearances to Mary Magdalene, the apostles, 500 disciples. The earth-shaking proof of His divinity.', role: 'Easter' },
          { name: 'The Ascension', quote: 'Forty days after Easter, Jesus ascends to heaven from the Mount of Olives. He will come again in glory to judge the living and the dead. (Acts 1)', role: 'Ascension' }
        ] }
      ],
      questions: [
        { question: 'How long was Jesus\' public ministry?',
          options: ['About 3 years', 'About 7 years', 'About 30 years', 'About 6 months'],
          correct_index: 0,
          explanation: 'Jesus\' public ministry lasted approximately 3 years — from His baptism around age 30 to His crucifixion. John\'s Gospel mentions three Passovers during the ministry.' }
      ]
    },
    {
      slug: 'acts-of-apostles',
      title: 'The Acts of the Apostles',
      subtitle: 'The Church explodes outward.',
      xp_reward: 60, duration_minutes: 11,
      slides: [
        { type: 'hero', title: 'The Acts of the Apostles',
          subtitle: 'The Holy Spirit empowers — and the Church is born.',
          body: 'The Acts of the Apostles, written by Luke as a sequel to his Gospel, is the story of the first thirty years of the Church. From Pentecost in Jerusalem to Paul\'s arrival in Rome, the Gospel spreads outward — by martyrdom, by missionary journeys, by the Holy Spirit\'s direct intervention.' },
        { type: 'gallery', title: 'Key Events', items: [
          { name: 'Pentecost', quote: 'Holy Spirit descends as tongues of fire. The apostles preach. 3,000 baptized. (Acts 2)', role: 'Birth of the Church' },
          { name: 'Peter\'s First Sermons', quote: 'Peter preaches in the Temple. Healings. Arrested by Sanhedrin. "We must obey God rather than men." (Acts 3-5)', role: 'Bold preaching' },
          { name: 'Martyrdom of Stephen', quote: 'First Christian martyr. Stoned to death praying for his killers. A young Pharisee named Saul watches. (Acts 7)', role: 'The Protomartyr' },
          { name: 'Conversion of Saul', quote: 'On the road to Damascus. "Saul, Saul, why do you persecute me?" Becomes Paul the Apostle. (Acts 9)', role: 'The greatest convert' },
          { name: 'Peter and the Gentiles', quote: 'Vision at Joppa: nothing God has cleansed is unclean. Baptizes Cornelius the centurion. The Gospel opens to non-Jews. (Acts 10)', role: 'Gentile mission' },
          { name: 'Council of Jerusalem', quote: 'AD 49. The apostles meet to decide: must Gentiles become Jews to be Christian? No, they decide — under the guidance of the Holy Spirit. The first council. (Acts 15)', role: 'First Council' },
          { name: 'Paul\'s Missionary Journeys', quote: 'Three great journeys through Asia Minor and Greece. Churches founded at Antioch, Galatia, Ephesus, Philippi, Thessalonica, Corinth, Athens. (Acts 13-21)', role: 'Missions' },
          { name: 'Paul Arrives in Rome', quote: 'After arrest and shipwreck, Paul reaches Rome under house arrest. Continues to preach. The book ends — but the mission continues.', role: 'Acts 28' }
        ] }
      ],
      questions: [
        { question: 'Who wrote the Acts of the Apostles?',
          options: ['Peter', 'Luke', 'John', 'Paul'],
          correct_index: 1,
          explanation: 'St. Luke — the same evangelist who wrote the Third Gospel — wrote Acts as its sequel. He was a companion of St. Paul.' }
      ]
    },
    {
      slug: 'paul-letters',
      title: 'The Letters of Paul',
      subtitle: 'The Apostle to the Gentiles writes for all time.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'The Letters of Paul',
          subtitle: '13 epistles. The theological backbone of the New Testament.',
          body: 'St. Paul wrote 13 letters in the New Testament — to communities he founded or visited, and to individuals. Together they spell out the theology of grace, faith, the Church, marriage, ministry, and Christian living.' },
        { type: 'gallery', title: 'The Letters', items: [
          { name: 'Romans', quote: 'Greatest theological epistle. Justification by grace through faith. All have sinned and fall short. Nothing can separate us from God\'s love (Romans 8:38-39).', role: 'Theological treatise' },
          { name: '1 and 2 Corinthians', quote: 'Pastoral letters to a troubled Greek city. Famous "love chapter" (1 Cor 13). Body and Blood teaching (1 Cor 11). Resurrection of the body (1 Cor 15).', role: 'Pastoral' },
          { name: 'Galatians', quote: 'Defends justification by grace, not the Mosaic Law. "There is neither Jew nor Greek... for you are all one in Christ" (Gal 3:28).', role: 'Justification' },
          { name: 'Ephesians', quote: 'The Church as Bride of Christ. Marriage as image of Christ and the Church. The armor of God (Eph 6).', role: 'Mystery of Christ' },
          { name: 'Philippians', quote: 'Letter of joy from prison. "Rejoice in the Lord always" (Phil 4:4). The Christ-hymn (Phil 2:5-11) — Christ emptied Himself.', role: 'Joy' },
          { name: 'Colossians', quote: 'Christ is the image of the invisible God. Through Him all things were created. In Him all things hold together.', role: 'Christ as cosmic Lord' },
          { name: '1 and 2 Thessalonians', quote: 'On the Second Coming and the lawful order. Don\'t be lazy waiting for Christ\'s return.', role: 'Eschatology' },
          { name: '1 and 2 Timothy, Titus', quote: 'Pastoral epistles to two young bishops. Qualifications for clergy. Doctrine and discipline. "Fight the good fight."', role: 'Pastoral' },
          { name: 'Philemon', quote: 'Personal letter on returning a runaway slave Onesimus as a brother in Christ. The seed of Christian abolition.', role: 'Personal' },
          { name: 'Hebrews', quote: 'Christ as the great High Priest fulfilling the Old Testament priesthood. Faith chapter (Hebrews 11). The cloud of witnesses (Hebrews 12).', role: 'Christ\'s Priesthood' }
        ] }
      ],
      questions: [
        { question: 'In 1 Corinthians 13, what does Paul say is the greatest virtue?',
          options: ['Faith', 'Hope', 'Love (charity)', 'Wisdom'],
          correct_index: 2,
          explanation: 'Paul concludes: "So faith, hope, love abide, these three; but the greatest of these is love" (1 Cor 13:13).' }
      ]
    },
    {
      slug: 'revelation',
      title: 'The Book of Revelation',
      subtitle: 'Christ\'s victory — and the Mass in heaven.',
      xp_reward: 65, duration_minutes: 12,
      slides: [
        { type: 'hero', title: 'The Book of Revelation',
          subtitle: 'Not a horror movie. The triumph of the Lamb.',
          body: 'Revelation (the Apocalypse — Greek for "unveiling") was written by St. John, exiled on Patmos around 95 AD. It is a vision of heavenly worship, the spiritual battle, and the final victory of Christ. Catholic interpretation is sober and confident — and very different from popular doomsday fiction.' },
        { type: 'explain', title: 'The Mass in Revelation',
          body: 'Read Revelation chapters 4-5 and 19-22 and you will see the Mass. The Lamb on the altar (Rev 5:6). The altar (Rev 6:9, 8:3). Incense rising as the prayers of the saints (Rev 5:8, 8:3-4). The four living creatures crying "Holy, holy, holy" (Rev 4:8). The Gloria (Rev 5:13). The Communion of saints in white robes (Rev 7:9-14). The Marriage Supper of the Lamb (Rev 19:7-9). The Mass is the door from earth to this heavenly liturgy. Revelation\'s vivid imagery is liturgical.',
          extra: 'Dr. Scott Hahn\'s book "The Lamb\'s Supper" walks through this in detail.' },
        { type: 'explain', title: 'The Woman of Revelation 12',
          body: '"A great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars" (Rev 12:1). This is Mary — and the Church. The dragon (Satan) seeks to devour her Child (Christ). Christ is caught up to God\'s throne. This is the cosmic battle: the Woman, the Child, the dragon. Read Our Lady of Guadalupe\'s tilma — it depicts Mary EXACTLY as Revelation 12 describes.' }
      ],
      questions: [
        { question: 'In Revelation 4-5, what scene is repeatedly depicted in heaven?',
          options: ['A battle', 'A wedding', 'A liturgy of worship around the throne of God and the Lamb', 'A trial'],
          correct_index: 2,
          explanation: 'Revelation 4-5 depicts a heavenly liturgy — God on the throne, the Lamb, the 24 elders, the four living creatures crying "Holy, holy, holy," incense, prayers of the saints. This is the Mass in heaven.' }
      ]
    },
    {
      slug: 'mary-in-scripture',
      title: 'Mary in Scripture',
      subtitle: 'Every Marian appearance, every theological foundation.',
      xp_reward: 70, duration_minutes: 13,
      ccc_ref: 'CCC 484-511',
      slides: [
        { type: 'hero', title: 'Mary in Scripture',
          subtitle: 'The Mother of God, present in every key moment.',
          body: 'Mary appears at the beginning, the middle, and the end of salvation history. From the Protoevangelium of Genesis 3:15 to the Woman of Revelation 12, Scripture honors her as no other human being is honored.' },
        { type: 'gallery', title: 'Mary\'s Appearances in Scripture', items: [
          { name: 'Genesis 3:15 — The Promise', quote: '"I will put enmity between you and the woman, between your seed and her seed; he shall bruise your head."', role: 'Protoevangelium' },
          { name: 'Annunciation (Luke 1:26-38)', quote: 'Gabriel: "Hail, full of grace, the Lord is with you." Mary: "Behold, I am the handmaid of the Lord; let it be done to me according to your word."', role: 'Conception of Christ' },
          { name: 'Visitation (Luke 1:39-56)', quote: 'Mary visits Elizabeth. John the Baptist leaps in the womb. Mary sings the Magnificat: "My soul magnifies the Lord."', role: 'The Magnificat' },
          { name: 'Nativity (Luke 2)', quote: 'Born of the Virgin Mary in Bethlehem. Mary kept all these things, pondering them in her heart.', role: 'Birth of Christ' },
          { name: 'Presentation (Luke 2:22-38)', quote: 'Forty days after birth, Mary and Joseph bring Jesus to the Temple. Simeon prophesies: "A sword shall pierce through your own soul."', role: 'Sword of sorrow' },
          { name: 'Finding in the Temple (Luke 2:41-52)', quote: 'Jesus at 12, lost for three days, found teaching the doctors. "Did you not know I must be about my Father\'s business?"', role: 'Jesus at twelve' },
          { name: 'Cana (John 2:1-11)', quote: '"They have no wine." "Do whatever he tells you." Christ\'s first miracle, at Mary\'s request.', role: 'First miracle' },
          { name: 'Calvary (John 19:25-27)', quote: 'Mary stands at the foot of the Cross. Jesus to John: "Behold your mother." To Mary: "Woman, behold your son." Mary becomes Mother of all the redeemed.', role: 'Mother of the Church' },
          { name: 'Pentecost (Acts 1:14)', quote: 'Mary prays with the apostles in the Upper Room when the Holy Spirit descends.', role: 'Pentecost' },
          { name: 'Revelation 12', quote: '"A woman clothed with the sun..." Mary in glory, with the moon under her feet, crowned with twelve stars, mother of the Messiah and the Church.', role: 'Glory' }
        ] },
        { type: 'explain', title: 'The Four Marian Dogmas',
          body: 'The Church has solemnly defined four dogmas about Mary:\n\n1. MOTHER OF GOD (Theotokos) — defined Council of Ephesus 431. Mary is the mother of Jesus, who is God; therefore she is the Mother of God.\n2. PERPETUAL VIRGINITY — Mary remained a virgin before, during, and after the birth of Jesus. (The "brothers of Jesus" mentioned in Scripture are cousins or step-siblings — adelphos in Greek covers all close kin.)\n3. IMMACULATE CONCEPTION — defined by Pius IX 1854. Mary was preserved from original sin from the moment of her conception. The Angel\'s greeting "full of grace" (kecharitomene) indicates the totality of grace.\n4. ASSUMPTION — defined by Pius XII 1950. At the end of her earthly life, Mary was assumed body and soul into heaven.\n\nNot four ideas about Mary. Four Mother-of-Christ truths. All defined; all infallible; all true.' }
      ],
      questions: [
        { question: 'When was the Immaculate Conception defined?',
          options: ['1854', '1431', '1950', '1962'],
          correct_index: 0,
          explanation: 'Pope Pius IX defined the Immaculate Conception in 1854 in the bull Ineffabilis Deus. Four years later, Mary identified herself this way at Lourdes to Bernadette: "I am the Immaculate Conception."' },
        { question: 'What does "Theotokos" mean?',
          options: ['Holy Virgin', 'God-bearer (Mother of God)', 'Mediatrix', 'Queen of Heaven'],
          correct_index: 1,
          explanation: 'Theotokos is Greek for "God-bearer" — Mother of God. Defined at the Council of Ephesus 431 against Nestorius. Since Jesus is God, Mary who bore Him is the Mother of God.' }
      ]
    }
  ]
};
