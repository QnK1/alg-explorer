
    const solveElement = document.querySelector('.solve-content');
    const solveText = solveElement.innerHTML.trim();
    
    const solveLines = solveText.split('<br>');

    let linesComments = solveLines.map((l) => [
        l.trim().replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '').trim().split(/[\s]+/),
        l.match(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g)[0],
    ]);

    let currMove = 0;

    const resultLines = linesComments.map((e) => 
        e[0].map((m) => `<span class="move" data-move="${currMove++}">${m}</span>`).join(" ") + " " + `<span class="solve-comment">${e[1]}</span>`
    );

    const result = resultLines.join("<br>");

    solveElement.innerHTML = result;
