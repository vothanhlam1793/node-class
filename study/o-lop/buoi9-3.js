// De bai 9.1

var i = 0;
var tX;
var TIMEOUT = 10;

function b92(x){
    if(x % 2 == 0) {
        console.log(x * 2);
    } else {
        console.log(x);
    }
}

function c1(){
    var iX = setInterval(function(){
        b92(i); // console.log(i);
        i = i + 1;
        // neu i == 100 => dung
        if(i == 100){
            clearInterval(iX);
        }
    }, 10);
}

function in_so(){
    b92(i);
    i = i + 1;
    if(i == 100){
        clearTimeout(tX);
    } else {
        tX = setTimeout(in_so, TIMEOUT);
    }
}

function c2(){
    setTimeout(in_so, TIMEOUT);
}

function c3(){
    for(var j = 0; j < 100; j++){
        setTimeout(function(){
            b92(j);
        }, j * TIMEOUT);   
    }
}

