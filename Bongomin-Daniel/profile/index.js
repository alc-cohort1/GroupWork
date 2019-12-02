

// declaring varibles to hold modules

var express = require("express");
var parser = require("body-parser");
var mysql = require("mysql");
var path = require('path');

// initializing the app
var app = express();
// making  express no that am going to use some its package
app.use(express.static("./templates"));
app.use('css',express.static("/templates/css"));
app.use('fonts',express.static("/templates/fonts"));
app.use('images',express.static("/templates/images"));
app.use('js',express.static("./templates/js"));

// middleware
app.use(parser.urlencoded({ extended: false }));

//  creating database connection
var getConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "portfolio",
  password: ""
  
});

// checking and creating errors incase of connection problem


getConnection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});


// Routes and Views for showing endpoints

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/index.html'))
});


// End point that posts contact  data to the database /// ROUTE
app.post("/contact", (req, res) => {
  var senderName = req.body.senderName;
  var senderEmail = req.body.senderEmail;
  var subject = req.body.subject;
  var message = req.body.message;
  var queryString = "INSERT INTO contact(senderName,senderEmail, subject,message) VALUES (?, ?, ?,?)";
  getConnection.query(queryString, [senderName, senderEmail, subject,message],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return;
      }
    }
  );
});
var PORT = process.env.PORT || 8000;

// Binding to a port
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});

