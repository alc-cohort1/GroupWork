var mysql = require("mysql");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var crypto = require("crypto");
var app = express();
// Connecting to the database toyota
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",

  database: "Toyota"
});

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "templates")));

// root route to the login page
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/templates/login.html"));
});

// register.html route
app.get("/register", function(request, response) {
  response.sendFile(path.join(__dirname + "/templates/register.html"));
});
// home route to the toyota page
app.get("/home", function(request, response) {
  response.sendFile(path.join(__dirname + "/templates/toyota.html"));
});

// .....

// inserting to table accounts
app.post("/registration", function(request, response) {
  var username = request.body.username;
  var password = request.body.password;
  var email = request.body.email;

  const querystring =
    "INSERT INTO accounts (username, password, email) VALUES (?,?,?)";

  hash = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
  connection.query(
    querystring,
    [username, hash, email],
    (err, results, field) => {
      if (err) {
        console.log("An error occured" + err);
        res.status(500);
        return;
      } else {
        response.redirect("/");
      }
      response.end();
    }
  );
});
// function that checks if the credentials put are the same as the database
app.post("/auth", function(request, response) {
  var username = request.body.username;
  var password = request.body.password;
  hash = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
  if (username && hash) {
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, hash],
      function(error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          response.redirect("/home");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});
//toyota.html index page loading
app.get("/home", function(request, response) {
  if (request.session.loggedin) {
    response.send("Welcome back, " + request.session.username + "!");
  } else {
    response.send("Please login to view this page!");
  }
  response.end();
});

app.post("/login", function(request, response) {
  if (request.session.loggedin) {
    console.log("you are posting data");
    var customer = request.body.customer;
    var names = request.body.name;
    var townCode = request.body.townCode;
    var partNumber = request.body.partNumber;
    var description = request.body.description;
    var price = request.body.price;
    var quantity = request.body.quantity;
    var size = request.body.size;

    const querystring =
      "INSERT INTO `persons` (`customer`, `name`,`townCode`,`partNumber`, `description`, `price`, `quantity`, `size` ) VALUES (?,?,?,?,?,?,?,?)";

    connection.query(
      querystring,
      [
        customer,
        names,
        townCode,
        partNumber,
        description,
        price,
        quantity,
        size
      ],
      (err, results, field) => {
        if (err) {
          console.log("An error occured" + err);
          response.status(500);
          return;
        } else {
          response.redirect("/home");
        }
        response.end();
      }
    );
  }
});

//creating port number
app.listen(2600, () => {
  console.log("Express at server 2600!");
});
