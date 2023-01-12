/** 원시값과 래퍼 객체 */

const str = "jaewoo";

// 원시 타입인 문자열이 래퍼객체인 Strinig 인스턴스로 변환된다.
console.log(str.length);
console.log(str.toUpperCase);

// 래퍼객체로 프로퍼티에 접근하거나 메서드를 호출한 후 , 다시 원시값으로 되돌린다
console.log(typeof str);
