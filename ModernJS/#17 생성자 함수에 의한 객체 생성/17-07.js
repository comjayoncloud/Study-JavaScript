/** 생성자 함수가 인스턴스를 생성하는 것은 필수, 생성된 인스턴스를 초기화 하는 것은 옵션이다. */

// 생성자 함수
function Cricle(radious) {
  // 인스턴스 초기화
  this.radious = radious;
  this.getDiameter = function () {
    return 2 * this.radious;
  };
}

// 인스턴스 생성
const circle1 = new Cricle(5);
