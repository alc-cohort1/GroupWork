//server.js
const express = require('express')
const app   = express()
const parser = require('body-parser')
const mysql = require ('mysql')


app.use(express.static('./templates'))

app.use(parser.urlencoded({extended: false}))
const getConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'registration_form'
})

app.post('/usercreate', (req, res)=>{
    
   console.log('You are posting some form data')

   console.log('user_id entered is:'+ req.body.userid) 
   console.log('password entered is:'+ req.body.pass) 
   console.log('Name entered is:'+ req.body.name) 
   console.log('Address entered is:'+ req.body.add) 
   console.log('Country entered is:'+ req.body.country) 
   console.log('zip_Code entered is:'+ req.body.zip) 
   console.log('Email entered is:'+ req.body.email) 
   console.log('Gender entered is:'+ req.body.gender) 
   console.log('language entered is:'+ req.body.lang) 
   console.log('About entered is:'+ req.body.about) 

   const user_id = req.body.userid
   const password = req.body.pass
   const Name = req.body.name
   const Address = req.body.add
   const Country = req.body.country
   const zip_code = req.body.zip
   const Email = req.body.email
   const Gender = req.body.gender
   const language = req.body.lang
   const About = req.body.about

    const querystring = "INSERT INTO `registration_form.user_detail` (`userid`, `pass`, `name`,`add`,`country`,`zip`,`email`,`gender`,`lang`,`about`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    getConnection.query(querystring, [user_id, password, Address,Country,zip_code,Email,Gender,language,About], (err, results, field)=>{
        if (err){
            console.log('an error occurred' + err);
            return
        }
    })

    
});

app.listen(3000,()=>{
    console.log('Express server started at port 3000');
});
