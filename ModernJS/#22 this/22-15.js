const person = {
  name: "jeong",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    return this.name;
  },
};

// 메서드 getName을 호출한 객체는 person이다.
console.log(person.getName());

const anotherPerson = {
  name: "kim",
};

anotherPerson.getName = person.getName;

// getName 메서드를 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName());

// getName 메서드를 변수에 할당
const getName = person.getName;

// getName 메서드를 일반함수로 호출
console.log(getName()); // undefined
