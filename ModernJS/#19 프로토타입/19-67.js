const person = {
  name: "jeong",
  address: "inchoen",
  __proto__: { age: 20 },
};

for (const key in person) {
  console.log(key + ":" + person[key]);
}
