var Obras = require('../models/obras')


//listar todas as obras
module.exports.listar = () => {
    return Obras 
        .find()
        .exec()
}

//obras de um certo periodo
module.exports.filtrarPeriodo = p => {
    return Obras
        .find({periodo: p})
        .exec()
}

//obras de um certo ano
module.exports.filtrarAno = ano => {
    return Obras
        .find({anoCriacao: ano})
        .exec()
}

//filtrar obras de um certo compositor
module.exports.filtrarComp = comp => {
    return Obras
        .find({compositor: comp})
        .exec()
    }

//retornar nome de todos os compositores
module.exports.listarCompositores = () => {
    return Obras
        .find({},{compositor: 1, _id: 0})
} 

module.exports.id = id => {
    return Obras    
        .find({compositor: id})
        .exec()
}