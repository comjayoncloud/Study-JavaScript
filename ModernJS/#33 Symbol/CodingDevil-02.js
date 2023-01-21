// 다른 개발자가 만들어놓은 객체
const user = {
  name: "jeong",
  age: 30,
};

// 내가 작업
// user.showName = function () {}; // 이부분은 보여주고 싶지않는데..
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보는 메시지
for (let key in user) {
  console.log(`his ${key} is ${user[key]}`);
}

// Symbol을 확인하는 방법 2가지
confirm1 = Object.getOwnPropertySymbols(user);
console.log(confirm1);

confirm2 = Reflect.ownKeys(user);
console.log(confirm2);
