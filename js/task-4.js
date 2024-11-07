const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault(); 

    const elements = event.target.elements;

    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    };

    if (info.email === "" || info.password === "") {
        alert(`All form fields must be filled in`);
    } else {
        console.log(info);
        event.target.reset();
    }
}