/** length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동갱신됨. */
const arr = [1, 2, 3];
console.log(arr.length);

arr.push(4);
console.log(arr.length);

arr.pop();
console.log(arr.length);
