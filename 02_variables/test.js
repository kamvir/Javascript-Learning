const accountId = 12133;
let accountEmail = "abc@gmail.com"; // 
var accountPassword = "123456"; // Used 
accountCity = "Mumbai"; // Recommended not to do this. As it can cause issues in future. Always declare it with let, const or var
let accountState; // Returns undefined as no value is assigned to it.
/**
 * Prefer not to use var as it causes issues in block and functional scope.
 */

// accountId = 2; // Not allowed as it's declared as const
accountEmail = "anc@inc.in";
accountPassword = "23456";
accountCity = "Delhi";

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
