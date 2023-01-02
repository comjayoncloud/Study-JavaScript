/** ES5 */
var obj = {
  name: "lee",
  sayHi: function () {
    console.log("hi " + this.name);
  },
};

obj.sayHi();

//////////////////////////////////////////////////////////////////////////////

/** ES6 */

const obj2 = {
  name: "lee",
  sayHi() {
    console.log("Hi " + this.name);
  },
};

obj2.sayHi();
