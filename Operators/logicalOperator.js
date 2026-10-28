// && AND Operator (First falsy and last Truthy)
console.log(false && "hello"); // false
console.log(0 && "hello"); // 0
console.log("" && "hello"); // ""

console.log("hi" && "hello"); // hello
console.log(123 && 0); // 0

// || OR Operator (First Truthy Value)
console.log(true || "hello"); // true
console.log("hi" || "Hello"); // hi
console.log("" || "default"); // default
console.log(0 || null || "found"); // found

// ! NOT Operator 
console.log(!""); // true
console.log(!123); // false
console.log(!0); // true
console.log(![]); // false
console.log(!{}); // false
console.log(!false); true
console.log(!true); false
