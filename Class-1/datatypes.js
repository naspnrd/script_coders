// primitive datatypes

// var num = 10;
// var str = "Hello";
// var bool = true;
// var n = null;
// var u = undefined;
// var sym = Symbol();
// var bigIntVal = BigInt(9007199254740991);

// var str = "Neerah"; // primitive Data types, it's immutable
// //         012345
// console.log(str[1]);
// // str[5] = "j";
// str = "Neeraj";
// console.log(str);
// console.log(typeof str);
// console.log(typeof 0);
// console.log(typeof 1n);
// console.log(typeof undefined);
// console.log(typeof null); // null means nothing

//Truthy/Falsy Concept

// There are six falsy Values in JS
// 1. false -> boolean false
// 2. 0 -> number zero
// 3. "" -> empty string
// 4. Null
// 5. undefined
var x;
// if (x === undefined) {
//   console.log("This will be executed");
// }
// 6. NaN(Not a Number)
if (isNaN("Hello")) {
  console.log("This will be executed");
}
if (isNaN(2)) {
  console.log("This will be executed");
} else {
  console.log("else executed");
}
// Truthy Valiues
// 1. Any non-empty string
// 2. Any non-zero number
// 3. Objects
