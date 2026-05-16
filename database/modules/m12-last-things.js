// Module 12 — The Last Things
module.exports = {
  slug: 'last-things',
  order_index: 12,
  title: 'The Last Things',
  subtitle: 'Death, Judgment, Heaven, Hell, Purgatory — what awaits.',
  description: 'You will die. So will I. So will everyone. The Last Things — Death, Judgment, Heaven, Hell, Purgatory — are realities the Catholic Church has taught from the beginning. Understand them, and live your life in their light.',
  category: 'theology',
  color: '#000080',
  gradient_start: '#191970',
  gradient_end: '#000033',
  badge_name: 'Mindful of Eternity',
  badge_emoji: 'crown',
  unlocks_after: null,
  lessons: [
    {
      slug: 'death',
      title: 'Death',
      subtitle: 'The most certain fact of your life — and the doorway.',
      xp_reward: 65, duration_minutes: 12, ccc_ref: 'CCC 1010-1014',
      slides: [
        { type: 'hero', title: 'Death',
          subtitle: 'Memento mori — remember you will die.',
          body: 'The saints kept skulls on their desks. Not morbid — realistic. You are mortal. So am I. So is everyone you know. The question is not WILL you die — the question is HOW will you face it, and where will you wake up.' },
        { type: 'explain', title: 'Particular Judgment',
          body: 'CCC 1021-1022 — "Each man receives his eternal retribution in his immortal soul at the very moment of his death, in a particular judgment that refers his life to Christ: either entrance into the blessedness of heaven — through a purification or immediately — or immediate and everlasting damnation."\n\nThe moment of death, your soul stands before Christ. Every thought, word, deed, omission accounted for. There is no second chance after death — the time for repentance is now.\n\nThree possible outcomes:\n1. STATE OF GRACE, ready for heaven → Heaven.\n2. STATE OF GRACE but not fully purified → Purgatory, then Heaven.\n3. STATE OF MORTAL SIN unrepented → Hell.' },
        { type: 'explain', title: 'The State of Grace',
          body: 'Dying in the state of grace means dying without unrepented mortal sin. Your soul is friend with God. You may not be perfect — venial sins still mark the soul — but you have not chosen against God in any final way.\n\nThis is why CONFESSION and the EUCHARIST and ANOINTING OF THE SICK matter so much. The Church surrounds the dying with sacraments precisely so the soul is in grace at the final hour.' },
        { type: 'explain', title: 'How to Prepare to Die Well',
          body: '1. CONFESS regularly — monthly minimum.\n2. ATTEND MASS weekly minimum.\n3. STAY OUT OF MORTAL SIN — avoid near occasions.\n4. PRAY FOR A HOLY DEATH — there is a special grace for this.\n5. MEDITATE on the Four Last Things periodically.\n6. KEEP shorter accounts — if you die TODAY, are you ready?' }
      ],
      questions: [
        { question: 'When does the particular judgment happen?',
          options: ['At the end of the world', 'At baptism', 'At the moment of death', 'Never'],
          correct_index: 2,
          explanation: 'CCC 1022 — each soul receives its particular judgment at the moment of death. There is also a "general" or "final" judgment at the end of the world.',
          ccc_ref: 'CCC 1022' }
      ]
    },
    {
      slug: 'purgatory',
      title: 'Purgatory',
      subtitle: 'The mercy of God\'s final purification.',
      xp_reward: 65, duration_minutes: 12, ccc_ref: 'CCC 1030-1032',
      slides: [
        { type: 'hero', title: 'Purgatory',
          subtitle: 'Not punishment. Purification.',
          body: 'Purgatory is the state of the saved who are not yet fully purified for heaven. It is NOT a third destination — everyone in Purgatory is going to heaven. But our souls must be entirely cleansed to enter into the Beatific Vision.' },
        { type: 'explain', title: 'Why Purgatory Exists',
          body: 'Revelation 21:27 — "Nothing unclean shall enter [the heavenly city]." Hebrews 12:14 — "Strive for the holiness without which no one will see the Lord."\n\nMost of us die imperfect. We have made it through life in friendship with God (state of grace) — but we still have attachments to venial sins, the temporal effects of forgiven sins, character flaws, half-loves. We are not fit for the absolute purity of heaven.\n\nGod\'s mercy provides purification. The soul is cleansed — painfully, joyfully — until it is fit to behold the Trinity face to face.' },
        { type: 'explain', title: 'Biblical Foundation',
          body: '2 Maccabees 12:44-46 — Judas Maccabeus makes atonement for soldiers who died in sin, "that they might be delivered from this sin." Acknowledges prayer for the dead — only useful if the dead can still be helped, i.e., not in hell (helpless) and not yet in heaven (no need).\n\n1 Corinthians 3:11-15 — Paul speaks of being saved "as through fire" — the soul tested by fire, surviving while works of straw burn away.\n\nMatthew 12:32 — Jesus speaks of sins that will not be forgiven "either in this age or in the age to come" — implying that some sins CAN be forgiven in the age to come.\n\nLuther rejected Purgatory in part because he rejected the deuterocanonicals. But the doctrine is older than the Reformation by 1,500 years.' },
        { type: 'explain', title: 'How We Help the Souls in Purgatory',
          body: 'They cannot help themselves. But we can help them — by:\n- Offering Masses for them\n- Praying for them (especially the Rosary)\n- Fasting and almsgiving on their behalf\n- Gaining indulgences for them\n- Living virtuous lives\n\nNovember 2 is All Souls Day — particularly dedicated to the Holy Souls in Purgatory.\n\nWhen we get to heaven, the souls we helped will be powerful intercessors for us.' },
        { type: 'explain', title: 'Indulgences Explained',
          body: 'Indulgences are NOT permission to sin. They are NOT bought (the abuse Luther rightly attacked).\n\nIndulgences are the remission of temporal punishment due to sin already forgiven — drawn from the treasury of merits of Christ and the saints, applied by the Church to particular souls (living or dead).\n\nConditions for plenary (full) indulgence: do the indulgenced work (e.g., visit a church on All Souls Day), receive Confession, receive Communion, pray for the Pope\'s intentions, be detached from all sin (even venial).\n\nIndulgences for the dead are charity — applying merits to souls who cannot earn them anymore.' }
      ],
      questions: [
        { question: 'What is Purgatory?',
          options: ['A second hell', 'A state of final purification for those who died in grace but are not yet fully holy', 'A myth', 'Where atheists go'],
          correct_index: 1,
          explanation: 'CCC 1030 — Purgatory is the final purification of the elect, those who die in God\'s grace and friendship but are still imperfectly purified. Everyone in Purgatory goes to heaven.',
          ccc_ref: 'CCC 1030' }
      ]
    },
    {
      slug: 'hell',
      title: 'Hell',
      subtitle: 'Eternal separation from God. Chosen freely.',
      xp_reward: 70, duration_minutes: 13, ccc_ref: 'CCC 1033-1037',
      slides: [
        { type: 'hero', title: 'Hell',
          subtitle: 'Christ spoke of hell more than anyone in Scripture.',
          body: 'Hell is the final and irreversible state of those who die in mortal sin without repentance. It is not God\'s arbitrary punishment. It is the soul\'s definitive self-exclusion from communion with God — chosen freely.' },
        { type: 'explain', title: 'Christ on Hell',
          body: 'Jesus spoke of hell more than anyone in Scripture. He used the word Gehenna repeatedly. He spoke of:\n- "Eternal fire" (Mt 25:41)\n- "Outer darkness, where there will be weeping and gnashing of teeth" (Mt 25:30)\n- "The worm that does not die, the fire that is not quenched" (Mark 9:48)\n- "Eternal punishment" (Mt 25:46)\n\nThe Church takes Christ at His word.' },
        { type: 'explain', title: 'The Nature of Hell',
          body: 'CCC 1035 — "The chief punishment of hell is eternal separation from God." Hell is being eternally cut off from the one Love that fulfills the human heart. The "fire" is real but its essence is the agony of an immortal soul forever alienated from the God it was made for.\n\nHell is FREELY CHOSEN. God does not send anyone to hell who has not chosen it. CCC 1037 — "God predestines no one to go to hell; for this, a willful turning away from God (a mortal sin) is necessary."\n\nIn mortal sin, the soul effectively says to God: "Your will be not done. Mine be done." If at death this is still the soul\'s posture, God respects it — eternally.' },
        { type: 'explain', title: 'Catholic Reasonable Hope',
          body: 'The Church teaches with certainty that hell EXISTS. The Church has NEVER declared any specific person to be in hell — not even Judas Iscariot. (The Church has only ever declared specific persons to be in heaven, via canonization.)\n\nThis means: Hell is a real, terrifying possibility. We must avoid it with all our strength. AND: We may pray and hope for the salvation of every soul — including our worst enemies, even those who seem most lost.\n\nWe should fear hell — for ourselves first. And work for our own salvation and the salvation of others.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'How seriously do you take Christ\'s teaching on hell?',
            'Is there mortal sin in your life right now?',
            'Have you been to Confession recently?',
            'Whose salvation are you working for besides your own?'
          ] }
      ],
      questions: [
        { question: 'Who in Catholic teaching is responsible for someone ending up in hell?',
          options: ['God', 'The Devil', 'The person themselves through unrepented mortal sin', 'Random fate'],
          correct_index: 2,
          explanation: 'CCC 1037: "God predestines no one to go to hell; for this, a willful turning away from God (a mortal sin) is necessary." Hell is freely chosen by the soul that dies in mortal sin without repentance.',
          ccc_ref: 'CCC 1037' }
      ]
    },
    {
      slug: 'heaven',
      title: 'Heaven',
      subtitle: 'The Beatific Vision — eternal joy with God and all the saints.',
      xp_reward: 75, duration_minutes: 14, ccc_ref: 'CCC 1023-1029',
      slides: [
        { type: 'hero', title: 'Heaven',
          subtitle: 'What we were made for.',
          body: 'Heaven is not clouds and harps. Heaven is the Beatific Vision — seeing God face to face, knowing as we are known, loving in the very life of the Trinity. It is the deepest desire of the human heart finally fulfilled.' },
        { type: 'explain', title: 'The Beatific Vision',
          body: 'CCC 1028 — "By his glory we are admitted to the joy of the divine blessedness." The Beatific Vision is the direct knowledge of God by the soul — no veil, no mediation. We will know God as He knows Himself, to the measure of our capacity (each saint has a different "capacity" but each is fully satisfied).\n\n1 Corinthians 13:12 — "For now we see in a mirror dimly, but then face to face; now I know in part, but then I shall understand fully, even as I have been fully understood."\n\n1 John 3:2 — "We shall see Him as He is."' },
        { type: 'explain', title: 'What Else is in Heaven',
          body: '- ALL THE SAINTS — Mary, the apostles, all the Doctors, all our beloved who died in grace.\n- ANGELS — surrounding the Throne.\n- THE LORD JESUS — in His glorified Body.\n- PERFECT LOVE — every relationship fulfilled, no more suffering.\n- THE RESURRECTION OF THE BODY — at the end of time. Heaven includes our bodies, glorified.' },
        { type: 'explain', title: 'The Resurrection of the Body',
          body: 'Christian hope is NOT escape from the body into a spiritual heaven. It is RESURRECTION — God redeeming and glorifying our physical bodies at the end of time.\n\nJesus\' resurrected body is the template. He could be touched (Jn 20:27), could eat (Lk 24:42), yet entered through locked doors (Jn 20:19), traveled instantly. Glorified matter — same body, different qualities.\n\nIn heaven we will have our own glorified bodies — recognizable, beautiful, free from suffering, perfectly responsive to the soul.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'What would you most want to ask God face to face?',
            'Whom do you most want to see in heaven?',
            'How is your current life preparing you for the Beatific Vision?'
          ] }
      ],
      questions: [
        { question: 'What is the "Beatific Vision"?',
          options: ['A beautiful dream', 'A Catholic prayer', 'The direct seeing of God by the saved soul in heaven', 'The Mass'],
          correct_index: 2,
          explanation: 'The Beatific Vision is the direct, unmediated knowledge of God — "face to face" — that constitutes the essential joy of heaven.',
          ccc_ref: 'CCC 1028' }
      ]
    },
    {
      slug: 'last-judgment',
      title: 'The Last Judgment and End Times',
      subtitle: 'The Second Coming. The Resurrection of all. The new creation.',
      xp_reward: 65, duration_minutes: 12, ccc_ref: 'CCC 1038-1041',
      slides: [
        { type: 'hero', title: 'The Last Judgment',
          subtitle: 'Christ will come again in glory to judge the living and the dead.',
          body: 'At the end of time, history will reach its climax. The Second Coming of Christ. The resurrection of ALL the dead. The Last Judgment — universal, public, final. The New Heaven and New Earth.' },
        { type: 'explain', title: 'The Second Coming',
          body: 'CCC 668-682 — Christ has ascended in glory and "will come again to judge the living and the dead" (Apostles\' Creed). The Second Coming is certain — its timing is not. "Of that day and hour no one knows, not even the angels of heaven, nor the Son, but only the Father" (Mt 24:36). Watch and pray.' },
        { type: 'explain', title: 'The Resurrection of the Dead',
          body: '1 Corinthians 15 — At the Last Trumpet, all the dead will rise bodily. The bodies of the saved will be glorified; the bodies of the lost will be raised to face their final state. "All who are in the tombs will hear his voice and come forth, those who have done good, to the resurrection of life, and those who have done evil, to the resurrection of judgment" (Jn 5:28-29).' },
        { type: 'explain', title: 'The Last Judgment',
          body: 'Christ in glory, surrounded by angels and saints, will judge all of human history. Every secret revealed. Every choice accounted for. The particular judgment is private; the final judgment is public — to vindicate God\'s justice before all creation.\n\nMatthew 25:31-46 — the parable of the sheep and the goats. "Inasmuch as you did it to one of the least of these my brethren, you did it to me." Acts of mercy will be the criterion.' },
        { type: 'explain', title: 'The New Heaven and New Earth',
          body: 'Revelation 21 — "Behold, I make all things new." Not the destruction of creation but its transformation. God dwelling with humanity. No more death, mourning, crying, or pain.\n\nThis is the destination. This is what we were made for. This is what every Mass is a foretaste of.' },
        { type: 'explain', title: 'The Antichrist?',
          body: 'Catholic teaching: before the Second Coming there will be a final trial of the Church, sometimes called the "Antichrist deception" (CCC 675-677). Specific identification of the Antichrist is not Catholic dogma. Most prophetic speculation in popular Protestant culture is not Catholic teaching.\n\nWhat is Catholic teaching: be watchful, be faithful, trust Christ, persevere to the end.' }
      ],
      questions: [
        { question: 'According to the Catholic Church, when will the Second Coming happen?',
          options: ['In 2030', 'At the end of the world — date unknown', 'Already happened', 'It is a metaphor'],
          correct_index: 1,
          explanation: 'The Second Coming will happen at the end of time. Christ Himself said no one knows the day or hour. CCC 673 — The Second Coming is "imminent" in the sense that it can come at any time.' }
      ]
    },
    {
      slug: 'marian-apparitions',
      title: 'Marian Apparitions and Signs',
      subtitle: 'Fatima, Lourdes, Guadalupe — Mary speaks in the last days.',
      xp_reward: 75, duration_minutes: 14,
      slides: [
        { type: 'hero', title: 'Marian Apparitions',
          subtitle: 'God\'s Mother visits her children.',
          body: 'Throughout Church history, Mary has appeared to chosen souls — often children, often in remote places — bringing messages, calls to repentance, signs of God\'s mercy. The Church carefully examines each. The greatest have been approved as worthy of belief, though private revelation never binds faith.' },
        { type: 'gallery', title: 'The Major Approved Apparitions', items: [
          { name: 'Guadalupe (1531)', quote: 'Mexico. Mary appeared to St. Juan Diego, brown-skinned, pregnant. Left her image on his tilma — still preserved. Scientific examination of the tilma has found: stars matching Mexico City sky on December 12, 1531; tiny reflected images in her eyes; no underdrawing or brushstrokes; impossible preservation of cactus fiber for 500 years.', role: 'Tilma' },
          { name: 'Lourdes (1858)', quote: 'France. 18 apparitions to St. Bernadette Soubirous. Mary identified herself: "I am the Immaculate Conception" — 4 years after the dogma was defined in Rome. A spring sprang up where Mary asked Bernadette to dig. The Medical Bureau has documented 70 miracles meeting the strictest scientific criteria — among 8,000 reported healings.', role: 'Spring of healing' },
          { name: 'Fatima (1917) — the most consequential', quote: 'Portugal. 6 apparitions May-October 1917 to Lucia (10), Francisco (9), Jacinta (7). Mary asked for: prayer of the Rosary, penance, consecration of Russia. Showed them a vision of hell. Three "secrets" given. The "Miracle of the Sun" on October 13, 1917 — the sun spun and seemed to plunge toward the earth before 70,000 witnesses (including atheist journalists). Photographs of the event exist.', role: 'Mother to whole world' },
          { name: 'La Salette (1846)', quote: 'France. Two children, Maximin and Melanie, saw Mary weeping. She gave a call to penance, and two secrets — one of which spoke of the Church\'s future suffering.', role: 'Weeping Mother' },
          { name: 'Akita, Japan (1973)', quote: 'A wooden statue of Mary wept (over 100 times, witnessed by hundreds, recorded on TV). The visionary, Sr. Agnes Sasagawa, received messages similar to Fatima.', role: 'Modern Japan' },
          { name: 'Kibeho, Rwanda (1981)', quote: 'Before the 1994 genocide, three young women saw Mary who warned of "rivers of blood" coming to Rwanda. The Church approved the apparitions. The genocide killed 800,000.', role: 'Warning' }
        ] },
        { type: 'explain', title: 'The Three Secrets of Fatima',
          body: '1ST SECRET — Vision of hell, with souls falling like snowflakes.\n\n2ND SECRET — Russia would spread its errors throughout the world. If Russia were consecrated to Mary\'s Immaculate Heart, peace would come. Pope JPII consecrated the world (including Russia by implication) in 1984 — the Soviet Union collapsed in 1989-91.\n\n3RD SECRET — Vision of a "bishop in white" climbing a mountain past corpses, struck down by gunfire and arrows along with many religious and laity. Pope John Paul II — shot on May 13, 1981 (the anniversary of the first Fatima apparition) — believed this was a vision of his own attempted assassination. The bullet that nearly killed him is now set in the crown of the Fatima statue.' },
        { type: 'reflection', title: 'For Reflection',
          prompts: [
            'Mary calls us to: prayer (especially the Rosary), penance, conversion, consecration to her Immaculate Heart.',
            'What is one Marian practice you could take up?',
            'On the 13th of each month, pray a Rosary for whatever Mary wants.',
            'Mary is your Mother. Talk to her like a son or daughter would.'
          ] }
      ],
      questions: [
        { question: 'On what date did the Miracle of the Sun occur at Fatima?',
          options: ['May 13, 1917', 'October 13, 1917', 'August 15, 1917', 'December 12, 1917'],
          correct_index: 1,
          explanation: 'On October 13, 1917, before 70,000 witnesses (including atheist journalists), the sun spun and seemed to plunge toward the earth. The exact date had been announced by Mary three months in advance.' },
        { question: 'Who consecrated the world (including Russia) to Mary\'s Immaculate Heart in 1984?',
          options: ['Pius XII', 'John XXIII', 'St. John Paul II', 'Benedict XVI'],
          correct_index: 2,
          explanation: 'St. John Paul II consecrated the world (with Russia by implication) on March 25, 1984. The Soviet Union began to disintegrate in 1989, falling completely in 1991.' }
      ]
    }
  ]
};
