const main = document.getElementById('main');
const grid = document.getElementById('grid');
const buttons = document.querySelectorAll('button');

function generateGrid(x){
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateRows =  `repeat(${x}, 1fr)`;
    for (i = 1; i<=(x**2); i++){
        const gridItem = document.createElement("div");
        gridItem.className = "grid-cell grid";
        grid.appendChild(gridItem);
    }
}

generateGrid(16);
