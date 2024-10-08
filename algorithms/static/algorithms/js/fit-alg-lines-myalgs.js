function outerHeight(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    return height;
}

window.addEventListener('load', () => {
    const algContents = [...document.querySelectorAll('.alg-content')];
    const containerHeight = outerHeight(document.querySelector('.alg-card-content'));
    const item1Height = outerHeight(document.querySelector('.alg-title-row'));
    const item2Height = outerHeight(document.querySelector('.alg-description'));
    const item3Height = outerHeight(document.querySelector('.card-bottom'));
    const algContentSpace = containerHeight - item1Height - item2Height - item3Height;


    const fitAlgLines = () => {
        let lineHeight;
        let lineCount;
        algContents.forEach((e) => {
            lineHeight = parseFloat(getComputedStyle(e).lineHeight);
            lineCount = Math.floor(algContentSpace / lineHeight);
            
            e.style = `height: ${lineCount * lineHeight}px`;
            
        });
    };

    fitAlgLines();
    window.addEventListener('resize', fitAlgLines);
});