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



obj = {
    name: "",
    age: "",
    address: "",
}

// Co so du lieu co cau truc SQL => Define 
// mysql -> table (name, age)
// table -> (name, age, address) => khong chay / loi
// table_meta -> (idHocsinh, key, value); (idhs, sex, nam);
// 

// Khong cau truc -> nonSQL
// mongodb -> document (obj)