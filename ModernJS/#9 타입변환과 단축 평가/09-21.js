/** if 문을 대체하는 예제 */
var done = false;
var message = "";

/** message = '완료' */
if (done) message = "미완료";

/** false || false */
message = done || "미완료";
console.log(message); // 미완료
