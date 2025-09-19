// let score = 33
// let score = "33"
// let score = "33abc"
// let score =  null
let score = undefined
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// 33 => 33
// "33" => 33
// "33abc" => NaN [not a number]
// null => 0
// undefined => NaN
// true => 1 and false => 0
// "Aman" => NaN

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Aman"
let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof BooleanisLoggedIn);
console.log(BooleanisLoggedIn);


// 1 => true and 0 => false
// "" => false
// "Aman" = true


let age = 33
let StringisAge = String(age)
console.log(typeof StringisAge);
console.log(StringisAge)

// ******************** Operations ********************

let value = 3
let negvalue = -value
console.log(negvalue);


let str1 = "hello"
let str2 =  " Aman"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) *  5 % 3);

console.log(true);
console.log(+true);
// console.log(true+);  we cannot do this , it will give us error
console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);







 
