const express = require('express');
const mongoose = require('mongoose');

var app = express();

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


// app.use(express.static('./public'));

///   express............

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/add_kitten', function (req, res) {
    // Prepare output in JSON format
    console.log(req)
    const newkitten = new Kitten({name:req.query.kitten_name})

    newkitten.save(function(err,kitten){
        if(err)return console.error(err);
        console.log(kitten.name);
        res.send(kitten.name)
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})