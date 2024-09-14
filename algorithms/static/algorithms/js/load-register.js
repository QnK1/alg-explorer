slider.classList.add('slider-error');
bgSlider.classList.add('bg-error');
    
for(let i = 1; i <= lastSlide; ++i){
    if(i <= lastSlide)
        dots[i - 1].classList.replace('fa-regular', 'fa-solid');
    else
        dots[i - 1].classList.replace('fa-solid', 'fa-regular');
}

for(let i = 1; i <= lastSlide; ++i){
    dots[i - 1].classList.replace('fa-regular', 'fa-solid');
        
}

leftArrow.classList.add('left-arrow-visible');
rightArrow.classList.add('right-arrow-invisible');

slider.dataset.currSlide = lastSlide;