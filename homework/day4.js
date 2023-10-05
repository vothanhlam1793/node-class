/*
    BAI TAP 12
    Input: 
    Process: In ra so nguyen to tu 1 -> 2000
    Output: none
*/

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

function bai_tap_12(){
    for(var i = 2; i <= 2000; i = i + 1){
        if(bai_tap_10(i)){
            console.log(i);
        } else {

        }
    }
    return;
}

// 2 - 4 6 8 10 12
// 3 - 6 9 12 ...
// 2 & 3 => 6
function bai_tap_13(n){
    for(var i = 2; i < 16; i ++){
        console.log(n * i);
    }
}

function bai_tap_14(n){
    if(n < 20){
        // True
        for(var i = 1000; i <= 1300; i = i + 1){
            if(chialaydu(i, n) == 0){
                console.log(i);
            } else {

            }
        }

    } else {
        // bao loi
        console.log("So phai be hon 20");
        return;
    }
}

function bai_tap_15(y){
    var col = '';
    for (var i = 0; i < y; i += 1) {
        col += '*'
        console.log(col) // no xuong dong
    }
}

function bai_tap_16(n){
    for(var i = 1; i <= n; i ++){

        var str1 = "";
        for(var j = 0; j < n-i; j++){
            str1 = str1 + " ";
        }
        // str = "   ";

        var str2 = "";
        for(var k = 0; k < (i * 2 - 1); k++){
            str2 = str2 + "*";
        }
        // str2 = "*"

        console.log(str1 + str2);
    }
}
function bai_tap_17(n){
    for(var i = 1; i <= n; i ++){

        var str1 = "";
        for(var j = 0; j < n-i; j++){
            str1 = str1 + " ";
        }
        // str = "   ";


        var str2 = "";
        for(var k = 0; k < i; k++){
            str2 = str2 + "*";
        }
        // str2 = "*"

        console.log(str1 + str2);
    }
}

bai_tap_17(5);