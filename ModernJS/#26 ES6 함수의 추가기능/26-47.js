/** 화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다.
 *  this와 마찬가지로 상위 스코프의 super를 참조한다. */
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `hi ${this.name}`;
  }
}

class Derived extends Base {
  // 오버라이딩 메서드

  sayHi = () => {
    return `${super.sayHi()} how are you doing`;
  };
}

const derived = new Derived("jeong");
console.log(derived.sayHi());
