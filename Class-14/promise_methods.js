const p1 = Promise.resolve(3);
const p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 4));
const p3 = 2;
const p4 = new Promise((resolve, reject) => {
  //   resolve(1);
  reject(1);
});

// Promise.all([p1, p2, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.race([p1, p2, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.race([p2, p4])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.any([p1, p2, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.any([
//   new Promise((resolve, reject) => {
//     reject(1);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject(4), 1000);
//   }),
//   Promise.reject(3),
// ])
//   .then((res) => console.log(res))
//   .catch((errors) => {
//     console.log(errors.constructor.name);
//     console.log(errors.errors);
//     console.log(errors.errors[0]);
//     console.log(errors.errors[1]);
//     console.log(errors.errors[2]);
//   });

Promise.allSettled([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
