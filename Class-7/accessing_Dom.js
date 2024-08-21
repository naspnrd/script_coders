// const elementById = document.getElementById("heading");

// const elementByClassName = document.getElementsByClassName("title"); // returns HTMLCollection

// const elementByTagName = document.getElementsByTagName("h1");

// const elementByQuerySelector = document.querySelector(".title");
// const elementByQuerySelectorAll = document.querySelectorAll(".title"); // returns nodeList
// elementByQuerySelectorAll.forEach((element) => {
//   element.style.backgroundColor = "yellow";
//   element.style.color = "red";
// });

// const parentElement = elementById.parentNode;

// const childElements = parentElement.children;

// const nextSibling = elementById.nextElementSibling;

// const prevSibling = elementById.previousElementSibling;

const descendantElements = document.querySelectorAll("#container .content");

const childElements = document.querySelectorAll("#container > .content");

const adjacentSibingElements = document.querySelectorAll(".title + .content");

const generalSibingElements = document.querySelectorAll(".title ~ .content");
