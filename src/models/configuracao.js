const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfiguracaoSchema = new Schema({  
    qtMaxParcelas: Number,
    juros: String,
    percentJuros:    
},
{
    timestamps: true
})

module.exports = mongoose.model('Configuracao', ConfiguracaoSchema );