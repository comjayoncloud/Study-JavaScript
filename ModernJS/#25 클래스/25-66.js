/** 자식클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다. */

class Base {}

class Dervied extends Base {
  constructor() {
    // super 호출을 먼저하지 않았기에 this 참조 할수없어서 에러남.
    this.a = 1;
    super();
  }
}

const derived = new Dervied(1);
