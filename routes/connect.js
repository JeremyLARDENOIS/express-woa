var express = require('express');
var router = express.Router();
const logaction = require('./lib/logaction');
var cookie = require("cookie");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("connect in get")
  var cookies = cookie.parse(req.headers.cookie || '');
  res.render('connect',{ logaction: logaction(cookies) });
});

router.post('/*', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (username == "admin" && password == "password"){
    res.setHeader('Set-Cookie', cookie.serialize("value","h4ppy v4l3nt1n3'5 d4y"))
  }
  var cookies = cookie.parse(req.headers.cookie || '');
  res.redirect("/");
});


module.exports = router;
