// Bible Stories — illustrated panel sequences for the Bible Story Explorer.
// Each story has multiple panels with title, narrative, scripture quote.

const stories = [
  // OLD TESTAMENT
  { slug: 'creation', title: 'Creation', testament: 'Old', book: 'Genesis', scripture_ref: 'Genesis 1-2', ccc_ref: 'CCC 280-301',
    short_summary: 'God created the heavens and the earth in six days, and rested on the seventh. He created man and woman in His own image.',
    panels: [
      { title: 'Day One — Light', narrative: 'In the beginning, when all was formless and dark, God said, "Let there be light," and there was light. He separated light from darkness, calling them Day and Night.', verse: 'In the beginning God created the heavens and the earth. (Genesis 1:1)' },
      { title: 'Day Two and Three', narrative: 'God separated the waters above from the waters below — sky from sea. Then He gathered the waters and made the dry land appear, and the earth brought forth plants of every kind.', verse: 'And God saw that it was good. (Genesis 1:10)' },
      { title: 'Day Four — Sun, Moon, Stars', narrative: 'God set the sun, moon, and stars in the heavens — for signs and seasons, days and years.', verse: 'God made the two great lights — the greater to rule the day, the lesser to rule the night. (Genesis 1:16)' },
      { title: 'Day Five and Six — Living Creatures', narrative: 'God filled the sea with fish, the air with birds, the land with every kind of animal — all good. Then on the sixth day, the crown of creation.', verse: 'Let us make man in our image, in our likeness. (Genesis 1:26)' },
      { title: 'Man and Woman', narrative: 'God formed man from the dust of the earth and breathed into him the breath of life. He created woman from the man\'s side, that she might be his helpmate and equal. They were innocent, naked, unashamed.', verse: 'Male and female he created them. (Genesis 1:27)' },
      { title: 'The Seventh Day', narrative: 'God rested on the seventh day and blessed it — the origin of the Sabbath, holy time set apart for Him.', verse: 'God blessed the seventh day and made it holy. (Genesis 2:3)' }
    ] },
  { slug: 'fall', title: 'The Fall', testament: 'Old', book: 'Genesis', scripture_ref: 'Genesis 3', ccc_ref: 'CCC 385-421',
    short_summary: 'Tempted by the serpent, Adam and Eve disobeyed God and lost the original holiness and justice. The Protoevangelium promised a Redeemer.',
    panels: [
      { title: 'The Garden of Eden', narrative: 'Adam and Eve lived in perfect friendship with God in the Garden. They could eat of every tree except one — the Tree of the Knowledge of Good and Evil.', verse: 'You may eat freely of every tree of the garden; but of the tree of the knowledge of good and evil you shall not eat. (Genesis 2:16-17)' },
      { title: 'The Serpent\'s Lie', narrative: 'The serpent — the devil disguised — whispered to Eve: "You will not surely die. You will be like God, knowing good and evil." She took the fruit. She gave to Adam, and he ate also.', verse: 'You will be like God. (Genesis 3:5)' },
      { title: 'Shame and Hiding', narrative: 'Their eyes were opened — but to their own nakedness, their own shame. When God walked in the garden, they hid. He called, "Adam, where are you?"', verse: 'Where are you? (Genesis 3:9)' },
      { title: 'The First Promise', narrative: 'God spoke of consequences but also of mercy. To the serpent He said the great Protoevangelium: a Woman would come, and her Seed would crush the serpent\'s head.', verse: 'I will put enmity between you and the woman, between your seed and her seed; he shall bruise your head, and you shall bruise his heel. (Genesis 3:15)' },
      { title: 'Exile from Eden', narrative: 'God clothed them and sent them out of the Garden. Cherubim with a flaming sword guarded the Tree of Life. But God had already prepared salvation through the New Adam (Christ) and the New Eve (Mary).', verse: 'He drove out the man. (Genesis 3:24)' }
    ] },
  { slug: 'noah', title: 'Noah and the Ark', testament: 'Old', book: 'Genesis', scripture_ref: 'Genesis 6-9', ccc_ref: 'CCC 56-58, 71',
    short_summary: 'When wickedness covered the earth, God sent a flood. Noah, his family, and pairs of every animal were saved. The rainbow sealed God\'s covenant.',
    panels: [
      { title: 'A Corrupt World', narrative: 'Generations after the Fall, mankind had grown so violent and wicked that the Lord regretted having made them. But Noah, a righteous man, found favor in His sight.', verse: 'Noah was a righteous man, blameless in his generation. (Genesis 6:9)' },
      { title: 'The Ark', narrative: 'God commanded Noah to build a great ark of gopher wood — 300 cubits long, three decks high. Take pairs of every kind of animal, He said. A flood is coming to cleanse the earth.', verse: 'Make yourself an ark of gopher wood. (Genesis 6:14)' },
      { title: 'The Great Flood', narrative: 'The rains fell forty days and nights. The deeps burst forth. Every living thing on dry land perished — but Noah\'s ark floated above. For 150 days the waters covered everything.', verse: 'The rain fell upon the earth forty days and forty nights. (Genesis 7:12)' },
      { title: 'The Dove and the Olive Branch', narrative: 'When the waters receded, the ark came to rest on Mount Ararat. Noah sent out a dove which returned with an olive branch — a sign that life had returned to the earth.', verse: 'The dove came back to him in the evening, and lo, in her mouth a freshly plucked olive leaf. (Genesis 8:11)' },
      { title: 'The Rainbow Covenant', narrative: 'God set His bow in the clouds — never again would the earth be destroyed by flood. The ark prefigures the Church which saves all who enter; the dove prefigures the Holy Spirit; the rainbow prefigures God\'s covenant in Christ.', verse: 'I have set my bow in the clouds, and it shall be a sign of the covenant. (Genesis 9:13)' }
    ] },
  { slug: 'abraham', title: 'Abraham and the Covenant', testament: 'Old', book: 'Genesis', scripture_ref: 'Genesis 12, 15, 17, 22', ccc_ref: 'CCC 59-61',
    short_summary: 'God called Abraham to leave his country and made him father of a chosen people, promising a land, descendants, and blessing for all nations.',
    panels: [
      { title: 'The Call', narrative: 'When Abram was 75, the Lord said to him: "Go from your country and your kindred to the land that I will show you. I will make of you a great nation."', verse: 'Go from your country to the land that I will show you. (Genesis 12:1)' },
      { title: 'The Covenant', narrative: 'God made a solemn covenant with Abram, changing his name to Abraham — "father of many nations." He promised that Abraham\'s descendants would be as numerous as the stars.', verse: 'Look toward heaven, and number the stars... so shall your descendants be. (Genesis 15:5)' },
      { title: 'Isaac, the Promised Son', narrative: 'When Abraham was 100 and Sarah 90, God gave them the promised son: Isaac, whose name means "laughter."', verse: 'The Lord visited Sarah as he had said. (Genesis 21:1)' },
      { title: 'The Sacrifice on Moriah', narrative: 'God tested Abraham\'s faith: "Take your son Isaac, your only son, whom you love, and offer him there as a burnt offering." Abraham obeyed — climbed Mount Moriah with the wood on Isaac\'s shoulders. At the last moment, God stopped him and provided a ram caught in a thicket. Isaac prefigures Christ — the only beloved Son who carried His own wood, the cross.', verse: 'God himself will provide the lamb for a burnt offering. (Genesis 22:8)' }
    ] },
  { slug: 'moses-exodus', title: 'Moses and the Exodus', testament: 'Old', book: 'Exodus', scripture_ref: 'Exodus 1-15', ccc_ref: 'CCC 62-64, 1334',
    short_summary: 'God called Moses from a burning bush to lead His people out of slavery in Egypt. Through ten plagues and the parting of the Red Sea, He saved Israel.',
    panels: [
      { title: 'Born to Slavery', narrative: 'Israel had multiplied in Egypt. A new Pharaoh enslaved them and ordered Hebrew baby boys killed. Moses\' mother hid him in a basket on the Nile. Pharaoh\'s daughter found him and raised him as her own.', verse: 'She drew him out of the water. (Exodus 2:10)' },
      { title: 'The Burning Bush', narrative: 'Forty years later, in the desert of Midian, Moses saw a bush burning but not consumed. God spoke from the fire: "I am the God of Abraham, of Isaac, and of Jacob." When Moses asked His name, God said: "I AM WHO I AM."', verse: 'I AM WHO I AM. (Exodus 3:14)' },
      { title: 'The Ten Plagues', narrative: 'Moses confronted Pharaoh: "Let my people go!" Ten plagues struck Egypt — water turned to blood, frogs, lice, flies, livestock death, boils, hail, locusts, darkness, and finally the death of the firstborn.', verse: 'Let my people go that they may serve me. (Exodus 7:16)' },
      { title: 'The Passover', narrative: 'On the night of the tenth plague, Israel sacrificed a lamb without blemish, ate it with unleavened bread and bitter herbs, and marked their doors with its blood. The destroying angel passed over those houses. The Passover prefigures the Eucharist — the Lamb of God whose Blood saves us.', verse: 'When I see the blood, I will pass over you. (Exodus 12:13)' },
      { title: 'The Red Sea', narrative: 'Pharaoh changed his mind and pursued. Trapped against the sea, Moses stretched out his staff. The Lord parted the waters. Israel walked through on dry ground. When the Egyptians followed, the waters crashed down — Pharaoh\'s army was destroyed.', verse: 'The Lord is my strength and my song. (Exodus 15:2)' }
    ] },
  { slug: 'ten-commandments', title: 'The Ten Commandments', testament: 'Old', book: 'Exodus', scripture_ref: 'Exodus 20', ccc_ref: 'CCC 2052-2557',
    short_summary: 'On Mount Sinai, in fire and smoke, God gave Moses the Ten Commandments — the moral law for all peoples and all times.',
    panels: [
      { title: 'Sinai in Cloud and Fire', narrative: 'After fifty days in the wilderness, Israel reached Mount Sinai. The mountain trembled with thunder, smoke, and trumpet blast. Moses ascended alone.', verse: 'Mount Sinai was wrapped in smoke because the Lord descended upon it in fire. (Exodus 19:18)' },
      { title: 'The First Three — Love of God', narrative: 'I am the Lord your God. (1) You shall have no other gods before me. You shall not make for yourself a graven image as an idol; you shall not bow down to them or serve them. (2) You shall not take the name of the Lord your God in vain. (3) Remember the Sabbath day, to keep it holy.', verse: 'I am the Lord your God. (Exodus 20:2)' },
      { title: 'The Last Seven — Love of Neighbor', narrative: '(4) Honor your father and your mother. (5) You shall not kill. (6) You shall not commit adultery. (7) You shall not steal. (8) You shall not bear false witness. (9) You shall not covet your neighbor\'s wife. (10) You shall not covet your neighbor\'s goods.', verse: 'You shall not kill. (Exodus 20:13)' },
      { title: 'The Tablets', narrative: 'God wrote the commandments with His own finger on two stone tablets, which Moses brought down to the people. They are the foundation of moral law for all of humanity.', verse: 'Written with the finger of God. (Exodus 31:18)' }
    ] },
  { slug: 'david-goliath', title: 'David and Goliath', testament: 'Old', book: '1 Samuel', scripture_ref: '1 Samuel 17',
    short_summary: 'The shepherd boy David defeated the Philistine giant Goliath with five smooth stones and faith in God.',
    panels: [
      { title: 'The Giant\'s Challenge', narrative: 'Goliath, a giant Philistine warrior nine feet tall, mocked the armies of Israel for forty days, defying anyone to fight him.', verse: 'I defy the ranks of Israel this day. (1 Samuel 17:10)' },
      { title: 'A Shepherd Boy', narrative: 'David, the youngest son of Jesse, came bringing food to his brothers. Hearing the giant\'s blasphemies, he was indignant: "Who is this uncircumcised Philistine that he should defy the armies of the living God?"', verse: 'The battle is the Lord\'s. (1 Samuel 17:47)' },
      { title: 'Five Smooth Stones', narrative: 'Refusing Saul\'s armor, David took his staff, sling, and five smooth stones from the brook.', verse: 'You come to me with a sword and with a spear; but I come to you in the name of the Lord. (1 Samuel 17:45)' },
      { title: 'The Victory', narrative: 'David ran toward Goliath, hurled a stone, and struck the giant in the forehead. He fell. David took the giant\'s own sword and cut off his head. Israel routed the Philistines. David, the shepherd-king, prefigures Christ — David\'s greater Son.', verse: 'All this assembly may know that the Lord saves not with sword and spear. (1 Samuel 17:47)' }
    ] },
  { slug: 'jonah', title: 'Jonah and the Whale', testament: 'Old', book: 'Jonah', scripture_ref: 'Jonah 1-4',
    short_summary: 'The reluctant prophet swallowed by a great fish. Christ named Jonah as a sign of His own three days in the tomb.',
    panels: [
      { title: 'Fleeing God', narrative: 'God commanded Jonah to preach repentance to Nineveh — the cruel Assyrian capital. Jonah ran. He boarded a ship to Tarshish in the opposite direction.', verse: 'But Jonah rose to flee to Tarshish from the presence of the Lord. (Jonah 1:3)' },
      { title: 'The Storm', narrative: 'A great storm threatened the ship. The sailors cast lots and discovered Jonah was the cause. He told them: "Throw me into the sea." They did. The storm ceased.', verse: 'Pick me up and throw me into the sea. (Jonah 1:12)' },
      { title: 'Three Days in the Belly', narrative: 'The Lord prepared a great fish to swallow Jonah. For three days and nights he was in its belly. He prayed and was vomited up on dry land.', verse: 'Jonah was in the belly of the fish three days and three nights. (Jonah 1:17)' },
      { title: 'Nineveh Repents', narrative: 'Jonah preached, and Nineveh — pagan, vast, wicked — repented in sackcloth and ashes. God spared the city. Christ said: "Just as Jonah was three days in the belly of the great fish, so will the Son of Man be three days in the heart of the earth."', verse: 'A greater than Jonah is here. (Matthew 12:41)' }
    ] },

  // NEW TESTAMENT
  { slug: 'annunciation', title: 'The Annunciation', testament: 'New', book: 'Luke', scripture_ref: 'Luke 1:26-38', ccc_ref: 'CCC 484-511',
    short_summary: 'The Archangel Gabriel announces to Mary that she will conceive the Son of God by the Holy Spirit. Her Yes opens the way for the Incarnation.',
    panels: [
      { title: 'The Angel Sent', narrative: 'In the sixth month, God sent the Archangel Gabriel to Nazareth, to a virgin betrothed to Joseph of the house of David. Her name was Mary.', verse: 'The angel Gabriel was sent from God to a city in Galilee called Nazareth. (Luke 1:26)' },
      { title: 'Hail, Full of Grace', narrative: 'Gabriel came to her and said: "Hail, full of grace, the Lord is with you." She was deeply troubled by his words. The angel said: "Do not be afraid, Mary, for you have found favor with God."', verse: 'Hail, full of grace, the Lord is with you. (Luke 1:28)' },
      { title: 'You Shall Conceive', narrative: '"Behold, you shall conceive in your womb and bear a Son, and you shall call His name Jesus. He shall be great, and shall be called the Son of the Most High."', verse: 'You shall name him Jesus. (Luke 1:31)' },
      { title: 'How Can This Be?', narrative: 'Mary asked: "How can this be, since I do not know man?" The angel answered: "The Holy Spirit will come upon you, and the power of the Most High will overshadow you. Therefore the Child shall be holy — the Son of God."', verse: 'The Holy Spirit will come upon you. (Luke 1:35)' },
      { title: 'Fiat', narrative: 'Mary answered: "Behold, I am the handmaid of the Lord; let it be done to me according to your word." The angel departed. In that moment, the Word became flesh in her womb.', verse: 'Let it be done to me according to your word. (Luke 1:38)' }
    ] },
  { slug: 'nativity', title: 'The Nativity of Jesus', testament: 'New', book: 'Luke', scripture_ref: 'Luke 2:1-20', ccc_ref: 'CCC 522-534',
    short_summary: 'The Son of God is born in a stable in Bethlehem. Angels announce the good news to shepherds in the fields.',
    panels: [
      { title: 'On the Road to Bethlehem', narrative: 'Caesar Augustus decreed a census. Joseph went up from Nazareth to the city of David, called Bethlehem, with Mary his betrothed, who was with child.', verse: 'There went out a decree from Caesar Augustus. (Luke 2:1)' },
      { title: 'No Room in the Inn', narrative: 'While they were there, the time came for Mary to give birth. She gave birth to her firstborn Son, wrapped Him in swaddling clothes, and laid Him in a manger, because there was no place for them in the inn.', verse: 'She laid him in a manger. (Luke 2:7)' },
      { title: 'Shepherds in the Fields', narrative: 'Shepherds were watching their flocks by night. An angel appeared in glory. They were terrified. The angel said: "Do not be afraid! For behold, I bring you good news of great joy — a Savior has been born to you, Christ the Lord."', verse: 'Do not be afraid! For behold, I bring you good news of great joy. (Luke 2:10)' },
      { title: 'Glory to God in the Highest', narrative: 'Suddenly there was with the angel a multitude of the heavenly host praising God and saying: "Glory to God in the highest, and on earth peace to those of good will." The shepherds hastened to the stable and worshiped Him.', verse: 'Glory to God in the highest. (Luke 2:14)' }
    ] },
  { slug: 'magi', title: 'The Magi from the East', testament: 'New', book: 'Matthew', scripture_ref: 'Matthew 2:1-12',
    short_summary: 'Wise men from the East follow a star to the newborn King and offer gifts of gold, frankincense, and myrrh.',
    panels: [
      { title: 'A Star in the East', narrative: 'Wise men (Magi) from the East came to Jerusalem asking: "Where is he who has been born King of the Jews? We saw his star in the East and have come to worship him."', verse: 'We have seen his star in the East. (Matthew 2:2)' },
      { title: 'Herod\'s Plot', narrative: 'King Herod was troubled. The chief priests said the Messiah would be born in Bethlehem of Judea. Herod sent the Magi there, asking them secretly to return and tell him so he too could worship — but his heart was murder.', verse: 'In Bethlehem of Judea. (Matthew 2:5)' },
      { title: 'Gifts for a King', narrative: 'The star led them to the place where the Child was. They knelt down and worshiped Him. They opened their treasures and offered gifts — gold for a king, frankincense for God, myrrh for the burial of one who would die for us.', verse: 'They presented him with gifts: gold and frankincense and myrrh. (Matthew 2:11)' },
      { title: 'Another Way Home', narrative: 'Warned in a dream not to return to Herod, they departed for their own country by another way.', verse: 'They departed for their own country by another way. (Matthew 2:12)' }
    ] },
  { slug: 'baptism', title: 'The Baptism of Jesus', testament: 'New', book: 'Matthew', scripture_ref: 'Matthew 3:13-17', ccc_ref: 'CCC 535-537',
    short_summary: 'Jesus is baptized in the Jordan by John. The heavens open, the Spirit descends as a dove, and the Father\'s voice declares Him beloved Son.',
    panels: [
      { title: 'John\'s Mission', narrative: 'John the Baptist preached in the desert: "Repent, for the Kingdom of Heaven is at hand!" He baptized with water in the Jordan river. Crowds came confessing their sins.', verse: 'Repent, for the kingdom of heaven is at hand. (Matthew 3:2)' },
      { title: 'The Lamb of God', narrative: 'When John saw Jesus coming, he proclaimed: "Behold the Lamb of God, who takes away the sin of the world!"', verse: 'Behold the Lamb of God. (John 1:29)' },
      { title: 'Jesus Insists', narrative: 'Jesus came to John for baptism. John resisted: "I need to be baptized by you, and do you come to me?" Jesus said: "Let it be so now; for thus it is fitting for us to fulfill all righteousness."', verse: 'It is fitting for us to fulfill all righteousness. (Matthew 3:15)' },
      { title: 'The Trinity Revealed', narrative: 'When Jesus was baptized, the heavens opened. The Spirit of God descended like a dove upon Him. And a voice from heaven said: "This is my beloved Son, with whom I am well pleased." The Holy Trinity is revealed at the Jordan.', verse: 'This is my beloved Son, with whom I am well pleased. (Matthew 3:17)' }
    ] },
  { slug: 'sermon-mount', title: 'The Sermon on the Mount', testament: 'New', book: 'Matthew', scripture_ref: 'Matthew 5-7', ccc_ref: 'CCC 1716-1729',
    short_summary: 'The greatest sermon ever preached. The Beatitudes. The Lord\'s Prayer. The new law of love that fulfills and exceeds the old.',
    panels: [
      { title: 'On the Mountainside', narrative: 'Seeing the crowds, Jesus went up the mountain. His disciples gathered around Him. He sat down and began to teach.', verse: 'And he opened his mouth and taught them. (Matthew 5:2)' },
      { title: 'The Beatitudes', narrative: '"Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn. Blessed are the meek. Blessed are those who hunger and thirst for righteousness. Blessed are the merciful. Blessed are the pure in heart. Blessed are the peacemakers. Blessed are those who are persecuted for righteousness."', verse: 'Blessed are the pure in heart, for they shall see God. (Matthew 5:8)' },
      { title: 'Salt and Light', narrative: '"You are the salt of the earth. You are the light of the world. A city set on a hill cannot be hidden. Let your light shine before others, that they may see your good works and give glory to your Father in heaven."', verse: 'Let your light shine before others. (Matthew 5:16)' },
      { title: 'The New Law', narrative: '"You have heard it said, but I say to you..." Jesus elevated every commandment. Not just murder — but anger. Not just adultery — but lust in the heart. Not just oaths kept — but speech of pure honesty. Love not only your friends but your enemies.', verse: 'Love your enemies and pray for those who persecute you. (Matthew 5:44)' },
      { title: 'The Lord\'s Prayer', narrative: '"Pray then like this: Our Father who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil."', verse: 'Our Father, who art in heaven. (Matthew 6:9)' },
      { title: 'Build on the Rock', narrative: '"Everyone who hears these words of mine and acts on them will be like a wise man who built his house on rock. Everyone who hears them and does not act will be like a foolish man who built on sand." When Jesus finished, the crowds were astonished — for He taught with authority.', verse: 'Build your house on the rock. (Matthew 7:24)' }
    ] },
  { slug: 'cana', title: 'The Wedding at Cana', testament: 'New', book: 'John', scripture_ref: 'John 2:1-12',
    short_summary: 'At Mary\'s request, Jesus performs His first miracle: turning water into wine. The first of His signs revealing His glory.',
    panels: [
      { title: 'A Wedding Crisis', narrative: 'At a wedding in Cana of Galilee, Mary, Jesus, and His disciples were guests. The wine ran out. Mary said to Jesus simply: "They have no wine."', verse: 'They have no wine. (John 2:3)' },
      { title: 'Do Whatever He Tells You', narrative: 'Jesus said: "Woman, what does this have to do with me? My hour has not yet come." Mary turned to the servants and gave them the final advice for every Christian: "Do whatever He tells you."', verse: 'Do whatever he tells you. (John 2:5)' },
      { title: 'Six Stone Jars', narrative: 'Jesus said to the servants: "Fill the jars with water." They filled them to the brim. He said: "Draw some out and take it to the headwaiter."', verse: 'Fill the jars with water. (John 2:7)' },
      { title: 'The Best Wine', narrative: 'When the headwaiter tasted, he called the bridegroom and said: "Every man serves the good wine first, but you have kept the best until now." Thus Jesus did the first of His signs at Cana, and revealed His glory, and His disciples believed in Him.', verse: 'You have kept the good wine until now. (John 2:10)' }
    ] },
  { slug: 'loaves-fishes', title: 'The Loaves and Fishes', testament: 'New', book: 'John', scripture_ref: 'John 6:1-15, Matthew 14:13-21',
    short_summary: 'With five barley loaves and two fish, Jesus feeds five thousand men — a sign pointing to the Eucharist.',
    panels: [
      { title: 'A Hungry Crowd', narrative: 'A great crowd followed Jesus. As evening came, they were hungry. Philip said: "Two hundred days\' wages could not buy enough bread for them."', verse: 'How are we to buy bread, so that these people may eat? (John 6:5)' },
      { title: 'A Boy\'s Lunch', narrative: 'Andrew said: "There is a boy here who has five barley loaves and two fish — but what are they among so many?"', verse: 'There is a boy here who has five barley loaves and two fish. (John 6:9)' },
      { title: 'The Blessing', narrative: 'Jesus told them to sit down. He took the loaves, gave thanks, and distributed them. So also the fish. All ate as much as they wanted.', verse: 'Jesus took the loaves, gave thanks, and distributed them. (John 6:11)' },
      { title: 'Twelve Baskets', narrative: 'When all were satisfied, they gathered the remains — twelve baskets of fragments — more than they began with. Five thousand men, besides women and children, had eaten. This miracle prefigures the Eucharist: God multiplies a small offering and feeds the world.', verse: 'They gathered them up, and filled twelve baskets. (John 6:13)' }
    ] },
  { slug: 'walking-water', title: 'Jesus Walks on Water', testament: 'New', book: 'Matthew', scripture_ref: 'Matthew 14:22-33',
    short_summary: 'In the fourth watch of the night, Jesus came to the disciples walking on the sea. Peter walked too — until he doubted.',
    panels: [
      { title: 'A Storm at Sea', narrative: 'After feeding the multitude, Jesus sent the disciples by boat across the sea while He went up the mountain to pray. The wind rose. Their boat was tossed.', verse: 'The boat was many furlongs distant from the land, beaten by the waves. (Matthew 14:24)' },
      { title: 'Walking on the Sea', narrative: 'In the fourth watch of the night, Jesus came to them, walking on the sea. They were terrified, thinking it a ghost. He said: "Take heart, it is I; have no fear."', verse: 'Take heart, it is I; have no fear. (Matthew 14:27)' },
      { title: 'Peter Steps Out', narrative: 'Peter said: "Lord, if it is you, bid me come to you on the water." Jesus said: "Come." Peter got out of the boat and walked on the water toward Jesus.', verse: 'Come. (Matthew 14:29)' },
      { title: 'Why Did You Doubt?', narrative: 'But seeing the wind, Peter was afraid and began to sink. "Lord, save me!" Jesus reached out, caught him, and said: "O man of little faith, why did you doubt?" When they got into the boat, the wind ceased. The disciples worshiped Him.', verse: 'Why did you doubt? (Matthew 14:31)' }
    ] },
  { slug: 'lazarus', title: 'The Raising of Lazarus', testament: 'New', book: 'John', scripture_ref: 'John 11:1-44',
    short_summary: 'Jesus weeps at the tomb of His friend, then calls Lazarus out from death after four days.',
    panels: [
      { title: 'Our Friend Is Asleep', narrative: 'Lazarus of Bethany — brother of Mary and Martha — was sick. They sent for Jesus. He delayed two days, then said to the disciples: "Our friend Lazarus has fallen asleep. I go to awaken him."', verse: 'Our friend Lazarus has fallen asleep. (John 11:11)' },
      { title: 'Already Four Days', narrative: 'When Jesus arrived, Lazarus had been in the tomb four days. Martha came: "Lord, if you had been here, my brother would not have died." Jesus said: "Your brother will rise again."', verse: 'I am the resurrection and the life. (John 11:25)' },
      { title: 'Jesus Wept', narrative: 'Mary came weeping. Jesus, deeply moved in spirit and troubled, said: "Where have you laid him?" They led Him to the tomb. Jesus wept. The Jews said: "See how he loved him!"', verse: 'Jesus wept. (John 11:35)' },
      { title: 'Lazarus, Come Out!', narrative: 'At the tomb Jesus said: "Take away the stone." Martha objected: "Lord, by this time there will be an odor." Jesus prayed to the Father, then cried with a loud voice: "Lazarus, come out!" The dead man came out, his hands and feet bound with grave cloths. Jesus said: "Unbind him, and let him go."', verse: 'Lazarus, come out! (John 11:43)' }
    ] },
  { slug: 'last-supper', title: 'The Last Supper', testament: 'New', book: 'Matthew', scripture_ref: 'Matthew 26:17-30, Luke 22:14-20', ccc_ref: 'CCC 1322-1419',
    short_summary: 'On the night before He died, Jesus instituted the Eucharist and the priesthood. "This is My Body. This is My Blood."',
    panels: [
      { title: 'Preparation', narrative: 'On the first day of Unleavened Bread, the disciples asked: "Where do you wish us to prepare for you to eat the Passover?" Jesus directed them to a man with a water jar — to the upper room.', verse: 'My time is at hand; I will keep the Passover at your house. (Matthew 26:18)' },
      { title: 'I Have Earnestly Desired', narrative: 'When the hour came, Jesus reclined at table with the Twelve. He said: "I have earnestly desired to eat this Passover with you before I suffer."', verse: 'I have earnestly desired to eat this Passover with you before I suffer. (Luke 22:15)' },
      { title: 'Washing the Feet', narrative: 'During supper, Jesus rose, took a towel, and washed His disciples\' feet — even Judas\'s. "If I, your Lord and Teacher, have washed your feet, you ought also to wash one another\'s feet."', verse: 'I have given you an example. (John 13:15)' },
      { title: 'This Is My Body', narrative: 'He took bread, gave thanks, broke it, and gave it to them, saying: "This is my Body, which is given for you. Do this in memory of me." Then taking the cup, He said: "This cup is the new covenant in my Blood, which is poured out for you."', verse: 'This is my body. (Luke 22:19)' },
      { title: 'A New Commandment', narrative: '"A new commandment I give you: love one another as I have loved you. By this all will know that you are my disciples — if you have love for one another." Then they sang a hymn and went out to the Mount of Olives.', verse: 'Love one another as I have loved you. (John 13:34)' }
    ] },
  { slug: 'gethsemane', title: 'The Agony in the Garden', testament: 'New', book: 'Matthew', scripture_ref: 'Matthew 26:36-56',
    short_summary: 'In Gethsemane, Jesus prays in agony, sweating blood. He accepts the Father\'s will. He is betrayed and arrested.',
    panels: [
      { title: 'Watch and Pray', narrative: 'Jesus went with His disciples to Gethsemane. He took Peter, James, and John farther in. "My soul is sorrowful unto death. Stay here and watch with me."', verse: 'My soul is sorrowful even unto death. (Matthew 26:38)' },
      { title: 'Let This Cup Pass', narrative: 'He fell on His face and prayed: "My Father, if it is possible, let this cup pass from me; nevertheless, not as I will, but as you will." His sweat became like great drops of blood falling to the ground.', verse: 'Not as I will, but as you will. (Matthew 26:39)' },
      { title: 'They Slept', narrative: 'Three times He returned to find the disciples sleeping. "Could you not watch with me one hour? The spirit is willing but the flesh is weak."', verse: 'Could you not watch one hour with me? (Matthew 26:40)' },
      { title: 'The Betrayal', narrative: 'Judas came with a crowd armed with swords and clubs. He approached Jesus: "Hail, Rabbi!" and kissed Him. Jesus said: "Friend, why are you here?" The soldiers seized Him. The disciples fled.', verse: 'Friend, why are you here? (Matthew 26:50)' }
    ] },
  { slug: 'crucifixion', title: 'The Crucifixion', testament: 'New', book: 'John', scripture_ref: 'John 19, Matthew 27, Luke 23', ccc_ref: 'CCC 599-630',
    short_summary: 'Tried, condemned, scourged, crowned with thorns, Jesus carries His Cross to Calvary and dies for the salvation of the world.',
    panels: [
      { title: 'Before Pilate', narrative: 'Jesus was led to Pilate. "Are you the King of the Jews?" Pilate asked. "My kingdom is not of this world," said Jesus. Pilate found no crime, but the crowd cried "Crucify him!" Pilate washed his hands.', verse: 'My kingdom is not of this world. (John 18:36)' },
      { title: 'Scourged and Crowned', narrative: 'The soldiers scourged Jesus, crowned Him with thorns, clothed Him in a purple robe, and mocked: "Hail, King of the Jews!" Pilate brought Him out: "Behold the man!"', verse: 'Behold the man! (John 19:5)' },
      { title: 'The Way of the Cross', narrative: 'Carrying His own cross, Jesus went out to Golgotha — "the place of the skull." He fell three times. Simon of Cyrene was forced to help carry it. Veronica wiped His face. The women of Jerusalem wept. Mary, His Mother, walked the same road.', verse: 'He went out, bearing his own cross. (John 19:17)' },
      { title: 'At the Cross', narrative: 'They crucified Him between two thieves. Pilate wrote: "Jesus of Nazareth, the King of the Jews" — in Hebrew, Greek, Latin. Jesus prayed: "Father, forgive them, for they know not what they do." To the good thief: "Today you will be with me in Paradise." To His Mother and John: "Behold your son. Behold your mother."', verse: 'Father, forgive them, for they know not what they do. (Luke 23:34)' },
      { title: 'It Is Finished', narrative: 'After three hours of darkness over the land, Jesus cried out: "I thirst." And then: "It is finished." Bowing His head, He gave up His spirit. The earth quaked. The temple veil tore. A soldier pierced His side; blood and water flowed out — the Sacraments. The centurion confessed: "Truly this was the Son of God."', verse: 'It is finished. (John 19:30)' }
    ] },
  { slug: 'resurrection', title: 'The Resurrection', testament: 'New', book: 'Matthew', scripture_ref: 'Matthew 28, John 20', ccc_ref: 'CCC 638-655',
    short_summary: 'On the third day, Jesus rose from the dead — bodily, gloriously, victorious over sin and death forever.',
    panels: [
      { title: 'The Empty Tomb', narrative: 'Early on the first day of the week, Mary Magdalene came to the tomb. The great stone had been rolled away. The tomb was empty. She ran to Peter and John.', verse: 'They have taken the Lord out of the tomb. (John 20:2)' },
      { title: 'He Is Risen!', narrative: 'There was a great earthquake. An angel descended like lightning, sat on the stone, and said to the women: "Do not be afraid. I know you seek Jesus who was crucified. He is not here, for he is risen, as he said. Come and see the place where he lay."', verse: 'He is not here, for he is risen. (Matthew 28:6)' },
      { title: 'Mary Magdalene Sees the Lord', narrative: 'Mary stood weeping outside the tomb. Jesus appeared. She mistook Him for the gardener. He said one word: "Mary." She recognized Him: "Rabbouni!" He said: "Go and tell my brethren — I ascend to my Father and your Father."', verse: 'I have seen the Lord! (John 20:18)' },
      { title: 'Peace Be With You', narrative: 'That evening the disciples were gathered behind locked doors for fear. Jesus stood among them: "Peace be with you." He showed them His wounded hands and side. They rejoiced. He breathed on them: "Receive the Holy Spirit. Whose sins you forgive are forgiven; whose sins you retain are retained."', verse: 'Peace be with you. (John 20:21)' }
    ] },
  { slug: 'pentecost', title: 'Pentecost', testament: 'New', book: 'Acts', scripture_ref: 'Acts 2:1-41', ccc_ref: 'CCC 731-732, 1287',
    short_summary: 'Fifty days after Easter, the Holy Spirit descends on the apostles in tongues of fire. The Church is born and preaches to all peoples.',
    panels: [
      { title: 'A Mighty Wind', narrative: 'On the day of Pentecost, the apostles were all together in the upper room with Mary. Suddenly there came a sound from heaven like a mighty rushing wind, and it filled the whole house.', verse: 'There came from heaven a sound like the rush of a mighty wind. (Acts 2:2)' },
      { title: 'Tongues of Fire', narrative: 'Divided tongues as of fire appeared and rested on each of them. They were all filled with the Holy Spirit and began to speak in other tongues, as the Spirit gave them utterance.', verse: 'They were all filled with the Holy Spirit. (Acts 2:4)' },
      { title: 'Peter Preaches', narrative: 'Peter stood up with the Eleven and lifted up his voice. "This Jesus God raised up, and of that we all are witnesses. Repent and be baptized in the name of Jesus Christ for the forgiveness of your sins, and you shall receive the gift of the Holy Spirit."', verse: 'Repent and be baptized in the name of Jesus Christ. (Acts 2:38)' },
      { title: 'Three Thousand Souls', narrative: 'Those who received his word were baptized — about three thousand souls in one day. The Church was born. This was its first growth. The Apostles were no longer afraid; they preached Christ openly from that day on.', verse: 'There were added that day about three thousand souls. (Acts 2:41)' }
    ] },
  { slug: 'paul-conversion', title: 'The Conversion of Saul', testament: 'New', book: 'Acts', scripture_ref: 'Acts 9:1-19',
    short_summary: 'The fierce persecutor Saul is struck down on the road to Damascus. The Lord makes him Paul, His chosen apostle to the Gentiles.',
    panels: [
      { title: 'Breathing Threats', narrative: 'Saul of Tarsus was breathing threats and murder against the disciples of the Lord. He went to the high priest and asked for letters to the synagogues at Damascus, that he might arrest any who belonged to the Way.', verse: 'Saul, still breathing threats and murder against the disciples. (Acts 9:1)' },
      { title: 'A Light from Heaven', narrative: 'As he journeyed and approached Damascus, suddenly a light from heaven flashed about him. He fell to the ground and heard a voice: "Saul, Saul, why do you persecute me?" He said: "Who are you, Lord?" The voice replied: "I am Jesus, whom you are persecuting."', verse: 'Saul, Saul, why do you persecute me? (Acts 9:4)' },
      { title: 'Blinded', narrative: 'Saul rose from the ground; though his eyes were open, he saw nothing. They led him by the hand into Damascus. For three days he was without sight and neither ate nor drank.', verse: 'For three days he was without sight. (Acts 9:9)' },
      { title: 'Brother Saul', narrative: 'Ananias, a disciple, was sent to him. He laid hands on Saul: "Brother Saul, the Lord Jesus, who appeared to you on the road, has sent me, that you may regain your sight and be filled with the Holy Spirit." Scales fell from his eyes. He was baptized. He became Paul — the greatest missionary in history.', verse: 'Brother Saul. (Acts 9:17)' }
    ] }
];

module.exports = stories;
