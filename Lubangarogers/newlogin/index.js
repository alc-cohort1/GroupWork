   //initializing the required packages needed for node js to interprete  templates
   const express = require('express')
    const parser = require('body-parser')
    const mysql = require('mysql')
    const app = express()
//middleware where the required packages are put to use
app.use(parser.urlencoded({extended:false}))

app.use(express.static('./templates'))
//the get connection instance
const getConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'loginSystem'

})
//posting form data to the database
app.post('/submit',(req, res)=>{
    
    console.log('you are posting some formdata')
    console.log('the name entered is:' + req.body.id)
    const user_name = req.body.user_name
    const email = req.body.email
    const password = req.body.password
  

    const querystring = "INSERT INTO `loginSystem`.`users` (`user_name`, `email`, `password`) VALUES (?,?,?)"
    getConnection.query(
        querystring, [user_name, email, password], (err,results,field)=>{
        if(err){
            console.log('an error occured' + err)
            
            return
        }

    })
});


app.listen(3000,()=>{
    
    console.log('express server started at port 3000');
});



