// Module 8 — Catholic Moral Life
module.exports = {
  slug: 'moral-life',
  order_index: 8,
  title: 'Catholic Moral Life',
  subtitle: 'How to live as a Christian in the world.',
  description: 'The moral life is not a list of rules. It is the freedom to love rightly. Christ\'s Sermon on the Mount, the Commandments, the Beatitudes, the virtues — all teach us how to be fully human and fully alive.',
  category: 'morality',
  color: '#228B22',
  gradient_start: '#90EE90',
  gradient_end: '#1B4332',
  badge_name: 'Living the Faith',
  badge_emoji: 'shield',
  unlocks_after: null,
  lessons: [
    {
      slug: 'ten-commandments',
      title: 'The Ten Commandments',
      subtitle: 'God\'s law for every age.',
      xp_reward: 75, duration_minutes: 15, ccc_ref: 'CCC 2052-2557',
      slides: [
        { type: 'hero', title: 'The Ten Commandments',
          subtitle: 'Given on Sinai. Binding for all time.',
          body: 'God gave the Ten Commandments to Moses on Mount Sinai (Exodus 20). They are not arbitrary rules. They are the moral law written into human nature — clarified for us by God. The first three are about love of God; the last seven about love of neighbor.' },
        { type: 'explain', title: 'The First Three — Love of God',
          body: '1. "I am the Lord your God; you shall have no other gods before me." Worship God alone. No idols (money, fame, sex, self). Avoid superstition, occult, astrology, fortune telling.\n\n2. "You shall not take the name of the Lord your God in vain." Treat God\'s name with reverence. No cursing using God or Jesus. No false oaths.\n\n3. "Remember the Sabbath day, to keep it holy." For Christians, Sunday — the day of Resurrection. Attend Mass. Rest from servile work. Spend time with God and family.',
          ccc: 'CCC 2083-2195' },
        { type: 'explain', title: 'The Last Seven — Love of Neighbor',
          body: '4. Honor your father and your mother. Respect parents, civil authority, elders.\n\n5. You shall not kill. Innocent human life is sacred. Includes abortion, euthanasia, suicide, unjust war.\n\n6. You shall not commit adultery. Faithfulness in marriage. By extension: all sexual sin (pornography, fornication, etc.).\n\n7. You shall not steal. Respect property. Pay fair wages. No cheating.\n\n8. You shall not bear false witness. Truthfulness. No lying, gossip, calumny, detraction.\n\n9. You shall not covet your neighbor\'s wife. Purity of heart in thought and desire.\n\n10. You shall not covet your neighbor\'s goods. Detachment from material things.' }
      ],
      questions: [
        { question: 'How many of the Ten Commandments concern love of God?',
          options: ['One', 'Three', 'Five', 'All ten'],
          correct_index: 1,
          explanation: 'The first three commandments concern love of God (no idols, His name, the Sabbath). The remaining seven concern love of neighbor.' },
        { question: 'How does the Catholic Church number the commandments compared to most Protestants?',
          options: ['Catholics combine first two, then split 9 and 10', 'Identically', 'Catholics combine commandments 5 and 6', 'Catholics have only 8'],
          correct_index: 0,
          explanation: 'The Catholic numbering (following Augustine and the Western tradition) combines the prohibition of idols with the worship of God alone (one commandment), then splits coveting (commandments 9 and 10). Protestants and Jews typically split the first and combine the coveting commandments.' }
      ]
    },
    {
      slug: 'beatitudes',
      title: 'The Beatitudes',
      subtitle: 'The portrait of a Christian. The way to true happiness.',
      xp_reward: 70, duration_minutes: 13, ccc_ref: 'CCC 1716-1729',
      scripture_ref: 'Matthew 5:3-12',
      slides: [
        { type: 'hero', title: 'The Beatitudes',
          subtitle: 'Eight pictures of holiness — and of the Christ who lived them.',
          body: 'In the Sermon on the Mount, Jesus pronounced eight beatitudes (blessings) — paradoxical statements that turn the world\'s values upside down. The poor in spirit, the meek, the merciful — these are happy in the Kingdom of God.' },
        { type: 'gallery', title: 'The Eight Beatitudes', items: [
          { name: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.', quote: 'Detached from possessions, dependent on God, knowing one\'s nothingness before Him.', role: 'St. Francis of Assisi lived this' },
          { name: 'Blessed are those who mourn, for they shall be comforted.', quote: 'Grieving over sin, over the suffering of others, over the absence of God. God Himself wipes the tears.', role: 'Job, Mary at the Cross' },
          { name: 'Blessed are the meek, for they shall inherit the earth.', quote: 'Strength under control. Gentleness. Not weakness — but power that does not crush.', role: 'Moses (Numbers 12:3), Jesus' },
          { name: 'Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.', quote: 'Desire for what is right, no matter the cost. Holy ambition.', role: 'St. Catherine of Siena' },
          { name: 'Blessed are the merciful, for they shall obtain mercy.', quote: 'Forgiving as we have been forgiven. Showing love to those who don\'t deserve it.', role: 'St. Faustina, St. Maria Goretti' },
          { name: 'Blessed are the pure in heart, for they shall see God.', quote: 'Single-hearted love. No double agenda. Chastity of soul.', role: 'St. Maria Goretti, St. Therese' },
          { name: 'Blessed are the peacemakers, for they shall be called sons of God.', quote: 'Bringing reconciliation. Not just absence of conflict — active building of peace.', role: 'St. Francis of Assisi' },
          { name: 'Blessed are those who are persecuted for righteousness sake, for theirs is the kingdom of heaven.', quote: 'Suffering for being Christian is participation in Christ\'s own Cross.', role: 'Every martyr' }
        ] }
      ],
      questions: [
        { question: 'Where in Scripture are the Beatitudes found?',
          options: ['Genesis 1', 'Matthew 5:3-12', 'Romans 8', 'John 14'],
          correct_index: 1,
          explanation: 'Matthew 5:3-12, the opening of the Sermon on the Mount. There is also a shorter parallel in Luke 6:20-26.' }
      ]
    },
    {
      slug: 'virtues',
      title: 'The Virtues',
      subtitle: 'Cardinal and Theological — the architecture of a holy soul.',
      xp_reward: 70, duration_minutes: 13, ccc_ref: 'CCC 1803-1845',
      slides: [
        { type: 'hero', title: 'The Virtues',
          subtitle: 'Habits of the good. Built one act at a time.',
          body: 'A virtue is a stable disposition to do the good. Virtues are not feelings; they are habits — built by repetition until they become second nature. The Church teaches Four Cardinal Virtues (natural, learnable) and Three Theological Virtues (supernatural, infused by grace).' },
        { type: 'explain', title: 'The Four Cardinal Virtues',
          body: 'CARDINAL comes from the Latin cardo — hinge. These four virtues are the hinges on which the moral life turns:\n\n1. PRUDENCE — practical wisdom; choosing right means to right ends.\n\n2. JUSTICE — giving each their due; right relationship with God, self, others.\n\n3. FORTITUDE — courage in the face of difficulty.\n\n4. TEMPERANCE — moderation; control over passions and pleasures.',
          ccc: 'CCC 1805-1809' },
        { type: 'explain', title: 'The Three Theological Virtues',
          body: 'Infused at Baptism, exercised throughout life:\n\n1. FAITH — believing all God has revealed.\n\n2. HOPE — desiring heaven and trusting God to give it.\n\n3. CHARITY (LOVE) — loving God above all and neighbor as self. The greatest. The one that remains in heaven.',
          ccc: 'CCC 1813-1829' },
        { type: 'explain', title: 'How Virtues Are Built',
          body: 'Aristotle: "We are what we repeatedly do. Excellence, then, is not an act but a habit." Each act of courage builds fortitude. Each act of mercy builds charity. Pick one virtue. Practice it deliberately. In 40 days you will see growth. In a year you will be a different person. In a lifetime you will be a saint.' }
      ],
      questions: [
        { question: 'How many cardinal virtues are there?',
          options: ['Three', 'Four', 'Seven', 'Ten'],
          correct_index: 1,
          explanation: 'Four cardinal virtues: Prudence, Justice, Fortitude, Temperance. From "cardo" — hinge. Three theological virtues: Faith, Hope, Charity. Seven total.' },
        { question: 'According to 1 Corinthians 13, which theological virtue is the greatest?',
          options: ['Faith', 'Hope', 'Love (Charity)', 'Knowledge'],
          correct_index: 2,
          explanation: '"Faith, hope, love abide, these three; but the greatest of these is love." Love is the virtue that endures even in heaven (where faith becomes sight and hope is fulfilled).' }
      ]
    },
    {
      slug: 'seven-deadly-sins',
      title: 'The Seven Deadly Sins',
      subtitle: 'And the seven virtues that defeat them.',
      xp_reward: 70, duration_minutes: 13,
      slides: [
        { type: 'hero', title: 'The Seven Deadly Sins',
          subtitle: 'Pride, Greed, Envy, Anger, Lust, Gluttony, Sloth.',
          body: 'Tradition identifies seven "capital sins" — so called because they give rise to many other sins. The capital sins are not necessarily the most serious individual acts, but they are the roots from which many sins grow. Each has an opposing virtue.' },
        { type: 'gallery', title: 'The Seven and Their Opposites', items: [
          { name: 'PRIDE → Humility', quote: 'Excessive love of self; the root of all sin. Lucifer\'s sin. Cured by humility — true knowledge of one\'s nothingness before God.', role: 'St. Therese of Lisieux' },
          { name: 'GREED (Avarice) → Generosity', quote: 'Excessive love of money/possessions. Cured by generosity and detachment.', role: 'St. Francis of Assisi' },
          { name: 'ENVY → Brotherly Love', quote: 'Sadness at another\'s good. Cured by rejoicing with others.', role: 'St. Philip Neri' },
          { name: 'ANGER (Wrath) → Patience', quote: 'Disordered passion of revenge. Not all anger is sinful — Christ\'s anger at the moneychangers was just. Sinful anger is what burns toward revenge or unforgiveness.', role: 'St. Francis de Sales' },
          { name: 'LUST → Chastity', quote: 'Disordered desire for sexual pleasure. Cured by chastity — the freedom to love without using.', role: 'St. Augustine (after his conversion), St. Maria Goretti' },
          { name: 'GLUTTONY → Temperance', quote: 'Excessive eating/drinking. Failure to discipline the appetite.', role: 'St. Catherine of Siena' },
          { name: 'SLOTH (Acedia) → Diligence', quote: 'Spiritual laziness. Not caring about God or spiritual things. The dryness that says "what\'s the point." Defeated by diligence — showing up regardless of feelings.', role: 'St. Benedict' }
        ] },
        { type: 'explain', title: 'Mortal Sin vs. Venial Sin',
          body: 'MORTAL SIN — kills the life of grace in the soul. Three conditions must all be met: (1) grave matter, (2) full knowledge, (3) full consent. Mortal sin separates one from God; if not repented before death, leads to hell.\n\nVENIAL SIN — wounds but does not kill grace. Lesser matter, or less than full knowledge/consent. Still damages the soul. Should be confessed and avoided.\n\nThis is why frequent confession matters even for venial sins — they accumulate, dispose us to mortal sin, and dim our relationship with God.',
          ccc: 'CCC 1854-1864' }
      ],
      questions: [
        { question: 'Which of the seven deadly sins is the root of all the others?',
          options: ['Lust', 'Greed', 'Pride', 'Anger'],
          correct_index: 2,
          explanation: 'Pride is the root sin — Lucifer\'s sin. CCC 1866 calls it the capital of capital sins.' },
        { question: 'What are the three conditions for a sin to be mortal?',
          options: ['Done in private, planned, repeated', 'Grave matter, full knowledge, full consent', 'Against the Ten Commandments, public, intentional', 'Lying, stealing, killing'],
          correct_index: 1,
          explanation: 'CCC 1857: Mortal sin requires all three: grave matter, full knowledge that it is mortal sin, and full consent of the will. If any is lacking, the sin is venial.',
          ccc_ref: 'CCC 1857' }
      ]
    },
    {
      slug: 'conscience',
      title: 'Conscience',
      subtitle: 'The voice of God in the soul.',
      xp_reward: 60, duration_minutes: 11, ccc_ref: 'CCC 1776-1802',
      slides: [
        { type: 'hero', title: 'Conscience',
          subtitle: 'The most secret core of one\'s being, where one is alone with God.',
          body: 'Conscience is the inner judgment by which we apply moral principles to specific actions. It is not "whatever I feel." It is the voice of God in the soul — but a voice that can be silenced, deceived, or formed wrongly. Conscience must be FORMED — patiently, by truth.' },
        { type: 'explain', title: 'Three Levels',
          body: 'CERTAIN CONSCIENCE — knows clearly what is right. Must be followed.\n\nDOUBTFUL CONSCIENCE — unsure. Must be resolved before acting; investigate, pray, ask wise counsel.\n\nERRONEOUS CONSCIENCE — sincerely mistaken. The sincerity does not excuse if the person failed to form conscience properly. Ignorance is sometimes blameworthy.',
          ccc: 'CCC 1786-1791' },
        { type: 'explain', title: 'How to Form Conscience',
          body: '1. Pray for light.\n2. Study the Catechism.\n3. Read Scripture.\n4. Listen to the Magisterium — the Church\'s teaching authority.\n5. Seek wise counsel — priest, mature Catholic mentor.\n6. Examine your motives honestly.\n\nConscience is NOT a tool to justify what you wanted to do anyway. It is a faculty to discover what God wants you to do — even when it costs.' }
      ],
      questions: [
        { question: 'According to the Catholic Church, is conscience "whatever I feel is right"?',
          options: ['Yes', 'No — conscience must be formed by truth, especially Catholic teaching', 'Sometimes', 'Only for adults'],
          correct_index: 1,
          explanation: 'Conscience is not a subjective preference but a faculty for discerning objective moral truth. It must be FORMED — by Scripture, Tradition, the Magisterium, prayer, wise counsel.',
          ccc_ref: 'CCC 1783' }
      ]
    },
    {
      slug: 'social-justice',
      title: 'Catholic Social Teaching',
      subtitle: 'Living out love of neighbor at the level of society.',
      xp_reward: 65, duration_minutes: 12, ccc_ref: 'CCC 1928-1948',
      slides: [
        { type: 'hero', title: 'Catholic Social Teaching',
          subtitle: 'The Gospel applied to society.',
          body: 'Catholic Social Teaching is the Church\'s body of doctrine on how Christian principles apply to economic, political, and social life. It began with Leo XIII\'s Rerum Novarum (1891) and has been developed by every Pope since.' },
        { type: 'explain', title: 'The Seven Principles',
          body: '1. DIGNITY OF THE HUMAN PERSON — every person, from conception to natural death, is created in God\'s image. Foundation of all the rest.\n\n2. FAMILY AND COMMUNITY — the family is the basic cell of society. Marriage between man and woman, open to children, is its foundation.\n\n3. RIGHTS AND RESPONSIBILITIES — every person has rights (to life, food, work, education, religious liberty) and corresponding duties.\n\n4. PREFERENTIAL OPTION FOR THE POOR — Christ identified Himself with the poor. So must we.\n\n5. DIGNITY OF WORK — work is a participation in God\'s creative activity. Workers have rights to fair wages, safe conditions, just treatment.\n\n6. SOLIDARITY — we are all responsible for all. The human family is one.\n\n7. CARE FOR CREATION — the earth is God\'s gift; stewardship not exploitation.' },
        { type: 'explain', title: 'Subsidiarity',
          body: 'Subsidiarity: problems should be handled at the lowest competent level. Don\'t let the State do what the family can do. Don\'t let the family do what the individual can do. Bigger is not better.' }
      ],
      questions: [
        { question: 'What encyclical began modern Catholic Social Teaching?',
          options: ['Humanae Vitae 1968', 'Rerum Novarum 1891', 'Pacem in Terris 1963', 'Laudato Si 2015'],
          correct_index: 1,
          explanation: 'Pope Leo XIII\'s Rerum Novarum (1891) — "Of New Things" — addressed industrial workers\' rights and laid the foundation for Catholic Social Teaching.' }
      ]
    },
    {
      slug: 'purity-chastity',
      title: 'Purity and Chastity',
      subtitle: 'The Theology of the Body — sexuality as gift.',
      xp_reward: 80, duration_minutes: 15, ccc_ref: 'CCC 2331-2400',
      slides: [
        { type: 'hero', title: 'Purity and Chastity',
          subtitle: 'Sexuality is sacred. Treat it that way.',
          body: 'God created human sexuality as a profound gift — the way a man and woman become one flesh, the way new life enters the world, the way human love images the love of the Trinity. The Church\'s teaching on sex is not anti-pleasure. It is anti-using-other-people. Chastity is the freedom to love without using.' },
        { type: 'explain', title: 'Theology of the Body',
          body: 'Pope St. John Paul II\'s "Theology of the Body" — 129 Wednesday audiences from 1979-1984 — was perhaps the most important theological work of the 20th century. Key insights:\n\n1. The body is not a thing to use. The body REVEALS the person. The body has spousal meaning — created to give itself away in love.\n\n2. Sex is a LANGUAGE OF THE BODY. The body says (in the marital act): "I give myself totally to you, freely, faithfully, fruitfully." Sex outside the conditions of marriage is a LIE — the body says one thing, the heart another.\n\n3. Lust is the opposite of love. Lust uses; love gives.\n\n4. The cure is not repression but redemption — Christ healing our hearts so we can see persons truly.' },
        { type: 'explain', title: 'What Chastity Looks Like for Teens',
          body: '- Modesty in dress (treating your body as the sacred temple it is).\n- Modesty in speech (no crude joking; no objectifying others).\n- Modesty in entertainment (avoid media that sexualizes persons).\n- NO pornography — ever. It destroys the brain\'s ability to see persons.\n- Save sex for marriage. Period. No exceptions, no "well almost married."\n- Date with intention — does this person help me become holier?\n- Build friendships of virtue, not just utility.\n\nChastity is not "not having sex." Married couples are chaste. Chastity is the right ordering of sexual desire toward true love.' },
        { type: 'explain', title: 'Pornography — Honest Facts',
          body: 'Pornography:\n- Changes the brain like a drug (proven by neuroscience).\n- Destroys the ability to see persons as persons.\n- Damages future relationships.\n- Is built on real human exploitation.\n- Is a mortal sin.\n\nIf you struggle: there is mercy. Confession. Accountability. Apps like Covenant Eyes. Brotherhood/sisterhood with friends fighting the same battle. The Eucharist. The Rosary. You are not alone.\n\nGod is more merciful than you can imagine. There is no sin too big. The only fatal sin is despair.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'How do you see your own body? As a thing — or as the sacred image of God?',
            'How do you see other people? As persons — or as opportunities for pleasure?',
            'What media are you consuming that shapes your view of sex and persons?',
            'What is one concrete change you can make this week?'
          ] }
      ],
      questions: [
        { question: 'According to St. John Paul II\'s Theology of the Body, what is the language of the marital act?',
          options: ['Pleasure', 'Self-gift — free, total, faithful, fruitful', 'Reproduction', 'Bonding'],
          correct_index: 1,
          explanation: 'The marital act is a "language of the body" that says: "I give myself totally to you — freely, fully, faithfully, fruitfully." Sex outside marriage is a lie of the body.' }
      ]
    },
    {
      slug: 'life-issues',
      title: 'Life Issues',
      subtitle: 'Why the Church defends every human life.',
      xp_reward: 75, duration_minutes: 14, ccc_ref: 'CCC 2258-2330',
      slides: [
        { type: 'hero', title: 'Life Issues',
          subtitle: 'Conception to natural death — every human life is sacred.',
          body: 'The Catholic Church has been the most consistent defender of human life in history. From conception to natural death, every human being is sacred — made in the image of God, redeemed by Christ\'s Blood, destined for eternal life. The Church\'s teaching on life is consistent across the lifespan.' },
        { type: 'explain', title: 'Abortion',
          body: 'The Church teaches abortion is gravely sinful — the deliberate killing of an innocent human being. CCC 2271: "Since the first century the Church has affirmed the moral evil of every procured abortion. This teaching has not changed and remains unchangeable. Direct abortion... is gravely contrary to the moral law."\n\nThe science is clear: a unique human life begins at fertilization — own DNA, own beating heart by 22 days, own brain activity by 6 weeks. The political pretense that the unborn is "just tissue" is biologically false.\n\nThe Church\'s answer to crisis pregnancy is not abortion but support — adoption (an unselfish choice), pregnancy resource centers, the witness of Catholics opening their homes.\n\nFor those who have had abortions: there is mercy. Project Rachel and similar ministries exist. God\'s forgiveness is infinite. The mortal sin requires Confession, but absolutely can be forgiven.' },
        { type: 'explain', title: 'Euthanasia',
          body: 'Direct killing of the elderly, sick, or disabled is a grave sin against the dignity of human life — even when motivated by "compassion." Catholic moral tradition distinguishes:\n\n- Ordinary care (food, water, basic hygiene) is always obligatory.\n- Extraordinary means (machines, experimental drugs) may be morally refused if burdensome.\n- Pain medication that may shorten life is permissible if the intention is to relieve pain.\n- Direct killing — administering lethal drugs, withdrawing food/water from someone not actively dying — is murder.\n\nThe Church\'s alternative: hospice care, palliative medicine, accompanying the dying.' },
        { type: 'explain', title: 'Capital Punishment',
          body: 'Catholic teaching on the death penalty has developed. CCC 2267 (revised 2018 under Francis): "The Church teaches, in the light of the Gospel, that the death penalty is inadmissible because it is an attack on the inviolability and dignity of the person."\n\nOlder teaching: the State could in principle execute for grave crimes to protect society. Modern recognition: modern penal systems can effectively protect society without taking life. Hence the Church now opposes the death penalty in practice.' },
        { type: 'explain', title: 'A Consistent Ethic',
          body: 'Catholics oppose all unjust killing — abortion, euthanasia, unjust war, capital punishment (in modern conditions). All of human life is sacred. To pick and choose which life matters is to align with the spirit of the age, not with Christ.' }
      ],
      questions: [
        { question: 'When does the Catholic Church teach human life begins?',
          options: ['At birth', 'At fertilization (conception)', 'At first heartbeat', 'At viability'],
          correct_index: 1,
          explanation: 'The Church teaches — and modern embryology confirms — that a unique, distinct human life begins at fertilization, when sperm and egg unite to form a new organism with its own complete DNA.',
          ccc_ref: 'CCC 2270' }
      ]
    }
  ]
};
