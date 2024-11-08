const backgroundBody = document.querySelector("body");
const changeColBtn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

changeColBtn.addEventListener("click", handelBtn);

function handelBtn() {
  backgroundBody.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}