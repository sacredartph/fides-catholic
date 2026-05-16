# Fides v2 — Parallel Build

This directory holds the **next iteration** of Fides. None of these files
are loaded by the running app. The live app on port 4400 keeps serving
the current production build without any change.

## What's being added

| Feature | Files |
|---|---|
| Daily Readings + Gospel + Life Application | `seed/daily-readings.js`, `routes/daily.js`, `frontend/js/view-today.js` |
| Saint-of-the-day calendar (real feast days) | `seed/saints-calendar.js`, `seed/saints-extra.js`, `routes/saint-of-day.js` |
| Cathedral Explorer 2.0 (10 cathedrals, photos, hotspots) | `seed/cathedrals.js`, `routes/cathedrals.js`, `frontend/js/view-cathedrals.js` |
| Sacred Art Gallery (12 masterpieces) | `seed/artworks.js`, `routes/art.js`, `frontend/js/view-art.js` |
| Bible stories expansion | `seed/bible-extra.js` |
| Migration tooling | `migration/apply.js`, `migration/rollback.js` |

## Status

See [INTEGRATION_PLAN.md](./INTEGRATION_PLAN.md) for merge readiness.

## Approval gate

When everything in `INTEGRATION_PLAN.md` is checked off, owner reviews the
files here, then runs `node migration/apply.js` to merge into live.
The live database is backed up first; rollback is `node migration/rollback.js`.
