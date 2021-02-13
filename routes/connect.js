const express = require('express');

const router = express.Router();
const cookie = require('cookie');
const logaction = require('./lib/logaction');

/* GET home page. */
router.get('/', (req, res, next) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  res.render('connect', { logaction: logaction(cookies) });
  next();
});

router.post('/', (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.setHeader('Set-Cookie', cookie.serialize('value', "h4ppy v4l3nt1n3'5 d4y"));
  }
  res.redirect('/');
});

module.exports = router;
