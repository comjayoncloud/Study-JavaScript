/** 생성자 함수가 아닌 일반 함수 */

function add(x, y) {
  return x + y;
}

/** 위의 입란 함수를 new 연산자와 호출 */
let inst = new add();

console.log(inst);

/** 객체를 반환하는 일반 함수 */
function createUser(name, role) {
  return { name, role };
}

inst = new createUser("jeong", "admin");
console.log(inst);
