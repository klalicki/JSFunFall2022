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
  // Put your answers in here
  let li1 = document.querySelector("li");
  console.log(li1);
  let li2 = document.querySelector("#myId");
  console.log(li2);
  /******/
  let warnings = document.querySelectorAll(".bg-warning");
  for (let warning of warnings) {
    console.log(warning);
  }
  /********/
  let button = document.querySelector("#target-button");
  console.log(button);
  /*******/
  let anchors = document.querySelectorAll(".social");
  for (let anchor of anchors) {
    console.log(anchor);
    /********/
    let cells = document.querySelectorAll("");
  }
})();
