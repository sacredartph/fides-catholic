// Module 6 — The Holy Spirit
module.exports = {
  slug: 'holy-spirit',
  order_index: 6,
  title: 'The Holy Spirit',
  subtitle: 'The Lord, the Giver of Life — third Person of the Holy Trinity.',
  description: 'The Holy Spirit is not a force, not an "it," but a divine Person — equal to the Father and the Son, proceeding from both. He hovered at creation, conceived Christ in Mary, descended at Pentecost, and lives in your soul. Learn to recognize Him, love Him, and follow His promptings.',
  category: 'theology',
  color: '#DC143C',
  gradient_start: '#FF6347',
  gradient_end: '#8B0000',
  badge_name: 'Spirit-Filled',
  badge_emoji: 'flame',
  unlocks_after: null,
  lessons: [
    {
      slug: 'who-is-spirit',
      title: 'Who is the Holy Spirit?',
      subtitle: 'Third Person of the Trinity.',
      xp_reward: 65, duration_minutes: 12, ccc_ref: 'CCC 685-741',
      slides: [
        { type: 'hero', title: 'Who is the Holy Spirit?',
          subtitle: 'A divine Person, fully God.',
          body: 'The Holy Spirit is not a force, not an energy, not a "feeling." The Holy Spirit is the third Person of the Holy Trinity — fully God, of one substance with the Father and the Son, eternally proceeding from both, equally adored and glorified.' },
        { type: 'explain', title: 'The Trinity — Three Persons, One God',
          body: 'There is ONE God in THREE Persons. The Father, the Son, and the Holy Spirit. Not three Gods. Not one Person playing three roles. Three distinct Persons, each fully and eternally God, sharing one divine nature. This is the central mystery of our faith. We cannot fully understand it; we believe it because Christ revealed it.' },
        { type: 'explain', title: 'The Filioque',
          body: 'The Western Church confesses that the Spirit proceeds "from the Father and the Son" (in Latin: Filioque — "and the Son"). The Nicene Creed: "I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son." This was added to the Creed in the West by the 6th century and finalized in Rome 1014. The East rejected this addition — one of the issues in the 1054 Schism. The Catholic Church teaches the Filioque on the authority of Scripture and the Latin Fathers.',
          ccc: 'CCC 246-248 — The Filioque does not contradict the East\'s teaching that the Father is the principal source.' },
        { type: 'explain', title: 'The Spirit in Salvation History',
          body: 'The Spirit hovered over the waters at creation (Gen 1:2). Spoke through the prophets ("Thus says the Lord..."). Overshadowed Mary at the Annunciation (Lk 1:35). Descended on Jesus at His baptism (Mt 3:16). Was promised by Jesus as "another Advocate" (Jn 14:16). Descended on the apostles at Pentecost (Acts 2). And now lives in every baptized soul.' }
      ],
      questions: [
        { question: 'What is the Holy Spirit?',
          options: ['An energy', 'A symbol of God\'s power', 'The third Person of the Trinity — fully God', 'A type of angel'],
          correct_index: 2,
          explanation: 'The Holy Spirit is the third Person of the Holy Trinity — eternally proceeding from the Father and the Son, fully God, equally to be adored. Not an it. A divine Person.',
          ccc_ref: 'CCC 685' }
      ]
    },
    {
      slug: 'seven-gifts',
      title: 'The Seven Gifts of the Holy Spirit',
      subtitle: 'Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, Fear of the Lord.',
      xp_reward: 70, duration_minutes: 13, ccc_ref: 'CCC 1830-1832',
      slides: [
        { type: 'hero', title: 'The Seven Gifts',
          subtitle: 'Habits the Holy Spirit infuses to make us responsive to His promptings.',
          body: 'The seven Gifts of the Holy Spirit are infused at Baptism and strengthened at Confirmation. They make our intellect and will responsive to the inspirations of the Holy Spirit, enabling us to act not merely from natural prudence but with supernatural ease.' },
        { type: 'gallery', title: 'The Seven Gifts in Detail', items: [
          { name: '1. WISDOM', quote: 'The gift of seeing things from God\'s perspective. The highest gift. Wisdom orders our love rightly — God first, others second.', role: 'For seeing rightly' },
          { name: '2. UNDERSTANDING', quote: 'The gift of insight into divine truths. Lets us grasp what we believe — feel the truth of doctrines.', role: 'For knowing rightly' },
          { name: '3. COUNSEL', quote: 'The gift of right judgment in concrete situations. When you don\'t know what to do, Counsel guides.', role: 'For choosing rightly' },
          { name: '4. FORTITUDE', quote: 'Strength and courage in trials. Lets you stand for Christ when it costs.', role: 'For standing rightly' },
          { name: '5. KNOWLEDGE', quote: 'The gift of seeing how created things lead to God — and recognizing what leads away.', role: 'For discerning rightly' },
          { name: '6. PIETY', quote: 'A filial reverence — loving God as Father, loving the saints as family. Devotion that flows from love.', role: 'For loving rightly' },
          { name: '7. FEAR OF THE LORD', quote: 'Not slavish fear, but holy awe. The reverence of a beloved child for an all-powerful Father whom they would never wish to offend.', role: 'For revering rightly' }
        ] },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'Which of the seven gifts do you most need right now?',
            'Pray each morning: "Holy Spirit, give me Wisdom (or Counsel) today for ____."',
            'The Gifts are already in you (since Baptism/Confirmation) — but must be exercised. How are you exercising them?'
          ] }
      ],
      questions: [
        { question: 'How many gifts of the Holy Spirit are there?',
          options: ['Three', 'Five', 'Seven', 'Twelve'],
          correct_index: 2,
          explanation: 'Seven gifts: Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, Fear of the Lord. From Isaiah 11:2-3.',
          ccc_ref: 'CCC 1831' },
        { question: 'What is the highest of the Seven Gifts?',
          options: ['Knowledge', 'Wisdom', 'Counsel', 'Fortitude'],
          correct_index: 1,
          explanation: 'Wisdom is the highest gift because it orders all of life from God\'s own perspective. It is the gift of seeing as God sees.' }
      ]
    },
    {
      slug: 'twelve-fruits',
      title: 'The Twelve Fruits of the Holy Spirit',
      subtitle: 'The marks of a soul where the Spirit dwells.',
      xp_reward: 60, duration_minutes: 11, ccc_ref: 'CCC 1832',
      slides: [
        { type: 'hero', title: 'The Twelve Fruits',
          subtitle: 'When the Spirit is at work, He bears fruit. These are the marks.',
          body: 'In Galatians 5:22-23, Paul lists nine fruits of the Spirit. Tradition has expanded this list to twelve. They are the visible marks of a soul yielding to the Spirit — qualities that make a Christian recognizable.' },
        { type: 'gallery', title: 'The Twelve Fruits', items: [
          { name: '1. Charity (Love)', quote: 'Love that wills the good of the other. The first fruit. The basis of all the rest.', role: 'Love' },
          { name: '2. Joy', quote: 'Joy that does not depend on circumstances. The peace of God within.', role: 'Joy' },
          { name: '3. Peace', quote: 'The tranquillity of order. Right relationship with God, self, others.', role: 'Peace' },
          { name: '4. Patience', quote: 'Endurance without complaint. Waiting in trust.', role: 'Patience' },
          { name: '5. Kindness', quote: 'Active goodness toward others. Practical love.', role: 'Kindness' },
          { name: '6. Goodness', quote: 'Habit of doing what is right. Moral excellence.', role: 'Goodness' },
          { name: '7. Generosity', quote: 'Free giving — of money, time, attention, love.', role: 'Generosity' },
          { name: '8. Gentleness', quote: 'Strength under control. Power without harshness.', role: 'Gentleness' },
          { name: '9. Faithfulness', quote: 'Reliability. Keeping commitments. Being trustworthy.', role: 'Faithfulness' },
          { name: '10. Modesty', quote: 'Humility about self; appropriate restraint in dress, speech, behavior.', role: 'Modesty' },
          { name: '11. Self-Control', quote: 'Mastery over impulses and passions.', role: 'Self-Control' },
          { name: '12. Chastity', quote: 'Right ordering of sexuality. Freedom to love without using.', role: 'Chastity' }
        ] }
      ],
      questions: [
        { question: 'Where in Scripture is the original list of the Fruits of the Spirit found?',
          options: ['Matthew 5', 'Galatians 5:22-23', '1 Corinthians 13', 'Acts 2'],
          correct_index: 1,
          explanation: 'Galatians 5:22-23 lists love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control. The Vulgate (and Catholic Tradition) expanded the list to 12.' }
      ]
    },
    {
      slug: 'spirit-daily-life',
      title: 'The Holy Spirit in Daily Life',
      subtitle: 'How to recognize and follow His promptings.',
      xp_reward: 60, duration_minutes: 11,
      slides: [
        { type: 'hero', title: 'The Spirit in Daily Life',
          subtitle: 'He speaks in whispers. Listen.',
          body: '1 Kings 19:12 — Elijah heard God not in earthquake or fire but in a "still small voice." The Holy Spirit speaks the same way — in promptings, intuitions, peace or unrest in the soul. Learning to recognize Him is the work of a lifetime.' },
        { type: 'explain', title: 'Ignatian Discernment',
          body: 'St. Ignatius of Loyola, in his Spiritual Exercises, gave the Church rules for discernment of spirits. Two key principles:\n\nCONSOLATION is from God — peace, deepening trust, energy for the good, attraction to virtue.\n\nDESOLATION is often from the enemy — confusion, restlessness, attraction to sin, despair. Important: in desolation, do not change your spiritual commitments.\n\nWhen you feel pulled in two directions, pause. Pray. The Spirit\'s voice is usually quiet, steady, and brings deeper peace even when the choice is hard.' },
        { type: 'explain', title: 'Practical Tips',
          body: '1. Pray each morning: "Come, Holy Spirit, guide me today."\n2. Keep silence sometimes — drown out the noise to hear Him.\n3. Read Scripture daily — He speaks through the Word.\n4. Examine your conscience at night — review where He was nudging, and whether you responded.\n5. Confess regularly — sin deafens the soul to His voice.\n6. Trust the peace test — if a course of action robs you of peace, examine it.' }
      ],
      questions: [
        { question: 'In Ignatian discernment, what does "consolation" indicate?',
          options: ['A sad feeling', 'The presence of God\'s Spirit drawing you toward Him', 'A bad omen', 'A neutral state'],
          correct_index: 1,
          explanation: 'Consolation is the experience of God drawing the soul: peace, deepening trust, attraction to virtue. Desolation is the opposite — and St. Ignatius warned never to make big decisions in desolation.' }
      ]
    },
    {
      slug: 'pentecost',
      title: 'Pentecost and the Birth of the Church',
      subtitle: 'The day the Holy Spirit was poured out.',
      xp_reward: 65, duration_minutes: 12,
      scripture_ref: 'Acts 2:1-41', ccc_ref: 'CCC 731-732',
      slides: [
        { type: 'hero', title: 'Pentecost',
          subtitle: 'Fire. Wind. Tongues. The Church is born.',
          body: 'Fifty days after Easter and ten days after the Ascension, the disciples — about 120 men and women including Mary the Mother of Jesus — were gathered in prayer in the upper room. Suddenly the Holy Spirit descended.' },
        { type: 'scripture', verse: 'When the day of Pentecost had come, they were all together in one place. And suddenly a sound came from heaven like the rush of a mighty wind, and it filled all the house where they were sitting. And there appeared to them tongues as of fire, distributed and resting on each one of them. And they were all filled with the Holy Spirit and began to speak in other tongues, as the Spirit gave them utterance.',
          reference: 'Acts 2:1-4' },
        { type: 'explain', title: 'What Pentecost Did',
          body: 'The Holy Spirit transformed the timid apostles into bold preachers. Peter, who had denied Christ three times out of fear, now stood and preached publicly to mockers. Three thousand were baptized that day — the Church was born in power.\n\nFrom that moment, the Spirit has guided the Church into all truth (Jn 16:13). The Magisterium\'s preservation from error, the validity of the sacraments, the growth of the saints — all are the work of the Holy Spirit who came down at Pentecost and has never left.' },
        { type: 'explain', title: 'Babel Reversed',
          body: 'At Babel (Genesis 11), pride scattered humanity into many tongues. At Pentecost, the Holy Spirit gathered humanity back: people from every nation heard the apostles speaking in their own language (Acts 2:5-11). What sin scattered, grace gathers. The Catholic Church is the new Pentecost — gathered from every nation in one Faith.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'The same Spirit who descended at Pentecost descended on YOU at Baptism and Confirmation. He is in you now.',
            'Pray daily: "Come, Holy Spirit, fill the hearts of your faithful, and enkindle in them the fire of your love."',
            'On Pentecost Sunday (50 days after Easter), make a special novena to the Holy Spirit.'
          ] }
      ],
      questions: [
        { question: 'When did Pentecost happen?',
          options: ['Immediately after Easter', '50 days after Easter, 10 days after the Ascension', 'On Christmas', 'On the day of Christ\'s Ascension'],
          correct_index: 1,
          explanation: 'Pentecost (Greek for "fiftieth") fell on the 50th day after Easter — and the 10th day after Jesus\' Ascension. The Apostles had spent those 10 days in prayer with Mary.',
          scripture_ref: 'Acts 2:1' },
        { question: 'How many were baptized on the day of Pentecost?',
          options: ['12', '120', '500', 'About 3,000'],
          correct_index: 3,
          explanation: 'Acts 2:41 — "Those who received his word were baptized, and there were added that day about three thousand souls." The Church\'s first day.' }
      ]
    }
  ]
};
