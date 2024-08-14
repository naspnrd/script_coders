// Built-in Object Methods
// In jAvascript, we have several built-in methods

// Object.keys()
// method returns an array of object's enumerable properties.

// const movie = {
//   title: "The Matrix",
//   director: "Lana Wachowski",
//   releaseYear: 1999,
// };

// const movieKeys = Object.keys(movie);
// console.log(movieKeys);

// Object.entries()
// returns both keys and values of an object in the form of arrays

// const movieEntries = Object.entries(movie);
// console.log(movieEntries);

// Object.values()
// returns an array of object's values

// console.log(Object.values(movie));

// Object.prototype.hasOwnProperty(); // returns boolean indicating whether the object
// // has specified property as its property
// console.log(movie.hasOwnProperty("director"));
// console.log(movie.hasOwnProperty("cast"));

// const user = {
//   name: "Neeraj",
//   age: 26,
// };

// Object.prototype.profession = "Dev";

// for (let key in user) {
//   if (user.hasOwnProperty(key)) console.log(key, user[key]);
// }

// console.log(Object.keys(user));

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

let user = { age: 12, aadharNumber: 12345 };

Object.defineProperty(user, "name", {
  value: "Neerah",
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(user, "aadharNumber", {
  writable: false,
});

user.name = "Neeraj";
delete user.name;
console.log(user);
for (let key in user) {
  console.log(key, user[key]);
}
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
let descriptorAge = Object.getOwnPropertyDescriptor(user, "age");
let descriptorAadharNumber = Object.getOwnPropertyDescriptor(
  user,
  "aadharNumber"
);
console.log(descriptor);
console.log(descriptorAge);
console.log(descriptorAadharNumber);

// Object.defineProperties(user, {
//   profession: {
//     value: "Dev",
//     enumerable: true,
//   },
//   city: {
//     value: "Mathura",
//   },
// });
// console.log(user);
