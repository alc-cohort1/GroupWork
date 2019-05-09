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


app.use(express.static('./nodelogin'))
//Middleware which select HTML elements, encode it to JS before submitting to the DB
app.use(parser.urlencoded({extended: false}))


const getConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'nodelogin',

}) 
//handling the post request from the HTML form
app.post('/login', (req,res)=>{

console.log("the name entered is: "+ req.body.username)

const uname = req.body.username
const email = req.body.email
const password = req.body.password

const querystring = "INSERT INTO accounts (`username`, `password`, `email`) VALUES(?,?,?)";

getConnection.query(querystring, [uname, email, password], (err, results, feild) => {
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