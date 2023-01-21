/** 스프레드 이전에는 배열을 펼쳐서 요소들의 목록을
 * 함수의 인수로 전달하고 싶은경우
 * Fucntion.prototype.apply를 사용했다. */

var arr = [1, 2, 3];

var max = Math.max.apply(null, arr);
console.log(max);

/** 스프레드 나온이후? */
const arr1 = [1, 2, 3];
const max1 = Math.max(...arr1);
console.log(max1);
