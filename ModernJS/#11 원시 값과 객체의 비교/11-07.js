var score = 80; // 원시값
var copy = score; // 80 = 80 값에 의한 전달

console.log(score, copy); // 80 , 80
console.log(score === copy); // true

score = 100;

console.log(score, copy); // 100 , 80
console.log(score === copy); // false
