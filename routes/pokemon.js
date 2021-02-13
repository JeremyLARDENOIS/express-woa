const express = require('express');
const cookie = require('cookie');
const { MongoClient } = require('mongodb');
const logaction = require('./lib/logaction');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, callback) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  const p1 = new Promise((next) => {
    const url = 'mongodb://162.38.112.117:27017/';
    let data = '';
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      const dbo = db.db('woa-pokemon');
      dbo.collection('pokemons').findOne({}, (err2, result) => {
        if (err2) throw err2;
        data = result;
        db.close();
        next(data);
        callback();
      });
    });
  });
  p1.then((data) => {
    const content = `Nom = ${data.name}<br>${'Image = <img src=\'/images/pokemon/'}${data.image}' alt='image de pokemon' width='200' heigth='200'>`;
    res.render('pokemon', { title: 'Pokemon-WOA', content, logaction: logaction(cookies) });
  });
});

module.exports = router;
