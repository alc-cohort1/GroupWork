const express = require('express')
const parser = require('body-parser')
const mysql = require('mysql')
const app = express()


app.use(parser.urlencoded({extended:false}))

app.use(express.static('./templates'))
//the get connection instance
const getConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'node'

})
//posting form data to the database using mysql //
app.post('/send',(req, res)=>{
    
    console.log('you are posting some formdata')
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const password = req.body.password
   
    const querystring = "INSERT INTO `node`.`login` (`first_name`, `last_name`, `password`) VALUES (?,?,?)"
    getConnection.query(
        querystring, [firstname,lastname,password], (err,results,field)=>{
        if(err){
            console.log('an error occured' + err)
            
            return
        }

    })
});


app.listen(3000,()=>{
    
    console.log('express server started at port 3000');
});