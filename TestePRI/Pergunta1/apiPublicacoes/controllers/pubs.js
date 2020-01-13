var Publ = require('../models/pubs')

//devolve todas as pubs
module.exports.listar = () => {
  return Publ
          .find()
          .exec()
}

//listar pubs com o id
module.exports.filtrarId = id => {
  return Publ
          .find({id : id})
          .exec()
}

//retornar todos os tipos
module.exports.listarTipos = () => {
  return Publ
          .find({}, {type:1})
          .distinct('type')
          .exec()
}


//listar pubs com o type
module.exports.filtrarType = tipo  => {
  return Publ
          .find({type : tipo})
          .exec()
}

//filtrar por ano e tipo
module.exports.filtrarBetweenYear = (type, year) => {
  return Publ
          .find({$and: [{type:{$eq : type}} , {year:{ $gte : year}}]})
          .exec()
}


//lista dos autores ordenada alfabeticamente
module.exports.listarAutores = () => {
  return Publ
  .aggregate([{$unwind: "$authors"}, {$project: {_id:0, authors:1}}, {$sort: {authors:1}}])
          .exec()
}
