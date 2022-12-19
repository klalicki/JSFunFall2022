(() => {
  document.querySelector("#btn-submit").addEventListener("click", (e) => {
    e.preventDefault();
    const color = document.querySelector("#input-color").value;
    const content = document.querySelector("#input-content").value;
    const newElement = document.createElement("div");
    newElement.textContent = content;
    newElement.style.backgroundColor = color;
    document.querySelector("#item-container").appendChild(newElement);
    newElement.addEventListener('click', (e) => {
      e.target.remove()
    })
  });
})();
