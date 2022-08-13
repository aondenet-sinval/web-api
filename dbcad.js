const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webapi');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    endereco: String,
    telefone: Number
}, { collection: 'customers',  versionKey: false }
);

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }