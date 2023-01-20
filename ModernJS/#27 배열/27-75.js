/** Array.prototype.join  */
const arr = [1, 2, 3, 4];

console.log(arr.join());
console.log(arr.join(""));
console.log(arr.join(":"));

arr.join("");
console.log(arr.join(""));
console.log(arr);

// 원본 배열 변경하지 않음.
