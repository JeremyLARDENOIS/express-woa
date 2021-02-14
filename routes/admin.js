const express = require('express');
const cookie = require('cookie');
const logaction = require('./lib/logaction');
const isAuthorized = require('./lib/isAuthorized');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  isAuthorized(req, res, () => res.render('admin', { logaction: logaction(cookies) }));
});

module.exports = router;
