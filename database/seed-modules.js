// All 12 Fides modules with full lesson content.
// Each module: { slug, title, subtitle, description, color, gradient_start,
//                gradient_end, badge_name, badge_emoji, unlocks_after, lessons }
// Each lesson: { slug, title, subtitle, type, xp_reward, duration_minutes,
//                scripture_ref, ccc_ref, slides: [...], questions: [...] }

const M1 = require('./modules/m1-church');
const M2 = require('./modules/m2-mass');
const M3 = require('./modules/m3-sacraments');
const M4 = require('./modules/m4-scripture');
const M5 = require('./modules/m5-saints');
const M6 = require('./modules/m6-holy-spirit');
const M7 = require('./modules/m7-prayer');
const M8 = require('./modules/m8-moral');
const M9 = require('./modules/m9-history');
const M10 = require('./modules/m10-art');
const M11 = require('./modules/m11-daily');
const M12 = require('./modules/m12-last-things');

module.exports = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10, M11, M12];
