//calling the package/module express
const express = require('express')
//assigning variable app to express 
const app= express()
//calling the body-parse module/packages
const parser = require('body-parser')
const mysql = require('mysql')


app.use(express.static('./templates'))
//Middleware which select HTML elements, encode it to JS before submitting to the DB
app.use(parser.urlencoded({extended: false}))


const getConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'sample_db',

}) 
//handling the post request from the HTML form
app.post('/Sample', (req,res)=>{

console.log("the name entered is "+ req.body.name)

const user_id = req.body.user_id
const password = req.body.password
const name = req.body.name
const address = req.body.address
const country = req.body.country
const zip_code = req.body.zip
const email = req.body.email
const sex = req.body.sex
//const lang = req.body.lang
const about = req.body.about

const querystring = "INSERT INTO form_table (`user_id`, `password`, `name`, `address`, `country`, `zip_code`, `email`, `sex`, `about`) VALUES(?,?,?,?,?,?,?,?,?)";

getConnection.query(querystring, [user_id, password, name, address, country, zip_code, email, sex, about], (err, results, feild) => {
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