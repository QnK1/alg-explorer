const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const slider = document.getElementById('home-slider');
const bgSlider = document.getElementById('home-bg-slider');
const dots = [...document.querySelectorAll('#slider-controls i')];
const lastSlide = 5;

const loadSlide = (n) => {
    if(n > lastSlide || n < 1)
        return;

    slider.classList.remove('slider-error');
    bgSlider.classList.remove('bg-error');

    for(let i = 1; i <= lastSlide; ++i){
        slider.classList.remove(`slide${i}-active`);
        bgSlider.classList.remove(`bg${i}-active`);
    }

    slider.classList.add(`slide${n}-active`);
    bgSlider.classList.add(`bg${n}-active`);

    for(let i = 1; i <= lastSlide; ++i){
        if(i <= n)
            dots[i - 1].classList.replace('fa-regular', 'fa-solid');
        else
            dots[i - 1].classList.replace('fa-solid', 'fa-regular');
    }
        

    if(n == lastSlide){
        leftArrow.classList.add('left-arrow-visible');
        rightArrow.classList.add('right-arrow-invisible');
    }
    else{
        leftArrow.classList.remove('left-arrow-visible');
        rightArrow.classList.remove('right-arrow-invisible');
    }


    slider.dataset.currSlide = n;
};

rightArrow.addEventListener('click', (e) => {
    let currSlide = parseInt(slider.dataset.currSlide);
    loadSlide(currSlide + 1);
});

leftArrow.addEventListener('click', () => {
    loadSlide(lastSlide - 1);
});

dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        const dotId = e.target.dataset.dot;

        loadSlide(parseInt(dotId));
    });
});
