var http = require('http');
var fs = require('fs');
var url = require('url');


function appendFile(namefile,content){
    fs.appendFile(namefile,content, function (err) {
        if (err) throw err;
            console.log('Saved!');
    });
}

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(req.url);

        // Ung dung appendFile
        appendFile('log/url_monitor.txt', req.url + "\n");
        
        var q = url.parse(req.url, true).query;

        if(q.name == "lam"){
            appendFile('log/url_lam.txt', req.url + "\n");
        }

        return res.end();
    });
}).listen(8080);