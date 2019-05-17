// server.js
const express = require ('express'),
      parser = require('body-parser'),
      mysql = require('mysql'),
      app = express();

// Basic routes
app.use(express.static('./templates'))

// Middleware as functionality that can be extended and modified
app.use(parser.urlencoded({extended: false}))

// Connecting to the database
const getConnection = mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        database: 'students',
    
})

app.post('/my_form', (req, res)=>{
    // console.log("u are posting some form data");
    console.log('the name entered is:' + req.body.user_id)

    // Variables created for querrying to the database
    const userId = req.body.user_id
    const password = req.body.password
    const name = req.body.name
    const address = req.body.address
    const country = req.body.country
    const zipcode = req.body.num
    const email = req.body.email
    const gender = req.body.gender
    const language = req.body.english


    const querystring = "INSERT INTO registration (userid, password, name, address, country, zipcode, email, gender, language) VALUES (?,?,?,?,?,?,?,?,?)";

    getConnection.query(querystring, [userId, password, name, address, country, zipcode, email, gender, language], (err, results, field)=>{
        if (err) {
            console.log('an error occured' + err)
            res.status(500)
            return
        }
    })
})



// Binding to a port
app.listen(3000, ()=>{
    console.log('Express server started at port 3000');
});
