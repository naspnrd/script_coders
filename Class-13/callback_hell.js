// console.log("Hello");
// console.log("JavaScript");
// console.log("Developers");

// console.log("Hello");
// setTimeout(() => {
//   console.log("JavaScript");
// }, 5000);
// console.log("Developers");

// Example
// building an ecommerce website
// 1. Adding items in cart
// 2. Create an order
// 3. Payment

// const cart = ["Shoes", "pants", "kurta"];
// First create an order, once the order is created then only proceed to payment
// so payment is dependent on create order success (so here we can use callback) as
// we have dependency in our code

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary();
//   });
// });

// callback Hell refers to a situation where callbacks are nested within other callbacks
// several level deep potentially making it difficult to understand and maintain the code.
// callback Hell also known as Pyramid of Doom (bcz it creates pyramid like shape in the code)

// setTimeout(() => {
//   console.log("first callback");
//   setTimeout(() => {
//     console.log("second callback");
//     setTimeout(() => {
//       console.log("third callback");
//       setTimeout(() => {
//         console.log("fourth callback");
//         setTimeout(() => {
//           console.log("fifth callback");
//           setTimeout(() => {
//             console.log("sixth callback");
//             setTimeout(() => {
//               console.log("seventh callback");
//             }, 2000);
//           }, 1000);
//         }, 500);
//       }, 2500);
//     }, 3000);
//   }, 100);
// }, 3000);

// Steps to Make a Sandwich
// 1. Get Bread
// 2. Take the bread and add veggies
// 3. If cheese is requested, add cheese to bread and veggies
// 4. If toast is requested, toast the sandwich, if not serve it
// 5. Ask for toppings and then serve the sandwich

// Step 1: Function to get bread

function fnc1(fnc2) {
  let sandwich = []; // Initialize the sandwich array with bread
  sandwich.push("bread");
  console.log("Sandwich so far: ", sandwich);
  fnc2(sandwich, fnc3);
}

// Step 2: Function to take the bread and add veggies
function fnc2(sandwich, fnc3) {
  sandwich.push("veggies");
  console.log("Sandwich so far: ", sandwich);
  fnc3(sandwich, true, fnc4); // Change false to true to add cheese
}

// Step 3: Function to add cheese if requested

function fnc3(sandwich, addCheese, fnc4) {
  if (addCheese) sandwich.push("cheese");
  console.log("Sandwich so far: ", sandwich);
  fnc4(sandwich, true, fnc5); // Change false to true to toast the sandwich
}

// Step 4: Function to toast the sandwich if requested

function fnc4(sandwich, isToast, fnc5) {
  if (isToast) sandwich.push("toasted");
  console.log("Sandwich so far: ", sandwich);
  fnc5(sandwich);
}

// Step 5: Function to ask for toppings and then serve the sandwich

function fnc5(sandwich) {
  let toppings = ["lettuce", "tomato", "mayo"];
  sandwich.push(...toppings);
  console.log("Sandwich so far: ", sandwich);
  console.log("Sandwich is ready to be served!"); // Finalize and serve the sandwich
}

fnc1(fnc2);
