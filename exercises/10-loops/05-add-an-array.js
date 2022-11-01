/**
 * Add all of the numbers in an array and return the sum.
 * @param {array} numbers an array of numbers
 * @returns {number} the sum of all the numbers in an array
 *
 * @example add([1, 2, 3]); // 6
 */

const add = (numbers) => {
  // WRITE YOUR ANSWER HERE

  //let sumArray = [numbers]; //?? how to set up (get arguments into?) an array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};
add([16, 12, 2]);

// IGNORE THIS BELOW. It is for the tests.

export default add;
