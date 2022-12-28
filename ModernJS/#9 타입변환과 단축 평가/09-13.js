/** 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다 */

function isFalsy(v) {
  return console.log(!v);
}

/** 전달받은 인수가 Truthy 값이면 true, Falsy값이면 false를 반환 */
function isTruthy(v) {
  return console.log(!!v);
}

isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy("");

isTruthy(true);
isTruthy("0"); // 왜 true가 나올까? 빈 문자열이 아닌 문자열은 Truthy 값이다!
isTruthy({});
isTruthy([]);
