// scope
// scope chain
// Lexical Env/Scope

// Scope
// where you can access a specific variables, funcs and objects
// in the code

// function f() {
//   console.log("print a ---", a);
// }

// var a = 10;
// f();

// function f() {
//   function z() {
//     console.log("print a ---", a);
//   }
//   z();
// }

// var a = 10;
// f();

// Types of scope

// Global Scope
// Variables declared outside of any function or block have global scope(window)
// console.log(window);
// var a = 10; // global scope
// b = 20; // global scope
// Local/Function Scope
// variables declared inside a function have local scope
// function foo() {
//   var localVariable = 10; // local Scope
//   console.log(localVariable);
//   {
//     let w = 20; // local scope
//   }
//   let w = 20; // local scope
//   {
//     var y = 20; // local / function scope
//   }
//   console.log(y); // accessible
// }
// foo();
// console.log(localVariable); // through error

// Block Scope
// variables declared with let and const inside a block have block scope
// {
//   let blockedScopeVaraible = 20;
// }
// console.log(blockedScopeVaraible); // not accessible

// Script Scope

// variables declared with let and const outside a block or function have script scope
// let x = 10; // script scope

// var e = 9;
// e = 10;
// console.log("e---", e);

var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// O/P
// 10
// 100
// 1

// var y = 10;
// y = 15;
// console.log(y) // 15
