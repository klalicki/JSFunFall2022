/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param {array} numbers array of numbers
 * @returns {number} the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
 *
 */

const highestNumber = (numbers) => {
  // WRITE YOUR ANSWER HERE

  let m = -Infinity,
    i = 0;
  for (; i != numbers.length; ++i) {
    if (numbers[i] > m) {
      m = numbers[i];
    }
  }
  return m;
};

console.log(highestNumber([30, 690, -242, 683]));

// IGNORE THIS BELOW. It is for the tests.

export default highestNumber;
