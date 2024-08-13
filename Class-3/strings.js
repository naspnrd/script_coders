// '' or "" or ``
// Strings methods

// 1. length

// const str = "Hello, world"; // primitive datatypes
//           01234567891011
// console.log(str.length);

// Almost everything in javascript is an object except undefined and symbols

// AutoBoxing
// Autoboxing will connect the primitive to the related built-in prototype object
// String.prototype or Number.prototype or boolean.prototype, etc..

// 2. slice(startIndex(includes), endIndex(excluded))
// Extract a section of a string and returns it as a new string
// console.log(str.slice(7, 12)); // world

// 3. substring(startIndex, endIndex)
// Similar to slice but does not allow negative indexes
// console.log(str.substring(7, 12)); // world

// 4. replace(searchValue, replaceValue)
// Replaces first occurence of a specified values in a string with another value and returns
// a new string

// console.log(str.replace("world", "Universe"));

// 5. replaceAll(searchValuem replaceValue);
// Similar to replace but replaces all occurrences using a regulat exp instead of a string

// console.log(str.replaceAll(/o/g, "0"));

// toUpperCase() and toLowerCase()

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// concat(str1, str2, str3, ...., strN)
// merges two or more strings and returns a new combined string

// const str1 = "hello";
// const str2 = "world";
// console.log(str1.concat(", ", str2));

// trim()
// removes whitespaces from both ends of a string
// const str = "        Hello, World        ";
// console.log(str.trim());

// charAt(index)
// returns the charactr at the specified index in a string

// let str = "Hello";
// console.log(str.charAt(1)); // e

// // charCodeAt(index)
// // Returns the unicode of the character at the specified index in a string
// console.log(str.charCodeAt(1)); //

// split(separator, limit)
// splits a string into an array of substrings based on the specified separator
// and optional limit

// const str = "apple,banana,orange";
// console.log(str.split(","));
// console.log(str.split(""));

// indexOf()

const str = "hello";
console.log(str.indexOf("ll"));
