var http = require("http");
var fs = require("fs");
var url = require('url');

// REP:
var server = http.createServer(function(request, response){
    // request => url
    // console.log("URL: " + request.url);    

    var q = url.parse(request.url, true);
    // /index.html
    // "dir_file" + "/index.html" => "dir_file/index.html"

    fs.readFile("dir_file" + q.pathname, function(err, data){
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

/*
    HTTP - PROCESSS
    B1 - Client  -> (request)
    B2 - Server (req) -> Processs
    B3 - Server -> (response):
        * write("Hello");
        * end("") => Client xxxx Server
    

    METHODS:
    * GET
    * POST
    * PUT
    * PATCH
    * DELETE
    
    URL
*/