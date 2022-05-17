const loginForm = document.getElementById("login");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("form__input");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = login.username.value;
    const password = login.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})