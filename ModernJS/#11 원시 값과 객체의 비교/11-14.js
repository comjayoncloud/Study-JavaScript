const o = { x: { y: 1 } };

/** 얕은 복사 */
const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o.x);

/** lodash cloneDeep을 사용한 깊은복사 */
// npm install lodash 설치후 node.js 환경에서 실행
const _ = require("lodash");

/** 깊은 복사 */
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);
