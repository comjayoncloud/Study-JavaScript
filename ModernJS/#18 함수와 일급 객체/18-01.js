/** 일급객체 */

// 1.무명의 리터럴로 생성할 수 있다
// 2.함수는 변수에 저장할 수 있다.
// 런타임에 생성이 가능하다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2.함수는 객체에 저장할 수 있다

// 3. 함수는 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

const auxs = { increase, decrease };

function makeCounter(aux) {
  let num = 0;
  return function () {
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

// 3. 함수는 매개변수에게 함수를 전달할 수 있다
const decreaseer = makeCounter(auxs.decrease);
console.log(decreaseer());
console.log(decreaseer());
