/**
 * Using a for loop, lop through an array
 * and log each item with console.log
 * @param {array} array
 *
 * @example
 * const array = ["Honda", "Ford", "Ferrari"];
 * logArrayWithFor(array);
 * // Honda
 * // Ford
 * // Ferrari
 */

const logArrayWithFor = (array) => {
  // WRITE YOUR ANSWER HERE
  let array2 = ["Honda", "Ford", "Ferrari"];
  for (let car of array2) {
    console.log(car);
  }
};

// IGNORE THIS BELOW. It is for the tests.

export default logArrayWithFor;
