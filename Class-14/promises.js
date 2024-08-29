// console.log("start");
// const p1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// p1.then(() => console.log(2));
// console.log("end");

// O/P
// start
// 1
// end

console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("middle");
fn().then((res) => {
  console.log(res);
}); // .then(onFulFilled, onRejected)

console.log("end");

//O/P
// start
// middle
// 1
// end
// success
