var support = require("../lib/support");

// =========================================================
/*
    BAI TAP 1
    INPUT   : Nhap vao n
    PROCESS : In so do ra 10 lan
    OUTPUT  : undefined
*/  
function bai_tap_1(n){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 2
    INPUT   : 
    PROCESS : In so do ra 1 -> 100
    OUTPUT  : 
*/  
function bai_tap_2(){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 3
    INPUT   : 
    PROCESS : In so do ra 100 -> 1
    OUTPUT  : 
*/  
function bai_tap_3(){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 4
    INPUT   : 
    PROCESS : In so do ra 1 -> 100 mà chia hết cho 3
    OUTPUT  : 
*/  
function bai_tap_4(){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 5
    INPUT   : 
    PROCESS : In so do ra 1 -> 100 mà chia hết cho 7
    OUTPUT  : 
*/  
function bai_tap_5(){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 6
    INPUT   : 
    PROCESS : Tính tổng của 1,2,3,4....5000
    OUTPUT  : 
*/  
function bai_tap_6(){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 7
    INPUT   : 
    PROCESS : Tính tổng của 5001,5002,...,10000
    OUTPUT  : 
*/  
function bai_tap_7(){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 8
    INPUT   : 
    PROCESS : Tính tổng của 30 số 5, 10, 15, 20, 25
    OUTPUT  : 
*/  
function bai_tap_8(){
    /* 
        PROCESS
    */

    
    return;
}

// =========================================================
/*
    BAI TAP 9
    INPUT   : Số n
    PROCESS : Tính giai thừa
    OUTPUT  : n!
*/  
function bai_tap_9(){
    var ret = 1;
    /* 
        PROCESS
    */
    
    return ret;
}

// =========================================================
/*
    BAI TAP 10
    INPUT   : Số n
    PROCESS : Kiểm tra số này phải số nguyên tố không?
    OUTPUT  : 
        * true  - số nguyên tố
        * false - không phải số nguyên tố
*/  

// 8, 2 => 0 | 7, 3 => 1
function chialaydu(n, m) {
    var ret = 0;
    for (var j = 0; j <= n; j = j + m) {
        ret = n - j;
    }
    return ret;
}


function bai_tap_10(n){
    var ret = true;
    /* 
        PROCESS:
            i: 1 -> n
            n / i === 0
    */
    for(var i = 2; i < n; i++){
        if(chialaydu(n, i) == 0){
            ret = false;
        }
    }

    return ret;
}

// =========================================================
/*
    BAI TAP 11
    INPUT   : Số n
    PROCESS : In ra n số fibnacci đầu tiên
    OUTPUT  : 
*/  
function bai_tap_11(n){
    /* 
        PROCESS
    */
    

}



console.log("CHECK: " + bai_tap_10(97));