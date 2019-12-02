// Importing the different Modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express()
const port = 3000;

// Using the Body Parser Middleware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Using the Express Middleware to Load Static Assets
app.use('/css', express.static(__dirname + '/css'));
app.use('/jss', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));

// Setting the Database connection parameters.
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'personal_contact'
});

// Setting up the GET Root Route and Returning the index.html Page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// Setting up the POST Contact Route and Storing the Contact Info in the Database 
app.post('/contact', (req, res) => {
	const fullname = req.body.fullname;
	const email = req.body.email;
	const subject = req.body.subject;
	const message = req.body.message;

	console.log(fullname, email, subject, message);

	const queryString = "INSERT INTO contact (`fullname`, `email`, `message_subject`, `message_body`) VALUES (?, ?, ?, ?)";
	connection.query(queryString, [fullname, email, subject, message], (err, result, field) => {
		if (err) {
			console.log("An Error as occured" + err);
			res.status(500);
			return;
		}
		res.redirect('/');
	});

});

// Setting up the Server to Listen on PORT 3000
app.listen(port, () => {
	console.log(`Server running on port ${port}!`)
})