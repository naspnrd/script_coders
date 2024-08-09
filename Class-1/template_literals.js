// `` -> backticks
// In JS `${}` expression are used within template literals
// to insert dynamic content into strings

// Inserting variables into strings

// var name1 = "Neeraj";
// var name2 = "Rahul";
// var greeting = `Hello ${name2}!`;
// console.log(greeting);

// Multiline Strings

// var name = "Neeraj
// Chaudhary
// "

// var name = "Neeraj";
// var message = `
//                 Hello, ${name}!
//     Welcome to JS Classes
// `;
// console.log(message);

// complex Expression

var num1 = 10;
var num2 = 20;
const result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;

console.log(result);

// UseCases
// 1. Dynamic Text Generation
// 2. String Interpolation in messages
// 3. HTML Templating
// 4. Conditional Rendering
//  Example
var isLoggedIn = true;
var name = "Neeraj";
var userStatus = `
    ${isLoggedIn ? `Welcome Back! ${name}` : "Please Log in to continue"}
`;
console.log(userStatus);
