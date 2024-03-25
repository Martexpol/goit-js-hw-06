function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');

function createBoxes (amount) {
  const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = '';

    let boxSize = 30;
    for(i=0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = boxSize + "px";
      box.style.height = boxSize + "px";
      box.style.backgroundColor = getRandomHexColor();
      // boxesDiv.appendChild(box);
      boxSize = boxSize + 10;
    }
}

createButton.addEventListener("click", provideAmount);
function provideAmount(input) {
  const amount = +input.value;
  console.log(amount);
  createBoxes(amount);
}
