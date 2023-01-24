function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyElement = document.querySelector('body');
const spanElement = document.querySelector(".color");
const btnElement = document.querySelector(".change-color");
btnElement.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  event.preventDefault();
  bodyElement.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = bodyElement
    .getAttribute("style")
    .replace("background-color:", "");
}