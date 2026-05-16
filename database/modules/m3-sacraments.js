// Module 3 — The Seven Sacraments
module.exports = {
  slug: 'seven-sacraments',
  order_index: 3,
  title: 'The Seven Sacraments',
  subtitle: 'Outward signs instituted by Christ to give grace.',
  description: 'Christ left His Church seven sacred channels through which grace flows directly into our souls. Each one was instituted by Him personally — Baptism, Confirmation, Eucharist, Reconciliation, Anointing, Holy Orders, Matrimony. Together they sanctify every stage and state of human life.',
  category: 'sacraments',
  color: '#1B4F72',
  gradient_start: '#3498DB',
  gradient_end: '#1B4F72',
  badge_name: 'Vessel of Grace',
  badge_emoji: 'dove',
  unlocks_after: null,
  lessons: [
    {
      slug: 'what-is-sacrament',
      title: 'What is a Sacrament?',
      subtitle: 'Outward sign instituted by Christ to give grace.',
      xp_reward: 60, duration_minutes: 10, ccc_ref: 'CCC 1131',
      slides: [
        { type: 'hero', title: 'What is a Sacrament?',
          subtitle: 'God meets us in matter — water, oil, bread, wine, words.',
          body: 'A sacrament is an outward sign, instituted by Christ, that produces the grace it signifies. The water of Baptism does not just symbolize cleansing — it cleanses. The bread of the Eucharist does not just remind us of Christ — it IS Christ. Sacraments are not metaphors. They are real causes of real grace.' },
        { type: 'explain', title: 'The Seven',
          body: '1. BAPTISM — birth into Christ.\n2. CONFIRMATION — sealing of the Spirit.\n3. EUCHARIST — receiving Christ Himself.\n4. RECONCILIATION — forgiveness of sins.\n5. ANOINTING OF THE SICK — healing for body and soul.\n6. HOLY ORDERS — ordination of clergy.\n7. MATRIMONY — sacrament of marriage.\n\nThe first three are Sacraments of Initiation. The next two are Sacraments of Healing. The last two are Sacraments of Service.',
          ccc: 'CCC 1210-1212 — The seven sacraments touch all the stages and all the important moments of Christian life.' },
        { type: 'explain', title: 'Matter, Form, Minister',
          body: 'Each sacrament has: MATTER (the physical element — water, oil, bread/wine, words of marriage vows, hands laid on); FORM (the words spoken); MINISTER (the one who acts — usually a priest or bishop, but in Matrimony the spouses themselves, and in Baptism in emergencies anyone). When matter, form, and minister are valid and the recipient is properly disposed, the sacrament truly happens. God acts through the sacrament — ex opere operato (by the work worked) — independent of the minister\'s personal holiness.' },
        { type: 'compare', title: 'Seven Sacraments vs. Protestant Two',
          rows: [
            { left: 'Catholic: 7 sacraments — all instituted by Christ, taught from the beginning.',
              right: 'Most Protestants: Only Baptism and Eucharist (and many call these "ordinances" not sacraments).' },
            { left: 'Catholic: Sacraments truly produce grace (ex opere operato).',
              right: 'Most Protestants: Symbols or memorials only.' },
            { left: 'Catholic: Backed by Scripture, Tradition, and unbroken practice.',
              right: 'Protestant view originated in 16th century with the Reformers.' }
          ] }
      ],
      questions: [
        { question: 'What is a sacrament?',
          options: ['A blessing', 'An outward sign instituted by Christ to give grace', 'A ceremony', 'A type of prayer'],
          correct_index: 1,
          explanation: 'CCC 1131: Sacraments are efficacious signs of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us.',
          ccc_ref: 'CCC 1131' },
        { question: 'How many sacraments did Christ institute?',
          options: ['Two', 'Three', 'Five', 'Seven'],
          correct_index: 3,
          explanation: 'Christ instituted seven sacraments: Baptism, Confirmation, Eucharist, Reconciliation, Anointing of the Sick, Holy Orders, Matrimony.' }
      ]
    },
    {
      slug: 'baptism',
      title: 'Baptism',
      subtitle: 'Born again of water and the Spirit.',
      xp_reward: 70, duration_minutes: 13,
      scripture_ref: 'John 3:5, Matthew 28:19', ccc_ref: 'CCC 1213-1284',
      slides: [
        { type: 'hero', title: 'Baptism',
          subtitle: 'The doorway to the Church and to heaven.',
          body: 'Baptism is the first sacrament, the foundation of all the rest. Christ commanded it: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit" (Mt 28:19). Without Baptism we cannot enter the Kingdom: "Unless one is born of water and the Spirit, he cannot enter the kingdom of God" (Jn 3:5).' },
        { type: 'explain', title: 'What Baptism Does',
          body: 'Baptism: (1) washes away original sin and all personal sin committed before it; (2) makes us adopted children of God and members of His Church; (3) infuses sanctifying grace and the theological virtues of Faith, Hope, and Charity; (4) imprints an indelible character on the soul (you can only be baptized once); (5) makes us heirs of heaven.',
          ccc: 'CCC 1262-1274 — Baptism, the gateway to life in the Spirit, and the door which gives access to the other sacraments.' },
        { type: 'explain', title: 'Infant Baptism',
          body: 'The Catholic Church baptizes infants. This is the practice of the early Church (mentioned by Origen 250 AD as "from the apostles"; described in Acts 16:15, 16:33, 1 Cor 1:16 — "whole households" baptized). Infants are baptized because: (1) original sin affects them too; (2) Christ welcomed children ("Let the children come to me, do not hinder them"); (3) God\'s grace does not depend on our understanding. Godparents stand in to profess the faith on the child\'s behalf, vowing to raise them Catholic.' },
        { type: 'explain', title: 'Emergency Baptism',
          body: 'In an emergency, ANYONE — even a non-baptized person — can validly baptize. The matter: water poured on the head three times. The form: "[Name], I baptize you in the name of the Father, and of the Son, and of the Holy Spirit." The intent: to do what the Church does. Every Catholic should know how to do this — you may save a soul.' }
      ],
      questions: [
        { question: 'According to Jesus, what is necessary to enter the Kingdom of God?',
          options: ['Good works', 'Being born of water and the Spirit', 'Reading the Bible', 'Going to Mass'],
          correct_index: 1,
          explanation: 'John 3:5: "Unless one is born of water and the Spirit, he cannot enter the kingdom of God." This is Christ\'s teaching on Baptism as necessary for salvation.',
          scripture_ref: 'John 3:5' },
        { question: 'Who can validly baptize in an emergency?',
          options: ['Only a priest', 'Only a bishop', 'Anyone (even a non-Christian) with the right matter, form, and intent', 'Only Catholics'],
          correct_index: 2,
          explanation: 'In a true emergency (danger of death), anyone can validly baptize using water and the Trinitarian formula, with the intent to do what the Church does. The Church teaches this precisely so souls in danger are not lost for lack of a priest.' }
      ]
    },
    {
      slug: 'confirmation',
      title: 'Confirmation',
      subtitle: 'Sealed with the Spirit. Soldier of Christ.',
      xp_reward: 70, duration_minutes: 13,
      ccc_ref: 'CCC 1285-1321',
      slides: [
        { type: 'hero', title: 'Confirmation',
          subtitle: 'The Holy Spirit poured out, sealing you for life.',
          body: 'In Confirmation, the Holy Spirit is poured out upon us as on the apostles at Pentecost. The bishop anoints us with Sacred Chrism (olive oil consecrated by him on Holy Thursday), lays his hand on us, and says: "Be sealed with the Gift of the Holy Spirit." We become "soldiers of Christ" — sealed and sent.' },
        { type: 'explain', title: 'The Seven Gifts of the Spirit',
          body: 'Isaiah 11:2-3 lists the gifts that rest on the Messiah and, through Confirmation, on us: WISDOM, UNDERSTANDING, COUNSEL, FORTITUDE, KNOWLEDGE, PIETY, FEAR OF THE LORD. These are seven habits the Spirit infuses to make us responsive to His promptings.',
          ccc: 'CCC 1830-1832 — The seven gifts belong in their fullness to Christ, Son of David. They complete and perfect the virtues of those who receive them.' },
        { type: 'explain', title: 'Why a Confirmation Name?',
          body: 'When you are confirmed, you take a new name — usually a saint\'s name. This saint becomes your special patron — interceding for you in heaven, an example to imitate, a companion for life. Choose carefully. Pray about it. Pick a saint whose life or virtues match what you most need. This saint will be your friend forever.',
          extra: 'Confirmation names appear at Confirmation but are not legal names. They are spiritual names — a tradition going back to Christ renaming Simon "Peter."' },
        { type: 'explain', title: 'The Bishop',
          body: 'In the Latin Rite, the ordinary minister of Confirmation is the BISHOP. Why? Because Confirmation incorporates the confirmed into the apostolic mission — and bishops are the successors of the apostles. (The bishop can delegate priests to confirm in his absence or for those in danger of death.)' }
      ],
      questions: [
        { question: 'How many gifts of the Holy Spirit does Confirmation impart?',
          options: ['Three', 'Five', 'Seven', 'Twelve'],
          correct_index: 2,
          explanation: 'Seven Gifts: Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord (Isaiah 11:2-3). Twelve Fruits of the Spirit are different (Galatians 5:22-23).' },
        { question: 'What is Sacred Chrism?',
          options: ['Holy water', 'Sacred perfume', 'Olive oil mixed with balsam, consecrated by the bishop on Holy Thursday', 'Wax used in candles'],
          correct_index: 2,
          explanation: 'Chrism is olive oil mixed with balsam (sweet-smelling resin), blessed by the bishop at the Chrism Mass on Holy Thursday. It is used in Baptism (anointing the newly-baptized), Confirmation, Holy Orders, and consecration of altars and churches.' }
      ]
    },
    {
      slug: 'eucharist',
      title: 'The Holy Eucharist',
      subtitle: 'Christ Himself — Body, Blood, Soul, Divinity.',
      xp_reward: 80, duration_minutes: 15,
      scripture_ref: 'John 6:53-58', ccc_ref: 'CCC 1322-1419',
      slides: [
        { type: 'hero', title: 'The Holy Eucharist',
          subtitle: 'Not a symbol. Not a memorial. God Himself.',
          body: 'The Eucharist is the source and summit of the Christian life. It is not bread that has become a symbol; it is not bread that represents Christ. It is Christ Himself — Body, Blood, Soul, and Divinity — under the appearance of bread and wine. To deny the Real Presence is to deny what Christ explicitly taught and what the Church has taught for 2,000 years.' },
        { type: 'scripture', verse: 'Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you have no life in you. Whoever eats my flesh and drinks my blood has eternal life, and I will raise him up on the last day. For my flesh is true food, and my blood is true drink.',
          reference: 'John 6:53-55', ccc_tie: 'CCC 1384 — The Lord addresses an invitation to us, urging us to receive him in the Sacrament of the Eucharist.' },
        { type: 'explain', title: 'Eucharistic Miracles',
          body: 'Through history, the Church has documented several Eucharistic miracles — moments when the host visibly bled, or scientific tests on consecrated hosts revealed human flesh and blood. Notable cases: Lanciano (8th century — heart tissue confirmed by 1971 scientific analysis); Buenos Aires (1996 — Bishop Bergoglio, future Pope Francis, ordered the analysis: human heart muscle, type AB blood, in agony); Sokolka, Poland (2008 — similar findings, AB blood, heart tissue). These are not the basis of faith — but they are signs.' },
        { type: 'explain', title: 'The Real Presence — Four Modes',
          body: 'Christ is present everywhere as God (omnipresence). He is uniquely present in the gathered Church, in His Word, in the priest at Mass — and SUPREMELY present, body and soul, in the Eucharistic species. CCC 1374: "In the most blessed sacrament of the Eucharist the body and blood, together with the soul and divinity, of our Lord Jesus Christ and, therefore, the whole Christ is truly, really, and substantially contained."' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'When you next receive Communion, slow down. Look at the Host. Christ. Right there.',
            'If you knew Jesus would be physically present somewhere on earth tomorrow, you would go. He IS — at every Catholic altar.',
            'Spend 10 minutes in Eucharistic Adoration this week. Try it.'
          ] }
      ],
      questions: [
        { question: 'What is in the Eucharist after consecration?',
          options: ['Bread blessed by the priest', 'Bread that represents Christ', 'Christ Himself — Body, Blood, Soul, and Divinity, under the appearance of bread and wine', 'Just a symbol'],
          correct_index: 2,
          explanation: 'The Catholic Church teaches the Real Presence: Christ Himself, whole and entire, is present under the appearance of bread and wine. The substance is fully changed; the appearance remains.',
          ccc_ref: 'CCC 1374-1376' }
      ]
    },
    {
      slug: 'reconciliation',
      title: 'Reconciliation (Confession)',
      subtitle: 'The Sacrament of God\'s Mercy.',
      xp_reward: 75, duration_minutes: 14,
      scripture_ref: 'John 20:23', ccc_ref: 'CCC 1422-1498',
      slides: [
        { type: 'hero', title: 'Reconciliation',
          subtitle: 'You confess. He forgives. You are made new.',
          body: 'In Confession, Christ Himself, acting through the priest, forgives our sins. Every sin. No exceptions. No matter how grave. He restores us to the state of grace, the friendship of God, the joy of being His child. Confession is not a punishment. It is the greatest gift after the Eucharist — a tribunal of mercy.' },
        { type: 'scripture', verse: 'Jesus said to them again, "Peace be with you. As the Father has sent me, even so I send you." And when he had said this, he breathed on them, and said to them, "Receive the Holy Spirit. If you forgive the sins of any, they are forgiven; if you retain the sins of any, they are retained."',
          reference: 'John 20:21-23',
          ccc_tie: 'CCC 1485 — On the evening of Easter Day, the Lord Jesus showed Himself to his apostles and breathed on them and said, "Receive the Holy Spirit..."' },
        { type: 'explain', title: 'The Five Steps',
          body: '1. EXAMINE YOUR CONSCIENCE — review your life since your last good Confession.\n2. BE TRULY SORRY — sorrow for sin (contrition) is essential.\n3. FIRM PURPOSE OF AMENDMENT — intent to avoid sin and its near occasions.\n4. CONFESS ALL MORTAL SINS TO THE PRIEST — number and kind. Venial sins too if you wish.\n5. DO YOUR PENANCE — the prayers or actions assigned by the priest.',
          ccc: 'CCC 1450 — Penance requires the sinner to endure all things willingly, to be contrite of heart, to confess with his lips, and to practice complete humility.' },
        { type: 'explain', title: 'Act of Contrition',
          body: 'A traditional Act of Contrition: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins, because I dread the loss of heaven and the pains of hell; but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen."' },
        { type: 'explain', title: 'How to Go to Confession',
          body: 'Enter the confessional. Make the Sign of the Cross. Say: "Bless me, Father, for I have sinned. It has been [time] since my last Confession." Confess your sins — all mortal sins by kind and number; venial sins as you wish. Listen to the priest. Pray the Act of Contrition. Receive absolution: "I absolve you from your sins in the name of the Father, and of the Son, and of the Holy Spirit." Respond "Amen." You are forgiven. Do your penance.' },
        { type: 'explain', title: 'The Seal of Confession',
          body: 'A priest may NEVER, under any circumstances, reveal what was said in Confession. Not under torture, not under threat of death, not to police. The seal is absolute. Many priest-martyrs have died rather than break it (St. John Nepomuk drowned in 1393 rather than betray the Queen of Bohemia\'s confession). This is one of the deepest protections of the soul.',
          ccc: 'CCC 1467 — Every priest who hears confessions is bound under very severe penalties to keep absolute secrecy regarding the sins that his penitents have confessed to him.' }
      ],
      questions: [
        { question: 'Who actually forgives sins in Confession?',
          options: ['The priest by his own power', 'Christ Himself, acting through the priest', 'The penitent through repentance alone', 'No one — sins are forgotten not forgiven'],
          correct_index: 1,
          explanation: 'Christ alone forgives sins, but He exercises that power through the ordained priesthood. Jesus gave this power explicitly: "Whose sins you forgive are forgiven; whose sins you retain are retained" (John 20:23).',
          scripture_ref: 'John 20:23' },
        { question: 'Can a priest ever reveal what was said in Confession?',
          options: ['Yes, if a serious crime is mentioned', 'Yes, to other priests', 'Yes, to the Pope', 'No, never — the seal is absolute'],
          correct_index: 3,
          explanation: 'The seal of Confession is absolute. A priest may not reveal anything from Confession, under any circumstances, even at the cost of his own life. Saints like John Nepomuk died rather than betray it.' }
      ]
    },
    {
      slug: 'anointing',
      title: 'Anointing of the Sick',
      subtitle: 'Christ continues to heal.',
      xp_reward: 60, duration_minutes: 10,
      scripture_ref: 'James 5:14-15', ccc_ref: 'CCC 1499-1532',
      slides: [
        { type: 'hero', title: 'Anointing of the Sick',
          subtitle: 'Not just "last rites" — a healing sacrament.',
          body: 'The Anointing of the Sick is for those seriously ill or in danger of death from illness, age, or before major surgery. It is not only for the dying. James 5:14-15 — "Is any among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord; and the prayer of faith will save the sick man, and the Lord will raise him up; and if he has committed sins, he will be forgiven."' },
        { type: 'explain', title: 'What It Does',
          body: 'The Anointing: (1) unites the sufferer to Christ\'s Passion, giving sufferings redemptive meaning; (2) gives strength, peace, and courage; (3) forgives sins if Confession was not possible; (4) restores health when this serves the salvation of the soul; (5) prepares for passing to eternal life if death is near.' },
        { type: 'explain', title: 'Viaticum',
          body: 'For one in danger of death, the last reception of the Eucharist is called Viaticum — "food for the journey." Combined with Confession (if possible) and Anointing, these are the "Last Rites" properly speaking. Every Catholic should hope to die having received these.' }
      ],
      questions: [
        { question: 'Where in Scripture does James command the priests to anoint the sick?',
          options: ['Romans 8', 'James 5:14-15', '1 Peter 2', 'Matthew 9'],
          correct_index: 1,
          explanation: 'James 5:14-15 directly commands the practice: call the elders (priests), anoint with oil in the name of the Lord, pray for healing.' }
      ]
    },
    {
      slug: 'holy-orders',
      title: 'Holy Orders',
      subtitle: 'The Apostles\' authority handed down for 2,000 years.',
      xp_reward: 70, duration_minutes: 13,
      ccc_ref: 'CCC 1536-1600',
      slides: [
        { type: 'hero', title: 'Holy Orders',
          subtitle: 'Ordination to act in the person of Christ.',
          body: 'Holy Orders is the sacrament by which men are ordained as deacons, priests, or bishops. Through it, Christ continues His priestly, prophetic, and kingly office in the Church. The bishop lays his hands on the candidate, prays the prayer of consecration, and a real metaphysical change happens — an indelible character is imprinted on the soul that lasts forever.' },
        { type: 'explain', title: 'Three Degrees',
          body: 'DEACONS — assist the bishop in works of charity, can baptize, witness marriages, preach, distribute Communion. Permanent or transitional.\n\nPRIESTS — celebrate Mass, hear Confessions, anoint the sick, witness marriages. The parish priest is the ordinary face of the Church for most Catholics.\n\nBISHOPS — possess the fullness of Holy Orders. They alone can ordain other priests/bishops, confirm, and consecrate Chrism. They are successors of the apostles.',
          ccc: 'CCC 1554-1571 — The two participations in the one priesthood of Christ.' },
        { type: 'explain', title: 'In Persona Christi',
          body: 'The ordained priest acts "in the person of Christ" — most strikingly at the consecration of the Eucharist ("THIS IS MY BODY") and in absolution ("I absolve you from your sins"). The priest does not say these words about Christ; he speaks them AS Christ. The priest is uniquely configured to Christ the Head of the Church.' },
        { type: 'explain', title: 'Why Only Men?',
          body: 'Christ chose only men as His Twelve Apostles. The Catholic Church has ordained only men for 2,000 years. Pope John Paul II in Ordinatio Sacerdotalis (1994) declared definitively that the Church has no authority to ordain women — not because women are less but because the priesthood signifies Christ the Bridegroom of the Church. The complementarity of male and female is built into the sacramental order. This is not discrimination; it is theology.' },
        { type: 'explain', title: 'Celibacy',
          body: 'Latin Rite priests promise celibacy — to remain unmarried for the sake of the Kingdom. This is a discipline, not a doctrine (Eastern Catholic priests may marry before ordination). Jesus Himself was celibate. Paul recommended celibacy (1 Cor 7). Celibate priests give themselves wholly to the Church — to all souls as their family.' }
      ],
      questions: [
        { question: 'What are the three degrees of Holy Orders?',
          options: ['Pope, Bishop, Cardinal', 'Deacon, Priest, Bishop', 'Reader, Acolyte, Priest', 'Friar, Monk, Priest'],
          correct_index: 1,
          explanation: 'The three degrees are Deacon, Priest, and Bishop. The Bishop possesses the fullness of Holy Orders. The Pope is the Bishop of Rome — a particular bishop, not a separate degree.' },
        { question: 'What does it mean to act "in persona Christi"?',
          options: ['To imitate Christ\'s behavior', 'To act in the very person of Christ — speaking and acting AS Christ', 'To pray to Christ', 'To represent Christ symbolically'],
          correct_index: 1,
          explanation: 'The priest does not just imitate Christ — he acts in the person of Christ, particularly at consecration ("This is My Body") and absolution ("I absolve you"). He speaks Christ\'s own words.' }
      ]
    },
    {
      slug: 'matrimony',
      title: 'Matrimony',
      subtitle: 'A sacrament of love unto death.',
      xp_reward: 70, duration_minutes: 13,
      ccc_ref: 'CCC 1601-1666',
      slides: [
        { type: 'hero', title: 'Matrimony',
          subtitle: 'God Himself joins them. What He joins, no one separates.',
          body: 'In Matrimony, a baptized man and a baptized woman give themselves to each other in a covenant unbreakable except by death. The spouses themselves are the ministers of this sacrament — they give it to each other. The priest witnesses. The Church blesses. God seals the bond.' },
        { type: 'explain', title: 'The Four Properties',
          body: 'Catholic marriage has four essential properties: (1) UNITY — one man, one woman; no third party. (2) INDISSOLUBILITY — unbreakable except by death. (3) FIDELITY — total faithfulness in body and heart. (4) OPENNESS TO LIFE — open to children, who are the supreme gift of marriage.\n\nIf any of these is excluded at the time of consent, the marriage is invalid.',
          ccc: 'CCC 1644 — The love of the spouses requires, of its very nature, the unity and indissolubility of the spouses\' community of persons, which embraces their entire life.' },
        { type: 'explain', title: 'Why Indissoluble?',
          body: 'Jesus said: "What therefore God has joined together, let not man put asunder. ... Whoever divorces his wife and marries another commits adultery against her, and if she divorces her husband and marries another, she commits adultery" (Mark 10:9, 11-12). Marriage is a sacrament because it images Christ\'s union with His Church — and Christ does not abandon His Bride. Hence Catholic Marriage is indissoluble.\n\n"Annulment" is not Catholic divorce. An annulment is a declaration that no valid sacramental marriage ever existed in the first place — usually because of defective consent or some other impediment.' },
        { type: 'explain', title: 'Theology of the Body',
          body: 'Pope St. John Paul II\'s Theology of the Body teaches that the human body — male and female — was created to give itself away in self-gift. Sex within marriage is the perfect sign of total self-gift: free, total, faithful, fruitful. Sex outside marriage, contraception, abortion, pornography — all fail to honor what the body was made for. Chastity is not repression. Chastity is freedom to give yourself fully when the time comes.' }
      ],
      questions: [
        { question: 'In the sacrament of Matrimony, who are the ministers?',
          options: ['The priest', 'The bishop', 'The spouses themselves', 'The parents'],
          correct_index: 2,
          explanation: 'The spouses themselves administer the sacrament of Matrimony to each other through their consent. The priest is the official witness; the Church blesses; but the man and woman are the ministers.',
          ccc_ref: 'CCC 1623' },
        { question: 'What did Jesus say about divorce?',
          options: ['It is acceptable for any reason', 'It is permitted for serious cause', 'What God has joined, let no man separate', 'Marriage is optional'],
          correct_index: 2,
          explanation: 'Mark 10:9: "What therefore God has joined together, let not man put asunder." Christ taught that marriage is indissoluble — only His Church preserves this teaching consistently.',
          scripture_ref: 'Mark 10:9' },
        { question: 'What is a Catholic annulment?',
          options: ['Catholic divorce', 'A declaration that no valid sacramental marriage ever existed', 'Permission to remarry', 'Removal of marriage records'],
          correct_index: 1,
          explanation: 'An annulment is not a divorce. It is a Church tribunal\'s declaration that, due to defects of consent or other impediments, a valid sacramental marriage never came into being. Catholic marriages cannot be dissolved; only declared null if they were never valid.' }
      ]
    }
  ]
};
