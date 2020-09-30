const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongodb connected')
});

// schema.................................
const kittySchema = new mongoose.Schema({
    name: String
});

//model......................modelname;kitten
const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

silence.save()