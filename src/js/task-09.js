"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.getElementsByClassName("change-color")[0];
const spanColor = document.getElementsByClassName("color")[0];

let color = getRandomHexColor();
document.body.style.backgroundColor=color;
spanColor.textContent=color;

btnChange.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  document.body.style.backgroundColor=color;
  spanColor.textContent=color;
})