// Goal: Learn the data types of variables and how to check them using typeof operator

// In Javascript, we can check the data type of a variable using the typeof operator.
// The typeof operator returns a string indicating the type of the unevaluated operand.

let name = "Alice"; // String
let age = 30; // Number
let isEmployed = true; // Boolean
let address; // Undefined
let salary = null; // Null
let skills = ["JavaScript", "HTML", "CSS"]; // Object (Array)
let person = { firstName: "Alice", lastName: "Smith" }; // Object
function greet() { return "Hello!"; } // Function

console.log("Data type of name:", typeof name); // Output: string
console.log("Data type of age:", typeof age); // Output: number
console.log("Data type of isEmployed:", typeof isEmployed); // Output: boolean
console.log("Data type of address:", typeof address); // Output: undefined
console.log("Data type of salary:", typeof salary); // Output: object
console.log("Data type of skills:", typeof skills); // Output: object       
console.log("Data type of person:", typeof person); // Output: object
console.log("Data type of greet:", typeof greet); // Output: function
