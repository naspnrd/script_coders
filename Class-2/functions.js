// Function Declaration, Function Expression, Anonymous Func,
// Diff Between Parameters and arguments, First class Functions/Citizens
// arrow functions, IIFE

// HW: pure and impure Functions, Once Functions(currying)

// Function Statement/Declaration and Function Expression

// function statement
// Hoisting at the top
// function abc() {
//   console.log("I'm Function Statement/Declaration");
// }

// // function Expression
// // are not get's hoisted
// var funcExp = function () {
//   console.log("I'm Function Expression");
// };

// Example

// abc();
// // console.log(funcExp); // undefined
// funcExp(); // throw an error
// function abc() {
//   console.log("I'm Function Statement/Declaration");
// }

// var funcExp = function () {
//   console.log("I'm Function Expression");
// };
// let funcExp = function () {
//   console.log("I'm Function Expression");
// };

// funcExp();

// Anonymous Function
// a function without a name is anonymous function
// Anonymous functions are used in a place where functions are used as values

// var funcExp = function () {
//   console.log("I'm Function Expression");
// };

// Named Function Expression

// var funcExp = function namedFuncExpression() {
//   console.log("I'm Function Expression", namedFuncExpression);
// };

// funcExp();
// In this, namedFuncExpression has not created/ no memory is given to it in Global Scope
// but created local variabl
// namedFuncExpression();

// Arrow functions
// introduced in the ES6(2015) version of JS to offer a new syntax for writing functions
// => (Token)(fat arrow)
// An arrow function expression is an anonymous function expression written
// with the fat arrow

// function sum(a, b) {
//   return a + b;
// }

// var sum = (a, b) => {
//   return a + b;
// };

// var sum = (a, b) => a + b;

// console.log(sum(1, 2));

// IIFE (Immeditately Invoked Function Expression)
// An IIFE is a way to execute func immediately, as soon as they are created
// IIFEs are very useful bcz they don't pollute the global obj, and they are a simple
// way to isolate variable declaration

// Global Object => window
// var or without var, let and const -> attaches to window object
// var name = "";

(function () {
  var name = "Neeraj";
  console.log(name); // Neeraj
})();
// after 100s of line
console.log(name); // ""
