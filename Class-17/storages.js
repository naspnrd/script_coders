// localStorage.setItem("key", "value");
// localStorage.setItem("name", "Neeraj");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("key");

// localStorage.clear();

// Session Storage

// sessionStorage.setItem("name", "Neeraj");

// console.log(sessionStorage.getItem("name"));

// sessionStorage.removeItem("name");

// sessionStorage.clear();

// sessionStorage.setItem("age", 23);
// console.log(typeof sessionStorage.getItem("age"));

// let user = {
//   name: "Neeraj",
//   age: 23,
//   undefinedValue: undefined,
//   getUser: function () {
//     console.log(this.name);
//   },
// };

// sessionStorage.setItem("user", user);

// console.log(sessionStorage.getItem("user"));

// sessionStorage.setItem("user", JSON.stringify(user));

// console.log(JSON.parse(sessionStorage.getItem("user")));

// sessionStorage.setItem("undefinedValue", undefined);
// sessionStorage.setItem("function", function () {
//   console.log(this.name);
// });

// console.log(sessionStorage.getItem("function"));

let loggedInUser = localStorage.getItem("user");
if (loggedInUser) {
  document.body.innerHTML += `<h1>User is Logged In - ${loggedInUser}</h1>`;
} else {
  document.body.innerHTML += `<h1>User is Not Logged In</h1>`;
}

document.getElementById("submit").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  localStorage.setItem("user", email);
  window.location.reload();
});

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.reload();
});
