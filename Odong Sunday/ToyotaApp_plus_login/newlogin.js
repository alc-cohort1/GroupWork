var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var crypto = require('crypto');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'alican',
	password : '123',
	database : 'nodelogin'
});

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(path.join(__dirname , '/public')));


app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});


app.get('/toyota', function(request, response) {
	response.sendFile(path.join(__dirname + '/toyota.html'));
});



app.post("/register", (req, res) => {
	const username = req.body.username;
	const hash = req.body.password;
	const password = crypto.createHash('md5').update(hash).digest('hex');
	const email = req.body.email;
  
	const queryString =
	  "INSERT INTO `accounts` (`username`, `password`, `email`) VALUES (?, ?, ?)";
	  connection.query(
	  queryString,
	  [username, password, email],
	  (err, result, field) => {
		if (err) {
		  console.log("an error has occured " + err);
		  res.status(500);
		  return;
		}
	  }
	);
  });
  
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var passwordData = request.body.password;
	var password = crypto.createHash('md5').update(passwordData).digest('hex');
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				response.redirect('/toyota');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/alican', function(request, response) {
	if (request.session.loggedin) {
		response.sendFile(path.join(__dirname + '/toyota.html'));
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});


app.post("/toyota", (req, res) => {
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
	  "INSERT INTO `toyota` (`customerID`, `name`, `state`, `retail`, `part`, `description`, `price`, `quantity`, `oversize`, `shipping`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	  connection.query(
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

app.listen(3000, () => {
	console.log('Server running on port 3000');
});	
