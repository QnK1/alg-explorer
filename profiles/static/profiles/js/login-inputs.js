const usernameInput = document.querySelector('#login-form input[type="text"]');
const passwordInput = document.querySelector('#login-form input[type="password"]');

usernameInput.setAttribute('placeholder', 'username');
passwordInput.setAttribute('placeholder', 'password');

passwordInput.setAttribute('autocomplete', 'new-password');