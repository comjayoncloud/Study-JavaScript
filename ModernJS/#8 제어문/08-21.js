/** outer라는 식별자가 붙은 for문 */
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`inner [${i},${j}]`);
  }
}

console.log("done");
