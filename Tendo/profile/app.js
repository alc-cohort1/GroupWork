//Create login form NodeJS Server

//Import required modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var crypto = require('crypto');


//set port
const port = 5000;

//create databases  connection profile
let connection = mysql.createConnection({
    host     : 'localhost',
	user     : 'root',
	password : 'tendo',
	database : 'profile'

});

// connect to database
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = connection;

//initialize express and configure some of it's packages
let app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// configure middleware
app.use(express.static(path.join(__dirname, 'static')));
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render toyota form
app.set('css', __dirname + '/css'); // set express to look in this folder to render css files
app.set('js', __dirname + '/js'); // set express to look in this folder to render js files
app.set('views', __dirname + '/views'); // set express to look in this folder to render  views
app.set('img', __dirname + '/img'); // set express to look in this folder to render images
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client


//create routes to access pages and other resources

//login form route
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});



//Toyota form route
 app.get('/index', function(request, response) {
	 if(request.session.loggedin ==true){
		response.sendFile(path.join(__dirname + '/views/index.html'));
	 }
	else{
		response.sendFile(path.join(__dirname + '/views/login.html'));
		//response.send( document.getElementsByTagName('h3').innerHTML="<font color=red>");
		response.send('<html><font color=red>Please Login First to Access The Application <a style="text-decoration:none" href="/">Login</a> ');
	}
});

//create new user
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				request.session.password = password;
				//response.redirect('/index.html');
				//response.sendFile(path.join(__dirname +'/register'));
				response.redirect('/index');
	
				//response.sendFile(path.join(__dirname + '/index.html'));
			} else {
				response.send('<html><font color=green>You Successfully Registered A New User');
				//response.send('<html><font color=red>Incorrect Username and/or Password !');
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





app.listen(port,()=>{
	//console.log('Running on Port : ${port}'+${port});
	console.log(`Server running on port: ${port}`);
});