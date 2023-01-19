/** super는 반드시 자식클래스의 constructor에서만 호출한다.
 * 자식 이 아닌 클래스의 constructor나 함수에서 super를 호출하면 에러발생. */

class Base {
  constructor() {
    super(); // error
  }
}

function foo() {
  super(); // error
}
