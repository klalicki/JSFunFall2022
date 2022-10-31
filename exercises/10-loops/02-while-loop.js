/**
 * Using a while loop, log the following numbers:
 * 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
 *
 * @example
 * logArrayWithWhile();
 * // 10
 * // 20
 * // 30
 * // 40
 * // 50
 * // 60
 * // 70
 * // 80
 * // 90
 * // 100
 */

const logWithWhile = () => {
  let num = 10;
  while (num <= 100) {
    console.log(num);
    num += 10;
  }
};

// IGNORE THIS BELOW. It is for the tests.

export default logWithWhile;
