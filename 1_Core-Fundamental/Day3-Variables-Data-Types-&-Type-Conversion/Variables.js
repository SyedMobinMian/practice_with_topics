/*🔹 Variables (dabba 🪣 analogy)
*       Variable = ek dabba jisme aap data rakhte ho.
*       var → purana style (problematic, avoid karna chahiye).
*       let → modern, block-scoped (use this mostly).
*       const → constant value (change nahi hoti).
*/

var oldName = "var example" //avoid
let name = "Ali"            //prefered
const pi = 3.1416           //cannot be reassigned

/*
*👉 Rule:
*   Agar value badalni hai → let
*   Agar value fix hai → const
*/


// ########## Data Types (JS me 2 categories)  ##########
/*
*   1) primitive(single value)
*       string  -> "Hello"
*       Number  -> 32
*       Boolean -> true/false
*       Null    -> null (intentionally empty)
*       Undefined -> variable decleared but not assigned
*       Symbol  -> unique value
*       BigInt -> very large integers
*   
*/

let str = "Hello";      // string
let age = 32;           // number
let isCool = true;      // boolean
let x = null;           // null
let y;                  // undefined


/*
*   2) Non Primitive(reference type)
*       object  -> {key : value}
*       Array  -> [1,2,3,4]
*       Function -> function(){}
*/