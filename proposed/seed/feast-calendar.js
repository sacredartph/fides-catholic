// Roman calendar — fixed feast days mapped to saints already in our DB.
// Movable feasts (Easter, Pentecost, etc.) are handled per-year in daily-readings.js.
// Format: [month, day, saint_slug, rank, notes]
// Ranks: solemnity | feast | memorial | optional-memorial

module.exports = [
  // JANUARY
  [1, 1, 'mary', 'solemnity', 'Solemnity of Mary, Mother of God. Octave Day of Christmas.'],
  [1, 17, 'antony-egypt', 'memorial', 'St. Antony of the Desert, Father of monasticism.'],
  [1, 21, 'agnes', 'memorial', 'Virgin and Martyr. The pallia for archbishops are woven from her lambs\' wool.'],
  [1, 24, 'francis-de-sales', 'memorial', 'Bishop and Doctor.'],
  [1, 25, 'paul', 'feast', 'Conversion of St. Paul.'],
  [1, 28, 'aquinas', 'memorial', 'Priest and Doctor of the Church.'],
  [1, 31, 'john-bosco', 'memorial', 'Founder of the Salesians.'],

  // FEBRUARY
  [2, 5, 'agatha', 'memorial', 'Virgin and Martyr.'],
  [2, 10, 'scholastica', 'memorial', 'Twin sister of St. Benedict.'],
  [2, 20, 'francisco-jacinta', 'memorial', 'Two of the three Fatima visionaries.'],
  [2, 22, 'peter', 'feast', 'Chair of St. Peter the Apostle.'],
  [2, 23, 'polycarp', 'memorial', 'Bishop and Martyr, Apostolic Father.'],

  // MARCH
  [3, 7, 'perpetua-felicity', 'memorial', 'Martyrs of Carthage, AD 203.'],
  [3, 17, 'patrick', 'memorial', 'Apostle of Ireland.'],
  [3, 19, 'joseph', 'solemnity', 'Solemnity of St. Joseph, Husband of the Blessed Virgin Mary.'],
  [3, 25, 'mary', 'solemnity', 'Solemnity of the Annunciation of the Lord.'],

  // APRIL
  [4, 16, 'bernadette', 'optional-memorial', 'Visionary of Lourdes.'],
  [4, 25, 'mark-evangelist', 'feast', 'St. Mark the Evangelist.'],
  [4, 29, 'catherine-siena', 'memorial', 'Virgin and Doctor of the Church.'],

  // MAY
  [5, 1, 'joseph', 'optional-memorial', 'St. Joseph the Worker.'],
  [5, 3, 'philip', 'feast', 'Sts. Philip and James, Apostles.'],
  [5, 3, 'james-less', 'feast', 'Sts. Philip and James, Apostles.'],
  [5, 6, 'dominic-savio', 'optional-memorial', 'Teen saint, age 14.'],
  [5, 13, 'francisco-jacinta', 'optional-memorial', 'Our Lady of Fatima.'],
  [5, 14, 'matthias', 'feast', 'St. Matthias, Apostle.'],
  [5, 22, 'rita', 'optional-memorial', 'Patroness of impossible causes.'],
  [5, 26, 'philip-neri', 'memorial', 'Apostle of Rome.'],
  [5, 31, 'mary', 'feast', 'The Visitation of the Blessed Virgin Mary.'],

  // JUNE
  [6, 1, 'justin-martyr', 'memorial', 'Philosopher and Martyr.'],
  [6, 3, 'charles-lwanga', 'memorial', 'Ugandan martyrs, AD 1886-87.'],
  [6, 13, 'anthony-padua', 'memorial', 'Franciscan Doctor of the Church.'],
  [6, 21, 'aloysius-gonzaga', 'memorial', 'Jesuit, died at 23 nursing plague victims.'],
  [6, 22, 'thomas-more', 'optional-memorial', 'Lord Chancellor of England, martyr.'],
  [6, 24, 'john-baptist', 'solemnity', 'Solemnity of the Nativity of St. John the Baptist.'],
  [6, 29, 'peter', 'solemnity', 'Sts. Peter and Paul, Apostles.'],
  [6, 29, 'paul', 'solemnity', 'Sts. Peter and Paul, Apostles.'],

  // JULY
  [7, 3, 'thomas', 'feast', 'St. Thomas, Apostle.'],
  [7, 4, 'pier-giorgio', 'optional-memorial', 'Italian Lay Dominican blessed.'],
  [7, 6, 'maria-goretti', 'optional-memorial', 'Virgin and Martyr, age 11.'],
  [7, 11, 'benedict', 'memorial', 'Father of Western Monasticism.'],
  [7, 22, 'mary-magdalene', 'feast', 'Apostle to the Apostles.'],
  [7, 25, 'james-greater', 'feast', 'St. James the Greater, Apostle.'],
  [7, 26, 'joachim-anna', 'memorial', 'Parents of the Blessed Virgin Mary.'],
  [7, 29, 'martha', 'memorial', 'Sister of Lazarus and Mary of Bethany.'],
  [7, 31, 'ignatius-loyola', 'memorial', 'Founder of the Jesuits.'],

  // AUGUST
  [8, 1, 'alphonsus-liguori', 'memorial', 'Founder of the Redemptorists, Doctor.'],
  [8, 4, 'john-vianney', 'memorial', 'Cure of Ars, patron of parish priests.'],
  [8, 8, 'dominic', 'memorial', 'Founder of the Order of Preachers.'],
  [8, 10, 'lawrence', 'feast', 'Deacon and Martyr.'],
  [8, 11, 'clare-assisi', 'memorial', 'Foundress of the Poor Clares.'],
  [8, 14, 'maximilian-kolbe', 'memorial', 'Martyr of Auschwitz.'],
  [8, 15, 'mary', 'solemnity', 'Assumption of the Blessed Virgin Mary.'],
  [8, 22, 'mary', 'memorial', 'Queenship of the Blessed Virgin Mary.'],
  [8, 24, 'bartholomew', 'feast', 'St. Bartholomew, Apostle.'],
  [8, 27, 'monica', 'memorial', 'Mother of St. Augustine.'],
  [8, 28, 'augustine', 'memorial', 'Bishop and Doctor of the Church.'],
  [8, 29, 'john-baptist', 'memorial', 'Passion (Martyrdom) of St. John the Baptist.'],

  // SEPTEMBER
  [9, 3, 'gregory-great', 'memorial', 'Pope and Doctor of the Church.'],
  [9, 8, 'mary', 'feast', 'Nativity of the Blessed Virgin Mary.'],
  [9, 13, 'john-chrysostom', 'memorial', 'Bishop and Doctor of the Church.'],
  [9, 14, 'cross', 'feast', 'Exaltation of the Holy Cross.'],
  [9, 15, 'mary', 'memorial', 'Our Lady of Sorrows.'],
  [9, 17, 'robert-bellarmine', 'optional-memorial', 'Cardinal, Doctor.'],
  [9, 20, 'andrew-kim', 'memorial', 'Korean martyrs.'],
  [9, 21, 'matthew', 'feast', 'St. Matthew, Apostle and Evangelist.'],
  [9, 23, 'padre-pio', 'memorial', 'Capuchin priest, stigmatist.'],
  [9, 27, 'vincent-de-paul', 'memorial', 'Founder of the Vincentians.'],
  [9, 29, 'michael', 'feast', 'Sts. Michael, Gabriel, and Raphael, Archangels.'],
  [9, 29, 'gabriel', 'feast', 'Sts. Michael, Gabriel, and Raphael, Archangels.'],
  [9, 29, 'raphael', 'feast', 'Sts. Michael, Gabriel, and Raphael, Archangels.'],
  [9, 30, 'jerome', 'memorial', 'Priest, Doctor, translator of the Vulgate.'],

  // OCTOBER
  [10, 1, 'therese-lisieux', 'memorial', 'Doctor of the Church.'],
  [10, 2, 'guardian-angels', 'memorial', 'The Holy Guardian Angels.'],
  [10, 4, 'francis-assisi', 'memorial', 'Founder of the Franciscans.'],
  [10, 5, 'faustina', 'optional-memorial', 'Apostle of Divine Mercy.'],
  [10, 7, 'mary', 'memorial', 'Our Lady of the Rosary.'],
  [10, 9, 'newman', 'optional-memorial', 'John Henry Newman, Cardinal and Doctor.'],
  [10, 12, 'carlo-acutis', 'optional-memorial', 'Blessed millennial teen.'],
  [10, 15, 'teresa-avila', 'memorial', 'Doctor of the Church.'],
  [10, 16, 'margaret-mary', 'optional-memorial', 'Apostle of the Sacred Heart.'],
  [10, 17, 'ignatius-antioch', 'memorial', 'Bishop and Martyr.'],
  [10, 18, 'luke-evangelist', 'feast', 'St. Luke the Evangelist.'],
  [10, 28, 'thaddeus', 'feast', 'Sts. Simon and Jude, Apostles.'],
  [10, 28, 'simon-zealot', 'feast', 'Sts. Simon and Jude, Apostles.'],
  [10, 29, 'chiara-badano', 'optional-memorial', 'Blessed teen, died age 18.'],

  // NOVEMBER
  [11, 1, 'all-saints', 'solemnity', 'Solemnity of All Saints.'],
  [11, 2, 'all-souls', 'solemnity', 'Commemoration of All the Faithful Departed.'],
  [11, 4, 'charles-borromeo', 'memorial', 'Cardinal and Reformer.'],
  [11, 9, 'lateran', 'feast', 'Dedication of the Lateran Basilica.'],
  [11, 10, 'leo-great', 'memorial', 'Pope and Doctor of the Church.'],
  [11, 11, 'martin-tours', 'memorial', 'Bishop, soldier-saint.'],
  [11, 13, 'frances-cabrini', 'optional-memorial', 'First U.S. citizen canonized.'],
  [11, 17, 'elizabeth-hungary', 'memorial', 'Queen and Franciscan tertiary.'],
  [11, 22, 'cecilia', 'memorial', 'Virgin and Martyr, patroness of music.'],
  [11, 30, 'andrew', 'feast', 'St. Andrew, Apostle.'],

  // DECEMBER
  [12, 3, 'francis-xavier', 'memorial', 'Apostle of the East, Jesuit.'],
  [12, 6, 'nicholas', 'optional-memorial', 'St. Nicholas of Myra.'],
  [12, 7, 'ambrose', 'memorial', 'Bishop and Doctor.'],
  [12, 8, 'mary', 'solemnity', 'Immaculate Conception of the Blessed Virgin Mary.'],
  [12, 9, 'juan-diego', 'optional-memorial', 'Visionary of Guadalupe.'],
  [12, 12, 'mary', 'feast', 'Our Lady of Guadalupe — Patroness of the Americas.'],
  [12, 13, 'lucy', 'memorial', 'Virgin and Martyr.'],
  [12, 14, 'john-cross', 'memorial', 'Priest and Doctor.'],
  [12, 25, 'christmas', 'solemnity', 'Nativity of the Lord.'],
  [12, 26, 'stephen', 'feast', 'St. Stephen, Protomartyr.'],
  [12, 27, 'john', 'feast', 'St. John, Apostle and Evangelist.'],
  [12, 28, 'holy-innocents', 'feast', 'The Holy Innocents.']
];
