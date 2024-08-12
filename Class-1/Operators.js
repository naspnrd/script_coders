// 1. Arithmetic Operators
// - perform mathematical operations on numeric operands
// let x = 10;
// let y = 5;
// console.log(x + y); // Addition : 15
// console.log(x - y); // Subtraction: 5
// console.log(x * y); // Multiplication: 50
// console.log(x / y); // Division : 2
// console.log(x % y); // Modulus (Remainder) : 0
// console.log(x ** y); // Exponentiation: 1,00,000

// Comparison Operators:
// - Compare two values and return boolean result indication whether
// the comparison is true or false

// let a = 10;
// let b = 5;
// console.log(a > b); // Greater than : true
// console.log(a < b); // Less than : false
// console.log(a >= b); // Greater than or equal to: true
// console.log(a <= b); // Less than or equal to: false
// console.log(a === b); // Strict equality : false
// console.log(a !== b); // Strict inequality : true

// Logical Operators:
// - Logical operators are used to perform logical operations on boolean values

// let x = true;
// let y = false;

// console.log(x && y); // Logical AND : false
// console.log(x || y); // Logical OR: true
// console.log(!x); // Logical NOT: false

// Short Circuit Evaluation

// console.log(0 && 2); // 0
// console.log(1 && 2); // 2
// console.log(1 && 0); // 0

// console.log(1 || 2); // 1
// console.log(0 || 2); // 2
// console.log(0 || -1); // -1

// Relational Operators , < and >
// - compares the relationship between two operands

// Bitwise Operatos
// - perform bitwise operations on binary representations of numeric operands
// let a = 5; // Binary : 0101
// let b = 3; // Binary : 0011

// console.log(a & b); // & -> Bitwise AND // 0001 => 1
// console.log(a | b); // | -> Bitwise OR: 7 // 0111
// console.log(a ^ b); // Bitwise XOR: 0110 => 6
// console.log(~a); // Bitwise NOT: 11111010 => -6

// Increment(++) and Decrement(--)

// Increment => post and pre

let x = 5;
console.log(++x);
console.log(x++);
console.log(x);

let y = 10;
console.log(--y); // 9
console.log(y--); // 9
console.log(y); // 8
