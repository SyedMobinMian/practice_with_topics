// Story Summary:
// - You start with ₹1.
// - Each day, the amount doubles — like magic!
// - By Day 30, you've accumulated over ₹1,073,741,823 — enough to buy a palace, a spaceship, or maybe just a lifetime supply of samosas.


//  The Tale of the Magic Coin 
// Once upon a time in Rampur, a curious coder found a magical coin.
// Each day, the coin would double in value. Let's see how rich they became in 30 days!

let amount = 1; // Starting with ₹1 on Day 1
let total = 0;  // This will hold the total amount after 30 days

console.log("The Journey Begins...\n");

for (let day = 1; day <= 30; day++) {

  // Add today's amount to the total
  total += amount;

  // Tell the story of today's riches
  console.log(`Day ${day}: The coin is worth ₹${amount}`);

  // The magic happens — the coin doubles overnight!
  amount *= 2;
}

console.log("\n The Magic Ends...");
console.log(`After 30 days, In total. The curious coder had ₹${total.toLocaleString()} in total!`);