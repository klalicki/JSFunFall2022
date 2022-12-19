(() => {
  document.querySelector("#btn-submit").addEventListener("click", (e) => {
    e.preventDefault();
    //get values from form
    const color = document.querySelector("#input-color").value;
    const content = document.querySelector("#input-content").value;
    //create a new element and set its text and color
    const newElement = document.createElement("div");
    newElement.textContent = content;
    newElement.style.backgroundColor = color;
    newElement.addEventListener("click", (e) => {
      e.target.remove();
    });
    //add element to screen
    document.querySelector("#item-container").appendChild(newElement);
  });
})();
