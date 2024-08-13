// RegEx (Regular Expression) are powerful patterns used to match and
// manipulate text

// Syntax
// new RegExp("paatern", "flags")

// regexp = /pattern/; // no flags // static means doesn't allow for expressions to be
// // inserted (like string template literals with ${...})

// regexp = /pattern/gim; // with flags g, m i

// Flags
// i -> with this flag the search is case-insensitive: No diff b/w A and a
// g -> with this flag search looks for all matches (global)
// m -> multiline mode
// u -> Enalbes full unicode support
// etc..

// let num = 1;
// let str = "Neeraj";
// let regexp = new RegExp("[0-9]");
// console.log(regexp.test(num)); // true
// console.log(regexp.test(str)); // false

// let re = "Hello Studytonight";
// let result = /hello/i.test(re);
// console.log(result); // false
