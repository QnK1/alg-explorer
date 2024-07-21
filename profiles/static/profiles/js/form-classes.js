const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
const labels = document.querySelectorAll('label');

inputs.forEach((el) => {
    el.classList.add('login-register-input');
});

labels.forEach((el) => {
    el.classList.add('login-register-label');
});

