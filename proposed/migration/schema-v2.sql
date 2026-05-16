-- Fides v2 schema additions. ADDITIVE ONLY — does not modify any v1 table.
-- All new tables use IF NOT EXISTS so apply.js is idempotent.

CREATE TABLE IF NOT EXISTS daily_readings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT UNIQUE NOT NULL,                -- YYYY-MM-DD
  liturgical_day TEXT NOT NULL,             -- e.g. "Solemnity of the Ascension"
  color TEXT,                               -- white / red / green / purple / rose / gold
  season TEXT,                              -- advent / christmas / lent / easter / ordinary
  first_reading_ref TEXT,                   -- "Acts 1:1-11"
  first_reading_text TEXT,
  psalm_ref TEXT,                           -- "Psalm 47:2-3, 6-9"
  psalm_text TEXT,
  psalm_response TEXT,                      -- "God mounts his throne to shouts of joy: a blare of trumpets for the Lord."
  second_reading_ref TEXT,                  -- Sundays/solemnities only
  second_reading_text TEXT,
  gospel_acclamation TEXT,
  gospel_ref TEXT NOT NULL,
  gospel_text TEXT NOT NULL,
  reflection TEXT NOT NULL,
  life_application TEXT NOT NULL,
  saint_of_day_slug TEXT                    -- joins to saints.slug for that day's saint
);
CREATE INDEX IF NOT EXISTS idx_daily_date ON daily_readings(date);
CREATE INDEX IF NOT EXISTS idx_daily_season ON daily_readings(season);

CREATE TABLE IF NOT EXISTS feast_calendar (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  month INTEGER NOT NULL,                   -- 1-12
  day INTEGER NOT NULL,                     -- 1-31
  saint_slug TEXT NOT NULL,                 -- joins to saints.slug
  rank TEXT,                                -- solemnity / feast / memorial / optional-memorial
  notes TEXT,
  UNIQUE(month, day, saint_slug)
);
CREATE INDEX IF NOT EXISTS idx_feast_md ON feast_calendar(month, day);

CREATE TABLE IF NOT EXISTS cathedrals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  city TEXT,
  country TEXT,
  built_start TEXT,
  built_end TEXT,
  style TEXT,                               -- "Gothic" / "Renaissance" / "Baroque" / "Byzantine" / "Modernist"
  hero_image_url TEXT NOT NULL,
  thumb_image_url TEXT,
  image_credit TEXT,                        -- Wikimedia attribution
  short_summary TEXT,
  full_history TEXT,
  architectural_significance TEXT,
  notable_relics TEXT,
  patron_saints TEXT,
  hotspots TEXT,                            -- JSON array: [{x,y,title,body}]
  fun_facts TEXT                            -- JSON array of strings
);
CREATE INDEX IF NOT EXISTS idx_cathedral_style ON cathedrals(style);
CREATE INDEX IF NOT EXISTS idx_cathedral_country ON cathedrals(country);

CREATE TABLE IF NOT EXISTS artworks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  year TEXT,
  era TEXT,                                 -- byzantine / gothic / renaissance / baroque / modern
  medium TEXT,                              -- oil on canvas / fresco / marble / etc.
  current_location TEXT,
  image_url TEXT NOT NULL,
  thumb_url TEXT,
  image_credit TEXT,
  theological_meaning TEXT NOT NULL,
  historical_context TEXT,
  details_to_notice TEXT,                   -- JSON array of strings: things to look for
  scripture_ref TEXT
);
CREATE INDEX IF NOT EXISTS idx_artwork_era ON artworks(era);
