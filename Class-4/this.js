// coding in sloppy mode
// console.log("hello");

// ("use strict");
// // continue coding in strict mode
// console.log("in strict mode");
// function abc() {
//   "use strict";
// }

//

// function abc(a = 10){
//     "use strict"; // Syntax Error
// }

// function abc(...params){
//     "use strict"; // Syntax Error
// }

// function abc({params}){
//     "use strict"; // Syntax Error
// }

// By default in classes, JSON, Modules => strict mode enabled

// "use strict";

// a = 20;

// function abcd() {
//   console.log(this);
// }
// abcd();

// "use strict";
// // console.log(this); // global object
// function abc() {
//   console.log(this);
// }
// // function call
// abc(); // undefined

// method call
// In an object method, this refers to the owner object
// window.abc(); // window object

// const nums = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log(this);
//     console.log(this === nums); // true
//     function calculate() {
//       console.log(this);
//       // value of this refers to global object ie window (browser)
//       console.log(this === nums); // false
//       return this.numA + this.numB; // undefined  + undefined = NaN(Not a Number)
//     }
//     console.log(calculate()); // function call
//   },
// };

// nums.sum(); // method invocation

// function abc() {
//   console.log(this);
// }

// abc(); // function invocation

// solution - 1 -> Saving the context

// const nums = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log(this === nums); // true
//     const context = this; // storing the context
//     function calculate() {
//       console.log(context);
//       console.log(context === nums); // true
//       return context.numA + context.numB; // 5  + 10 = 15
//     }
//     console.log(calculate());
//   },
// };

// nums.sum(); // method invocation

// solution -2 external binding -> call, bind and apply

// const nums = {
//   numA: 5,
//   numB: 10,
//   sum: function () {
//     console.log(this === nums); // true
//     function calculate() {
//       console.log(this);
//       console.log(this === nums); // true
//       return this.numA + this.numB; // 5  + 10 = 15
//     }
//     // console.log(calculate.call(nums));
//     // console.log(calculate.apply(nums));
//     // let bindedCalculate = calculate.bind(nums);
//     // console.log(bindedCalculate());
//     console.log(calculate.bind(nums)());
//   },
// };

// nums.sum(); // method invocation

// Arrow function

// this in a method invocation
// refers to onwer object

// const calc = {
//   nums: 0,
//   increment() {
//     console.log(this === calc);
//     console.log(this.nums);
//     this.nums += 1;
//     return this.nums;
//   },
// };

// console.log(calc.increment()); // true 1 // method invocation
// console.log(calc.increment()); // true 2 // method invocation
// let temp = calc.increment; // storing the function
// console.log(temp()); // function invocation => this -> global object => false NaN

// arrow function

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
//   y: () => {
//     console.log(this);
//   },
// };

// obj.x(); // obj
// obj.y(); // global object => window or undefined

// const y = () => {
//   console.log(this);
// };
// y();

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this); // obj
//     const y = () => {
//       console.log(this); // obj
//     }; // arrow function
//     y();
//   },
// };

// obj.x();

// solution - 3 Arrow Functions

const nums = {
  numA: 5,
  numB: 10,
  sum: function () {
    console.log(this === nums);
    const calculate = () => {
      console.log(this);
      console.log(this === nums);
      return this.numA + this.numB;
    };
    console.log(calculate());
  },
};

nums.sum(); // method invocation
