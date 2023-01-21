const array = [1, 2, 3];

// Symbol.iterator 메서드는 이터레이터를 반환. 이터레이터는 next 메서드를 갖음
const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
