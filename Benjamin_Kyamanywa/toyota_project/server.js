// Declaring dependencies
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var crypto = require('crypto');

// Connecting to the database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'toyota'
});

// Letting Express know that we are using some of its packages for sessions
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Route that links to the login page
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

// Route that links to the registration page
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

// Route that links to the sales application	
app.get('/sales', function(request, response) {
	response.sendFile(path.join(__dirname + '/sales.html'));
});

// Posting data to the database from the registration form
app.post('/register', function(request, response) {
	var username = request.body.username;
    var password = request.body.password;
	var email = request.body.email;
	var hash = crypto.createHash('md5').update(password).digest('hex');

    const querystring = "INSERT INTO accounts (username, password, email) VALUES (?,?,?)";

    connection.query(querystring, [username, hash, email], (err, results, field)=>{
        if (err) {
            console.log('an error occured' + err)
            res.status(500)
            return
        }else {
            response.redirect('/');
        }
        response.end();
    })
});

// Checking MySql database accounts to see whether login details match
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	var hash = crypto.createHash('md5').update(password).digest('hex');
	if (username && hash) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, hash], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/sales');
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

// Loading the index page
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

// Capturing data from the sales form and posting it to the database
app.post('/order_form', function(request, response) {
	var customerId = request.body.customer_id;
    var customerName = request.body.name;
    var town = request.body.town;
    var retailCustomer = request.body.retail_customer;
    var shipping = request.body.shipping;
    var partNo = request.body.part;
    var description = request.body.description;
    var price = request.body.price_per_part;
    var quantity = request.body.quantity;
    var overSizeContainer = request.body.oversize_container;

    const querystring = "INSERT INTO orders (customerId, name, town, retailCustomers, shipping, partNo, description, partPrice, quantity, overSizeContainer) VALUES (?,?,?,?,?,?,?,?,?,?)";

    connection.query(
        querystring, [customerId, customerName, town, retailCustomer, shipping, partNo, description, price, quantity, overSizeContainer], (err, results, field)=>{
            if (err) {
                console.log('An error occured' + err)
                response.status(500)
                return
            } else {
                response.redirect('/sales');
            }
            response.end();
    })
});

// Setting a port
app.listen(5000, ()=>{
    console.log('Express server started at port 5000');
});