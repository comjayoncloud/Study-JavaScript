/** foo 라는 레이블 식별자가 붙은 레이블 문 */
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출
  console.log(2);
}

console.log("done");
