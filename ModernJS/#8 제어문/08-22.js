/** 특정 문자의 인덱스 검색 예제 */
var string = "hello world";
var search = "l";
var index;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    index = i;
    break;
  }
}

console.log(index);

/** 위와 같은 동작을 하는 String.prototype.indexOf 메서드 */
console.log(string.indexOf(search));
