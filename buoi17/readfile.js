var fs = require("fs");

fs.readFile("file/index.html", function(err, data){
    if(err){
        console.log("E: " + err);
    } else {
        console.log(data.toString());
    }
});