var Filme = require('../models/filmes')


//devolve uma lista de 10 filmes mais recentes
module.exports.listar = () => {
    return Filme 
        .find().sort({year: -1}).limit(10)
        .exec()
}

//consultar um filme
module.exports.consultar = id =>{
    return Filme 
        .findOne({_id: id})
        .exec()
}

//Conta o nr de filmes no sistema
module.exports.contar = () => {
    return Filme 
        .countDocuments()
        .exec()
}

//inserir um novo filme
module.exports.inserir = filme => {
    console.log(filme)
    var novo = new Filme(filme)
    return novo.save()
}

//eliminar m filme
module.exports.removeFilme = id =>{
    console.log("Eliminar filme:" + id)
    return Filme
        .deleteOne({_id: id})
        .exec()
}

//inserir um novo ator num filme
module.exports.insereAtor = (id, ator) =>{
    console.log("inserir ator " +ator+ " no filme "+id)
    return Filme
        .updateOne({_id: id}, {$push:{cast: ator}})
}

//remover ator
module.exports.removeAtor = (id, ator) =>{
    console.log("apagar ator " +ator+ " no filme "+id)
    return Filme
        .updateOne({_id: id},{$pull:{cast: ator}})
}


//adicionar genero
module.exports.insereGenero = (id, genero) =>{
    console.log("inserir genero " +genero+ " no filme "+id)
    return Filme
        .updateOne({_id: id},{$push:{genres: genero}})
}

//remover genero
module.exports.removeGenero = (id, genero) =>{
    console.log("remover genero " +genero+ " no filme "+id)
    return Filme
        .updateOne({_id: id},{$pull:{genres: genero}})
}













