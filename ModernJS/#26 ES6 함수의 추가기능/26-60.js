/** ES6에서 도입된 매개변수 기본값을 사용하면 함수내에서 수행하던 인수 체크 및 초기화를 간소화 할 수 있다. */

function logName(name = "jeong") {
  console.log(name);
}

logName();
logName(undefined);
logName(null);
