// Math.PI
// Math.celi()
// Math.floor()
// Math.pow()
// Math.abs()
// Math.round()
// Math.sqrt()
// Math.random()
// Math.max()
// Math.min()
// Math.round()



console.log("Pie : ",Math.PI);
console.log("Squre Root : ",Math.sqrt(25));
console.log("Power : ",Math.pow(2,28));
console.log("Minimum Value : ",Math.min(3,4,5,6,7,8,9));
console.log("Maximum Value : ",Math.max(3,4,5,6,7,8,9));
console.log("Rounf-Off Value",Math.round(23.45));
console.log("Absolute value(Positive) : ",Math.abs(-9.90));
console.log("Floor-Upper Round-off : ",Math.floor(3.9));
console.log("Celling-Lower Round-off : ",Math.ceil(3.1));

const min = 10;
const max = 20;

console.log("Random in Detail: ",
   Math.floor( Math.random()  *  ( max - min + 1 )+min));
    // max-imin: ye range define karta HTMLDetailsElement, +1 use kara taki Zero nahi aaye

    // Random number (0 to 1)
    console.log("blank random 0-5999 figure deta hai",Math.random());  

// Random 1 to 6 (dice style)
console.log(Math.floor(Math.random() * 6) + 1);