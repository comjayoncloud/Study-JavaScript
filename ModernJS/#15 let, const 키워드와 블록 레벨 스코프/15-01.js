/** var 문제점 1 : 변수 중복 선언 허용 */

var x = 1; // 전역변수 x -> 1
var y = 1;
var x = 100; // 전역변수 중복선언으로 x -> 100으로 변경
var y; // 초기화문이 없어서 무시

console.log(x); // 100
console.log(y); // 1
