/** 생성자 함수 */
function Circle(radious) {
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다
  if (!new.target) {
    //new 연산자와 함께 생성자 함수를 재귀호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radious);
  }
  this.radious = radious;
  this.getDiameter = function () {
    return 2 * this.radious;
  };
}

// new 없이 호출해도 new.target을 통해 생성자 함수로서 호출됨.
const circle = Circle(5);
console.log(circle.getDiameter());
