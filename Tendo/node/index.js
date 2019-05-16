//import packages
var express = require('express');
var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
//Creat Database Connection Properties
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tendo',
  database : 'registration'
});
var app = express();
//Connect to Database 
connection.connect(function(err){
    if(!err) {
        console.log("Successfully Connected to Database ...");    
    } else {
        console.log("Error connecting database ... ");    
    }
    })

connection.query('SELECT * from register', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

//post Data to Database
app.post('/',function(req,res){
   // res.sendFile('/Users/Roger/GroupWork/Tendo/node/index.html');

    var username=req.body.name;
    var username=req.body.name;
    var username=req.body.name;
    var username=req.body.name;
    var username=req.body.name;
    connection.query("INSERT INTO `names` (name) VALUES (?)", username.toString(), function(err, result){
        
      if(err) throw err;
            console.log("1 record inserted");
        });
    res.send(username);
});
//make request
// app.get("/",function(req,res){
//     connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
//     connection.end();
//       if (!err)
//         console.log('The solution is: ', rows);
//       else
//         console.log('Error while performing Query.');
//       });
//     });
    
    app.listen(3000);
connection.end();