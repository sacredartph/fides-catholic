# Fides — The Catholic Faith Experience

A complete, production-ready Catholic faith learning platform for teenagers (ages 12-18). Built as a gift to your daughters and to the world — designed to show, through beauty, history, animation, interactivity, and truth, that the Catholic Church is the Church Jesus Christ founded 2,000 years ago, and that living the Catholic faith is the most beautiful and meaningful life one can live.

Every module is accurate to the Catechism of the Catholic Church (CCC), Sacred Scripture, and Sacred Tradition. Nothing invented. All doctrine verifiable.

---

## Quick Start

```bash
cd C:\fides-catholic
npm install
npm run build      # initializes the DB and seeds all content
npm start          # serves on http://localhost:4400
```

Open http://localhost:4400 and sign in with any demo account:

| Username | Password | Display Name | Confirmation Name |
|---|---|---|---|
| `papa` | `fides123` | Papa Bryan | Joseph (admin) |
| `daughter1` | `fides123` | Faith Seeker | Therese |
| `daughter2` | `fides123` | Light Bearer | Faustina |
| `daughter3` | `fides123` | Truth Finder | Clare |

You may also create a new account from the Sign Up tab (with optional confirmation name and diocese).

---

## What's Inside

### 12 Modules · 90 Lessons · 135 Quiz Questions

1. **The Church Christ Built** — 7 lessons. Petros/Petra; the Four Marks; 2,000 years of papal succession; the Early Church Fathers; the great Councils; the persecutions; why Catholic.
2. **The Holy Mass** — 9 lessons. From Last Supper to Eucharistic Prayer to Communion. The fullest treatment of the Mass for teens you will find.
3. **The Seven Sacraments** — 8 lessons. Each sacrament with matter, form, minister, effects, Scripture, CCC.
4. **Sacred Scripture** — 8 lessons. The Bible is a Catholic book. The four senses. OT and NT walked through.
5. **The Saints** — 8 lessons. Apostles, martyrs, doctors, mystics, teen saints (Carlo Acutis, Maria Goretti, Pier Giorgio), angels.
6. **The Holy Spirit** — 5 lessons. Trinitarian theology, the Seven Gifts, the Twelve Fruits, discernment, Pentecost.
7. **Prayer and the Interior Life** — 8 lessons. Our Father word-by-word, the Rosary, Lectio Divina, Adoration, the Liturgy of the Hours, the Examen.
8. **Catholic Moral Life** — 8 lessons. Ten Commandments, Beatitudes, virtues, deadly sins, conscience, social teaching, purity, life issues.
9. **Catholic History** — 9 lessons. From Pentecost to today across 2,000 years, every era honestly addressed.
10. **Catholic Architecture and Art** — 6 lessons. Gothic cathedrals as theology in stone, the great masters, the Sistine Chapel, sacred music.
11. **Living the Faith Daily** — 8 lessons. A teen's day with Christ. Vocation. Theology of suffering.
12. **The Last Things** — 6 lessons. Death, Particular Judgment, Purgatory, Hell, Heaven, the Resurrection, Marian apparitions.

### 264 Popes Timeline

Every pope from **St. Peter** (c. 30) to **Francis** (2013) with regnal name, dates, nationality, era classification (Apostolic, Early Church, Constantinian, Patristic, Early Middle Ages, High Middle Ages, Avignon/Schism, Renaissance, Counter-Reformation, Modern, Contemporary), key event, and fun fact. Search and filter by era.

### 57 Saints

Apostles, Doctors of the Church, great mystics, martyrs, teen saints, the three named Archangels — each with feast day, years, patronage, short and full biography, signature quote, traditional symbol. Categorized: `apostle | martyr | doctor | mystic | teen | religious`.

### 23 Bible Stories

Illustrated panel-by-panel narratives — Creation, the Fall, Noah, Abraham, Moses, the Ten Commandments, David and Goliath, Jonah, the Annunciation, Nativity, Magi, Baptism, Sermon on the Mount, Cana, multiplication of loaves, walking on water, raising of Lazarus, Last Supper, Gethsemane, Crucifixion, Resurrection, Pentecost, conversion of St. Paul.

### Interactive Features

- **Interactive Rosary** — 59-bead SVG, all 20 mysteries (Joyful · Luminous · Sorrowful · Glorious), tap any bead to focus, scripture and meditation for each mystery, audio bell on tap.
- **Stations of the Cross** — 15 stations (14 traditional + Resurrection), individual meditation, scripture, prayer, prayer-log integration.
- **Mass Guide** — every part of the Mass with priest's words, people's response, rubric instruction (Stand/Sit/Kneel), all four forms of the Penitential Act.
- **Cathedral Explorer** — interactive SVG floor plan; click nave, transept, apse, altar, side chapels, rose window, spire, portal, crypt to learn their theology.
- **Papal Timeline** — scrollable, searchable, filterable.
- **Bible Story Explorer** — paneled comic-style narratives with scripture verse on each panel.
- **Saint Detail Modals** — full biography, symbol, patron-of, quote.
- **Conscience Examination** — covered in Module 7 lesson "Examination" (Ignatian + by-commandment).
- **Catechism Lightning Round** — 30 random questions with 30-second timer per question.
- **Daily Question** — date-seeded daily catechism challenge for +50 XP.
- **Leaderboard** — top 50 by total XP with level names and streak badges.
- **Daily Prayer Companion** — 15 essential prayers (Sign of the Cross, Our Father, Hail Mary, Glory Be, Apostles' Creed, Morning Offering, Angelus, Act of Contrition, Guardian Angel, St. Michael, Memorare, Sub Tuum, Aquinas Study Prayer, Grace Before/After Meals) — each prayer is loggable.
- **Search** — full-text across lessons, saints, popes, and scripture.

### Gamification

- **20 Level Names** (Seeker → Saint, 200 XP per level)
- **Streak Counter** — daily activity / prayer log tracked, candle flame icon, animated flicker
- **Module Badges** — one badge per completed module
- **XP Animations** — gold burst, floating "+50 XP", confetti, level-up choir sound

### Audio System

All Web Audio API synthesized — no external MP3 files:

- **Ambient drone** — pentatonic-safe sustained oscillators (A2/E3/A3) with gentle LFO modulation, Gregorian-chant-style ambient. Toggle in the sidebar.
- **Correct answer** — bright C major triad (523/659/784 Hz), 550ms.
- **Wrong answer** — descending minor third (330→220 Hz), 400ms — compassionate, not harsh.
- **Complete** — D major fanfare cluster.
- **Level up** — full choir-like tone cluster (~2s).
- **Badge earned** — shimmering ascending oscillator burst.
- **Bead tap (Rosary)** — single resonant bell (659 Hz + harmonic).
- **Page turn** — filtered noise burst simulating paper rustle.
- **Prayer complete** — peaceful C major resolution chord.

### Liturgical Calendar Awareness

Home page detects the current liturgical season — Advent / Christmas / Lent / Easter / Ordinary Time — and applies an appropriate theme color and hero-card gradient. Easter is computed via the Gregorian algorithm so this is correct every year.

---

## Tech Stack

- **Backend**: Node.js 18+ · Express 4 · better-sqlite3 (SQLite via native bindings; prebuilt for Node 24) · bcryptjs · jsonwebtoken · helmet · cors · express-rate-limit
- **Frontend**: Vanilla HTML / CSS / JS (no framework). Google Fonts: Cinzel (display), Lora (body), Nunito (UI), Playfair Display (pull quotes).
- **Storage**: SQLite at `database/fides.db` (auto-created)
- **Auth**: JWT in localStorage. Demo accounts seeded.
- **Audio**: Web Audio API only — graceful fallback if user has not interacted yet.

---

## File Manifest

```
fides-catholic/
├── package.json
├── .env
├── README.md
├── backend/
│   ├── server.js                  (Express app, port 4400)
│   ├── middleware/auth.js         (JWT sign/verify, authRequired / authOptional)
│   ├── models/db.js               (better-sqlite3 connection)
│   └── routes/
│       ├── auth.js                (register, login, /me)
│       ├── modules.js             (list, detail with unlock logic)
│       ├── lessons.js             (detail, complete, bookmark, reflection)
│       ├── progress.js            (per-user progress, prayer log)
│       ├── quizzes.js             (grade, lightning random 30)
│       ├── leaderboard.js         (top 50 by XP, level names)
│       └── search.js              (full-text + saints/popes/bible APIs)
├── database/
│   ├── init.js                    (creates 14 tables)
│   ├── seed.js                    (runs the seed runner)
│   ├── seed-content.js            (top-level seed aggregator)
│   ├── seed-saints.js             (57 saints)
│   ├── seed-popes.js              (264 popes)
│   ├── seed-bible.js              (23 Bible stories with panels)
│   ├── seed-modules.js            (module aggregator)
│   ├── modules/
│   │   ├── m1-church.js
│   │   ├── m2-mass.js
│   │   ├── m3-sacraments.js
│   │   ├── m4-scripture.js
│   │   ├── m5-saints.js
│   │   ├── m6-holy-spirit.js
│   │   ├── m7-prayer.js
│   │   ├── m8-moral.js
│   │   ├── m9-history.js
│   │   ├── m10-art.js
│   │   ├── m11-daily.js
│   │   └── m12-last-things.js
│   └── fides.db                   (created by npm run build)
└── frontend/
    ├── index.html                 (auth screen, app shell, splash, sidebar)
    ├── css/
    │   ├── main.css               (layout, sidebar, typography, splash, auth)
    │   ├── components.css         (modules, lessons, slides, quiz, rosary, stations, mass, profile, search, prayer, cathedral)
    │   ├── animations.css         (xpFloat, candleFlicker, goldBurst, confetti, levelUp, pageFlip, badgeReveal, slideIn, fadeIn)
    │   └── themes.css             (liturgical season variations)
    └── js/
        ├── api.js                 (fetch wrapper + token storage)
        ├── app.js                 (boot, auth, view router, home, profile, season detection)
        ├── audio.js               (Web Audio API: ambient + 9 sound effects)
        ├── animations.js          (xpFloat, goldBurst, confetti, level-up modal, toast)
        ├── lessons.js             (modules list, module detail, slide engine for 12 slide types)
        ├── quiz.js                (inline quiz with feedback + review mode)
        ├── timeline.js            (Popes list, Saints list, Bible explorer, saint/story modals)
        ├── games.js               (Rosary, Stations, Mass Guide, Cathedral, Games hub, Lightning, Daily, Leaderboard, Prayer library)
        └── search.js              (full-text search panel)
```

---

## Database Schema

14 tables: `users`, `modules`, `lessons`, `quiz_questions`, `user_progress`, `user_xp`, `badges`, `reflections`, `prayer_log`, `bookmarks`, `search_index`, `saints`, `popes`, `bible_stories`.

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/health` | Server health check |
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Login, returns JWT |
| GET | `/api/auth/me` | Authenticated user + badges |
| GET | `/api/modules` | All modules with unlock state |
| GET | `/api/modules/:id` | Module with lessons + user progress |
| GET | `/api/lessons/:id` | Lesson content, quiz questions, user state |
| POST | `/api/lessons/:id/complete` | Mark complete, award XP |
| POST | `/api/lessons/:id/bookmark` | Toggle bookmark |
| POST | `/api/lessons/:id/reflection` | Save private reflection |
| POST | `/api/quizzes/grade` | Grade quiz answers |
| GET | `/api/quizzes/lightning` | 30 random questions |
| GET | `/api/progress/me` | Full progress dashboard |
| POST | `/api/progress/prayer` | Log a prayer, update streak |
| GET | `/api/leaderboard` | Top 50 by XP |
| GET | `/api/search/?q=...` | Full-text search across all content |
| GET | `/api/search/saints` | All saints (filterable by type) |
| GET | `/api/search/saints/:id` | One saint |
| GET | `/api/search/popes` | All popes |
| GET | `/api/search/bible` | All Bible stories |
| GET | `/api/search/bible/:slug` | One story with panels |

---

## Security Notes

- Helmet.js security headers active (CSP disabled to allow inline event handlers in module markup)
- JWT signed with `JWT_SECRET` from `.env` — change before deployment
- bcrypt password hashes (10 rounds)
- Rate limiter: 600 requests/min per IP on `/api`
- No public user-generated content
- Reflections are strictly per-user — never exposed externally
- No external API calls — all content is seeded server-side

---

## Doctrinal Sources

Every claim of doctrine is verifiable. Primary sources cited inline in lessons:

- **Catechism of the Catholic Church (CCC)** — paragraph numbers in slides and quiz explanations
- **Sacred Scripture (RSV-CE / NABRE-style)** — citations included; deuterocanonical 73-book canon used
- **Sacred Tradition** — Church Fathers (Ignatius of Antioch, Augustine, Aquinas, etc.) quoted
- **Vatican II documents** — Lumen Gentium, Sacrosanctum Concilium
- **Major Marian apparitions** — Guadalupe, Lourdes, Fatima (all Church-approved)

---

## Acknowledgments

Built with prayer. To know, love, and serve God in this life, and to be happy with Him forever in the next.

*Ad maiorem Dei gloriam.* (For the greater glory of God.)
