// Comments in Javascript : There are two types of comments in Javascript : Single line comment and Multi line comment

// This is a single line comment

/* This is a 
multi line comment */

// Variables in Javascript : A variable is a container for storing the data values. In Javascript, we can declare a variable using the var, let, or const keyword.

// var keyword : The var keyword is used to declare a variable in Javascript. It is function-scoped and can be re-declared and updated.

var name = "John";
console.log(name); // Output: John
name = "Doe";
console.log(name); // Output: Doe

// let keyword : The let keyword is used to declare a variable in Javascript. It is block-scoped and can be updated but not re-declared.

let age = 30;
console.log(age); // Output: 30
age = 31;
console.log(age); // Output: 31 

// const keyword : The const keyword is used to declare a variable in Javascript. It is block-scoped and cannot be updated or re-declared.

const PI = 3.14;
console.log(PI); // Output: 3.14

// PI = 3.14159; // This will throw an error because we cannot update a const variable

// Operators in Javascript : Operators are used to perform operations on variables and values. 
// There are several types of operators in Javascript, including arithmetic operators, assignment operators, comparison operators, logical operators, and more.

// Arithmetic Operators : These operators are used to perform arithmetic operations on numbers.

let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0    

// Assignment Operators : These operators are used to assign values to variables.

let x = 10;
x += 5; // This is equivalent to x = x + 5
console.log(x); // Output: 15

x -= 3; // This is equivalent to x = x - 3
console.log(x); // Output: 12
x *= 2; // This is equivalent to x = x * 2
console.log(x); // Output: 24
x /= 4; // This is equivalent to x = x / 4
console.log(x); // Output: 6
x %= 5; // This is equivalent to x = x % 5
console.log(x); // Output: 1

// Comparison Operators : These operators are used to compare two values and return a boolean value (true or false).
let num1 = 10;
let num2 = 20;
console.log(num1 == num2); // Output: false
console.log(num1 != num2); // Output: true
console.log(num1 > num2); // Output: false
console.log(num1 < num2); // Output: true
console.log(num1 >= num2); // Output: false
console.log(num1 <= num2); // Output: true  

// Logical Operators : These operators are used to combine multiple conditions and return a boolean value (true or false).

let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // Output: false
console.log(isAdult || hasID); // Output: true
console.log(!isAdult); // Output: false 
