/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const img = document.querySelector("img");
  img.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  //
  const link = document.querySelector("#jsref");
  link.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  //
  const text = document.querySelector("#textchange");
  text.textContent = "I am victorious!";
  //
  const bgColor = document.querySelector("#colorchange");
  bgColor.style.backgroundColor = "#bbbbbb";
  //
  //const TxtClassColor = document.querySelector("text-info");
  //
  const divToHide = document.querySelector("#hide");
  divToHide.style.display = "none";

  const myButton = document.querySelector("#button1");
  if (myButton.classList.contains("btn-primary")) {
    myButton.textContent = "checkmark blue";
  }
})();
