const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("hello");
  res.redirect(`/pokemon/${String(Math.floor(Math.random() * Math.floor(897)) + 1)}`);
  next();
});

module.exports = router;
