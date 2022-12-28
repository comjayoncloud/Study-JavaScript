/** countinue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다 */
var string = "hello world";
var search = "l";
var count1 = 0;
var count2 = 0;
var count3 = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count1++;
  }
}
console.log(count1);

/** countinue 문을 사용하면 if 문 밖에 작성할 수 있다. */

for (var j = 0; j < string.length; j++) {
  // 'l'이 아니면 카운트2를 증가시키지 않는다
  if (string[j] !== search) {
    count3++;
    continue;
  }
  count2++;
}

console.log(count2);
console.log(count3);
