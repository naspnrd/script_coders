// const radius = [3, 1, 2, 4];
// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]); // pi * r * r
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]); // 2 * pi * 2
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));

const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i])); // pi * r * r
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

// map(), filter() and reduce()

// map() or Array.prototype.map()
// It is used to do transformation on whole array

// const arr = [5, 1, 3, 2, 6];
// Triple this array ->  [15, 3, 9, 6, 18]
// Square this array elements -> [25, 1, 9, 4, 36]

// const triple = (x) => {
//   return 3 * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const output = arr.map(triple);
// console.log(output);
// const output = arr.map((item, idx) => {
//   console.log(item, idx);
//   return item * 3;
// });
// console.log(output);

// filter()
// It is used to filter the values inside an array

// const arr = [5, 1, 3, 2, 6];
// const outputEven = arr.filter((item) => item % 2 === 0);
// const outputOdd = arr.filter((item) => item % 2);
// console.log(outputEven);
// console.log(outputOdd);

// Reduce()
// It takes the values in an array from left to right and applies functionality
// such that it changes the array into one singular value.

// array.reduce(callback, initialValue(optional))
// const arr = [5, 1, 3, 2, 6];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) sum += arr[i];
//   return sum;
// }
// console.log(findSum(arr));

// const output = arr.reduce((acc, curr, index) => {
//   console.log(acc, curr, index);
//   acc += curr;
//   return acc;
// });
// console.log(output);

// forEach
const arr = [5, 1, 3, 2, 6];

// forEach returns undefined, therefore it is not chainable like map, filter or reduce
// can't use break or continue statements to control the loop
arr.forEach((item, index) => {
  // TODO
});

// arr.map().filter().reduce()

const output = arr
  .map((item) => item * 2) // [10, 2, 6, 4, 12]
  .filter((item) => item > 4) // [10, 6, 12]
  .reduce((acc, curr) => acc + curr); // 28

console.log(output);
