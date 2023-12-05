const express = require('express');
const app = express();
var path = require('path');
const bodyParser = require('body-parser');

var fs = require("fs");


const port = 3000

// File
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    console.log("REQ: ", req.query);
    fs.readFile(__dirname + "/public/luutru.txt", function(e, d){
      var data = "";
      if(e){
        data = "ERR";
      } else {
        data = d;
      }

      res.render('index', {
          counter: parseInt(req.query.counter),
          name: req.query.name,
          data: data
      }); 
    })
});


app.post("/luutru", function(req, res){
  console.log(req.body);
  fs.writeFile(__dirname + "/public/luutru.txt", req.body.data, function(e){
    if(e){
      res.send("ERR: " + e);
    } else {
      res.send("OK");
    }
  })
});
app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})