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
  // WRITE YOUR ANSWER HERE
  let counter = 10;
  while (counter <= 100) {
    console.log(counter);
    counter = counter + 10;
  }
};

console.log(logWithWhile());

// IGNORE THIS BELOW. It is for the tests.

export default logWithWhile;
