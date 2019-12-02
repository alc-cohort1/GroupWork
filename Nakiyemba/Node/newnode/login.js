// Assigning variables to the packages required to run this application
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var crypto= require('crypto');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
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
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/home', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

app.use(bodyParser.urlencoded({extended:false}));

// Creating a route to post data into the database
app.post('/usercreate', (req, res)=>{
    
	console.log('You are posting some form data')
	
    const username = req.body.username
    const password = req.body.password
	const email = req.body.email
	
	const querystring = "INSERT INTO `accounts` (`username`, `password`, `email`) VALUES (?,?,?)";

// By using hash, we are encrypting the password
 
	hash =crypto.createHash('md5').update(password).digest('hex');
		
     connection.query(querystring, [username, hash, email], (err, results, field)=>{
         if (err){
             console.log('an error occurred' + err);
             return;
         } else {
			 res.redirect('/');
		 }
		 res.end();
     });   
 });

// This is to OK the process if the correct username and password has been entered
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var unHashedPassword = request.body.password;
	var password = crypto.createHash('md5').update(unHashedPassword).digest('hex')
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
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
		response.end();
	}
});

// A function that will redirect to my homepage
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
			response.sendFile(path.join(__dirname + '/index.html'));
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

// The alert that will show in my console when the server starts at a particular port
app.listen(3000,() => {
	console.log('Express at server 3000!');
});