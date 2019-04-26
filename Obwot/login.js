//calling the package/module express
const express = require('express')
//assigning variable app to express 
const app= express()
//calling the body-parse module/packages
const parser = require('body-parser')


app.use(express.static('./templates'))
//Middleware which select HTML elements, encode it to JS before submitting to the DB
app.use(parser.urlencoded({extended: false}))



//handling the post request from the HTML form
app.post('/login', (req,res)=>{

console.log("the name entered is"+ req.body.name)
});

// //getting the data from the form
// console.log()

//Binding to a port
app.listen(3000,()=>{
console.log('Express server started at port 3000');
});