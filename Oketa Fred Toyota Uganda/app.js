const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path');

const app = express();

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}));

// Body Parser Middleware that will help to get data from the Input fields.
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Middleware for Loading the Bootstrap CSS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
// Setting the Database connection parameters.
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});

// The Root Route for displaying the login form. 
app.get('/', (req, res) => {

	if (req.session.loggedin) {
		res.redirect('/home');
	}

	res.sendFile(path.join(__dirname + '/index.html'));
});

// Register Route for displaying the Registration form.
app.get('/register', (req, res) => {

	if (req.session.loggedin) {
		res.redirect('/home');
	}

	res.sendFile(path.join(__dirname + '/register.html'));
});

// Register Route for register a new user in the system
app.post('/register', (req, res) => {
	const username = req.body.username;
	const notencrypted_password = req.body.password;
	const password = crypto.createHash('md5').update(notencrypted_password).digest("hex");
	const email = req.body.email;

	const queryString = "INSERT INTO accounts (`username`, `password`, `email`) VALUES (?, ?, ?)";
	connection.query(queryString, [username, password, email], (err, result, field) => {
		if (err) {
			console.log("An Error as occured" + err);
			res.status(500);
			return;
		}
		res.redirect('/');
	});
});

// Auth Route which is used to checking whether the user enters the correct credentials
app.post('/auth', (req, res) => {
	const username = req.body.username;
	const notencrypted_password = req.body.password;
	const password = crypto.createHash('md5').update(notencrypted_password).digest("hex");
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

// Home Route which is visible after successfully logging in.
app.get('/home',(req, res) => {
	if (!req.session.loggedin) {
		res.redirect('/');
	}
	res.sendFile(path.join(__dirname + '/home.html'));
});

// Logout Route
app.get('/logout', (req, res) => {

	req.session.loggedin = false;

	if (!req.session.loggedin) {
		res.redirect('/');
	}
});



//The toyota
app.get("/toyota", function(req, res) {
  if (req.session.loggedin) {
    res.sendFile(path.join(__dirname, "/home.html"));
  } else {
    res.redirect('/');
  }
});

// Making the toyota app post data to the database
app.post("/toyota", (req, res) => {
  const customerId = req.body.customerId;
  const name = req.body.name;
  const town = req.body.town;
  const retailCustomer = req.body.retailCustomer;
  const shipping = req.body.shipping;
  const partNumber = req.body.partNumber;
  const description = req.body.description;
  const pricePerPart = req.body.pricePerPart;
  const quantity = req.body.quantity;
  const oversize = req.body.oversize;
  // sql commands to post the sales to the database
  connection.query(
    "INSERT INTO `sales` (`customerId`, `name`, `town`, `retailCustomer`, `shipping`, `partNumber`, `description`, `pricePerPart`, `quantity`, `oversize`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      customerId,
      name,
      town,
      retailCustomer,
      shipping,
      partNumber,
      description,
      pricePerPart,
      quantity,
      oversize
    ],
    (err, result) => {
      if (err) {
        console.log("an error has occured " + err);
      }
      // res.end();
    }
  );
});


// Setting a Port Number where the application will run on
app.listen(3000, () => {
	console.log('Server running on port 3000');
});
