// Goal: To learn how to declare and use variables in Javascript

// In Javascript, a variable is a container that holds data values.
// We can declare a variable using the keywords: var, let, or const.

// The syntax to declare a variable is:
// let variableName = value;


// var and let are used to declare variables that can be reassigned later.
// const is used to declare variables that cannot be reassigned once set.

// Variable names should be meaningful and follow certain rules:
// 1. They can contain letters, digits, underscores, and dollar signs.
// 2. They must begin with a letter, underscore, or dollar sign.
// 3. They cannot be a reserved keyword in Javascript (like let, const, var, function, etc.).




let name = "John Doe";
var age = 25;
const pi = 3.14;
let isStudent = true;

// We can print the values of these variables using console.log()   function:
console.log("Name:", name);
console.log("Age:", age);
console.log("Value of Pi:", pi);
console.log("Is Student:", isStudent);

// We can also change the value of variables declared with var and let:
age = 26;
console.log("Updated Age:", age);

// pi = 3.298;
// console.log("Updated Value of Pi:", pi); // This will throw an error since pi is a constant.

 