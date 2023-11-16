var http = require("http");
var fs = require("fs");

// REP:
var server = http.createServer(function(request, response){
    fs.readFile("views/index.html", function(err, data){
        if(err){
            console.log("E: " + err);
            response.end(err.toString());
        } else {
            response.end(data);
        }
    });
});


// LISTEN
server.listen(8000, function(){
    console.log("Server opening .... 8000");
});
