// Declaring the variable
var express = require('express');
var parser = require('body-parser');
var mysql = require('mysql');

//  initialising the application

var app = express();

//  directing the application to the templates directory for files to display

app.use(express.static('./templates'));
app.use(express.static('./templates/css'));
app.use(express.static('./templates/js'));

// middle ware that enables getting inputs from the input fields
app.use(parser.urlencoded({ extended: false }));

// creating database connection

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''

});

// incase of dbConnection error

dbConnection.connect(err => {
    if (err) {
        throw err;
    } else {
        console.log('connection to the database succeded')
    }
});

// end point (ROUTE) that post data to databse
app.post('toyota_app', (req, res) => {
    var customerId = req.body.customerId;
    var name = req.body.name;
    var state = req.body.state;
    var retailCustomer = req.body.retailCustomer;
    var ups = req.body.ups;
    var fixedExGround = req.body.fixedExGround;
    var usPostalAir = req.body.usPostalAir;
    var fedExAir = req.body.fedExAir;
    var partNumber = req.body.partNumber;
    var description = req.body.description;
    var price = req.body.price;
    var quantity = req.body.quantity;
    var sizeContainer_check_box = req.body.sizeContainer_check_box;
    var cost = req.body.cost;
    var salesTax = req.body.salesTax;
    var salesAndHanding = req.body.salesAndHanding;
    var total = req.body.total;

    var sql = "INSERT INTO t_cridentials(customerId,name,state,retailCustomer,ups,fixedExGround,usPostalAir,fedExAir,partNumber,description,price,quantity,sizeContainer_check_box,cost,salesTax,salesAndHanding,total) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    dbConnection.query(sql, [customerId, name, state, retailCustomer, ups, fixedExGround, usPostalAir, fedExAir, partNumber, description, price, quantity, sizeContainer_check_box, cost, salesTax, salesAndHanding, total],
        (err, result, field) => {
            console.log("an error has occured" + err);
            res.status(500);
            return;
        }
    );
});

// declaring a port on which to run the app
var PORT = process.env.PORT || 3001;

// Binding to the Port
app.listen(PORT, () => {
    console.log(`Toyota App server is running on port ${PORT}`);

});


