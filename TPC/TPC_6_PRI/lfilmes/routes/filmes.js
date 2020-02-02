var express = require('express');
var router = express.Router();
const axios = require('axios')

//todos os filmes
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3010/api/filmes')
    .then(dados => {
      res.render('lista-filmes', {lista: dados.data});
    })
    .catch(erro => {
      res.render('error', {error: erro});
    })
});

router.get('/inserir', function(req, res){
  res.render('form-filme')
})

router.post('/', function(req,res){
  axios.post ('http://localhost:3010/api/filmes', req.body)
    .then(dados => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

//pagina do filme
router.get('/:idFilme', function(req, res, next) {
  var id = req.params.idFilme
  console.log('id filme: '+id)
  axios.get(`http://localhost:3010/api/filmes/${id}`)
    .then(dados => {
      res.render('info-filme', {filme: dados.data});
    })
    .catch(erro => {
      res.render('error', {error: erro});
    })
});


//adicionar novo ator
router.post('/ator/:idFilme', function(req,res,next){
  var id = req.params.idFilme
  axios.post (`http://localhost:3010/api/filmes/ator/${id}`, req.body)
    .then(dados => {
      res.redirect(`/filmes/${id}`)
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})


//adicionar novo genero
router.post('/genero/:idFilme', function(req,res,next){
  var id = req.params.idFilme
  axios.post (`http://localhost:3010/api/filmes/genero/${req.params.idFilme}`, req.body)
    .then(dados => {
      res.redirect(`/filmes/${id}`)
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})


//apagar um filme
router.delete('/:idFilme', function(req, res, next){
  axios.delete(`http://localhost:3010/api/filmes/${req.params.idFilme}`)
  .then(dados => {
    res.render('lista-filmes',{lista: dados.data})
  })
  .catch(erro => {
    res.render('error', {error: erro})
  })
})

//apagar um ator de um filme
router.delete('/ator/:idFilme', function(req,res,next){
  axios.delete (`http://localhost:3010/api/filmes/ator/${req.params.idFilme}`, {data: {'cast': req.body.cast}})
    .then(dados => {
      res.redirect(`/filmes/${idFilme}`)
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

//eliminar um genero de um filme
router.delete('/genero/:idFilme', function(req,res,next){
  axios.delete (`http://localhost:3010/api/filmes/genero/${req.params.idFilme}`, {data: {'genres': req.body.genres}})
    .then(dados => {
      res.redirect(`/filmes/${idFilme}`)
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})



module.exports = router;