const arr = [1];

// push 메서드는 원본배열을 직접 변경한다.
arr.push(2);
console.log(arr);

// concat 메서드는 원본배열을 직접 변경하지않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(result);
