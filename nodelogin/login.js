// variables to call the required NodeJS packages/modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const crypto = require('crypto');

// connection variable to connect the database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});
// calling the express module
var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// adding route to the index page of my profile page

app.get('/index/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// adding routes to the HTML pages
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

// route for posting the registration data to the database
app.post('/register', function(req, res){
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    
// querystring to post the registration from input feilds to the database
const querystring = "INSERT INTO `accounts` (`username`, `email`, `password`) VALUES (?,?,?)";

// hash to encrpyt the data posted to the dataabse for registration
hash=crypto.createHash('md5').update(password).digest('hex');

connection.query(querystring,[username,email,hash],(err, results, field)=>{
``
if (err) {
	console.log('an error has occured' +err)
	res.status(500)
    return
}else {
    res.redirect("/")
}
});
})
// route for authenticating the login details
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;

	hash=crypto.createHash('md5').update(password).digest('hex');

	if (username && hash) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, hash], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/index/');
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

// route for getting data from the database and displaying the welcome message
app.get('/home', function(request, response) {

	// if (req.session.loggedin) {
 //    res.sendFile(path.join(__dirname + "/index.html"));
  
 //  	}
	if (request.session.loggedin) {
		response.redirect("/home");
		// response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

//  binding the listening port
app.listen(3000,()=>{
    console.log('Node Server started at port 3000');
});