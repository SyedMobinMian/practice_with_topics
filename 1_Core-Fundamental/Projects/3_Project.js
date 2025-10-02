// Mini Project – Grade Calculator



// 📝 Problem Statement

// User apne marks input karega (0–100).
// Agar marks >= 90 → Grade: A
// Agar marks >= 75 → Grade: B
// Agar marks >= 50 → Grade: C
// Agar marks < 50 → Grade: Fail
// 👉 Yaha hum comparison + logical + ternary operators ka use karenge.


let marks = 83; /// change value to test

if(marks>=90){
    console.log("Grade: A");
}else if(marks >= 75){
    console.log("Grade: B");
}else if(marks >= 50){
    console.log("Grade: c");
}else if(marks >= 35){
    console.log("Grade: D");
}else if(marks < 35){
    console.log("Grade : Fail");
}


//Using Ternary operator (short form)
let grade = (marks>=90) ? "A" :
            (marks>=75) ? "B" :
            (marks>=50) ? "C" :
            (marks>=35) ? "D" :
            (marks <35) ? "E" : "FAIL";
console.log("your(ternary) Grade is : ",grade);