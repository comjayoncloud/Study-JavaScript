/** Boolean 생성자 함수를 new 연산자 없이 호출하는 방법 */
Boolean("x"); // true
Boolean(""); // false
Boolean("false"); // true
Boolean(0);
Boolean(1);
Boolean(NaN); // false
Boolean(Infinity); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean({}); // true
Boolean([]); // true

/** ! 부정 논리 연산자를 두 번 사용하는 방법 */
!!"x"; // true
!!""; // false
!!"false"; // true
!!0; // false
!!1; // true
!!NaN; // false
!!Infinity; // true
!!null; // false
!!undefined; // false
!!{}; // true
!![]; // true
