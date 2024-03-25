function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');
const boxesDiv = document.getElementById('boxes');
// const createdDivs = boxesDiv.getElementsByTagName('div').length;


function createBoxes (amount) {
  let boxSize = 30;
    for(let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      
      box.style.width = boxSize + "px";
      box.style.height = boxSize + "px";
      box.style.backgroundColor = getRandomHexColor();
      box.id = "box";
      boxesDiv.appendChild(box);
      boxSize = boxSize + 10;
     }
    
}

createButton.addEventListener("click", provideAmount);
function provideAmount() {
  const amount = +input.value;
  createBoxes(amount);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

destroyButton.addEventListener('click', function() {
  destroyBoxes();
});