// Retrieve todo from local storage or intialize an empty array
// Json stands for JavaScript Object Notation and it's basically the way of format Js  that's easily read
// parse Converts a JavaScript Object Notation (JSON) string into an object.
let todo = JSON.parse(localStorage.getItem("todo")) || [];

