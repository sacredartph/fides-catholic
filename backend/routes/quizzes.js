const express = require('express');
const db = require('../models/db');
const { authRequired } = require('../middleware/auth');

const router = express.Router();

router.post('/grade', authRequired, (req, res) => {
  const { lesson_id, answers } = req.body || {};
  if (!lesson_id || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'missing_fields' });
  }
  const questions = db.prepare(`
    SELECT id, correct_index, explanation, ccc_ref, scripture_ref, question, options
    FROM quiz_questions WHERE lesson_id = ? ORDER BY order_index
  `).all(lesson_id);
  if (questions.length === 0) return res.status(404).json({ error: 'no_questions' });
  let correct = 0;
  const review = questions.map((q, i) => {
    const ans = answers[i];
    const isCorrect = ans === q.correct_index;
    if (isCorrect) correct += 1;
    return {
      question_id: q.id,
      question: q.question,
      options: JSON.parse(q.options),
      your_answer: ans,
      correct_answer: q.correct_index,
      correct: isCorrect,
      explanation: q.explanation,
      ccc_ref: q.ccc_ref,
      scripture_ref: q.scripture_ref
    };
  });
  const score = Math.round((correct / questions.length) * 100);
  res.json({
    score, correct, total: questions.length,
    passed: score >= 70,
    review
  });
});

router.get('/lightning', (req, res) => {
  const rows = db.prepare(`
    SELECT q.question, q.options, q.correct_index, q.explanation, l.title AS lesson_title
    FROM quiz_questions q
    JOIN lessons l ON l.id = q.lesson_id
    ORDER BY RANDOM() LIMIT 30
  `).all();
  const questions = rows.map(r => ({
    question: r.question,
    options: JSON.parse(r.options),
    correct_index: r.correct_index,
    explanation: r.explanation,
    lesson_title: r.lesson_title
  }));
  res.json({ questions });
});

module.exports = router;
