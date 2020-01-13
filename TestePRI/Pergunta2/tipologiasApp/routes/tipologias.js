var express = require('express');
var router = express.Router();
const axios = require('axios')

const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'


/* GET tipologias listing. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey='+ apikey)
    .then(dados => {
     res.render('lista-tipologias', {lista: dados.data})
    })
    .catch(erro => {
        res.render('error', {error: erro})
    })
})

/*GET informaçao da tipologia X */
router.get('/:id', function(req, res,next) {
  var id = req.params.id
  console.log("ID ::::: " + id)
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+id+'?apikey='+ apikey)
      .then(dados => {
          res.render('info-tipologia', {tipologia: dados.data})
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
  
})

router.get('/:id/elementos', function(req, res,next) {
  var id = req.params.id
  console.log("ID ::::: " + id)
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+id+'/elementos?apikey='+ apikey)
      .then(dados => {
          res.render('elems-tipologia', {lista: dados.data})
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})

router.get('/:id/intervencao/dono', function(req, res,next) {
  var id = req.params.id
  console.log("ID ::::: " + id)
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+id+'/intervencao/dono?apikey='+ apikey)
      .then(dados => {
          res.render('dono-tipologia', {lista: dados.data})
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})

router.get('/:id/intervencao/participante', function(req, res,next) {
  var id = req.params.id
  console.log("ID ::::: " + id)
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/tip_'+id+'/intervencao/participante?apikey='+ apikey)
      .then(dados => {
          res.render('part-tipologia', {lista: dados.data})
      })
      .catch(erro => {
          res.render('error', {error: erro})
      })
})


module.exports = router;
