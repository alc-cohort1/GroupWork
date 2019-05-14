//server.js
const express = require('express');
const parser = require('body-parser');
const mysql = require('mysql');
const app = express();
const crypto = require('crypto');

//Basic route
app.use(express.static('./templates')) 

//middleware
app.use(parser.urlencoded({extended: false}))

//connecting to the database
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'school',
        password: '123@#Beat'

})

app.post('/user_login', (req, res)=>{
    //console.log("You are posting some data")
    console.log('Your name is:' + req.body.username)

    const name = req.body.username
    const location = req.body.location
    const password = req.body.password
    hash = crypto.createHash('md5').update(password).digest('hex');

    const querystring = "INSERT INTO student_details (name, location, password) VALUES (?,?,?)";

    connection.query(
        querystring, [name, location, hash], (err, results, field)=>{
            if (err) {
                console.log('An error occured' + err)
                res.status(500)
                return
            }
        
    })
})

//Binding to a port
app.listen(5000, ()=>{
    console.log('Express server started at port 5000');
});

