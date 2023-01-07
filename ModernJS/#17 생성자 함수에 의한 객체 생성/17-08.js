/** 1. 인스턴스 생성과 this 바인딩 */

function Circle(radious) {
  // 암묵적으로 인스턴스가 생성되고 this에 바인딩된다
  console.log(this); // Circle{}

  this.radious = radious;
  this.getDiameter = function () {
    return 2 * this.radious;
  };
}

Circle();
