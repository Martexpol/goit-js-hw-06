const validationInput = document.getElementById("validation-input");

const allowedLength = Number(validationInput.getAttribute("data-length"));
validationInput.addEventListener("blur", checkLength);

function checkLength(event) {
    const inputLength = event.currentTarget.value.length;
        if (inputLength !== allowedLength) {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
}
    else {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
}
}