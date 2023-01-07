/** 3.인스턴스 반환 */

function Circle(radious) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  // 2. this에 바인딩 되어있는 인스턴스를 초기화한다
  this.radious = radious;
  this.getDiameter = function () {
    return 2 * this.radious;
  };
  // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다.. return 다른거 쓰면 다른게 반환
}

// 인스턴스 생성. Circle 생성자함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);

console.log(circle);
console.log(circle.getDiameter());
