const express = require('express');
const cookie = require('cookie');
const { MongoClient } = require('mongodb');
const logaction = require('./lib/logaction');

const router = express.Router();

/* GET home page. */
router.get('/:id', (req, res, callback) => {
  const id = Number(req.params.id);
  const cookies = cookie.parse(req.headers.cookie || '');
  const logA = logaction(cookies);
  const p1 = new Promise((next) => {
    const url = 'mongodb://162.38.112.117:27017/';
    let data = '';
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      const dbo = db.db('woa-pokemon');
      dbo.collection('pokemons').findOne({ id }, (err2, result) => {
        if (err2) throw err2;
        data = result;
        db.close();
        next(data);
        callback();
      });
    });
  });
  p1.then((data) => {
    const content = `Name = ${data.name}<br>
    Id = ${data.id}<br>
    Generation = ${data.generation}<br>
    ${'Image = <img src=\'/images/pokemon/'}${data.image}' alt='image de pokemon' width='200' heigth='200'> <br>
    Stats : <br>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">HP</th>
          <th scope="col">Attack</th>
          <th scope="col">Defense</th>
          <th scope="col">Special Attack</th>
          <th scope="col">Special Defense</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${data.stats.HP}</td>
          <td>${data.stats.Attack}</td>
          <td>${data.stats.Defense}</td>
          <td>${data.stats.SpecialAttack}</td>
          <td>${data.stats.SpecialDefense}</td>
        </tr>
      </tbody>
    </table>
    `;
    res.render('pokemon', { title: 'Pokemon-WOA', content, logaction: logA });
  });
});

module.exports = router;
