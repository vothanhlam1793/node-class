var http = require("http");
var fs = require("fs");
var url = require("url");   
var PORT = 3000;

// REP:

var server = http.createServer(function(request, response){

    var q = url.parse(request.url, true);
    // console.log(q);
    // console.log("URL: " + request.url);


    var arrUrl = q.pathname.split(".");

    // console.log(arrUrl)


    var pathname = "";
    if((arrUrl[arrUrl.length - 1] == "html")){
        pathname = __dirname + "/views" + q.pathname;
    } else {
        pathname = __dirname + q.pathname;
    }

    
    fs.readFile(pathname, function(err, data){
        if(err){
            console.log("E: " + err);
            response.end(err.toString());
        } else {
            response.end(data);
        }
    });



});

// LISTEN
server.listen(PORT, function(){
    console.log("Server opening .... " + PORT);
});


if(a > b) {
    return a;
} else {
    return b;
}

var max = (a > b) ? a:b;