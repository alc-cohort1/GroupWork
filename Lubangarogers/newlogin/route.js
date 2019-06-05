//requiring node js packages in express to perform different functions
const express = require('express')
const parser = require('body-parser')
const  mysql = require('mysql')
const app = express()

//middleware using some of the packages
app.use(parser.urlencoded({extended:false}))

app.use(express.static('./templates'))
//calling the getConnection method to create a connection using mysql package
const getConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'users'

})
//calling the post method to post data into the database
app.post('/userlogin',(req, res)=>{
    
    console.log('you are posting some formdata')
    console.log('the name entered is:' + req.body.username)
    const name = req.body.username
    const location = req.body.location
    const password = req.body.password
    //sql query sending data into a table in the database
    const querystring = "INSERT INTO `users`.`login` (`name`, `location`, `password`) VALUES (?,?,?)"
    getConnection.query(querystring, [name, location, password], (err,results,field)=>{
        if(err){
            console.log('an error occured' + err)
            
            return
        }

    })
});
//using the listen method to listen to port 4000
app.listen(4000,()=>{
    
    console.log('express server started at port 3000');
});