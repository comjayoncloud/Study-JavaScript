/** if else 문을 대체하는 삼항 조건 연산자 예제 */
var done = true;
var message = "";

/** message = '완료' */
if (done) message = "완료";
else message = "미완료";
console.log(message); // 완료

message = done ? "완료" : "미완료";

console.log(message); // 완료
