// Node modules used
const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");

// express server created
const app = express();

// Allow the server to access static files
app.use(express.static("./"));

// Connection to the datbase created
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

// Used the body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// this is the home page endpoint
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/signin.html"));
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

// The exit route
app.get("/logout", (req, res) => {
  req.session.loggedin = false;
  res.redirect("/");
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

//The toyota
app.get("/toyota", function(req, res) {
  if (req.session.loggedin) {
    res.sendFile(path.join(__dirname, "/views/toyota.html"));
  } else {
    res.send("Please login to view this page!");
  }
});

// Making the toyota app post data to the database
app.post("/toyota", (req, res) => {
  const customerId = req.body.customerId;
  const name = req.body.name;
  const town = req.body.town;
  const retailCustomer = req.body.retailCustomer;
  const shipping = req.body.shipping;
  const partNumber = req.body.partNumber;
  const description = req.body.description;
  const pricePerPart = req.body.pricePerPart;
  const quantity = req.body.quantity;
  const oversize = req.body.oversize;
  // sql commands to post the sales to the database
  connection.query(
    "INSERT INTO `sales` (`customerId`, `name`, `town`, `retailCustomer`, `shipping`, `partNumber`, `description`, `pricePerPart`, `quantity`, `oversize`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      customerId,
      name,
      town,
      retailCustomer,
      shipping,
      partNumber,
      description,
      pricePerPart,
      quantity,
      oversize
    ],
    (err, result) => {
      if (err) {
        console.log("an error has occured " + err);
      }
      // res.end();
    }
  );
});

// listen at port 8000
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
