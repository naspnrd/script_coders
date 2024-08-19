const person = {
  name: "Neeraj",
  age: 22,
  isStudent: false,
  address: {
    street: "Mathura",
    city: "Mathura",
    pincode: 123456,
  },
  hobbies: ["Teaching", "Travelling", "Bike Rides"],
  hasPets: null,
  greet: function () {
    console.log("Hello " + this.name);
  },
  undefinedValue: undefined,
};

// Methods
// 1. JSON.stringify() -> used to convert JSON object into an string

console.log(person);
const stringifiedPerson = JSON.stringify(person);

console.log(stringifiedPerson);

// limitations
// Functions and Non-Serializable Values(undefined)

// JSON.parse() -> does the reverse of JSON.stringify()
// converts json string into an object

const parsedPerson = JSON.parse(stringifiedPerson);
console.log(parsedPerson);

// limitations
// 1. invalid json

const jsonStr = '{"name": "Neeraj", "age": 30}';
console.log(JSON.parse(jsonStr));

// Safe to say that all JSON data are valid JS Object
