const express = require('express');
const mongoose = require('mongoose');

var app = express();

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongodb connected')
});

// schema.................................
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

//model......................modelname;kitten
const User = mongoose.model('User', UserSchema);


// app.use(express.static('./public'));

///   express............

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/adduser',urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    console.log(req)
    const newuser = new User({username:req.body.username, password:req.body.password})

    newuser.save(function(err,user){
        if(err)return console.error(err);
        console.log(user.username);
        res.send('registered user')
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})