var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let p1 = new Promise(function (next){
    var MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://162.38.112.117:27017/";
    let data = "";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("woa-pokemon");
      dbo.collection("pokemons").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        data = result
        db.close();
        next(data);
      });
    });
  })
  p1.then( (data) => {
    console.log("data: ",data);
    let content = "";
    content = "Nom = " + data.name + "<br>"
    content += "Image = " + "<img src='/images/pokemon/001.png' alt='image de pokemon' width='200' heigth='200'>"
    res.render('pokemon', { title : "Pokemon-WOA", "content": content})
  });
});

module.exports = router;
