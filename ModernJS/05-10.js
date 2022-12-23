function foo() {
  return {};
  // ASI의 동작결과 => return; {};
  // 개발자의 예측 => return {};
}

console.log(foo()); // undefined

/** ASI와 개발자의 예측 심화 */
var bar = function () {};
(function () {})();
// ASI 결과 => var bar = function(){} (function(){})();
// 개발자 => var bar = function(){}; (function(){})();
// TypeError: (intermediate value)(...) is not a function
