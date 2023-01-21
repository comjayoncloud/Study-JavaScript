const id = Symbol("id");
const user = {
  name: "jaewoo",
  age: 30,
  [id]: "myid",
};

console.log(user);
console.log(user[id]);
console.log(Object.keys(user)); // name,age만 나옴
