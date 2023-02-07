/*
// Coding Challenge #1
// Data 1
// let johnsMass = 92;
// let johnsHeight = 1.95;

// let marksMass = 78;
// let marksHeight = 1.69;

// Data 2
johnsMass = 85;
johnsHeight = 1.76;

marksMass = 95;
marksHeight = 1.88;

const marksBMI = marksMass / (marksHeight * marksHeight);
const johnsBMI = johnsMass / johnsHeight ** 2;

const markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI, markHigherBMI);
*/
// Coding Challenge #2

let johnsMass = 92;
let johnsHeight = 1.95;

let marksMass = 78;
let marksHeight = 1.69;

// Data2
// johnsMass = 85;
// johnsHeight = 1.76;

// marksMass = 95;
// marksHeight = 1.88;

const marksBMI = marksMass / (marksHeight * marksHeight);
const johnsBMI = johnsMass / johnsHeight ** 2;

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnsBMI}! `);
} else {
  console.log(`John's BMI ${johnsBMI}  is higher than Mark's ${marksBMI}!`);
}
