"use strict";
try {
  // code that may throw an error

  age = 25;
} catch (error) {
  // Code to handle the error
  console.log("catch--", error);
} finally {
  console.log("No matter what happens, it will going to execute");
}

console.log("Hello");

// Benefits
// 1. Error Handling
// 2. Debugginh
// 3. User Experience

// "use strict";
// age = 35;
// console.log("hello");
