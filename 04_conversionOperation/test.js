// Datatype conversion confusion
let score = "33";
let scoreAlpha = "33abc";
let scoreNull = null;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(scoreNull);
console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "viraj" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
