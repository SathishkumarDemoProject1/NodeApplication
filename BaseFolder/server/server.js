var http = require('http');
var name = require('./../model/model.js');
var fileSys = require('fs');
var event = require('events');
'use strict';
console.log(__dirname);
console.log(__filename);
console.log(process.pid);
fileSys.unlink("textWrite.txt",function(){});
var readStream = fileSys.createReadStream("text.txt","utf8");
var writeStream = fileSys.createWriteStream("textstream.txt");
//readStream.on('data',function(chunk){
//	writeStream.write(chunk);
//});
//readStream.on('end',function(chunk){
//	writeStream.write("TK  TK  TK  TK  TK  TK  TK  TK  TK  TK  TK  TK  TK  ")
//});
readStream.pipe(writeStream);
let serverConfig = function(req,res){
	console.log("serverConfig started");
//	var data = fileSys.readFileSync("text.txt",'utf8');
//	res.end(data)
	var data = fileSys.readFile("text.txt",function(err,data){
		if (err)
		return console.error(err);
		res.end(data);
	});
	var data = fileSys.readFileSync("text.txt");
		fileSys.writeFileSync("textWrite.txt",data);
		readStream = fileSys.createReadStream("./../view/welcome.html","utf8");
	res.writeHead(200,{
		  'content-type': 'text/html',
		  'connection': 'keep-alive',
		  'host': 'mysite.com',
		  'accept': '*/*' 
			  });
	readStream.pipe(res);
	res.write('Lets Started'+req.url);
	console.log("serverConfig ended");
};
http.createServer(serverConfig).listen(3000);

var dns = require('dns');
dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('address:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }
      console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
   });  
});