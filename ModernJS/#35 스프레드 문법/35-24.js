/** 객체 병합 */
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged);

/** 특정 프로퍼티 변경 */
const changed = { ...{ x: 1, y: 2 }, y: 100 };
console.log(changed);

/** 프로퍼티 추가 */
const added = { ...{ x: 1, y: 2 }, z: 0 };
console.log(added);
