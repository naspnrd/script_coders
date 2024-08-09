var a = 10;
var b = 20;
// var c;
// c = 30;
function double(num) {
  var ans = num * 2; // doubling
  return ans;
}

var double1 = double(a); // 20
var double2 = double(b); // 40

// Q. what is javascript's smallest program?
// Empty file => abc.js
// Callstack will be created, GEC(Global Exectution Context) will be pushed to callstack
