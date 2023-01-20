/** 화살표 함수 쓰지 않았을때 */
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    // 1번 시점의 this
    return arr.map(function (item) {
      return this.prefix + item; // 2번 시점의 this
    });
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));

// 1번 시점의 this와 2번 시점의 this가 다른것을 가리킨다. ES6 이전에는 이를 해결하기위해
// 1번 시점에서 const that = this; 를 선언후 2번시점에서 that을 참조했었다.

/** 화살표 함수 썼을때 */
class Prefixer1 {
  constructor(prefix) {
    this.prefix = prefix;
  }
  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer1 = new Prefixer("-webkit-");
console.log(prefixer.add[("transition", "user-select")]);
