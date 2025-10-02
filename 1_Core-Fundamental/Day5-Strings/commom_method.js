
// ###########################
//     String Basics
// ###########################
let str1 = "Hello";
let str2 = 'World';
let str3 = `JS`;   // template literal (backticks)


// ###########################
//    Common String Methods
// ###########################

let text = "JavaScript";


// Length
console.log(text.length);

// Access characters
console.log(text[2]);

// Uppercase / Lowercase
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Slice (substring)
console.log(text.slice(1,6));

// Replace
console.log(text.replace("Java","Mocha"));

// Includes(it ask/inquire)
console.log(text.includes("Java"));

// Split
let fruits = "Apple, Bananna, Citrus, Date, Eggfruit, Fig, Guava, Huckleberry, Illama, Jujube"

console.log(fruits.split());

// Trim
let st = "     Ahmed         "
console.log(st.trim())