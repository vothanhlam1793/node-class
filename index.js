function f1(/* INPUT */){
    // PROCESS

  return 0; // OUTPUT
}

function bangnhau(x, y){
  // PROCESS

}

var i;

function inso(n){
  console.log(n);
}

function start(){
  i = 2;
}

function add(x,y){
  return x + y;
}

function action(){
  i = i + 1;
}

function condition(n, m){
  if(n < m){
    return true;
  } else {
    return false;
  }
}

for(start(); condition(i, 5); action()){
  inso(6);
}

// start() -> condition() [true] -> process() -> action() -> condition() [true] -> ... LOOP