/** 생성자 함수의 장점! */

function Cricle(radious) {
  this.radious = radious;
  this.getDiameter = function () {
    return 2 * this.radious;
  };
}

const circle1 = new Cricle(5);
const circle2 = new Cricle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
