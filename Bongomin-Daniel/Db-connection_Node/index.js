

// declaring varibles to hold modules

var express = require("express");
var parser = require("body-parser");
var mysql = require("mysql");

// initializing the app
var app = express();
// making  express no that am going to use some its package
app.use(express.static("./templates"));

// middleware
app.use(parser.urlencoded({ extended: false }));

//  creating database connection
var getConnection = mysql.createConnection({
  host: "localhost",
  user: "danny",
  database: "db1",
  password: "danny123"
  
});

// checking and creating errors incase of connection problem


getConnection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});

// End point that posts users data to the database /// ROUTE

app.post("/login", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var password = req.body.password;
  var queryString = "INSERT INTO `users` (`firstName`, `lastName`, `password`) VALUES (?, ?, ?)";
  getConnection.query(queryString, [firstName, lastName, password],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return;
      }
    }
  );
});

// // This routes Posts registration Data  to the database
app.post("/registration", (req, res) => {
  var userId = req.body.userId;
  var password = req.body.password;
  var name = req.body.name;
  var address = req.body.address;
  var country = req.body.country;
  var zipCode = req.body.zipCode;
  var email = req.body.email;
  var gender = req.body.gender;
  var language = req.body.language;
  var about = req.body.about;
  var queryString ="INSERT INTO `regform` (`userId`, `password`, `name`, `address`, `country`, `zipCode`, `email`, `gender`, `language`, `about`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  getConnection.query(
    queryString,[userId,password,name,address,country,zipCode,email,gender,language,about],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return;
      }
    }
  );
});

var PORT = process.env.PORT || 3000;

// Binding to a port
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});
