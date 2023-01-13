// 생성자

function Circle(radious) {
  //this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radious = radious;
}

Circle.prototype.getDiameter = function () {
  //this는 생성자 함수가 생성할 인스턴스를 가리킨다.

  return 2 * this.radious;
};

const circle = new Circle(5);
console.log(circle.getDiameter());
