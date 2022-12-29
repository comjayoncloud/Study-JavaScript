/** if 문을 대체하는 예제 */
var done = true;
var message = "";

/** message = '완료' */
if (done) message = "완료";

/** true && true => true */
message = done && "완료"; // 완료

console.log(message);
