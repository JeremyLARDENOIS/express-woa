const express = require('express');

const router = express.Router();
const cookie = require('cookie');
const logaction = require('./lib/logaction');

/* GET home page. */
router.get('/', (req, res, next) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  res.render('index', { title: 'Express', logaction: logaction(cookies) });
  next();
});

module.exports = router;
