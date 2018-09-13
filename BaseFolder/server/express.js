var express = require("express");
var app = express();
//get
//post
//put
//delete
app.listen(3000,function(){})
app.get('/',function(req,res){
	res.writeHead(200,{
		  'content-type': 'text/html'});
	res.write("Hello");
	res.end();
})

app.get('/A/:year',function(req,res){
//	res.writeHead(200,{
//		  'content-type': 'text/html'});
	var name =  __dirname;
	console.log(name);
	name=name.replace('server','')+"view/welcome.html";
	res.sendFile(name);
})

app.get('/b/:year',function(req,res){
//	res.writeHead(200,{
//		  'content-type': 'text/html'});
	res.send('hello sathishkumar');
	var name =  __dirname;
	console.log(name);
	name=name.replace('server','')+"view/welcome.html";
	res.sendFile(name);
})