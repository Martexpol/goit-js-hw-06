const abracadabra = document.getElementById("text");
const inputField = document.getElementById("font-size-control");

inputField.addEventListener("input", adjustFontSize);

function adjustFontSize (event) {
    const targetFontSize = event.currentTarget.value;
    abracadabra.style.fontSize = targetFontSize+'px';
}



