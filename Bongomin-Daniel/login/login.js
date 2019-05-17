// declaring variable to modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

// creating a connection to db

var conncetion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodelogin'

});
// initializing the applicatio to use express
var app = express();
// let express know that am going to use some of its parkages

app.use(session({
    secret :'secret',
    resave : true,
    saveUninitialized:true

}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// displaying login.html page to the client
// login.html endpoint

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/login.html'));
});

// handling post request from the login form

app.post('/auth',function(req,res){
    // creating two variable that hold username and password
    var username = req.body.username;
    var password = req.body.password;
    // checking if the username and password exists
    if(username && password){
        var sql ='SELECT * FROM accounts WHERE username = ? AND password = ?';
        conncetion.query(sql,[username,password],function(error,results,fields){
            // checking if the two data are available in the database table accounts
            if(results.length > 0){
                req.session.loggedin = true;
                req.username.session = username;
                res.redirect('/home');
            }else{
                res.send('incorrect Credentials try again');
            }
            res.end();

        });
    }else{
        res.send('please enter username and password');
        res.end();
    }
});

app.get('/home',function(req,res){
    if(req.session.loggedin){
        res.send('welcome back ',+ req.session.username + '!');

    }else{
        res.send('please login to view this page');
    }
    res.end();
});
app.listen(3000);