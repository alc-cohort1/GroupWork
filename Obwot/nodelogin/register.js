var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
// connect to the database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});

//handling the post request from the HTML form
app.post('/login', (req,res)=>{

console.log("the name entered is" + req.body.name)
const name = req.body.name
const location = req.body.location
const password = req.body.password

// const querystring = "INSERT INTO `obwot`.`login`(`name`,`location`,`password` VALUES(?,?,?))"
const querystring = "INSERT INTO `login` (`name`, `location`, `password`) VALUES (?,?,?)";

hash=crypto.createHash('md5').update(password).digest('hex');
