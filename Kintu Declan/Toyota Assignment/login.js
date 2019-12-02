//declare the libraries used.
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var crypto = require('crypto');

//declare the database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	database : 'toyota'
});

var app = express();

//initialise the session.
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : false}));
// let urlparser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.json());
app.use('/Stylesheets', express.static('Stylesheets'));
app.use('/JavaScript', express.static('JavaScript'));

//This code fetches the individual HTML pages.
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/templates/login.html'));
});

app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/templates/register.html'));
});


app.get('/toyota', function(request, response) {
	response.sendFile(path.join(__dirname + '/templates/toyota.html'));
});

//Code that registers a new user to the database.
app.post("/register", (req, res) => {
	const username = req.body.username;
	const hash = req.body.password;
	const password = crypto.createHash('md5').update(hash).digest('hex');
	const email = req.body.email;
  
	const queryString =
	  "INSERT INTO `users` (`Usernames`, `Password`, `Email`) VALUES (?, ?, ?)";
	  connection.query(
	  queryString,
	  [username, password, email],
	  (err, result, field) => {
		if (err) {
		  console.log("an error has occured " + err);
		  res.status(500);
		  return;
		  
		}
		else { 
			res.redirect("/toyota");
		}
	  }
	);
  });
  
//Code that will log an existing user into the database.
  app.post('/auth', function(request, response) {
	var username = request.body.username;
	var passwordData = request.body.password;
	var password = crypto.createHash('md5').update(passwordData).digest('hex');
	if (username && password) {
		connection.query('SELECT * FROM users WHERE Usernames = ? AND Password = ?', 
		[username, password], function(error, results, fields) {
			if (results.length > 0) {
				response.redirect('/toyota');
			} else {
				response.send('Incorrect Username and/or Password!');
			}
						
			response.end();
		});
	}
});

//Code that sends data about the car part to the database.
app.post("/toyota", (req, res) => {
	const customerID = req.body.customer_id;
	const name = req.body.name;
	const state = req.body.state;
	const part = req.body.part_num;
	const description = req.body.description;
	const price = req.body.price;
	const quantity = req.body.quantity;
	// const cost = req.body.cost_output;
	// const tax = req.body.tax_output;
	// const handling = req.body.handling_output;
	// const total = req.body.total_output;
	const queryString =
	  "INSERT INTO `user_data` (`customer_id`, `customer_name`, `state`, `part_number`, `description`, `unit_price`, `quantity`) VALUES (?, ?, ?, ?, ?, ?, ?)";
	  connection.query(queryString,
	  [customerID, name, state, part, description, price, quantity],
	  (err, result, field) => {
		if (err) {
		  console.log("an error has occured " + err);
		  res.status(500);
		  return;
		}
	  }
	);
  });

app.listen(3000, () => {
	console.log('Server running on port 3000');
});	