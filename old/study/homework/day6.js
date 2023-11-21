function bai_tap_19(arr){
    // Sap xep chuoi so theo thu tu tu lon den be
    // Vi du: [6,5,3,9,3]
    // Ket qua: [9,6,5,3,3]

}

function bai_tap_20(arr){
    // Sap xep chuoi so theo thu tu tu be den lon
    // Vi du: [6,5,3,9,3]
    // Ket qua: [3, 3, 5, 6, 9]

}

function bai_tap_21(arr){
    // Loc cac so chan trong arr
    // Vi du: [6,5,3,8,9,3]
    // Ket qua: [6,8]
    var ret = []

    for(var i = 0; i < arr.length; i = i + 1){
        if(arr[i] % 2 == 0){
            ret.push(arr[i]);
        } else {

        }
    }
    return ret;
}

function bai_tap_22(arr){
    var ret = [];
    for(var i = 0; i < arr.length; i = i + 1){
        if(arr[i] % 2 != 0){
            ret.push(arr[i]);
        } else {

        }
    }
    return ret;
}

function bai_tap_23(arr){
    var ret = [];
    for(var i = 0; i < arr.length; i ++){
        if(typeof arr[i] == "number"){
            ret.push(arr[i]);
        } else {

        }
    }
    return ret;
}


function bai_tap_24(){
    for(var i = 1; i <=5; i++){
        var str = "";


        for(var j = 1; j <= 20; j++){
            str = str + " " + (j + (i-1)*20);
        }


        console.log(str);
    }
}


function bai_tap_25(n){
    for(var i = 1; i <= 20; i = i + 1){
        var str = ""; // Line => 

        // Process
        str = (n) + " x " + i + " = " + (n * i);

        console.log(str); // In Line
    }
}

function bai_tap_27(str){
    console.log("So ky tu: " + str.length);
    var sotu = 0;
    for(var i = 0; i < str.length; i ++){
        if(str[i] == " "){
            sotu = sotu + 1;
        } else {

        }
    }
    sotu = sotu + 1;
    console.log("So tu: " + sotu);
}

function bai_tap_28(str){
    var ret = "";
    for(var i = str.length - 1; i >= 0; i = i - 1){
        ret = ret + str[i];
    }
    return ret;
}

function bai_tap_29(x,y){
    var ret = 0;
    for(var i = x; i <= y; i++){
        ret = ret + i*i;
    }
    return ret;
}

function bai_tap_30(n){
    var total = 0;
    for(var i = 1; i < n; i++){
        if(n % i == 0){
            total = total + i;
        } else {

        }
    }
    // total = 28;
    if(total == n){
        return true;
    } else {
        return false;
    }
}

function bai_tap_31(n){
    for(var i = 1; i < n; i++){
        if(bai_tap_30(i)){
            // TRUE
            console.log(i);
        } else {
            // FLASE

        }
    }
}

function bai_tap_32(n){
    var ret = 0;
    for(var i = 1; i <= n; i ++){
        ret = ret + i * (i + 1);
    }
    return ret;
}

function bai_tap_33(arr){
    var ret = {
        tong: 0,
        tich: 1,
        trungbinh: 0
    }
    for(var i = 0; i < arr.length; i = i + 1){
        ret.tong = ret.tong + arr[i];
        ret.tich = ret.tich * arr[i];
    }

    ret.trungbinh = ret.tong/arr.length;

    return ret;
}

function maxArray(arr){
    var ret = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > ret){
            ret = arr[i];
        } else {

        }
    }
    return ret;
}

function minArray(arr){
    var ret = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < ret){
            ret = arr[i];
        } else {

        }
    }
    return ret;
}

function bai_tap_34(arr){
    return {
        max: maxArray(arr),
        min: minArray(arr)
    }
}

function bai_tap_34_1(arr){
    var ret = {
        min: arr[0],
        max: arr[0],
    };
    for(var i = 1; i < arr.length; i++){
        if(ret.min > arr[i]){
            ret.min = arr[i];
        } else {

        }

        if(ret.max < arr[i]){
            ret.max = arr[i];
        } else {

        }
    }

    return ret;
}


// SON
/* 
    INPUT: ARR, NUMBER
    OUTPUT: Tan suat xuat hien
*/
function timTrung(arr, a) {
    var count = 0
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] == a) {
            count += 1
        }
    }
    return count;
}

function bai_tap_35(arr) {
    var max = 0;
    var sotrung = 0;

    for (var i = 0; i < arr.length; i += 1) {
        c = timTrung(arr, arr[i]) // xuat hien bao nhieu lan
        // console.log(c)
        if (c > max) {
            max = c
            sotrung = arr[i]
        }
    }
    return { "So": sotrung, "Tan suat": max }
}

function so_nguyen_to(n){
    if(n <= 1){
        return false;
    }

    for(var i = 2; i < n; i++){
        if(n%i==0){
            return false;
        }
    }

    return true;
}

function bai_tap_37(arr){
    var ret = [];
    for(var i = 0; i < arr.length; i++){
        if(so_nguyen_to(arr[i])){
            ret.push(arr[i]);
        } else {

        }
    }
    return ret;
}

// [3,4,5,7]
// 2
// [1.50, 2.00, 2.50, 3.50];
// ceil
// floor
// round 
function bai_tap_38(arr, n){
    for(var i = 0; i < arr.length; i++){
        arr[i] = Math.round( arr[i]/n * 100 ) / 100;
    }
    return arr;
}


/*
[3,4,6,7,3,1,1,5] 1 ? => c = 2;

min = 1;
max = 7;
1,2,3,4,5,6,7
2,0,2,4,

[1,1,3,3,4,5,6,7]
*/

function bai_tap_20(arr){
    var min = minArray(arr);
    var max = maxArray(arr);
    var ret = [];
    
    for(var i = min; i <= max; i++){
        var c = timTrung(arr, i);

        for(var j = 0; j < c; j++){
            ret.push(i);
        }
    }

    return ret;
}


function bai_tap_19(arr){
    var min = minArray(arr);
    var max = maxArray(arr);
    var ret = [];
    
    for(var i = max; i >= min; i = i - 1){
        var c = timTrung(arr, i);

        for(var j = 0; j < c; j++){
            ret.push(i);
        }
    }

    return ret;
}

// SON
// [3,2,5,6,7] // 5
/*
i = 0
j = 1, 2, 3, 4
j = 1; nguyen
j = 2; [5, 2, 3, 6, 7]
j = 3; [6, 2, 3, 5, 7]
j = 4; [7, 2, 3, 5, 6] => MAX => Vi tri 0

i = 1;
j = 1; [7,3,2,5,6]
j = 2; [7,5,2,3,6]
j = 3; [7,6,2,3,5];
a[0] = 3
a[1], a[2], a[3], a[4]
*/
function bai_tap_19_1(a) {
    for (var i = 0; i < a.length; i += 1) {
        for (var j = i + 1; j < a.length; j += 1) {
            if (a[i] < a[j]) {
                temp = a[i] // Bien tam
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}


var arr1 = [3,4,6,7,3,1,1,5];
var arr2 = [3,4,"Hello","World",6,3,9,true,false];
// [3,4,6,3,9]

console.log(bai_tap_19(arr1));