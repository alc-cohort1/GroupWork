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
    database:'node'

})
//posting form data to the database
app.post('/submit',(req, res)=>{
    
    console.log('you are posting some formdata')
    console.log('the name entered is:' + req.body.id)
    const user_id = req.body.user_id
    const password = req.body.password
    const name = req.body.name
    const address = req.body.address
    const country = req.body.country
    const zipcode = req.body.zipcode
    const email = req.body.email
    const female = req.body.female
    const male = req.body.male
    const english = req.body.english
    const about = req.body.about

    const querystring = "INSERT INTO `node`.`signup` (`user_id`, `password`, `name`, `address`, `country`, `zipcode`, `email`, `female`, `male`, `english`, `about`) VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    getConnection.query(
        querystring, [user_id, password, name, address, country, zipcode, email, female, male, english, about], (err,results,field)=>{
        if(err){
            console.log('an error occured' + err)
            
            return
        }

    })
});


app.listen(3000,()=>{
    
    console.log('express server started at port 3000');
});



