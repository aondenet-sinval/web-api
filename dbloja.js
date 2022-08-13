const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webapi');

const prodSchema = new mongoose.Schema({
    prod: String,
    descricao: String,
    tamanho: String,
    preco: Number
}, { collection: 'store',  versionKey: false }
);

module.exports = { Mongoose: mongoose, ProdSchema: prodSchema }