// let arr = ["Neeraj", "Rahul"];
// // arr.
// let obj = {
//   name: "Neeraj",
//   age: 26,
// };

// obj.name; // own property

// function abc() {}
// // abc.

// let arr = [1, 2, 3];
// console.log(arr.__proto__); // arr.__proto__ = Array.prototype
// console.log(Array.prototype);

// function func() {}

// console.log(Object.getPrototypeOf(arr));

const tail = { hasTail: true };
const pet = { legs: 4, __proto__: tail };
const cat = { sound: "Meow!!", __proto__: pet };

console.log(cat.hasTail); // true
