const express = require("express");
const parser = require("body-parser");
const mysql = require("mysql");
const exhbs = require("express3-handlebars");
const path = require("path");
const crypto = require("crypto");

const app = express();

app.use(express.static("./"));

// middleware
app.use(parser.urlencoded({ extended: false }));

// Connecting to the database
const getConnection = mysql.createConnection({
  host: "localhost",
  user: "julius",
  database: "toyota",
  password: "123456"
});

// performing our query through a connection to the database
getConnection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// This routes post sales to the database
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
  // sql commands to post the sales to the database
  getConnection.query(
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
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
      }
      // res.end();
      // res.send("You information is saved to the database");
      // res.send(
      //   `<h1 style="text-align: center; color: green; padding-top: 50px;">Your information is successfully recorded</h1>`
      // );
      res.redirect("/");
      res.end();
    }
  );
});

// Port variable
const PORT = process.env.PORT || 3000;

// Binding to a port
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});
