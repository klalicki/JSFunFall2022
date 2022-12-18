const createElementButton = document.querySelector("#create-element-button");
const container = document.querySelector("#container");

createElementButton.addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.innerHTML = "This is a new element";
  container.appendChild(newElement);
});
