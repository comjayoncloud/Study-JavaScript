/** 매개변수 primitive는 원시값을 전달받고, 매개변수 obj는 객체를 전달받는다 */
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "jeong";
}

/** 외부상태 */
var num = 100;
var person = { name: "lee" };

console.log(num); // 100
console.log(person); // {name:'lee'}

changeVal(num, person);
console.log(num); //100
console.log(person); // {name:'jeong'}

// 원시 값을 새로운 원시 값으로 교체,객체는 재할당 없이 직접 할당한 객체를 변경
