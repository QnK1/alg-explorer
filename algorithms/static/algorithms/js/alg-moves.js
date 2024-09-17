
    const solveElement = document.querySelector('.solve-content');
    const solveText = solveElement.innerHTML.trim();
    
    const solveLines = solveText.split('<br>');

    let com;
    let linesComments = solveLines.map((l) => {
        com = l.match(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g);
        return [
            l.trim().replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '').trim().split(/[\s]+/),
            com ? com[0] : "",
        ];
    });

    let currMove = 0;

    const resultLines = linesComments.map((e) => 
        e[0].map((m) => `<span class="move" data-move="${currMove++}">${m}</span>`).join(" ") + " &nbsp;" + `<span class="solve-comment">${e[1]}</span>`
    );

    const result = resultLines.join("<br>");

    solveElement.innerHTML = result;
