let score = false;

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
let valueInNumber = Number(score);

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

let isLoggedIn = -565;

// any numeric value other than 0 => true; 0 => false;
// "" => false
// "Vivek" => true
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

let someNumber = -24;

// 24 => "24"
let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

// **** operations ****
// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log("vivek"+" maniyar"); // vivek maniyar
// console.log("vivek" - " maniyar"); // NaN
// console.log("1"+2); // 12
// console.log(1+"2"); // 12
// console.log("1"+2+3); // 123
// console.log(1+2+"3"); // 33

// Pre Increment
let x = 3;
let y = ++x;

// console.log("x "+x); // 4
// console.log("y "+y); // 4

// Post Increment
x = 4;
y = x++;

// console.log("x"+x); // 5
// console.log("y"+y); // 4

// Pre Decrement
x = 5;
y = --x;

// console.log("x"+x); // 4
// console.log("y"+y) // 4

// Post Decrement
x = 4;
y = x--;

// console.log("x"+x); // 3
// console.log("y"+y); // 4