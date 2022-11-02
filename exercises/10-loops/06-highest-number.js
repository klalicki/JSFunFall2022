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

  // I adopted this solution from https://stackoverflow.com/questions/54623431/find-the-biggest-number-in-an-array-by-using-javascript-loops
  //Answered by user Jack Bashford

  let highNum = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highNum) {
      highNum = numbers[i];
    }
  }
  return highNum;
};

console.log(highestNumber([30, 690, -242, 683]));

// IGNORE THIS BELOW. It is for the tests.

export default highestNumber;
