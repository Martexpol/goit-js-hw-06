const nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", updateName);

function updateName(event) {
    const newOutput = event.currentTarget.value;
    console.log(newOutput);
    if (newOutput === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
    nameOutput.textContent = newOutput;
    }
}