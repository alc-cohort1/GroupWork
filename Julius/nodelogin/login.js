// modules used
const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const exhbs = require("express3-handlebars");

// express app
const app = express();
app.use(express.static("./views/toyota.html"));

// this help set our routes
app.use("/css", express.static("./views/signup.html"));

// Connecting to the database
var connection = mysql.createConnection({
  host: "localhost",
  user: "julius",
  password: "123456",
  database: "nodelogin"
});

//these are modules for express to use before every middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// this is the home page endpoint
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

//this is the signup page
app.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/signup.html"));
});

// this is the sign in page
app.get("/signin", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/signin.html"));
});

// this endpoint for authentication
app.post("/auth", function(req, res) {
  var username = req.body.username;
  var password = crypto
    .createHash("md5")
    .update(req.body.password)
    .digest("hex");
  if (username && password) {
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function(err, results, fields) {
        if (err) {
          console.log("an error has occured " + err);
          res.status(500);
          res.end();
        }
        if (results.length > 0) {
          req.session.loggedin = true;
          // req.session.username = username;
          // res.sendFile(path.join(__dirname, "views/toyota.html"));
          // res.redirect("/dashboard");
          res.redirect("/toyota");
        } else {
          res.send("Incorrect Username and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter Username and Password!");
    res.end();
  }
});

// This routes post a user details into the database
app.post("/register", (req, res) => {
  var username = req.body.username;
  var password = crypto
    .createHash("md5")
    .update(req.body.password)
    .digest("hex");
  var email = req.body.email;
  connection.query(
    "INSERT INTO `accounts` (`username`, `email`, `password`) VALUES (?, ?, ?)",
    [username, email, password],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        res.end();
      } else {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect("/toyota");
        res.end();
      }
    }
  );
});

app.get("/toyota", function(req, res) {
  if (req.session.loggedin) {
    res.sendFile(path.join(__dirname + "/views/toyota.html"));
  } else {
    res.send("Please login to view this page!");
  }
});

app.listen(5000);
