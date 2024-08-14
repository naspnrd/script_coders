// let a = 5;
// let b = a; // call by value, a copy has been assigned
// a = 6;
// console.log(a, b);

// let obj = {
//   name: "Neeraj",
// };

// let obj1 = obj; // call by reference

// obj.name = "Rahul";
// console.log(obj1);

// Cloning ->
// shallow cloning
// Object.assign() and spread(...) operator -> shallow cloning

// const person = { name: "Neeraj", age: 28 };
// // let clone = person;
// let clone = Object.assign({}, person);
// let clonedSpread = { ...person };
// person.age = 29;
// console.log("cloned ---- ", clone);
// console.log("clonedSpread ---- ", clonedSpread);
// console.log(person);

// Example

// console.log({} == {}); // false

// let user = {
//   name: "Neeraj", // level 1
//   sizes: {
//     height: 177, // level 2
//     width: 50, // level 2
//   },
// };

// let clone = Object.assign({}, user);
// console.log(user.sizes === clone.sizes); // true
// user.sizes.width++; // 51
// user.name = "Rahul";
// console.log(clone.sizes.width); // 51
// console.log(clone);
// console.log(user);

let user = {
  name: "Neeraj", // level 1
  sizes: {
    height: 177, // level 2
    width: 50, // level 2
  },
};

function deepCopy(input) {
  var res = {};
  // base case
  if (typeof input !== "object") {
    return input;
  }

  for (let key in input) {
    res[key] = deepCopy(input[key]);
  }
  return res;
}

const clone = deepCopy(user);
console.log(user.sizes === clone.sizes); // false
user.sizes.width++; // 51
user.name = "Rahul";
console.log(clone.sizes.width); // 50
console.log(clone);
console.log(user);
