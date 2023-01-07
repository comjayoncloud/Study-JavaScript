/** 비효율적인 객체 리터럴 예제 */

const circle1 = {
  radious: 5,
  getDiameter() {
    return 2 * this.radious;
  },
};

console.log(circle1.getDiameter());

const circle2 = {
  radious: 10,
  getDiameter() {
    return 2 * this.radious;
  },
};

console.log(circle2.getDiameter());
