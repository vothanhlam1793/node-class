function btnPhepToan(pt){
    var pt1 = document.getElementById('inp1');
    var pt2 = document.getElementById('inp2');
    var a = parseInt(pt1.value);
var b = parseInt(pt2.value);
var ret = "";
if (pt == 1){
    ret = a+b;
}
if(pt ==2){
    ret = a-b;
}
if(pt ==3){
    ret = a*b;
}
if(pt==4){
    ret = a/b;
}
console.log(ret);
var kq = document.getElementById('kq');
kq.innerHTML = ret;
}
