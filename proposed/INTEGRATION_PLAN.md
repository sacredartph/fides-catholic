# Fides v2 — Integration Plan

This document lists exactly what changes when you approve the v2 merge,
what's reversible, and what's not.

## 1. Database changes — ALL ADDITIVE, ALL REVERSIBLE

Four new tables (existing tables unchanged):
- `daily_readings` — one row per date (~20 days seeded for May–Jun 2026)
- `feast_calendar` — Roman calendar mapping (month, day) → saint slug
- `cathedrals` — 10 cathedrals with photos + hotspots
- `artworks` — 12 sacred art masterpieces

Two existing tables get NEW ROWS only (no schema changes):
- `saints` — 30 additional saints to fill the calendar
- `bible_stories` — 15 additional stories

Backup is automatic. Run `node proposed/migration/rollback.js` to drop the v2
tables (v1 untouched) or `--restore` to revert to the pre-merge backup.

## 2. Backend changes — additive route mounts

Two new route files mounted by editing **only** `backend/server.js`:

```js
// add inside backend/server.js (after the v1 mounts):
app.use('/api/daily', require('./routes/daily'));
app.use('/api', require('./routes/cathedrals'));
```

Plus copy:
- `proposed/routes/daily.js` → `backend/routes/daily.js`
- `proposed/routes/cathedrals.js` → `backend/routes/cathedrals.js`

The two new files do not touch any existing route. Rollback = revert
`server.js` and delete the new route files.

## 3. Frontend changes — three new views + sidebar nav additions

New script tags in `frontend/index.html`:
```html
<link rel="stylesheet" href="/css/new-views.css" />
...
<script src="/js/view-today.js"></script>
<script src="/js/view-cathedrals.js"></script>
<script src="/js/view-art.js"></script>
```

Three new sidebar nav items:
```html
<button class="nav-item" data-view="today"><span class="nav-icon">☼</span>Today\'s Readings</button>
<button class="nav-item" data-view="cathedrals"><span class="nav-icon">▲</span>Cathedrals</button>
<button class="nav-item" data-view="art"><span class="nav-icon">▣</span>Sacred Art</button>
```

(The existing `cathedral` nav item — the stuck cruciform-explainer-only view —
becomes `cathedrals` and routes to the new gallery. The old SVG inset is
preserved inside the new cathedral detail page as a contextual diagram.)

Three new render branches in `frontend/js/app.js`:
```js
else if (v === 'today') await window.Fides.viewToday.render(target);
else if (v === 'cathedrals') await window.Fides.viewCathedrals.renderGallery(target);
else if (v === 'art') await window.Fides.viewArt.renderGallery(target);
```

Plus a "Today's Readings" panel added to the home page hero — a card that
shows the day's Gospel ref and links to the full view.

File copies:
- `proposed/frontend/css/new-views.css` → `frontend/css/new-views.css`
- `proposed/frontend/js/view-today.js` → `frontend/js/view-today.js`
- `proposed/frontend/js/view-cathedrals.js` → `frontend/js/view-cathedrals.js`
- `proposed/frontend/js/view-art.js` → `frontend/js/view-art.js`

## 4. Merge procedure — exact steps for approval day

```bash
# 1) Dry-run to confirm what will happen
node proposed/migration/apply.js --dry

# 2) Apply migration (creates a timestamped backup first)
node proposed/migration/apply.js

# 3) Copy backend route files
cp proposed/routes/daily.js backend/routes/daily.js
cp proposed/routes/cathedrals.js backend/routes/cathedrals.js

# 4) Edit backend/server.js — add two new app.use(...) lines
#    (see section 2)

# 5) Copy frontend assets
cp proposed/frontend/css/new-views.css frontend/css/new-views.css
cp proposed/frontend/js/view-today.js frontend/js/view-today.js
cp proposed/frontend/js/view-cathedrals.js frontend/js/view-cathedrals.js
cp proposed/frontend/js/view-art.js frontend/js/view-art.js

# 6) Edit frontend/index.html — add CSS link + 3 script tags + 3 nav items
#    (see section 3)

# 7) Edit frontend/js/app.js — add 3 render branches
#    (see section 3)

# 8) Restart server
# Done. Live users see Today\'s Readings, Cathedrals, Sacred Art tonight.
```

## 5. Rollback options

- **Soft rollback (drop v2 tables only, keep v1)**:
  `node proposed/migration/rollback.js`
- **Hard rollback (revert to pre-merge state)**:
  `node proposed/migration/rollback.js --restore`
- **List available backups**:
  `node proposed/migration/rollback.js --list`

Then revert the file edits in `server.js`, `index.html`, `app.js` and delete
the copied `view-*.js` / `new-views.css` files.

## 6. Status

| Component | Built | Tested | Ready |
|---|---|---|---|
| Schema v2 | ✅ | (apply.js --dry) | ✅ |
| 30 extra saints | ✅ | — | ✅ |
| Feast calendar (110 entries) | ✅ | — | ✅ |
| Daily readings (~20 days) | ✅ | — | ✅ |
| 10 cathedrals + hotspots | ✅ | — | ✅ |
| 12 artworks | ✅ | — | ✅ |
| 15 extra Bible stories | ✅ | — | ✅ |
| Backend routes | ✅ | — | ✅ |
| Frontend views | ✅ | (not run yet) | ✅ |
| Migration apply.js | ✅ | — | ✅ |
| Rollback.js | ✅ | — | ✅ |

## 7. What I'd add next (after approval)

- More daily readings — currently 20 days; expand to 365 over weeks
- Marian apparitions interactive timeline (Guadalupe, Lourdes, Fatima, others)
- Pilgrimage planner — match dates + travel to Catholic shrines
- Saint compass — quiz that recommends a patron saint based on user struggles
- Eucharistic adoration timer (guided Holy Hour)
- Liturgy of the Hours integration (Lauds, Vespers, Compline daily)
- Audio: pre-recorded Latin chants for the Gloria, Sanctus, Agnus Dei

## 8. Not in this build (deliberate)

- No changes to existing modules / lessons / quizzes
- No changes to auth / SSO flow
- No changes to existing sidebar items (Home/Modules/Bible/Saints/Popes/Mass Guide/Rosary/Stations/Games/Prayer/Profile)
- No changes to live user data (progress, XP, badges, reflections, prayer log)

The merge is purely additive. Existing users will see the same app PLUS
three new sidebar items.
