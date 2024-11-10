const backgroundBody = document.querySelector("body");
const changeColBtn = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

changeColBtn.addEventListener("click", handelBtn);

function handelBtn() {
  const color = getRandomHexColor();
  backgroundBody.style.backgroundColor = color;
  spanEl.textContent = color;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}