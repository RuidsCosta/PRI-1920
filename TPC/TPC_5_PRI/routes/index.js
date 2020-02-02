var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + "/../data/alunos.json"
/**GET de todos os alunos */
router.get('/alunos', function(req, res){
    jsonfile.readFile(myBD, (erro, dados) => {
        if(!erro){
            res.render('index', {lista: dados})
        }
        else{
            res.render('erro', {error: erro})
        }
    })
})

//obter info de aluno
router.get('/alunos/:identificador/notas', function(req, res){
    var identificador = req.params.identificador

    jsonfile.readFile(myBD, (erro,dados) => {
        if(!erro){
            var element = dados.find(a => a.identificador == identificador)
            if(element)
                res.render('student', {aluno: element})
            else res.render('index',{lista: dados})    
        }
        else{
            res.render('erro', {error: erro})
        }
    })
})


//adicionar nota a um aluno
router.post('/alunos/:identificador/notas', function(req ,res) {
    var identificador = req.params.identificador
    var nota = req.body
    nota['idn'] = nanoid()

    jsonfile.readFile(myBD, (erro, dados) => {
        if(!erro){
            var aluno = dados.find( a => a.identificador == identificador)
            console.log('Aluno = '+ aluno)
            aluno['notas'].push(nota)
            jsonfile.writeFile(myBD, dados, erro => {
                if(erro) console.log(erro)
                else console.log('registo de nota efetuado com sucesso...')
            })
        }

        res.render('student',{aluno: aluno})
    })
})

//remover uma nota de um aluno
router.delete('/alunos/:identificador/notas/:idn', function(req, res) {
    var identificador = req.params.identificador
    var idn = req.params.idn

    jsonfile.readFile(myBD, (erro, dados) => {
        if(!erro){
            var aluno = dados.find(a => a.identificador == identificador)
            console.log('aluno= '+aluno)
            var index = aluno['notas'].findIndex(n => n.idn == idn)
            console.log('Index= '+idn)

            if(aluno && (index >= 0)){
                aluno['notas'].splice(index, 1)
                jsonfile.writeFile(myBD, dados, erro => {
                    if(erro) console.log(erro)
                    else console.log('nota apagada com sucesso ..')
                })
            }
        }
        res.render('student', {aluno: aluno})
    })
})







router.post('/alunos', function(req, res){
    var registo = req.body
    registo = {...registo, notas:[]}
    registo['id'] = nanoid()
    
    jsonfile.readFile(myBD, (erro, alunos) => {
        if(!erro){
            alunos.push(registo)
            jsonfile.writeFile(myBD, alunos, erro => {
                if(erro) console.log(erro)
                else console.log('Registo efetuado com sucesso')
            })
        }
        res.render('index', {lista: alunos})
    })
})

router.delete('/alunos/:idAluno', function(req, res) {
    var id = req.params.idAluno
    jsonfile.readFile(myBD, (erro, alunos) => {
        if(!erro){
            var index = alunos.findIndex(c => c.id == id)
            if(index > -1){
                alunos.splice(index, 1)
                jsonfile.writeFile(myBD, alunos, erro => {
                    if(erro) console.log(erro)
                    else console.log('Registo removido com sucesso')
                })
            }
        }
        res.render('index', {lista: alunos})
    })
})



module.exports = router;