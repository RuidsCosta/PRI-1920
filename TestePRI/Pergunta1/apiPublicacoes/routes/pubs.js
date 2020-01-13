var express = require('express');
var router = express.Router();
const axios = require('axios')

var Pubs = require('../controllers/pubs') 

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.id){
    Pubs.filtrarId(req.query.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.type & req.query.year){
    Pubs.filtrarBetweenYear(req.query.type, req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.type){
    Pubs.filtrarType(req.query.type)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }

  else Pubs.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))

});

module.exports = router;
