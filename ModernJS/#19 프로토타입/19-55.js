/** 객체 리터럴 내부에서 proto에 의한 직접 상속 */

const myProto = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
  y: 20,
  // 객체 직접 상속
  // obj -> myProto -> object.prototype -> null
  __proto__: myProto,
};

console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto);
