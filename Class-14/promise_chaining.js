// return new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   });

// The whole thing works, because every call to a .then returns a new promise,
// so that we can call the next .then on it.
// when a handler returns a value, it becomes the result of that promise, so the next
// .then is called with it

// A classic newbie error: technically we can also add many .then to a single promise.
// This is not chaining

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then((result) => {
//   console.log(result); // 1
//   return result * 2; // 2
// });

// promise.then((result) => {
//   console.log(result); // 1
//   return result * 2; // 2
// });

// promise.then((result) => {
//   console.log(result); // 1
//   return result * 2; // 2
// });

// A handler, used in .then(handler) may create or return a promise
// in that case further handlers wait until it settles and then get it's result

// return new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result); // 1
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result); // 2
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 2000);
//     });
//   })
//   .then((result) => {
//     console.log(result); // 4
//   });

// 1 -> 2 -> 4

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 10);
// setTimeout(() => {
//   console.log(3);
// }, 0);
// new Promise((_, reject) => {
//   console.log(4);
//   reject(5);
//   console.log(6);
// })
//   .then(() => console.log(7))
//   .catch(() => console.log(8))
//   .then(() => console.log(9))
//   .catch(() => console.log(10))
//   .then(() => console.log(11))
//   .then(console.log)
//   .finally(() => console.log(12));

// console.log(13);

// O/P
/* 
1
4
6
13
8
9
11
undefined
12
3
2
*/

// new Promise((resolve, reject) => {
//   resolve(1);
//   resolve(2);
//   reject("error");
// }).then(
//   (value) => {
//     console.log(value);
//   }, // onFulfilled
//   (error) => {
//     console.log(error);
//   } // onRejected
// ); // .then(onFulfilled, onRejected)

// O/P
// 1

// Explanation
// a promise can only be resolved or rejected once. Once a promise is resolved or rejected
// it's subsequent calls to resolve or reject are ignored

// Question

Promise.resolve(1)
  .then((val) => {
    console.log(val);
    return val + 1;
  })
  .then((val) => {
    console.log(val);
  })
  .then((val) => {
    console.log(val);
    return Promise.resolve(3).then((val) => {
      console.log(val);
    });
  })
  .then((val) => {
    console.log(val);
    return Promise.reject(4);
  })
  .catch((val) => {
    console.log(val);
  })
  .finally((val) => {
    console.log(val);
    return 10;
  })
  .then((val) => {
    console.log(val);
  });

// Explanation
// 1. finally() never receive an argument
// 2. Normal return value in finally won't make effect on promise object
// 3. throw error in finally()
//  3.1 A throw(or returning a rejected promise) in the finally callback will reject the promise with the rejected
// reason specified when calling throw

// Promise.reject(1)
//   .finally(() => {
//     throw new Error(2);
//     // return 10;
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// or
// Promise.reject(1)
//   .finally(() => {
//     return Promise.reject(2);
//   })
//   .catch((err) => console.log(err));

// 4. Order of then() and catch()
// Remember then() and catch() can be called to handle the promise at any time. It will use the latest
// final state of the promise object, and affects the new value of the promise object.

// Promise.reject(1)
//   .catch((val) => {
//     console.log(val); // 1: rejected value is 1
//     // return nothing
//     // will return undefined for promise object
//   })
//   .then((val) => console.log(val)); // undefined
