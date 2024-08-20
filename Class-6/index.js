const arr = [[1, 2, undefined], [[[[3, null, 4]]]], [5, [6], 7]];

// flat an array
// output : [1, 2, undefined, 3, null, 4, 5, 6, 7]

// recursive or iterative

function flatRecursively(arr, newArr = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatRecursively(item, newArr);
    } else {
      newArr.push(item);
    }
  });
  return newArr;
}
// console.log(flatRecursively(arr));

// iteratively? -> HW
// newArr = []
// create a temp of original array
// run a loop and use spread operator and Array.isArray()

function flatIteratively(arr) {
  const newArr = [];
  const temp = [...arr];

  while (temp.length) {
    const item = temp.pop();
    if (Array.isArray(item)) {
      temp.push(...item); // 5, 6
      console.log("item --", item);
    } else {
      newArr.push(item);
      console.log("newArr ---", newArr);
    }
  }
  return newArr.reverse();
}
console.log(flatIteratively(arr));
