// Dono values compare karte hain.
let p = 10, q = "10";

console.log(p == q);   // true (only value compare)
console.log(p === q);  // false (value + type compare)
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p <= 10);  // true


// 👉 Rule: Always prefer === aur !== (strict check).