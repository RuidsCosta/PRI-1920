var express = require('express');
var router = express.Router();
const axios = require('axios')

var Pubs = require('../controllers/pubs') 

/* GET types listing. */
router.get('/', function(req, res, next) {
    Pubs.listarTipos()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
