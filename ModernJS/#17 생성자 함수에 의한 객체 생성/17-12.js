/** 명시적으로 원시 값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다 */

function Circle(radious) {
  this.radious = radious;
  this.getDiameter = function () {
    return this.radious * 2;
  };
  return 100;
}

const circle = new Circle(1);
console.log(circle);
