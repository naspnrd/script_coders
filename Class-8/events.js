const button = document.getElementById("myButton");

// function handleClick() {
//   console.log("Button clicked");
// }

// button.addEventListener("click", handleClick);

// button.removeEventListener("click", handleClick);

// const span = document.getElementsByTagName("span")[0];

// console.log(span);

// span.addEventListener("click", function () {
//   console.log("span clicked second time");
// });

// span.addEventListener("click", function () {
//   console.log("span clicked");
// });
// const listener1 = function () {
//   console.log("span clicked second time");
// };

// const listener2 = function () {
//   console.log("span clicked");
// };

// span.addEventListener("click", listener1);

// span.addEventListener("click", listener2);

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   span.removeEventListener("click", listener1);
// });

function handleClick(event) {
  console.log("Button Clicked", event);
  console.log("Event type: ", event.type);
  console.log("Target element: ", event.target);
  console.log("Current Target Element: ", event.currentTarget);
  event.preventDefault();
  event.stopPropagation();
}

button.addEventListener("click", handleClick);
