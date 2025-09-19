// These are the ways to store var in memory
const accountId = 142356
let accountCity = "jaipur"

// we should avoid to declare variable using var 
// because of issue in scope block and functional block
var accounEmail  = "Aman@gmail.com"

// when we do not assign the values, only need to reserve memory for this var,
// for future use and now its give us "Undefined Value".
let accounState;

// we can declare variable like this, we should avoid
accountPassword = 12345 

// accountId = 234  we cannot change constant varibale in js

accounEmail = "sarvan@gmail.com"
accountCity = "Bengaluru"
accountPassword = 345

// This are the ways to print var in js
console.log(accounEmail);
console.table([accountId, accountCity,accounEmail,accountPassword,accounState]);

