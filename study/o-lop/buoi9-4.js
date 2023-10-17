// Source code nguoi ta cung cap

var events = require('events'); // Thu vien
var eventEmitter = new events.EventEmitter();

setInterval(function(){
    eventEmitter.emit('onclick');
}, 100);

// SOURCE -|

var i = 0;
eventEmitter.on('onclick', function(){
    if(i>=100){
        
    } else {
        console.log(i);
        i = i + 1;
    }
});

eventEmitter.on('onclick', function(){
    console.log("Xin chao");
});

eventEmitter.on('onclick', function(){
    console.log("Xin chao 2");
});

eventEmitter.on('onclick', function(){
    console.log("Xin chao 3");
});
