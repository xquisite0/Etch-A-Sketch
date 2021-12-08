function makeGrid(length=16) {
    if (length < 0) {
        alert('No negative numbers!');
        return;
    }
    if (length > 100) {
        alert('No numbers above 100!');
        return;
    }
    let rowDivs = document.createElement('div');
    rowDivs.classList.add('rowDivs');
    let container = document.querySelector('#container');
    for (let i = 1; i <= (length * length); i++) {
        let div = document.createElement('div');
        div.classList.add('div');
        rowDivs.appendChild(div);
        
        if (i % length === 0) {
            container.appendChild(rowDivs)
            rowDivs = document.createElement('div');
            rowDivs.classList.add('rowDivs');
        }
    }
    let divs = document.querySelectorAll('.div')
    divs.forEach(hoverChangeColor);
}

function hoverChangeColor(div) {
    div.addEventListener('mouseover', evt => {
        evt.target.style.backgroundColor = 'blue';
    });
}

makeGrid();



let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', evt => {
    document.querySelector('#container').textContent = '';
    let gridLength = parseInt(prompt('What is the new length of your grid? (nothing more than 100)'));
    console.log(gridLength);
    makeGrid(gridLength);
});



