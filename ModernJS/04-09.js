console.log(score); // 2번째로 실행

var score = 80; // 1번으로 실행된다.
// 주의할점은! 변수 선언과 값의 할당을 한 문장에 써도.. 두부분으로 나누어서 진행된다
// 즉, var score ;만 실행 변수 선언 (defined)만 먼저 실행된다
// 3번째로 실행 될때는 score = 80 ; 값 할당 해줌

console.log(score); // 4번째로 실행
