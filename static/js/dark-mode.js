export function toggleDarkMode(body){
    if(body.dataset.theme === 'light'){
        body.dataset.theme = 'dark';
    } 
    else{
        body.dataset.theme = 'light';
    }

    localStorage.setItem('theme', body.dataset.theme);
}

export function loadDarkModeSettings(body){
    const storedTheme = localStorage.getItem('theme');

    if(storedTheme)
        body.dataset.theme = storedTheme;
}