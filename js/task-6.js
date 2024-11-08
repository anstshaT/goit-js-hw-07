const divEl = document.querySelector("#boxes");
const input = document.querySelector(`input[type="number"]`);
const create = document.querySelector(`button[data-create]`);
const destroy = document.querySelector(`button[data-destroy]`);

let size = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", handleDestroy);

function createMarkup() {
  if (Number(input.value) < 0 || Number(input.value) > 100) {
    alert("Error: the number should not exceed 100");
    console.log("error");
    return;
  }

  createBoxes(input.value);
}

function createBoxes(amount) {
  divEl.innerHTML = "";
  const arr = [];

  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${size}px`;
    myBox.style.height = `${size}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    arr.push(myBox);
    size += 10;
  }

  divEl.append(...arr);
}

function handleDestroy() {
  divEl.innerHTML = "";
  input.value = "";
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}