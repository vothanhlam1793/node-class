var fs = require('fs');

function appendFile(namefile,content){
  fs.appendFile(namefile,content, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}



for(var i = 0; i < 100; i++){
  appendFile('test/mynewfile' + i + '.txt',"COUNT: " + i);
}