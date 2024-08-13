// The sort() method in JS is used to sort the elements of an array in-place
// and return the sorted array
// By default, the sort() method sorts the elements alphabetically when applied to
// strings and numerically when applied to numbers
// However you can also provide a custom sorting function to define the sorting order

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// const fruits = ["Banana", "Bamboo"];
// fruits.sort();
// console.log(fruits);

const nums = [31, 10, 5, 2, 4];

// "31", "10", "5", "2", "4"
nums.sort();
console.log(nums); // [10, 2, 31, 4, 5]

// Compare Func
// function compare(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }

// ascending order
function compare(a, b) {
  return a - b;
}

// descending order
function compare(a, b) {
  return b - a;
}

// nums.sort((a, b) => a - b); // ascending sort
nums.sort((a, b) => b - a); // descending sort
console.log(nums);
