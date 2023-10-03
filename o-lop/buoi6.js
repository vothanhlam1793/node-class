var a = 9; // 8, 10, 81
var b = "Hello World"
var bol = true; // false

// Mảng => Mảng số
var arr1 = [1, 2, 3, 4, 5, 6];
// INDEX
// arr1.length

// Mảng chuỗi
var arr2 = ["hello", "hello1", "lam", "vo"];

// Mảng phối hợp
var arr3 = [1, 2, "hello", "world"];

// 
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

// add(3,4);
// var arr11 = [3,4,5,6,7, 10, 9];
// console.log("Tong: " + addArray(arr11));



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
    var str = "";
    for(var i = 0; i < arr.length; i++){
        str = str + arr[i];
    }
    console.log(str);
}
// printArray(arr5);
// hello world
 
var arr6 = ["Võ Thanh Lâm", "40 Bảy Hiền", "0362697197"];
// Vi tri

// OBJECT
var hocsinh = {
    name: "Võ Thanh Lâm", // item -> KEY: VALUE
    address: "40 Bảy Hiền",
    phone: "0362697197",
    email: "vothanhlam1793@gmail.com",
    arr: ["he", "lo"],
    obj: {
        age: 18,
        arr: [],
        obj: {
            obj: {
                obj: {
                    arr: [{
                        obj: {
                            age: 18
                        }
                    }]
                }
            }
        }
    }
};

// // OOP
// var cat = {
//     name: "My My",
//     age: 4,
//     weight: 7
// }

// var mun = {
//     attribute: cat,
//     color: "black"
// }

// var batu = {
//     attribute: cat,
//     color: "white"
// }

// // console.log(mun.attribute.name);

// // FUNCTION => CHỈ CẤP Ô NHỚ CHO FUNCTION
// function Animal(){
//     this.name ="";
//     this.age = "";
// }

// var animal = new Animal();
// console.log(animal.name);


var arr7 = [1,2,3,4];
var arr8 = [];

arr7[2] = 5;
// arr8 = [9]
arr8[0] = 9;
arr8.push(0);
arr8.push(10);
arr8.pop(7);


// TYPEOF
var arr9 = [1,2,"d",3,"b",6,7,8];
// [1,2,3,6,7,8]

function filterString(arr){
    var ret = [];
    var ret2 = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'number'){
            ret.push(arr[i]);
        } else {
            ret2.push(arr[i]);
        }
    }
    var obj = {
        ret: ret,
        ret2: ret2
    }
    return obj;
}

console.log(filterString(arr9))