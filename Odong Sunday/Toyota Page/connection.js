const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname , '/public')));

app.use(express.static("./templates"));

app.use(bodyParser.urlencoded({ extended: false }));

const getConnection = mysql.createConnection({
  host: "localhost",
  user: "alican",
  database: "alican1",
  password: "123"   
});

getConnection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database");
});

app.post("/toyota_page", (req, res) => {
  const customerID = req.body.id_value;
  const name = req.body.name_value;
  const state = req.body.state_input;
  const retail = req.body.name_checkbox;
  const part = req.body.part_number_value;
  const description = req.body.description_value;
  const price = req.body.price_part;
  const quantity = req.body.quantity;
  const oversize = req.body.oversize;
  const shipping = req.body.choice;

  const queryString =
    "INSERT INTO `toyota` (`customerID`, `name`, `state`, `retail`, `part`, `description`, `price`, `quantity`, `oversize`,`shipping`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  getConnection.query(
    queryString,
    [customerID, name, state, retail, part, description, price, quantity, oversize, shipping],
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
app.listen(PORT, () => {
  console.log(`Express server started at port ${PORT}`);
});
