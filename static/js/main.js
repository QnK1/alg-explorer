import { toggleDarkMode, loadDarkModeSettings } from "./dark-mode.js";

const body = document.getElementsByTagName('body')[0];
const themeButton = document.getElementById('theme-button');


// initial setup

loadDarkModeSettings(body);


// event handlers

themeButton.addEventListener('click', () => {
    toggleDarkMode(body);
});