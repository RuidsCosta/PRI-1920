const mongoose = require ('mongoose')

var pubSchema = new mongoose.Schema({
  type: String,
  id : String,
  authors: Array,
  title: String,
  booktitle: String,
  address: String,
  year: String,
  month: String,
  doi: String
})
module.exports = mongoose.model('elem',pubSchema)