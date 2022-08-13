const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webapi');

const postSchema = new mongoose.Schema({
    title: String,
    conteudo: String
}, { collection: 'posts' }
);

module.exports = { Mongoose: mongoose, PostSchema: postSchema }