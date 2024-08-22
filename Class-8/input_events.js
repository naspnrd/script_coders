// const input = document.querySelector("input");

// input.addEventListener("focus", function () {
//   console.log("focused");
// });

// input.addEventListener("blur", function () {
//   console.log("blurred");
// });

// input.addEventListener("input", () => {
//   console.log("input event triggered");
// });

// // Change event fires when the value of the input element changes and
// // the element loses focus
// input.addEventListener("change", function () {
//   console.log("input value changed");
// });

const students = [
  "Srishti",
  "Arjun",
  "Brajesh",
  "Akeem",
  "Rohan",
  "Akash",
  "Aman",
  "Rahul",
  "Vishal",
  "Shashank",
  "Vikram",
];

const input = document.querySelector("input");

const namesContainer = document.querySelector("#names-container");

// input.addEventListener("input", (event) => {
//   //   console.log(event);
//   //   "Neeraj".includes("era")
//   const value = event.target.value;
//   console.log(value);
//   const filteredStudents = students.filter((student) =>
//     student.toLowerCase().includes(value.toLowerCase())
//   );

//   let ul = document.createElement("ul");
//   ul.innerText = "";
//   namesContainer.innerText = "";
//   filteredStudents.forEach((student, idx) => {
//     let li = document.createElement("li");
//     li.innerText = student;
//     ul.appendChild(li);
//   });
//   namesContainer.appendChild(ul);
// });

// input.addEventListener("change", (event) => {
//   console.log(event);
//   //   "Neeraj".includes("era")
//   const value = event.target.value;
//   console.log(value);
//   const filteredStudents = students.filter((student) =>
//     student.toLowerCase().includes(value.toLowerCase())
//   );

//   let ul = document.createElement("ul");
//   ul.innerText = "";
//   namesContainer.innerText = "";
//   filteredStudents.forEach((student, idx) => {
//     let li = document.createElement("li");
//     li.innerText = student;
//     ul.appendChild(li);
//   });
//   namesContainer.appendChild(ul);
// });

const inpElement = document.getElementById("textInput");
const outElement = document.getElementById("output");

inpElement.addEventListener("keydown", (event) => {
  console.log("Key down: ", event.key);
  outElement.textContent = `Key down: ${event.key} (code: ${event.code}, keyCode: ${event.keyCode})`;
});

inpElement.addEventListener("keyup", (event) => {
  console.log("Key up: ", event.key);
  outElement.textContent += `Key up: ${event.key} (code: ${event.code}, keyCode: ${event.keyCode})`;
});
