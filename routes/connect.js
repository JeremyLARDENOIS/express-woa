var express = require('express');
var router = express.Router();
const logaction = require('./lib/logaction');
var cookie = require("cookie");

/* GET home page. */
router.get('/', function(req, res, next) {
  var cookies = cookie.parse(req.headers.cookie || '');
  res.render('connect',{ logaction: logaction(cookies) });
});

module.exports = router;
