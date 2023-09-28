var a = 9; // 8, 10, 81
var b = "Hello World"
var bol = true; // false

var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = ["hello", "hello1", "lam", "vo"];
var arr3 = [1, 2, "hello", "world"];

function add(n, m){
    return n + m;
}

add(5,6);

var arr4 = [  5, 6, 4, 3, 10, 32, 1000]; // 
// 0, 1, 2, 3, 4
// Chieu dai: arr4.length = 5;
// arr4[0], arr4[4] => arr[index];

/*
    FOR:
        Bắt đầu? vị trí đầu tiên của Array
        Điều kiện => Kết thúc => Tại vị trí cuối cùng của Array
        Xử lý => Cộng giá trị của Array sau mỗi vòng lặp
        Kế tiếp => i++ // i = i + 1;
*/

function addArray(arr){
    var ret = 0;

    for(var i = 0; i < arr.length; i = i + 1){
        ret = ret + arr[i];
    }


    return ret;
}

function maxArray(arr){
    var ret = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(ret < arr[i]){
            ret = arr[i];
        } else {
            //
        }
    }
    // Voi ret la so lon nhat trong Array
    return ret;
}

// ARRAY
var arr5 = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];

function printArray(arr){

}
printArray(arr5);
// hello world
