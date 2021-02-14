const express = require('express');

const router = express.Router();
const cookie = require('cookie');
const logaction = require('./lib/logaction');

/* GET home page. */
router.get('/', (req, res, callback) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  res.render('index', { logaction: logaction(cookies) });
  callback();
});

module.exports = router;
