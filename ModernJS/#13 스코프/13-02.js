var var1 = 1;
if (true) {
  var var2 = 2;
  if (true) {
    var var3 = 3;
  }
}

function foo() {
  var var4 = 4;
  console.log(4);
  function bar() {
    var var5 = 5;
    console.log(5);
  }
}

console.log(var1);
console.log(var2);
console.log(var3);
// console.log(var4); // error
// console.log(var5); // error
console.log(foo());
// console.log(bar()); // error
