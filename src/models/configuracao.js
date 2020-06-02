const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfiguracaoSchema = new Schema({  
    qtParcelas: Number,
    jurosDia: Number,
    comissao: Number,
    tipoJuros: String    
},
{
    timestamps: true
})

module.exports = mongoose.model('Configuracao', ConfiguracaoSchema );

