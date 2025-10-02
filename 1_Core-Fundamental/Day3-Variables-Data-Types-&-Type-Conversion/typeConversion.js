// 1. String Conversion

let num = 33;
console.log(String(num)); //"33"
console.log(num.toString()); //"33"

// 2. Number Conversion

let str = "123";

console.log(Number(str)); //123
console.log(parseInt("103ffdt")); //103

// 3. Boolean Conversion
console.log(Boolean(0));      // false
console.log(Boolean("Hi"));   // true
console.log(Boolean(""));     // false

/*
*👉 Rule of Thumb:
*    0, "", null, undefined, NaN → false
*    Baaki sab → true
*/