/*
1 2 3 4 5
6 7 8 9 10
11 12 13 ...
*/

// console.log("1 2 3 4 5");
// chuoi + chuoi
function c1() {
  for (var a = 1; a < 1000; ) {
    var str = a + " " + (a + 1) + " " + (a + 2) + " " + (a + 3) + " " + (a + 4);
    console.log(str);
    a = a + 5;
  }
}
function in5so(batdau, ketthuc) {
  var str = "";
  for (var a = batdau; a < batdau + ketthuc; a = a + 1) {
    str = str + a + " ";
  }
  console.log(str);
}
function c2() {
    for(var a = 1; a < 1000; a = a + 5){
        in5so(a, 5);
    }
}

c2();
// m x n
// m x 5
