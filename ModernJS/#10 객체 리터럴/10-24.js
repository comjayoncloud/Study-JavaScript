/** ES6 */

const obj = {
  name: "lee",
  sayHi() {
    console.log("Hi " + this.name);
  },
};

obj.sayHi();

/** ES5 */
var obj2 = {
  name: "lee",
  sayHi: function () {
    console.log("hi " + this.name);
  },
};

obj2.sayHi();
