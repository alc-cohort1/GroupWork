// server.js
const express = require ('express'),
      parser = require('body-parser'),
      mysql = require('mysql'),
      app = express();
	  crypto = require('crypto');

// Basic routes
app.use(express.static('./templates'))

// Middleware as functionality that can be extended and modified
app.use(parser.urlencoded({extended: false}))

// Connecting to the database
const getConnection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        database: 'students',
    
})

app.post('/user_create', (req, res)=>{
    // console.log("u are posting some form data");
    console.log('the name entered is:' + req.body.firstName)

    // Variables created for querrying to the database
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password
	const hash = crypto.createHash('md5').update(password).digest('hex');

    const querystring = "INSERT INTO students_details (firstname, lastname, password) VALUES (?,?,?)";

    getConnection.query(querystring, [firstName, lastName, hash], (err, results, field)=>{
        if (err) {
            console.log('an error occured' + err)
            res.status(500)
            return
        }
    })
})



// Binding to a port
app.listen(3000, ()=>{
    console.log('Express server started at port 3000');
});
