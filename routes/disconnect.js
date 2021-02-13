var express = require('express');
var router = express.Router();
const logaction = require('./lib/logaction');
var cookie = require("cookie");

/* GET home page. */
router.get('/*', function(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize("value",""))
  res.redirect("/");
});


module.exports = router;
