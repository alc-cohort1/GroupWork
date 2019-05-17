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

// connection.query('SELECT * from register', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
// });

//return index form
app.get('/',function(req,res){
res.sendFile('/Users/Roger/GroupWork/Tendo/node/index.html');
});

//post Data to Database
app.post('/',function(req,res){
   // res.sendFile('/Users/Roger/GroupWork/Tendo/node/index.html');

   
    let id=req.body.id;
    let password=req.body.password;
    let name=req.body.name;
    let address=req.body.address;
    let country=req.body.country;
    let zip=req.body.zip;
    let email=req.body.email;
    let gender=req.body.gender;
    let language=req.body.language;
    let txtarea=req.body.txtarea;

    connection.query = "INSERT INTO `register` (id, password, name, address, country, zip, email,gender,language,txtarea)
      VALUES ('" +id + "', '" + password + "', '" + name + "', '" + address + "', '" + country + "', '" + zip + "', '" +email+ "', '" +gender+ "', '" + "', '" +language+ "', '" +txtarea)";

      connection.query(query, (err, result) => {
    if (err) {
        return res.status(500).send(err);
    }
    res.redirect('/');
});
});
  

    app.listen(3000);
connection.end();