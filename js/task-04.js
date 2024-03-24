let spanValue = document.getElementById("value");

function updateCounter(value) {
    spanValue.textContent = value;
  }

let counterValue =0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  counterValue -=1;
  updateCounter(counterValue);
});
incrementButton.addEventListener("click", () => {
  counterValue +=1;
  updateCounter(counterValue);
});
  