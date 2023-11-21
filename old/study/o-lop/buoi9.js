function add(x, y, cb){
    console.log(typeof cb);

    cb(); // function -> run
    
    return x + y;
}

function phepcong(){
    console.log("ADD");
}

function pheptru(){
    console.log("SUB");
}

// c = add(9,8, pheptru );

function ham1giay(){
    console.log("SAU 1 GIAU");
}


console.log("START");

// setTimeout(ham1giay, 1000);
// setTimeout(ham1giay, 3000);
console.log("END");

// setTimeout(, 60*1000*60);
var i = 0;
var iX = setInterval(function(){
    if(i > 10){
         i = 0;
         clearTimeout(tX);
    } else {
        // Van chay else 
    }
    console.log(i++);
    
}, 200);

var tX = setTimeout(function(){
    console.log("xoá hệ thống - 1 ");
    clearInterval(iX);
    clearTimeout(tY);
}, 1*1000);

function yy(){
    console.log("xoá hệ thống - 2");
    clearInterval(iX);  
}
var tY = setTimeout(yy, 5*1000);

clearTimeout(tX);

/*
0 ------- 1 ------ 2 ------- 3 -------- 4 -------- 5 ------
iX ------------------------------------------------ X
tX --------------- X
tY ------------------------------------------------ iX (X)

*/ 
