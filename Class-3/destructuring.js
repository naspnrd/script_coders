// ES6 and powerful tool to work with objects

// Array Destructuring
// Arrays destructuring allows us to extract values from arrays and assign
// them to variables in single expression

// const arr = ["Neeraj", "Chaudhary", 1, 2, 3];

// const firstName = arr[0];
// const lastName = arr[1];
// const [firstName, lastName] = arr;
// console.log(firstName, lastName);

// const nestedArr = [1, [2, 3], 4];
// const [a, [b, c], d] = nestedArr;
// console.log(a, b, c, d);

// console.log(...arr);
// let y = "Neeraj";
// console.log(...y);

// Concatenate two arrays into single array
// const merged = [...arr, ...nestedArr];
// console.log(merged);

// // functions
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...[1, 2, 3]));

// let country = ["USA", "CANADA", "INDIA"];
// let [usa, ...others] = country; // rest operator
// console.log(usa);
// console.log(others);

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(1, 2, 3));

function sum(a, b, c, ...rem) {
  console.log(arguments);
  console.log(Array.from(arguments));
  console.log(rem);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));
