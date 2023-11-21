// VARIABLE

/*
    var - số
    var - chuỗi
    var - boolean
    var - array
    var - object

    type of
*/

// CONDITION / LOOP

/*
    if (condition) {
        // TRUE


    } else {
        // FALSE 


    }


    for ( START ; CONDITION ; ACTION ){
        // PROCESS
    }

    CONDITION -> (true / false)

    // Neu khong co return thi tra ve undefined
    function name_function(param1, param2, param3){
        var ret;



        return ret;
    }
*/

/* 
    setInterval
    clearInterval

    setTimeout
    clearTimeout

    callback -> truyen 1 cai ham va chung ta doi no chay

    EVENT
    - emit -> cai dat san mot gia tri
    - on -> gan 1 gia tri

*/
var count = 0;
function hello(){
    count = count + 1;
    var demso = document.getElementById("demso");
    demso.innerHTML = count;
}

var statelock = "STOP";
var timer;
var solandung = 0;
function tudong(){
    if(statelock == "STOP"){

        timer = setInterval(hello, 100); // CALLBACK -> xem lai bai callback

        var btnAuto = document.getElementById("btnAuto");
        btnAuto.innerHTML = "Tam dung";

        statelock = "RUNNING";

    } else {
        
        clearInterval(timer);
        statelock = "STOP";

        var btnAuto = document.getElementById("btnAuto");
        btnAuto.innerHTML = "Chay";

        solandung = solandung + 1;
        var p = document.getElementById("result");
        p.innerHTML = p.innerHTML + "<br> Dừng lần " + solandung + ": " + count;
    }
}