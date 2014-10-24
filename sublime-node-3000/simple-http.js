var http=require("http").createServer();
var mysql=require("mysql");

http.get('/',function(req,res){
	res.end("Root");
   // res.sendFile('./index.html');
});

/*var server = http .createServer(function(req, res) {
if (req==='/') {
	res.writeHead(200);
	res.end("Root");
} */
//	get('/',function(req,res){
		
   // res.sendFile('./index.html');
//	});
 // res.writeHead(200);
 // res.end('Hello Http');
//});

http.listen(3000);