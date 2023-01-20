/**
 * 선형 검색을 통해 배열에 특정요소 존재 여부 확인
 * 존재하면 인덱스 반환 , 존재하지 않으면 -1 반환
 */
function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));
