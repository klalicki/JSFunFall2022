/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  document.querySelector("#ex1").src =
    "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  document.querySelector("#ex2").href =
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  document.querySelector("#ex3").textContent = "I am victorious!";
  document.querySelector("#ex4").style.backgroundColor = "lightYellow";
  document.querySelector("#ex5").classList.add("text-primary");
  if (document.querySelector("#ex6a").classList.contains("btn-primary")) {
    document.querySelector("#ex6b").textContent = "✓ blue";
  }
})();
