/** 2. 인스턴스 초기화 */

function Circle(radious) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  // 2. this에 바인딩 되어있는 인스턴스를 초기화한다
  this.radious = radious;
  this.getDiameter = function () {
    return 2 * this.radious;
  };
}
