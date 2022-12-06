/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  document.querySelector('[data-exercise="1"]').src =
    "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

  document.querySelector('[data-exercise="2"]').href =
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  document.querySelector('[data-exercise="3"]').textContent =
    "I am victorious!";
  document.querySelector('[data-exercise="4"]').style.backgroundColor =
    "lightYellow";
  document.querySelector('[data-exercise="5"]').classList.add("text-primary");
  document.querySelector('[data-exercise="6"]').style.display = "none";
  document.querySelector('[data-exercise="7"]').classList.remove("hidden");
  if (
    document
      .querySelector('[data-exercise="8a"]')
      .classList.contains("btn-primary")
  ) {
    document.querySelector('[data-exercise="8b"]').textContent = "&check; blue";
  }
})();
