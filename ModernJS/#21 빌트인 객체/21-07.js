const num = 1.5;

// 원시타입 -> number 객체로 변환
console.log(num.toFixed());

// 래퍼객체로 프로퍼티에 접근하거나 메서드를 호출한 후 , 다시 원시값으로 되돌림
console.log(typeof num, num);
