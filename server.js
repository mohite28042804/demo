var express = require('express');  
var bodyParser = require('body-parser');  
var multer = require('multer');
var upload = multer();
var cors = require('cors');  
var app = express();
var path = require("path");   
var mysql_query = require('./db_connection.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist/mean-stack')));
app.use('*', express.static(path.join(__dirname, 'dist/mean-stack')));

// app.post('/decodeFormData', function (req, res) { 

// });

app.post('/adminLogin', function (req, res) {
	console.log(req.body.password)
	var sql = "select * from users";
	mysql_query.query(sql,function (err, result, fields) { 
		if (err) throw err;		
	});
	res.send({
		status: true,
		message: 'Admin Login Successfully'
	});
})



app.post('/adminLogin', function (req, res) {
	var post_data =  "";
	req.on('data', (data) => {
		post_data = data.toString();
		
	});
	// req.on('end', function () {
 //        post_data = JSON.parse(post_data);
 //    });

    console.log('....................');
	    console.log(post_data);
	    console.log('....................');

	// console.log('....................');
	// console.log(req.body.email);
	// console.log('....................');
	// console.log(req.body.password);
	// console.log('....................');
	//var sql = "select * from admin_user_rewamp where email = ? and password = ?";
	var sql = "select * from users";
	//console.log(res);console.log(req.body.password);
	mysql_query.query(sql,function (err, result, fields) { 
		if (err) throw err;
		//console.log(result);
	});
	res.send({
		status: true,
		message: 'Admin Login Successfully'
	});
})


app.listen(8080, function () {      
 console.log('Example app listening on port 8080!')  
}) 	

