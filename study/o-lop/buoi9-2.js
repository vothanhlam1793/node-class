// EMIT - ON
// EVENT

var events = require('events'); // Thu vien

var eventEmitter = new events.EventEmitter();

var i = 0;
function helloworld(){
    console.log("Hello World " + (i++));
    eventEmitter.emit("lam");
}
function black(){
    console.log("BLACK");
    if(i > 20){
        clearInterval(iX);
    }
}

eventEmitter.on('hello', helloworld);

eventEmitter.on('lam', black);

var iX = setInterval(function(){
    // eventEmitter.emit("hello");
    helloworld();
    // eventEmitter.emit("lam");
}, 200);
