/**
 * 숫자 요소들로 이루어진 배열은 의도한대로 정렬되지 않는다.
 * 숫자 요소를 정렬할 때는 정렬 순서를 정의하는 비교함수를 인수로 전달해야한다.
 */

const points = [40, 100, 1, 5, 2, 25, 10];

// 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a 를 우선정렬한다.
points.sort((a, b) => a - b);
console.log(points);
// 배열에서 최소/최대값 취득
console.log(points[0], points[points.length - 1]);

// 내림차순 정렬 .
points.sort((a, b) => b - a);
console.log(points);
// 배열에서 최소/최대값 취득
console.log(points[points.length - 1], points[0]);
