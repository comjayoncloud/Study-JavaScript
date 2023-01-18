/** 상속,프로토타입 */

const car = {
  wheels: 4,
  drive() {
    console.log("drive...");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
  //   wheels: 4,
  //   drive() {
  //     console.log("drive...");
  //   },
};
const benz = {
  color: "black",
  //   wheels: 4,
  //   drive() {
  //     console.log("drive...");
  //   },
};
const audi = {
  color: "blue",
  //   wheels: 4,
  //   drive() {
  //     console.log("drive...");
  //   },
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;
