const express = require('express');
const app = express();
var path = require('path');


const port = 3000

// File
app.use(express.static('public'))

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    console.log("REQ: ", req.query);

    res.render('index', {
        counter: parseInt(req.query.counter),
        name: req.query.name
    }); 
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})