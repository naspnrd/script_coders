// async function f() {
//   return 1; // Promise.resolve(1);
//   //   return Promise.resolve(1);
//   //   return new Promise((resolve, reject) => {
//   //     resolve(1);
//   //   });
// }

// f()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async ensures that the function always returns a promise and wraps non-promises
// in it/

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done", 1000));
//   });
//   let res = await promise; // wait until the promise is resolved
//   console.log(res);
// }

// f();
// At line number 20, function execution pauses at the line, and resumes when promise settles with result
// becoming it's result

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!");
//   }, 1000);
// });

// async function handlePromise() {
//   console.log("Hello world");
//   const val = await p;
//   //   setTimeout(async () => {
//   console.log("Welcome to JS classes");
//   console.log(val);
//   const val2 = await p;
//   console.log("Welcome to JS classes");
//   console.log(val2);
//   //   }, 5000);
// }

// handlePromise();

// setTimeout(() => {
//   console.log("end");
// }, 1000);

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value1");
//   }, 5000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value2");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello world");
//   const val = await p1;
//   console.log("Welcome to JS classes");
//   console.log(val);
//   const val2 = await p2;
//   console.log("Welcome to JS classes");
//   console.log(val2);
// }

// handlePromise();

// async function f() {
//   try {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => reject("Done", 1000));
//     });
//     let res = await promise; // wait until the promise is resolved
//     console.log(res);
//   } catch (error) {
//     console.log("catch---", error);
//   }
// }

// f();

// Question

// async function a() {
//   try {
//     return await Promise.reject(1);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function b() {
//   try {
//     return Promise.reject(2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function start() {
//   await a();
//   await b();
// }

// start();

// O/P
// 1
// Uncaught in promise 2

// Question

// const promise = Promise.resolve(); // undefined
// function f() {
//   return promise;
// }

// async function a() {
//   return f();
// }

// async function b() {
//   return await f();
//   // return await promise
//   // return undefined
// }

// function c() {
//   return f();
// }

// console.log(a());
// console.log(b());
// console.log(c());
// console.log(a() === b()); // false
// console.log(b() === c()); // false
// console.log(a() === c()); // false

// Question

// function func() {
//   try {
//     console.log(1);
//     return;
//   } catch (error) {
//     console.log(2);
//   } finally {
//     console.log(3);
//   }
//   console.log(4);
// }

// func();

// O/P
// 1
// 3

// Question

const createPromise = () => Promise.resolve(1);

function func1() {
  createPromise().then(console.log);
  //   createPromise().then((res) => console.log(res));
  console.log(2);
}

async function func2() {
  await createPromise();
  console.log(3);
}

console.log(4);
func1();
func2();

// O/P
// 4
// 2
// 1
// 3
