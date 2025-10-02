// 🔹 1. Numbers Basics
let a = 10;
let b = 3.5;

console.log(typeof a); // "number"
console.log(typeof b); // "number"

// JavaScript me sirf ek hi number type hota hai (integer aur float dono ek hi category ke).





// 🔹 2. Number Methods
let num = 123.456;
let age = "42yrs";
let experience = "9.11";

// toFixed
// toString
// parseFloat
// parseInt

console.log(num.toFixed(1));    // "123.46" (2 decimal places)
console.log(num.toString());    // "123.456"
console.log(typeof num.toString()); // checktype
console.log(typeof Number("Aer"));      // Aer (convert string → number) type is ooptional
console.log(parseInt(age));  // 42
console.log(parseFloat(experience)); //9.11 (String to numbers)