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

// Letting Express know that we are using some of its packages
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

// Displaying index page to client
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

// Displaying registration page to client
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

// Displaying toyota sales page to client
app.get('/sales', function(request, response) {
	response.sendFile(path.join(__dirname + '/sales.html'));
});

// Posting data to the database
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

// Checking MySql accounts to see whether details are correct for the login
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

// Another GEt request
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

// Setting a port
app.listen(5000, ()=>{
    console.log('Express server started at port 5000');
});