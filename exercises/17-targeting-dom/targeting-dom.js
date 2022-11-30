/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  const singleElement = document.querySelector("li");
  console.log(singleElement);

  const groupOfElements = document.querySelectorAll("li.bg-warning");
  groupOfElements.forEach((item) => {
    console.log(item);
  });

  const btnTargetMe = document.querySelector("#btn-target");
  console.log(btnTargetMe);

  const socialLinks = document.querySelectorAll(
    "[data-link-type='link-social']"
  );
  socialLinks.forEach((item) => {
    console.log(item);
  });

  const nestedElements = document.querySelectorAll("#myRow div");
  nestedElements.forEach((item) => {
    console.log(item);
  });
})();
