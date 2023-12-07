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

app.get("/ts2", function(req, res){
  fs.readFile(__dirname + "/public/luutru2.txt", function(e, d){
    var data = "";
    if(e){
      data = "ERR";
    } else {
      data = d;
    }
    var str = data.toString();
    var arr = str.split("\n");

    console.log(arr);

    res.render('ts2', {
        data: arr
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

app.post("/luutru2", function(req, res){
  console.log(req.body);
  fs.appendFile(__dirname + "/public/luutru2.txt", "\n" + req.body.data, function(e){
    if(e){
      res.send("ERR: " + e);
    } else {
      // res.send("OK");
      res.redirect("/ts2");
    }
  });
});

app.get("/xoa", function(req, res){
  // ?vitri=?

  // B1 - Doc file 
  // B2 - Chuyen thanh arr
  // B3 - Xoa du lieu o vi arr (vitri)
  // B4 - Save moi file writeFile
  // B5 - OK/ERR

  // res.send("Bam nut xoa: " + req.query.vitri);
  // Buoc 1
  fs.readFile(__dirname + "/public/luutru2.txt", function(err, data){
    if(err){
      res.send("ERR: " + err);
    } else {
      // Buoc 2
      var str = data.toString();
      var arr = str.split("\n");

      console.log("TRUOC", arr);
      arr.splice( req.query.vitri, 1);
      console.log("SAU", arr);

      var str2 = arr.join("\n");
      fs.writeFile(__dirname + "/public/luutru2.txt", str2, function(e){
        if(e){
          res.send("ERR: " + e);
        } else {
          res.redirect("/ts2");
        }
      })
    }
  });
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})