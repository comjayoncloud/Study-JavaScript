var string = "hello world";
var search = "l";
var count = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++;
  }
}
console.log(count);
