/** apply - apply 메서드는 함수 매개변수를 처리하는 방법을 제외하면 call과 동일.
 * call은 일반적인 함수와 마찬가지로 매개변수를 직접받지만 , apply는 매개변수를 배열로 받는다.  */

const mike = {
  hey: "mike",
};

const tom = {
  hello: "tom",
};

function showThisName() {
  console.log(this.name);
}

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.apply(mike, [1999, "singer"]);
console.log(mike); // { name: 'mike', birthYear: 1999, occupation: 'singer' }

update.apply(tom, [1999, "singer"]);
console.log(tom); // { name: 'mike', birthYear: 1999, occupation: 'singer' }
