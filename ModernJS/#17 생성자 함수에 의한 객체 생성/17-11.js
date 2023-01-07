/** this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return문에 명시한 객체가 반환된다. */

function Circle(radious) {
  this.radious = radious;
  this.getDiameter = function () {
    return this.radious * 2;
  };
  return {};
}

const circle = new Circle(1);
console.log(circle);
