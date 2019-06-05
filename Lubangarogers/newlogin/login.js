
//initializing dependencies needed 
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

//invoking express 
var app = express();
//using the session event to create an instance for a user to login
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//using the body parser package
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//route linking the login form file
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});


// Route that links to the toyota app	
app.get('/index', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

//using the express post method triggered by the app variable
app.post('/auth', function(request, response) {
	var user_name = request.body.user_name;
	var password = request.body.password;
	if (user_name && password) {
		//quering from the database if the user already exists
		connection.query('SELECT * FROM users WHERE user_name = ? AND password = ?', [user_name, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.user_name = user_name;
				response.redirect('/index');
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
//using the get method to return a response
app.get('/index', function(request, response) {
	if (request.session.loggedin) {
		
		response.sendFile(__dirname + '/index.html')
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

//calling the getConnection method to create a connection using mysql package
const getConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'toyota'

})
//calling the post method to post data into the database
app.post('/upload',(req, res)=>{
    
    //assigning variables to different inputs
    const customer_Id= req.body.customer_Id
    const name = req.body.name
	const state   = req.body.state
	const part_Number = req.body.part_Number
	const description = req.body.description
	const price = req.body.price
	const quantity = req.body.quantity
	const cost =req.body.cost
	const sales = req.body.sales
	const shipping = req.body.shipping
    //sql query sending data into a table in the database
    const querystring = "INSERT INTO `toyota`.`records` (`customer_Id`, `name`, `state`, `part_Number`, `description`, `price`, `quantity`, `cost`, `sales`, `shipping`) VALUES (?,?,?,?,?,?,?,?,?,?)";
	getConnection.query(querystring, [
		customer_Id,
		name,
		state,
		part_Number,
		description,
		price,
		quantity,
		cost,
		sales,
		shipping
	
	
	], (err,results,field)=>{
        if(err){
            console.log('an error occured' + err)
            
            return
        }

    })
});
//commanding the sever to establish a connection on port 3000
app.listen(3000, ()=>{
	console.log('you are connected')
});