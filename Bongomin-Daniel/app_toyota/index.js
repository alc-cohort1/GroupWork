// importing modules
var express = require('express');
var parser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var session = require('express-session');

//  initialising the application

var app = express();

//  directing the application to the templates directory for files to display

// middle ware that enables getting inputs from the input fields

app.use(express.static('./templates'));
// getting the css files from the static directories
app.use('/css', express.static('/templates/css'));
app.use('/js', express.static('/templates/js'));
app.use(parser.urlencoded({ extended: false }));


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// creating database connection

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: "toyota",
  password: ''

});


// Handling  errors in general

dbConnection.connect(err => {
  if (err) throw err;

  console.log('connection to the database succeded')
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/index.html'))
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/home.html"));
});



app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/register.html'))
});


// (ROUTE) that post data to databse
app.post('/toyota_app', (req, res) => {
  var customerId = req.body.customerId;
  var name = req.body.name;
  var state = req.body.state;
  var retailCustomer = req.body.retailCustomer;
  var shipping = req.body.shipping;
  var partNumber = req.body.partNumber;
  var description = req.body.description;
  var price = req.body.price;
  var quantity = req.body.quantity;
  var sizeContainer_check_box = req.body.sizeContainer_check_box;
  var cost = req.body.cost;
  var salesTax = req.body.salesTax;
  var salesHanding = req.body.salesAndHanding;
  var total = req.body.total;

  var sql = "INSERT INTO results(customerId,name,state,retailCustomer,shipping,partNumber,description,price,quantity,sizeContainer_check_box,cost,salesTax,salesHanding,total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  dbConnection.query(sql, [customerId, name, state, retailCustomer, shipping, partNumber, description, price, quantity, sizeContainer_check_box, cost, salesTax, salesHanding, total],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
      }
      res.redirect("/");
      res.end();
    });
});


// // This routes Posts registration Data  to the database
app.post("/register", (req, res) => {
  var userName = req.body.userName;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;

  var queryString = "INSERT INTO users(userName, email, password, confirmPassword) VALUES (?, ?, ?, ?)";
  dbConnection.query(
    queryString, [userName, email, password, confirmPassword],
    (err, result, field) => {
      if (err) {
        console.log("an error has occured " + err);
        res.status(500);
        return
      }

      res.redirect('/');

    }
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
});

// handling post request from the login form

app.post('/login', function (req, res) {
  // creating two variable that hold username and password
  var email = req.body.email;
  var password = req.body.password;
  // checking if the username and password exists
  if (email && password) {
    var sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    dbConnection.query(sql, [email, password], function (error, results, fields) {
      // checking if the two data are available in the database table accounts
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.email = email;
        res.redirect('/home');
      } else {
        res.send('incorrect Credentials try again');
      }
      res.end();

    });
  } else {
    res.send('please enter email and password');
    res.end();
  }
});

app.get('/', (req,res)=>{
  if(req.session.loggedin){
    res.sendFile(path.join(__dirname, '/templates/login.html'))
  }
  else{
    console.log('please log in')
  }
  res.end();
})

// declaring a port on which to run the app
var PORT = process.env.PORT || 8000;

// Binding to the Port
app.listen(PORT, () => {
  console.log(`Toyota App server is running on port ${PORT}`);

});


