/*importing the different modules to be used to creat node server*/
var session = require('express-session');
crypto=require('crypto');
var path = require('path');
 const mysql=require('mysql');
 const form=require("express");
 const parser=require('body-parser')
 /*Data base connection*/
const Connection = mysql.createConnection({
	
	host:'localhost',
	user:'root',
	database:'toyota'
})
const baseUrl="http://localhost:3000"

const app=form();

app.use(form.static("./"));



//login and registration
//********************************************************
app.use(parser.urlencoded({extended:false}))
//This is used for routing to the registration page
app.get('/register', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});
/*getting the user registration details from the registration page*/
app.post('/regit',(req,res)=>{
	console.log("u are posting some data")
	console.log('Username '+req.body.username)
	console.log('password is '+req.body.password)
	console.log('Email '+req.body.email)


const Username=req.body.username
const Password=req.body.password
const Email=req.body.email
//encryting the password befor being saved inthe database
hash=crypto.createHash('md5').update(Password).digest('hex');
console.log(hash);


//saving the user registration detail into the database
const querystring="INSERT INTO accounts (`username`, `password`, `email`) VALUES(?,?,?)"
Connection.query(querystring,[Username,hash,Email],(err,result,field)=>{
	if(err){
		console.log('an error occured' +err)
		res.status(500)
		return
	}

	Connection.query(querystring,function(err,result){
		res.redirect(baseUrl);

	})
})

})


//log in code
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(parser.urlencoded({extended : true}));
app.use(parser.json());

//path for the login page
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;

	//encrypting the entered password
passwordEncrypted=crypto.createHash('md5').update(password).digest('hex');
console.log("login password"+passwordEncrypted);

	if (username && passwordEncrypted) {
		Connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, passwordEncrypted], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
/*file path for the home page when the session is true*/
app.get('/home', function(request, response){
	response.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back' + request.session.username + '!');
		
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
//********************************************************
app.use(form.static('./pages'));
app.get('/pages/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});


//middleware
app.use(parser.urlencoded({extended : true}));

/*Get the customer order details entered when the form is submitted*/
app.post('/toyotaPost',(req,res)=>{
	console.log("you are posting some data")
	console.log('id: '+req.body.customerId)
	console.log('Name:'+req.body.customerName)
	console.log('Town: '+req.body.town)
	
	console.log('shipping Company: '+req.body.shipping)

const customerRetail=req.body.customer

if(customerRetail==null){
var customerRetail1="Wholesale Customer"	;
}
else{
	var customerRetail1=" Retail Customer"	;
}

const oversizeContainer=req.body.oversize
if(oversizeContainer==="oversize"){
var oversizeContainer1="oversize"	;
}
else{
	var oversizeContainer1=" sizable"	;
}

console.log('Type of customer: '+customerRetail1)
console.log('Container: '+oversizeContainer1)


const CustId=req.body.customerId
const CustName=req.body.customerName
const Town=req.body.town

const shippingCompany=req.body.shipping
const partNumber=req.body.partNo
const Description=req.body.desc
const Price=req.body.price
const Quantity=req.body.quantity

/*inserting the order details into the database*/
const querystring="INSERT INTO customer (`customerid`, `customername`, `town`,`customertype`, `shippingcompany`, `partnumber`,`description`, `price`, `quantity`,`container`) VALUES(?,?,?,?,?,?,?,?,?,?)"
Connection.query(querystring,[CustId,CustName,Town,customerRetail1,shippingCompany,partNumber,Description,Price,Quantity,oversizeContainer1],(err,result,field)=>{
	if(err){
		console.log('an error occured' +err)
		res.status(500)
		return
	}
	Connection.query(querystring,function(err,result){
		//res.redirect(baseUrl);
		res.end;
	})

})

})
//Binding to a port
app.listen(3000, ()=>{
	console.log(' server started at port 3000');
});