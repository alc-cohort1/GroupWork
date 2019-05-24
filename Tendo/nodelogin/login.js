//Create login form NodeJS Server

//Import required modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var crypto = require('crypto');


//create databases  connection profile
let connection = mysql.createConnection({
    host     : 'localhost',
	user     : 'root',
	password : 'tendo',
	database : 'toyotalogin'

});

//initialize express and configure some of it's packages
let app = express();
app.use('/',express.static(__dirname+'index.css'))
app.use('/',express.static(__dirname+'index.js'))
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//serve static pages using middleware
app.use( express.static(path.join(__dirname, 'nodelogin')))
//create routes to access pages and other resources

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

 app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
 });

//Toyota form route
 app.get('/index', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				//response.redirect('/index.html');
				//response.sendFile(path.join(__dirname +'/register'));
				response.redirect('/index');
				//response.sendFile(path.join(__dirname + '/index.html'));
			} else {
				response.send('<html><font color=red>Incorrect Username and/or Password !');
			}			
			response.end();
		});
	} else {
		document.getElementById().innerHTML='Please Correct enter Username and Password!'
		response.send(document.getElementById('error').innerHTML='Please Correct enter Username and Password!');
		response.end();
	}
});

app.post('/createuser',(req,res)=>{
const username = req.body.username
const password = req.body.password
const email = req.body.email

const querystring = "INSERT INTO accounts (username ,password ,email) VALUES(?,?,?)";
//ENCRYPT The password using crypto
hash =crypto.createHash('md5').update(password).digest('hex');

connection.query(querystring,[username,hash,email], (err, results, field)=>{
	if (err){
		console.log("an error occured "+err);
		return;
	} else {
		res.redirect('/register');
	} 
	res.end();
});
});



//return main page
app.get('/index1', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
		response.sendFile(path.join(__dirname +'/index.html'));
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(4000,()=>{
	console.log('Running on Port '+{});
});