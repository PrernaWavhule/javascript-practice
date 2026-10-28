// Null and Undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// Empty String and Zero
console.log("" == 0); // true
console.log("" === 0); // false

// Boolean and Empty String
console.log(false == ""); // true
console.log(false === ""); // false

// Null and False
console.log(null == false); // false
console.log(null === false); // false

// Undefined and Zero
console.log(undefined == 0); // false
console.log(undefined === 0); // false

// NaN Comparison
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// String and Boolean
console.log(true == "true"); // false
console.log(true === "true"); // false

// String Num and Number
console.log("001" == 1); // true
console.log("010" == 10); // true

// Num and Null
console.log(null == 0); // false

// Num and undefined
console.log(undefined == 0); //false