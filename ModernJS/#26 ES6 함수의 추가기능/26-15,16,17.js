/** 위와 아래는 같음 */
const power = (x) => x ** 2;
power(2);

const power2 = (x) => {
  return x ** 2;
};

/** 에러 발생하는 경우 1 */
const arrow = () => const x = 1; // error
const arrow2 = () => {
  return (constx = 1); // 정상 작동
};

/** 이경우도 괜찮음 */
const arrow3 = () => {
  const x = 1;
};
