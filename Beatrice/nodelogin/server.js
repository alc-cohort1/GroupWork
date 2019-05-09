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
	database : 'nodelogin'
});
// creatiing express function that stores a session

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Creating a route that links to the login page
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});


// Creating a route that links to the registration page
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/home', function(request,response){
	response.sendFile(path.join(__dirname + '/toyota/index.html'));
});

/*
Function that captures data from the registration form and posts it to the database 
*/
app.post('/reg', function(request, response) {
	var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    hash = crypto.createHash('md5').update(password).digest('hex');

    const querystring = "INSERT INTO accounts (username, password, email) VALUES (?,?,?)";

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
		response.end(); //ends browser from continuos loading
	}
});
//function that loads the index page
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
//creating port number
app.listen(8032);

