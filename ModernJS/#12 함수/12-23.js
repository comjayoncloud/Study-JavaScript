function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("error!");
  }
  return x + y;
}

console.log(add(2));
console.log(add("a", "b"));
