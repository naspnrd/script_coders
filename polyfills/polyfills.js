// Polyfills are the piece of code used to provide modern functionality on
// older browsers that don't natively support it

let arr = [1, 2, 3];
let arr1 = [3, 4, 5];
function double(val) {
  return val * 2;
}

function greaterThan3(val) {
  return val > 3;
}

function sum(val1, val2) {
  return val1 + val2;
}

let triple;
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    return new TypeError(callback + " is not a function");
  }
  let res = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

// console.log(arr.myMap(double));
// console.log(arr.myMap(triple));
// console.log(arr.map(double));

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    return new TypeError(callback + " is not a function");
  }
  let res = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

// console.log(arr1.myFilter(greaterThan3));
// console.log(arr1.filter(greaterThan3));

Array.prototype.myReduce = function (callback, initValue) {
  if (typeof callback !== "function") {
    return new TypeError(callback + " is not a function");
  }
  let acc = initValue;
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback(acc, this[i], i, this);
    } else {
      acc = this[i]; // first value is assigned
    }
  }
  return acc;
};

console.log(arr.myReduce(sum, 0));
console.log(arr.reduce(sum, 0));
