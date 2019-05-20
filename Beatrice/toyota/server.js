const express = require('express');
const parser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
var session = require('express-session');

//connecting to the database
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'toyota',
        password: '123@#Beat'

})

// creatiing express function that stores a session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(parser.urlencoded({extended : true}));
app.use(parser.json());

// Creating a route that links to the login page
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});
/*
Function that captures data from the customer form and posts it to the database 
*/
app.post('/order', function(request, response) {
	var customer_id = request.body.customer_id;
    var customer_name = request.body.customer_name;
    var state = request.body.state;
    var retailcustomer = request.body.retailcustomer;
    var shipping = request.body.shipping;
    var part_no = request.body.partno;
    var description = request.body.description;
    var price = request.body.price;
    var quantity = request.body.quantity;
    var oversizecontainer = request.body.oversizecontainer;

    const querystring = "INSERT INTO orders (customer_ID, name, town, retail_customers, shipping, part_no, description, partprice, quantity, oversize_container) VALUES (?,?,?,?,?,?,?,?,?,?)";

    connection.query(
        querystring, [customer_id, customer_name, state, retailcustomer, shipping, part_no, description, price, quantity, oversizecontainer], (err, results, field)=>{
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


//Binding to a port
app.listen(5000, ()=>{
    console.log('Express server started at port 5000');
});