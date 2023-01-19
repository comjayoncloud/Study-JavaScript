/** 생성자 함수 */
const User = function (name, age) {
  this.name = name;
  this.age = age;

  //   this.showName = function () {
  //     console.log(this.name);
  //   };
};

User.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User("Mike", 30);

/** 클래스 함수 */
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);

/** 차이점 */
// Mike는 객체 내부에 showName이 있고 , Tom은 prototype 내부에 showName이 있음.
// 사용법은 동일 mike.showName() , tom.showName();
// 두개를 동일하게 만들려면 생성자 함수안에 선언하지 않고 User.prototype.showName = function(){} 으로 추가
