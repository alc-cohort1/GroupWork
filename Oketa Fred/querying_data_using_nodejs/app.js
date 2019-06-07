const express = require('express');
const mysql = require('mysql');
const app = express();

const exphbs = require('express-handlebars');

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Loading Boostrap CSS
app.use(express.static(__dirname + '/css'));

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'country'
});

app.get('/', function(req, res){
	connection.query('SELECT * FROM apps_countries', (err,rows) => {
  	if(err) throw err;
		// res.json(rows);
		res.render('index', { rows:rows })	
	});
})


app.listen(5000, function(){
	console.log('Server running on port 5000');
})