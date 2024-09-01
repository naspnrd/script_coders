// fetch() function
// it use promises, then when you make a request using fetch api, it returns a promise
// that resolves to the server's response and this allows you to use promise's .then()
// method to handle the successful response and .catch method to handle any errors
// that may occurs
// and also you can use async-await syantx which provides a more concise and synchronous
// looking way to handle promise

// Response
// response.json() -> parses the response body as json and returns a promise that resolves
// to a javascript object

// response.text() => returns a promise that resolves to the response body as plain text

// response.blob() => returns a promise that resolves to a Blob object representing
// the response body

// response.arrayBuffer() => returns a promise that resolves to an ArrayBuffer
// respresenting the response body

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const headers = {
//   "Content-Type": "application/json",
// };
// const body = JSON.stringify({
//   title: "foo",
//   body: "bar",
//   userId: 1,
// });

// const requestOptions = {
//   method: "POST",
//   headers,
//   body,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const headers = new Headers();
// headers.append("Content-Type", "application/json");

// const body = JSON.stringify({
//   title: "foo",
//   body: "bar",
//   userId: 1,
// });

// const requestOptions = {
//   method: "POST",
//   headers,
//   body,
// };

// fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const request = new Request("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// });

// fetch(request)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const controller = new AbortController();

// const timeout = setTimeout(() => controller.abort(), 0);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   signal: controller.signal,
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => clearTimeout(timeout));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

async function apiCall() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    });
    const response = await res.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

apiCall();
