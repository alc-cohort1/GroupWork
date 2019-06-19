// variables to call the required NodeJS packages/modules
var mysql = require('mysql');
var express = require('express')
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
// module body parser to help fetch request from the Input fields and return a json file version
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


// adding routes to get the stlying, javascript and image folders
app.use(express.static('./templates'));
app.use('/css', express.static(__dirname + '/templates/css'));
app.use('/js', express.static(__dirname + '/templates/js'));
app.use('/img', express.static(__dirname + '/templates/img'));
app.use(express.static(path.join(__dirname+'img')));

app.use(bodyParser.urlencoded({extended: false}));


// adding route to the index page of my profile page

app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// adding routes to the HTML pages
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

// adding route for the exit button
app.get('/logout', function(request, response){
// module session for keeping the session on the website without timing out
	req.session.loggedin = false;
	if (!req.session.loggedin) {
		res.redirect('/');
	}
});

// route for posting the registration data to the database
app.post('/register', function(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
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
})
});

// route for posting the toyota input fields to the database
app.post('/toyota', (req, res) =>{
	const customer_id = req.body.customer_id;
	const name = req.body.name;
	const state = req.body.state;
	const retail = req.body.retail;
	const shipping = req.body.shipping;
	const part_num = req.body.part_num;
	const price_part = req.body.price_part;
	const quantity = req.body.quantity;
	const oversized = req.body.oversized;
	const description = req.body.description;

	const querystring = "INSERT INTO `toyota` (`customer_id`, `name`, `state`, `retail`, `shipping`, `part_num`, `price_part`, `quantity`, `oversized`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

connection.query(querystring,[customer_id,name,state,retail,shipping,part_num,price_part,quantity,oversized,description],(err, results, field)=>{
``
if (err) {
	console.log('an error has occured' +err)
	res.status(500)
    return
}else {
    // res.redirect("/")
}
})
});

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
				response.redirect('/index');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		}); 
}			
});

// route for getting data from the database and displaying the welcome message
app.get('/home', function(request, response) {

	if (request.session.loggedin) {
		response.redirect("/index");
		// response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

// //  binding the listening port
app.listen(3000,()=>{
    console.log('Node Server started at port 3000');
});
