function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

colorButton.addEventListener("click", changeColor);

function changeColor () {
 const newColor = getRandomHexColor();
document.body.style.backgroundColor = newColor;
colorSpan.textContent = newColor;
}
