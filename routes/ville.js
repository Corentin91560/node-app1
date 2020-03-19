var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send('Ville: '+req.body.nom_ville );
});

module.exports = router;
