//The different modules to be used
const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const exhbs = require("express3-handlebars");

const app = express();
app.use(express.static("./views/toyota.html"));

//This used for routing to the registration page
app.use("/css", express.static("./views/signup.html"));

//This is used for connecting to the database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodelogin"
});

//These are modules for express
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//This is the home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

//This is the signup page
app.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/signup.html"));
});

// This is the sign in page
app.get("/signin", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/signin.html"));
});

//This is for authentication and encrypting password
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

// This post user registration details into the database
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

//This route is for posting sales to the database
app.post("/createSale", (req, res) => {
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
  
  //SQL commands for posting sales to the database
  connection.query(
    "INSERT INTO `sales` (`customerId`, `name`, `town`, `retailCustomer`, `shipping`, `partNumber`, `description`, `pricePerPart`, `quantity`, `oversize`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [customerId, name, town, retailCustomer, shipping, partNumber, description, pricePerPart, quantity, oversize],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return;
      }
    }
  );
});

// This is for the port to be used
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});