/** 객체를 요소로 갖는 배열을 정렬하는 예제 */

const todos = [
  { id: 4, content: "Javascript" },
  { id: 1, content: "html" },
  { id: 2, content: "css" },
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

// id 기준으로 오름차순
todos.sort(compare("id"));
console.log(todos);

// content 기준으로 오름차순
todos.sort(compare("content"));
console.log(todos);
