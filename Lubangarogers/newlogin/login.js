
//requiring node packages for this file
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
//establishing an sql connection
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'loginSystem'
});


var app = express();
//using the express session method
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

app.post('/auth', function(request, response) {
	var user_name = request.body.user_name;
	var password = request.body.password;
	if (user_name && password) {
		//quering from the database
		connection.query('SELECT * FROM users WHERE user_name = ? AND password = ?', [user_name, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.user_name = user_name;
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

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.user_name + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000, ()=>{
	console.log('you are connected')
});