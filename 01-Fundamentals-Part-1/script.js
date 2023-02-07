/*
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

// Values and Variables
console.log("jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

// Data Types
let = javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// 888888888888888888
// let, const and var
//8888888888888888888

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990
// const job

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);

// 888888888888888888
// Basic Operators
// 888888888888888888

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // X = X + 10 = 25
x *= 4; // X = X * 4 = 100
x++; // X = X + 1
x--; // X = X - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // > , < , >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// 888888888888888888
// Operator Precedence
// 888888888888888888

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



// 888888888888888888
// Strings and Template Literals
// 888888888888888888
const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "string with \n\
maltible\n\
lines"
);

console.log(`string with 
multible 
lines`);



// 888888888888888888
// Taking Decisions: if / else Statements
// 888888888888888888
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license 🍅`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}

const birthYear = 2011;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



// 888888888888888888
// Type Conversion and Coercion
// 888888888888888888

// type convertion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coertion
console.log("I'am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; //11
n = n - 1;
console.log(n);


// 888888888888888888
// Truthy and Falsy Values
// 888888888888888888

// 5 falsy values: 0 , undefined , null , NaN , ""

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("you should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defid");
} else {
  console.log("Height is UNDEFINED");
}


// 888888888888888888
// Equality Operators: == vs. ===
// 888888888888888888
const age = "18";
if (age === 18) console.log("You just become an adult :D (strict)");

if (age == 18) console.log("You just become an adult :D (loose)");

const favourite = prompt("what is your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a gool number");
} else if (favourite === 9) {
  console.log("9 is also a gool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23?");
*/

// 888888888888888888
// Logical Operators
// 888888888888888888

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Some one else should drive...");
// }

const isTired = false; // C
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Some one else should drive...");
}
