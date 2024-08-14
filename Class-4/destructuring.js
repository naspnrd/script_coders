// Destructuring
// const person = {
//   name: "Neeraj",
//   //   age: 26,
//   city: "Mathura",
// };

// const { name, age, city } = person;
// const { city, name, age, abc } = person;

// console.log(name, age, city, abc);

// Renaming Variables

// const { city: personCity, name: personName, age: personAge } = person;

// console.log(personCity, personName, personAge);

// Default Value

// const { city = "abc", name = "John", age = 21 } = person;

// console.log(name, age, city);

// nested destructuring

const person = {
  name: "Neeraj",
  age: 26,
  address: {
    city: "Mathura",
    country: "IN",
  },
};

// const {
//   name,
//   address: { city, country },
// } = person;

// console.log(city, country, name);

const { name, ...rest } = person;

console.log(name, rest);
