var express = require('express');
var app = express();

app.use(express.static('./public'));



var server = app.listen(8081, function () {
    var host = '127.0.0.1'
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})