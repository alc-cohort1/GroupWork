// Node modules used
const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const flash = require("express-flash");
const exhbs = require("express3-handlebars");

// Multer parses the form data so that our application can use it eaily
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

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

// Initialzed the flash middleware
app.use(flash());

// Used the body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Using templating engine middlewares
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// this is the home page endpoint
app.get("/", function(req, res) {
  res.render("signin");
});

//this is the signup page
app.get("/signup", function(req, res) {
  res.render("signup");
});

// this is the sign in page
app.get("/signin", function(req, res) {
  res.render("signin");
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
      function(err, results) {
        if (err) {
          console.log("an error has occured " + err);
          res.end();
        }
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.username = username;
          req.flash("message", username);

          // this redirect the logged in user to the toyota app
          res.redirect("/toyota");
        } else {
          req.flash("message", "Wrong Password or User Name. Try again.");
          res.render("signin");
        }
      }
    );
  } else {
    req.flash("loggedout", "User name and Password cannot be empty.");
    res.render("signin");
  }
});

// The exit route
app.get("/logout", (req, res) => {
  req.session.loggedin = false;
  req.flash("loggedout", "You are logged out");
  res.redirect("signin");
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
    (err, result) => {
      if (err) {
        console.log("an error has occured " + err);
        res.end();
      } else {
        req.session.loggedin = true;
        req.session.username = username;
        req.flash("message", username);
        res.redirect("/toyota");
        res.end();
      }
    }
  );
});

//The toyota
app.get("/toyota", function(req, res) {
  if (req.session.loggedin) {
    res.render("toyota");
  } else {
    req.flash("message2", "to use Toyota App");
    res.render("signin");
  }
});

// Making the toyota app post data to the database
app.post("/toyota", upload.single("sale"), (req, res) => {
  // variable for keeping the form values to be submitted to the mysql database
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
      res.end();
    }
  );
});

// Set the production port to 3000
const PORT = process.env.PORT || 3000;

// listen at port 8000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
