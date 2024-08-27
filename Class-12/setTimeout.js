// syntax
// setTimeout(function, delay, ...arguments);

// console.log("Before setTimeout");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000); // 2000ms = 2 secs

// console.log("After SetTimeout");

// function greet(name, message) {
//   console.log(`Hello ${name}, ${message}`);
// }

// let timer = setTimeout(greet, 2000, "Brijesh", "Welcome to JS Module");
// console.log(timer);
// clearTimeout(timer);

// Trust issues with setTimeout
// setTimeout does not guarantee that callback function will be called exactly
// after specified delay, it might also take longer. It depends upon callstack

// console.log("start");
// setTimeout(function () {
//   console.log("callback called");
// }, 5000);

// console.log("end");

// let startDate = new Date().getTime();

// let endDate = startDate;

// while (endDate <= startDate + 30000) {
//   endDate = new Date().getTime();
// }
// console.log("while expired");

console.log("start");
setTimeout(function () {
  console.log("callback called");
}, 0);

console.log("end");

let startDate = new Date().getTime();

let endDate = startDate;

while (endDate <= startDate + 5000) {
  endDate = new Date().getTime();
}
console.log("while expired");
