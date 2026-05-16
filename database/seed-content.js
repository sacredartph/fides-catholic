// Fides — Seed Content
// Doctrinally accurate content drawn from the Catechism of the Catholic Church (CCC),
// Sacred Scripture, and Sacred Tradition. Every lesson includes CCC paragraph
// references and Scripture citations where applicable.
//
// Structure:
//   MODULES: { slug, title, lessons: [...] }
//   Each lesson has typed `slides` rendered by the frontend slide engine.
//   Slide types: hero | scripture | explain | timeline | compare | gallery |
//                interactive | story | quiz-inline | reflection | video-style |
//                map | celebration

const SAINTS = require('./seed-saints');
const POPES = require('./seed-popes');
const BIBLE_STORIES = require('./seed-bible');
const MODULES = require('./seed-modules');

module.exports = { SAINTS, POPES, BIBLE_STORIES, MODULES };
