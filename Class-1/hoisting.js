// Hoisting in js is a phenomenon by which we can access the variables and functions
// before we initialize it.
// Js only hoist declarations not initialization

// var x = 10;
// console.log(x);
// function foo() {
//   console.log("Hello, I'm foo!");
// }
// foo();

// console.log(x);
// var x = 10;
// console.log(x);
// foo();
// function foo() {
//   console.log("Hello, I'm foo!");
// }

// // post hoisting

// function foo() {
//   console.log("Hello, I'm foo!");
// }
// var x;
// console.log(x);
// x = 10;
// console.log(x);
// foo();

// var a = 123;
// var b = "abc";
// function fn() {
//   var c = 456;
// }

// // post hoisting

// function fn() {
//   // function statement / declaration
//   var c;
//   c = 456;
// }
// var a;
// var b;
// a = 123;
// b = "abc";

// var, let and const
// a = 20;
// var b = 30;
// let c = 40;
// c = 60;
// const d = 50;
// d = 90;

// hoisting
// variables defined with var keyword hoisted at the top while let and const
// present in temporal dead zone

// console.log(x);
// console.log(y);
// var x = 5;
// let y = 6;

// undefined vs not defined
// console.log(a);
// var a = 7;
// console.log(x);

// O/P
