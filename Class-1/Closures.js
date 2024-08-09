// Closures
// Functions along with it's lexical scope(local memory along with
// lexical env of it's parent) bundled scope
// In Layman terms: It's returning function has access to the outer or
// enclosing function variables

function outerFunction() {
  let outerVariable = "I'm an outer variable";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();

innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();

// Uses - HW
// Currying
// Memoization
// Module Design Patterns
// Data Hiding ie Encapsulation

// Disadvantages
// 1. Memory Leakage

// garbage collector? - mark and sweep algorithm (HW)
