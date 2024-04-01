const loginForm = document.querySelector(".login-form");
const inputEmail = document.getElementsByName("email");
const inputPassword = document.getElementsByName("password");


loginForm.addEventListener("submit", handleSubmit);

const emailInput = loginForm.elements['email'];
const passwordInput = loginForm.elements['password'];
let elements;

function handleSubmit(event) {
    event.preventDefault();
    if (emailInput.value === ''|| passwordInput.value === '') {
        alert("Please fill in all fields.");
    } else {
        const elements = {
            email: emailInput.value,
            password: passwordInput.value
          };
        console.log(elements);
        loginForm.reset();
    }

  }