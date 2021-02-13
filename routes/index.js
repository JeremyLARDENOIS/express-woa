var express = require('express');
var router = express.Router();
var cookie = require("cookie");
var logaction = require("./lib/logaction")

/* GET home page. */
router.get('/', function(req, res, next) {
  var cookies = cookie.parse(req.headers.cookie || '');
  res.render('index', { title: 'Express', logaction: logaction(cookies) });
});

module.exports = router;
