//calling the package/module express
const express = require('express')
//assigning variable app to express 
const app= express()
//calling the body-parse module/packages
const parser = require('body-parser')
//calling mysql to be used in the js fie.
const mysql = require('mysql')
//calling the class that shall be used to encrypt the strings.
const crypto = require ('crypto');


app.use(express.static('./templates'))
//Middleware which select HTML elements, encode it to JS before submitting to the DB
app.use(parser.urlencoded({extended: false}))


const getConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'sample_db',

}) 
//handling the post request from the HTML form
app.post('/login', (req,res)=>{

console.log("the name entered is"+ req.body.fname)

const fname = req.body.fname
const lname = req.body.lname
const password = req.body.password

hash = crypto.createHash('md5').update(password).digest('hex');

const querystring = "INSERT INTO user_details (`fname`, `lname`, `password`) VALUES(?,?,?)";

getConnection.query(querystring, [fname, lname, hash], (err, results, feild) => {
	if(err){
		console.log('An error has occured ' +err);
		res.status(500);
		return;
	}
})
});

// //getting the data from the form
// console.log()

//Binding to a port
app.listen(3000,()=>{
console.log('Express server started at port 3000');
});