// Arrays
// A DS for storing a collection of multiple items under a single variable name

// Declaration

// let arr = new Array();

// let arr1 = []; // most common way to declare an array

// let fruits = ["Mango", "Apple"];
// //              0         1

// console.log(fruits[0]); // "Mango"
// console.log(fruits[1]); // "Apple"
// console.log(fruits[2]); // undefined
// console.log(fruits.length); // 2
// console.log(fruits); // 2

// An array can store elements of any type

// let arr = [
//   "Apple", // 0 // -4
//   1, // 1 // -3
//   false, // 2 // -2
//   function () {
//     console.log("hello");
//   }, // 3 // -1
// ];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]());

// console.log(typeof arr); // object

// // Array.isArray ->
// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray({})); // false

// Methods
// at
// arr.at(i) -> is exactly same as arr[i], if i >= 0
// for negative values of i, it steps back from the end of the array

// console.log(arr[-1]);
// console.log(arr.at(-1));
// console.log(arr.at(-2));

// arr.push(4);
// arr.push(5, 6);
// let tempArr = [6, 7, 8, 9, 10];
// let a = arr.push(...tempArr); // returns length of the array
// console.log(a);

// let poppedValue = arr.pop(); // returns popped value
// console.log(poppedValue);

// shift () -> modifying the original array
// removes the first element from an array and returns that array
// let removedValue = arr.shift();
// console.log(removedValue);
// console.log(arr);

// example
// var words = ["one", "two", "three", "four"];
// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
//   if (words[i] === "two") {
//     words.shift();
//   }
// }

// O/P
// one
// two
// four

// unshift -> modifies original array
// add one or more elements to the beginning of an array and
// returns the new length of an array

// const newLength = arr.unshift(0, 4, 5);
// console.log(newLength, arr);

// concat -> does not modify original array and returns new array
// used to merge two or more array

// const arr1 = [1, 2];

// const mergedArr = arr.concat(arr1);
// console.log(mergedArr);

// splice

// How to delete an element from an array

// The arrays are objects and delete(use this to delete)

// syntax for delete is delete obj.key
let arr = [
  "Apple", // 0 // -4
  1, // 1 // -3
  false, // 2 // -2
  function () {
    console.log("hello");
  }, // 3 // -1
];

// delete arr[0];
// console.log(arr);

// all this can be done with arr.splice -> insert, remove and replace elements

// arr.splice(start, [, deleteCount, elem1, ...., elemN])
// modifies the original array starting from the index start: removes deleteCount elements
// and then inserts elem1,...., elemN at their places (imp) and returns the
// array of removed elements
// arr.splice(1, 1); // from index 1 remove 1 element
// arr.splice(1, 1, 2, 3); // from index 1 remove 1 element and insert 2 and 3 inplace of 1

// // Negative indexes allowed

let arr1 = [1, 2, 5];
//          0  1  2
//         -3 -2 -1

arr.splice(-1, 0, 3, 4); // from index -1 (one step from the end deletes 0 elemetns and
// insert 3 and 4 at that place) // 1, 2, 3, 4, 5

// slice method
// arr.slice([start], [end])

// returns a new array copying to it all items from index start to end(not including end)

const nums = [1, 2, 3, 4, 5];
//            0  1  2  3  4
//           -5 -4 -3 -2 -1
const slicedNumbers = nums.slice(1, 4); // Extract elements from index 1 to 3
// [2, 3, 4]
console.log(slicedNumbers);
const slicedNumbersNeg = nums.slice(-2);
console.log(slicedNumbersNeg); // [4, 5]
