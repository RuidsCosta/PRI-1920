var express = require('express');
var router = express.Router();
const queryString = require('querystring')

var Obras = require('../controllers/obras')

//get /api/obras

router.get('/obras', function(req, res){
  //http://localhost:3012/api/obras?ano=1432
  if(req.query.ano){
    Obras.filtrarAno(req.query.ano)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  //http://localhost:3012/api/obras?periodo=Barroco
  else if(req.query.periodo){
    Obras.filtrarPeriodo(req.query.periodo)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  //http://localhost:3012/api/obras?compositor=Emanuele d'Astorga
  else if(req.query.compositor){
    Obras.filtrarComp(req.query.compositor)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  //http://localhost:3012/api/obras
  else {
    Obras.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
})

router.get('/compositores', function(req, res){
  Obras.listarCompositores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores/:id', function(req, res){
  Obras.id(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router;