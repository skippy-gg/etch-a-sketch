const main = document.getElementById('main');
const grid = document.getElementById('grid');
const buttons = document.querySelectorAll('button');

function generateGrid(x){
    resetGrid(x);
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateRows =  `repeat(${x}, 1fr)`;
    for (i = 0; i<(x**2); i++){
        let gridItem = document.createElement("div");
        gridItem.className = "grid-cell";
        grid.appendChild(gridItem);
    }
}

function resetGrid(x){
    let nodeList = grid.childNodes;
    while(nodeList.length>0){
        grid.firstChild.remove()
    }
}

generateGrid(1);
generateGrid(2);

