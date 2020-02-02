const mongoose = require('mongoose')

var ficheiroSchema = new mongoose.Schema({
    _id: String,
    nome: Number,
    dataNasc: String,
    dataObito: String
})

module.exports = mongoose.model('ficheiro', ficheiroSchema);