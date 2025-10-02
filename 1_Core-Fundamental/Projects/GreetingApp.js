// User ka name input lo aur usko ek formatted greeting string banao.

let fname = "Ali"
let lname = "Mian"

// pehley full name banao

let FullNam = `${fname} ${lname}`;

// message compile karo
let msg = `Hello ${FullNam}, Welocome to Javascript Self Practice!!`;

console.log("Greeting Message : ",msg);


// /n/n/n

console.log("Uppercase Name : ",FullNam.toUpperCase());
console.log("DOes name include 'Syed'? : ", FullNam.includes("syed"));