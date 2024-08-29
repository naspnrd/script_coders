// new Promise((resolve, reject) => {
//   // TODO
//   resolve("Done!");
//   //   reject(3);
// }).then((val) => console.log(val));

// .then(onFulfilled, onRejected)
//.catch() => .then(_, onRejected)

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 100);
// }).then(
//   (val) => console.log(val), // onFulfilled , cb2
//   (err) => console.log(err) // onRejected , cb3
// );

// new Promise((resolve, reject) => {
//   console.log(1);
//   // setTimeout(() => resolve(2), 1000);
//   resolve(2);
//   console.log(4);
// }).then((val) => console.log(val));

// console.log(3);

// O/P
// 1 3 2

// Promisifying Callback APIs

// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position), // success callback
//   (error) => console.log(error) // error callback
// );

// function getCurrentPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }s

// getCurrentPosition()
//   .then((position) => console.log(position))
//   .catch((err) => console.log(err));

// createOrder(cart) => return a promise =>

// const promise = createOrder(cart); // This is an async Operation
// // Once it is done, createOrder() will return us an object

// promise.then((orderId) => {
//   proceedToPayment(orderId);
// });

const cart = ["Shoes", "pants", "kurta"];
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    // create order
    // validate cart
    // orderId generated
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "123";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 2000);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve("Payment Successful");
    } else {
      reject(new Error("Payment Unsuccessful"));
    }
  });
}

function validateCart(cart) {
  return true;
}

createOrder(cart)
  .then((orderId) => {
    console.log(orderId); // "123"
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo); // "Payment Successful"
  })
  .catch((err) => console.log(err.message));

// Promise Hell
// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return proceedToPayment(orderId).then((paymentInfo) => {
//       console.log(paymentInfo);
//       // so on
//     });
//   })
//   .then(() => {
//     // TODO
//   });

// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch((err) => console.log(err.message))
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentInfo) => {
//     console.log(paymentInfo);
//   });

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   //   setTimeout(() => resolve(2), 4000);
//   resolve(2);
// });
// console.log(promise1);
// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

// O/P
// start
// 1
// end
// 2
