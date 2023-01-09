/** 생성자 함수 */
function Circle(radious) {
  this.radious = radious;
  this.getDiameter = function () {
    return 2 * this.radious;
  };
}

// 일반 함수로써 호출됨
const circle = Circle(5);
console.log(circle);

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다
console.log(radious);
console.log(getDiameter());

circle.getDiameter(); // error
