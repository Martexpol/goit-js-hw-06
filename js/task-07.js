const abracadabra = document.getElementById("text");
const inputField = document.getElementById("font-size-control");

const baseFontSize = 50;
abracadabra.style.fontSize = baseFontSize + 'px';
inputField.setAttribute('value', baseFontSize);

inputField.addEventListener("input", adjustFontSize);

function adjustFontSize (event) {
    const targetFontSize = event.currentTarget.value;
    abracadabra.style.fontSize = targetFontSize + 'px';
}



