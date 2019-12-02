//Creating variables that import libraries needed for this app to work
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var crypto = require('crypto');
var app = express();
// Connecting to the database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '123@#Beat',
	database : 'toyota'
});
//Accessing files in the public folder
app.use(express.static(path.join(__dirname, 'public')));
//Creatiing express function that stores a session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Creating a route that links to the login page
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/Templates/login.html'));
});


// Creating a route that links to the registration page
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/Templates/register.html'));
});

app.get('/home', function(request,response){
	response.sendFile(path.join(__dirname + '/Templates/index.html'));
});

/*
Function that captures data from the registration form and posts it to the database 
*/
app.post('/reg', function(request, response) {
	var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;

    const querystring = "INSERT INTO accounts (username, password, email) VALUES (?,?,?)";

    hash = crypto.createHash('md5').update(password).digest('hex');
    connection.query(
        querystring, [username, hash, email], (err, results, field)=>{
            if (err) {
                console.log('An error occured' + err)
                res.status(500)
                return
            } else {
                response.redirect('/');
            }
            response.end();
    })
});
/*
Function that captures data from the login form and compares it with what is in the database
*/
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	hash = crypto.createHash('md5').update(password).digest('hex');
	if (username && hash) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, hash], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end(); //Ends browser from continuos loading
	}
});
/*
Function that captures data from the customer form and posts it to the database 
*/
app.post('/order', function(request, response) {
    if (request.session.loggedin) {
        var customer_id = request.body.customer_id;
        var customer_name = request.body.customer_name;
        var state = request.body.state;
        var retailcustomer = request.body.retailcustomer;
        var shipping = request.body.shipping;
        var part_no = request.body.partno;
        var description = request.body.description;
        var price = request.body.price;
        var quantity = request.body.quantity;
        var oversizecontainer = request.body.oversizecontainer;

        const querystring = "INSERT INTO orders (customer_ID, name, town, retail_customers, shipping, part_no, description, partprice, quantity, oversize_container) VALUES (?,?,?,?,?,?,?,?,?,?)";

    connection.query(
        querystring, [customer_id, customer_name, state, retailcustomer, shipping, part_no, description, price, quantity, oversizecontainer], (err, results, field)=>{
            if (err) {
                console.log('An error occured' + err)
                response.status(500)
                return
            } 
    })
    } else {
        response.send('Please login to make an order!');
        
    }
});
//Ceating a route for logging out 
app.get('/logout', function(request, response){
request.session.loggedin = false;
if (!request.session.loggedin){
    response.redirect('/');
}    
});

//Creating port number
app.listen(3000);

