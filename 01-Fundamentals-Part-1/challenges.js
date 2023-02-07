/*
888888888888888888888888
// Coding Challenge #1
888888888888888888888888
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

8888888888888888888888888
// Coding Challenge #2
8888888888888888888888888
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


8888888888888888888888888
// Coding Challenge #2
8888888888888888888888888

let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (88 + 91 + 110) / 3;
console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore)
  console.log("Dolphins wins the trophy");

if (koalasAverageScore > dolphinsAverageScore)
  console.log("Koalas wins the trophy");

if (koalasAverageScore === dolphinsAverageScore) console.log("it's a Draw 🥱");

// Bonus 1

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 106) / 3;
const minimumScore = 100;
console.log(dolphinsAverageScore, koalasAverageScore);
if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore > minimumScore
) {
  console.log("Dolphins wins the trophy");
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore > minimumScore
) {
  console.log("Koalas wins the trophy");
} else if (dolphinsAverageScore === koalasAverageScore) {
  console.log("it's a Draw 🥱");
}

// Bonus 2

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 123) / 3;
console.log(dolphinsAverageScore, koalasAverageScore);

if (
  dolphinsAverageScore > koalasAverageScore &&
  dolphinsAverageScore > minimumScore
) {
  console.log("Dolphins wins the trophy");
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore > minimumScore
) {
  console.log("Koalas wins the trophy");
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  (dolphinsAverageScore === koalasAverageScore) === minimumScore
) {
  console.log("it's a Draw 🥱");
} else {
  console.log("Sadly no team wins 😪");
}


8888888888888888888888888
// Coding Challenge #2
8888888888888888888888888


let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (88 + 91 + 110) / 3;
let score = dolphinsAverageScore - koalasAverageScore;
console.log(dolphinsAverageScore, koalasAverageScore, score);

if (score > 1) {
  console.log("Dolphins wins the trophy");
} else if (score < 1) {
  console.log("Koalas wins the trophy");
}

// BONAS 1
dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 106) / 3;
score = dolphinsAverageScore - koalasAverageScore;
const minimumScore = 100;

console.log(dolphinsAverageScore, koalasAverageScore, score);

if (score > 1 && dolphinsAverageScore >= minimumScore) {
  console.log("Dolphins wins the trophy");
} else if (score < 1 && koalasAverageScore >= minimumScore) {
  console.log("Koalas wins the trophy");
} else {
  console.log("it's a Draw 🥱");
}

// BONAS 2

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 123) / 3;
score = dolphinsAverageScore - koalasAverageScore;
console.log(dolphinsAverageScore, koalasAverageScore, score);

if (score > 1 && dolphinsAverageScore >= minimumScore) {
  console.log("Dolphins wins the trophy");
} else if (score < 1 && koalasAverageScore >= minimumScore) {
  console.log("Koalas wins the trophy");
} else if (score === 1 && koalasAverageScore <= minimumScore) {
  console.log("it's a Draw 🥱");
} else {
  console.log("Sadly no team wins 😪");
}

*/
