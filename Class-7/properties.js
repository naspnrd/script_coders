// className
// const btn = document.getElementById("btn");

// btn.className = "active-btn";

// btn.className += " blue-btn";

// classList property -> It's an array representation of className

// btn.classList; // return all class names on btn button

// btn.classList.add("abc", "hello", "neeraj");

// btn.classList.remove("blue-btn", "hello");

// console.log(btn.classList.contains("neeraj")); // true
// console.log(btn.classList.contains("neeraj1")); // false

// toggle() method -> to remove and add certain class means let's say
// you have an active class now if active class exist then remove and if not then add that's it

// btn.classList.toggle("active");
// btn.classList.toggle("active");

// const buttons = document.querySelectorAll("button");
// buttons[0].classList.add("primary");
// buttons[1].classList.add("secondary");

// const exampleDiv = document.getElementById("example");
// console.log(exampleDiv.innerText);
// console.log(exampleDiv.innerHTML);
// console.log(exampleDiv.textContent);

// exampleDiv.innerHTML = "<p>This is <strong>inner</strong> HTML content</p>";

// const exampleDiv = document.getElementById("example");

// console.log(exampleDiv.style.color);
// console.log(exampleDiv.style.fontSize);

// exampleDiv.style.border = "1px solid black";

// const exampleDiv = document.getElementById("example");

// console.log(exampleDiv.getAttribute("class"));

// exampleDiv.setAttribute("class", "box highlight");

// const inp = document.querySelector("input");
// console.log(inp);

// Event handler -> An event handler is code that responds to specific
// actions or occurrences like clicking a button, etc..

// function callMe(button) {
//   console.log("button Clicked", button);
//   button.classList.toggle("primary");
//   //   button.disabled = true;
//   button.draggable = true;
// }
// let container = document.querySelector("#container");

// function createBoldElement(button) {
//   let b = document.createElement("b");
//   b.innerText = "Neeraj Chaudhary";
//   button.disabled = true;
//   console.log({ container });
//   container.appendChild(b);
// }

const students = [
  {
    name: "Aman",
    age: 23,
  },
  {
    name: "Akash",
    age: 20,
  },
  {
    name: "Roah",
    age: 29,
  },
  {
    name: "Akeem",
    age: 25,
  },
  {
    name: "Brajesh",
    age: 23,
  },
  {
    name: "Arjun",
    age: 34,
  },
  {
    name: "Srishti",
    age: 27,
  },
];

const container = document.getElementById("container");

function createStudents(button) {
  students.forEach((student) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const name = document.createElement("span");
    const age = document.createElement("span");
    name.innerText = student.name;
    age.innerText = student.age;
    card.append(name, age);
    container.appendChild(card);
  });
  button.disabled = true;
}
