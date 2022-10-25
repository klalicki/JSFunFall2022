/**
 * Create a function called "lowerCaseString".
 * If given a string, it should return the string lower cased.
 * @example lowerCaseString("HELLO WORLD"); // hello world
 *
 * If given a value that is not a string, this function should not throw an error.
 * @see https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
 * HINT: you will need to exit out of the function early.
 *
 * @param {string} str
 * @returns {string} str capitalized
 *
 * @example lowerCaseString(); // undefined (should not throw an error)
 * @example lowerCaseString(null); // undefined (should not throw an error)
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
const lowerCaseString = (isString) => {
  if (typeof isString === "string") {
    return isString.toLowerCase();
  }
  return isString;
};
console.log(lowerCaseString("Javascript!"));
console.log(lowerCaseString("HELP"));
console.log(lowerCaseString());
console.log(lowerCaseString(1024));
console.log(lowerCaseString("500BB"));
