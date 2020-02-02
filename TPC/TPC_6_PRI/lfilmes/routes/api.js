var express = require('express')
var router = express.Router()

var Filmes = require('../controllers/filmes')

//obter todos os filmes 
router.get('/filmes', function(req, res, next){
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

//obter um filme
router.get('/filmes/:idFilme', function(req, res, next){
    Filmes.consultar(req.params.idFilme)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

//inserir um filme
router.post('/filmes', function(req, res){
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

//inserir ator no filme
router.post('/filmes/ator/:idFilme', function(req,res,next){
    Filmes.insereAtor(req.params.idFilme, req.body.cast)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

//inserir genero em filme
router.post('/filmes/genero/:idFilme', function(req,res,next){
    Filmes.insereGenero(req.params.idFilme, req.body.genres)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).jsonp(erro))
})



//apagar um filme
router.delete('/filmes/:idFilme', function(req, res, next){
    Filmes.removeFilme(req.params.idFilme)
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

//apagar ator de filme

router.delete('/filmes/ator/:idFilme', function(req, res, next){
    Filmes.removeAtor(req.params.idFilme, req.body.cast)
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

//apagar genero de filme
router.delete('/filmes/genero/:idFilme', function(req, res, next){
    Filmes.removeGenero(req.params.idFilme, req.body.genres)
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).jsonp(erro))
})



module.exports = router;