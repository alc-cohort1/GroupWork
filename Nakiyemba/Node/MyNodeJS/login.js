//server.js
const express = require('express')
const app   = express()
const parser = require('body-parser')
const mysql = require ('mysql')


app.use(express.static('./Templates'))

app.use(parser.urlencoded({extended: false}))
const getConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'first_form'
})




app.post('/usercreate', (req, res)=>{
    
   console.log('You are posting some form data')

   console.log('the name entered is:'+ req.body.name) 
   console.log('the location entered is:'+ req.body.loc) 
   console.log('the password entered is:'+ req.body.pass) 

   const name = req.body.name
    const location = req.body.loc
    const password = req.body.pass

    const querystring = "INSERT INTO `student_form` (`Name`, `Location`, `Password`) VALUES (?,?,?)";

    getConnection.query(querystring, [name, location, password], (err, results, field)=>{
        if (err){
            console.log('an error occurred' + err);
            return
        }
    })

    
});

app.listen(3001,()=>{
    console.log('Express server started at port 3000');
});

// a package called body-parser is required to screen out elements in hmtl
// line 7 is a middleware





























