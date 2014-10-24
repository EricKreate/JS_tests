var express     =     require("express");
var mysql       =     require("mysql");
var app         =     express();
/*
 * Configure MySQL parameters.
 */
var connection  =     mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1123Aa!!",
    database : "information_schema"
});

/*Connecting to Database*/

connection.connect(function(error){
    if(error)
    {
        console.log("Problem with MySQL"+error);
    }
    else
    {
        console.log("Connected with Database");
    }
});

//app.use(express.static(__dirname + '/angular'));

app.get('/',function(req,res){
	res.end("Root");
   // res.sendFile('./index.html');
});

app.get('/load/',function(req,res){
    connection.query("SELECT SCHEMA_NAME from `SCHEMATA`",function(err,rows){
        if(err)
        {
            console.log("Problem with MySQL"+err);
        }
        else
        {
        	res.write("id:"+req.query.id);
        	res.end(JSON.stringify(rows));
        }
    });
});

/*Start the Server*/

app.listen(3000,function(){
    console.log("It's Started on PORT 3000");
});