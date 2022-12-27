/** 줄바꿈 허용되지 않음 -> error*/
var str = 'hello
world';

/** 이스케이프 시퀀스  */
var str = `hello \n world`;
var str = `hello hello \r world`;

console.log(str);
