const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Create application/x-www-form-urlencoded parser

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

app.post('/adduser', function (req, res) {
    // Prepare output in JSON format
    console.log(req.body)
    console.log(req.query)

    const newuser = new User({username:req.body.username, password:req.body.password})

    newuser.save(function(err,user){
        if(err){
            res.status(400).send('database error');
            return console.error(err);
        }
        res.status(200).send('registered user')
    })
})

app.post('/userlogin', function(req,res){
    console.log(req.body)
    console.log(req.query)

    User.findOne({ username: req.body.username }, function (err, user) {
        if(err){
            res.status(400).send('error is found')
        }
        if(user){
            if(user.password===req.body.password){
                res.status(200).send('welcom back')
            }else{
                res.status(401).send('incorect pasword')
            }
        }
        else{
            res.status(402).send('user not exist')
        }
    });
} )


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

