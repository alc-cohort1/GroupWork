const express = require("express");
const parser = require("body-parser");
const mysql = require("mysql");
const path = require('path')

const app = express();

// middleware
app.use('/css', express.static(__dirname + '/templates/css'));
app.use('/js', express.static(__dirname + '/templates/js'));
app.use(parser.urlencoded({ extended: false }));

const getConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db2",
  password: ""
});

getConnection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/register.html'))
  });

// // This routes post registration form to the database
app.post("/register", (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const name = req.body.name;
  const address = req.body.address;
  const country = req.body.country;
  const zipCode = req.body.zipCode;
  const email = req.body.email;
  const gender = req.body.gender;
  const language = req.body.language;
  const about = req.body.about;
  const queryString =
    "INSERT INTO register(userId, password, name, address, country, zipCode, email, gender, language, about) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  getConnection.query(
    queryString,
    [
      userId,
      password,
      name,
      address,
      country,
      zipCode,
      email,
      gender,
      language,
      about
    ],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return;
      }
    }
  );
});

const PORT = process.env.PORT || 3000;

// Binding to a port
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});
