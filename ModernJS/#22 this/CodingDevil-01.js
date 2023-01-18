/** call - call 메서드는 모든 함수에서 사용할수 있으며 , this를 특정값으로 지정할 수 있다.  */

const mike = {
  hey: "mike",
};

const tom = {
  hello: "tom",
};

function showThisName() {
  console.log(this.name);
}

showThisName(); // undefined 다 .왜냐면 window 객체를 가르키기 때문
showThisName.call(mike); // call 사용하면 this 값을 지정해줄수있다.
showThisName.call(tom); // call 사용하면 this 값을 지정해줄수있다.

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1999, "singer");
console.log(mike); // { name: 'mike', birthYear: 1999, occupation: 'singer' }

update.call(tom, 1999, "singer");
console.log(tom); // { name: 'mike', birthYear: 1999, occupation: 'singer' }
