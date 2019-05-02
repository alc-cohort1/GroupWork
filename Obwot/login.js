//calling the package/module express
const express = require('express')
//assigning variable app to express 
const app= express()
//calling the body-parse module/packages
const parser = require('body-parser')
//calling the mysql module
const mysql = require('mysql')


app.use(express.static('./templates'))
//Middleware which select HTML elements, encode it to JS before submitting to the DB
app.use(parser.urlencoded({extended: false}))


const getConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'obwot',

}) 

//handling the post request from the HTML form
app.post('/login', (req,res)=>{

console.log("the name entered is" + req.body.name)
const name = req.body.name
const location = req.body.location
const password = req.body.password

// const querystring = "INSERT INTO `obwot`.`login`(`name`,`location`,`password` VALUES(?,?,?))"
const querystring = "INSERT INTO `login` (`name`, `location`, `password`) VALUES (?,?,?)";

getConnection.query(querystring,[name,location,password],(err, results, field)=>{

if (err) {
	console.log('an error has occured' +err)
	res.status(500)
	return
}

})
});

// //getting the data from the form
// console.log()

//Binding to a port
app.listen(3000,()=>{
console.log('Express server started at port 3000');
});