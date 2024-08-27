// setInterval is used to repeatedly execute a function or piece of
// coe at specified interval

// setInterval(function, interval, ...arguments)

// let count = 0;

// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Interval count: ${count}`);
//   if (count === 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

let start = 1;
function countUp(name) {
  console.log(`${name} says the count is ${start}`);
  start++; // 2 // 3 // 4
  if (start === 10) clearInterval(intervalId);
}

const intervalId = setInterval(countUp, 1000, "Neeraj");
