// Comparison of datatypes in javascript
// Basic
console.log(2 > 1);
console.log(2 == 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);

// Confusion starts here
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // Returns true.

/**
 * The reason is that the equality check == and comparisons >, <, >=, <= works differently. 
 * Comparisons converts null to a number, treating it as 0. 
 * That's why null >= 0 is true and null > 0 is false
 */

// Same with undefined. But here the result is always false
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); // Returns false.

// Strict equality check
console.log("2" == 2); // Returns true
console.log("2" === 2); // Returns false

// Note: Keep necessary code uncommented so you can view proper results.
