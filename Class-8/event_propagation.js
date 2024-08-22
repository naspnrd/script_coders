document.querySelector("#grandParent").addEventListener(
  "click",
  (event) => {
    console.log("GrandParent Clicked!");
    event.stopPropagation(); // stopping the propagation
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    console.log("Parent Clicked!");
    // event.stopPropagation(); // stopping the propagation
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (event) => {
    console.log("Child Clicked!");
    // event.stopPropagation(); // stopping the propagation
  },
  true
);

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Body Clicked!");
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   () => {
//     console.log("Document Clicked!");
//   },
//   true
// );

// window.addEventListener(
//   "click",
//   () => {
//     console.log("Window Clicked!");
//   },
//   false
// );
