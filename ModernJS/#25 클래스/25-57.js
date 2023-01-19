/** extends 키워드는 클래스 뿐만 아니라 생성자 함수를 상속받아 클래스를 확장할 수도 있다.
 *  단 , extends 키워드 앞에는 반드시 클래스가 와야한다. */

function Base(a) {
  this.a = a;
}

/** 생성자 함수를 상속받는 서브 클래스 */
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived);
