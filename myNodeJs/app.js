var express = require('express');

var app = express();



app.get('/',function(req, res){
    res.send('Loving the fact that i get riuting so first');
})






app.listen(3000);