// Fire-and-forget report to the BUKIDIC LEARNING hub memory canon.
const jwt = require('jsonwebtoken');

const HUB_URL = process.env.BUKIDIC_HUB_URL || 'http://localhost:4040';
const SLUG = 'fides';

function postHub(bukidicUid, kind, opts) {
  if (!bukidicUid) return;
  if (!process.env.JWT_SECRET) return;
  let token;
  try {
    token = jwt.sign(
      { uid: bukidicUid, src: 'bukidic', via: SLUG },
      process.env.JWT_SECRET,
      { expiresIn: '5m', issuer: SLUG + '-app' }
    );
  } catch (e) { return; }

  const body = JSON.stringify({
    slug: SLUG,
    kind,
    payload: opts && opts.payload || null,
    meta: opts && opts.meta || null
  });

  fetch(HUB_URL + '/api/memory/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body
  }).catch(() => {});
}

module.exports = { postHub, SLUG };
