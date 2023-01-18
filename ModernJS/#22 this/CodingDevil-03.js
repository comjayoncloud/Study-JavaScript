/** bind - bind 메서드는 함수의 this값을 영구히 바꿀 수 있다. */

// const mike = {
//   name: "mike",
// };

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// const updateMike = update.bind(mike);

// updateMike(1990, "police");
// console.log(mike);

//------------------------------------------------------------------------//

const user = {
  name: "mike",
  showName: function () {
    console.log(`hello,${this.name}`);
  },
};

user.showName();

let fn = user.showName;
fn(); // hello undefined
fn.call(user);
fn.apply(user);

let boudnFn = fn.bind(user);

boudnFn();
