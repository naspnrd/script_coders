// console.log("Two!");

// function logThree() {
//   console.log("Three!");
// }

// function logThreeAndFour() {
//   logThree();
//   console.log("Four!");
// }

// logThreeAndFour();

// function longRunningTask() {
//   let count = 0;
//   for (let j = 0; j < 1e9; j++) {
//     count++;
//   }
//   console.log("Long task done!--", count);
// }

// function importantTask() {
//   console.log("Important!");
// }

// longRunningTask();
// importantTask();

// Callback Based

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position), // success callback
//   (error) => console.log(error) // error callback
// );

// function x() {
//   var i = 2;
//   setTimeout(function () {
//     debugger;
//     console.log(i);
//   }, 1000);
//   console.log("JavaScript Classes");
// }
// x();

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("JavaScript Classes");
// }
// x();

// solution - 1 : using let because let has block scope

// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("JavaScript Classes");
// }
// x();

// solution - 2: without using let

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     function close(i) {
//       // i is a local value
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("JavaScript Classes");
// }
// x();
