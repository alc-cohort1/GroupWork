// express, mysql and body-parser are required
const express = require("express");
const mysql = require("mysql");
const app = express();
const parser = require("body-parser");
app.use(express.static("./templates"));
app.use(parser.urlencoded({ extended: false }));
//variable getConnection is assigned to method call of createConnection
const getConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "registration_form"
});
app.post("/login", (req, res) => {
 
//What will show in the console when user fills in details
  console.log("you are posting data");
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const password = req.body.password;


  const querystring =
  
    "INSERT INTO `registration_form.login_details` (`first_name`, `last_name`, `password`) VALUES (?,?,?)";
  getConnection.query(
    querystring,
    [first_name, last_name, password],
    (err, results, field) => {
      if (err) {
        console.log("an error" + err);
        res.status(500)
        return;
      }
    }
  );
});



app.listen(3000, () => {
  console.log("Express at server 3000");
});