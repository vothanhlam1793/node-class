var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){

    fs.readFile("file/index.html", function(err, data){
        if(err){
            res.end("Đọc fule thất bại rồi");
        } else {
            res.end(data.toString());
        }
    });
    
});

server.listen(8000, function(){
    console.log("Da mo 8000");
});