/** 단축평가를 사용한 매개변수의 기본값 설정 */
function getStringLength(str) {
  str = str || "";
  return console.log(str.length);
}

getStringLength(); // "" || "" (false || false -> 뒤의 false)
getStringLength("HI"); // "HI" ||"" (True || false -> True)

/** ES6의 매개변수의 기본값 설정 */
function getStringLength2(str = "") {
  return console.log(str.length);
}
getStringLength2();
getStringLength2("hi");
