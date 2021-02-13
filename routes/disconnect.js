const express = require('express');

const router = express.Router();
const cookie = require('cookie');

/* GET home page. */
router.get('/', (req, res) => {
  res.setHeader('Set-Cookie', cookie.serialize('value', ''));
  res.redirect('/');
});

module.exports = router;
