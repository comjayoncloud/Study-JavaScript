/** continue문 예제 */

var string = "hello world";
var search = "l";
var count = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) {
    continue;
  } else {
    count++;
    console.log(count);
  }
}

console.log(count);

/** String.prototype.match 메서드를 사용해도 결과는 같다. */

const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length);
