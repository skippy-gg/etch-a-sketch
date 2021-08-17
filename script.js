
function btnSelection(e){
    const colorSelection = e.target.innerText;
    switch(colorSelection){
        case "Color":
            colorBtn()
            break;
        case "Rainbow":
            rainbowBtn()
            break;
        case "Black":
            console.log(e.target.innerText);
            gridCells.forEach(cell => cell.addEventListener('mouseover', blackBtn));
            break;
        case "Erase":
            gridCells.forEach(cell => cell.addEventListener('mouseover', eraseBtn));
            break;
        case "Clear":
            clearBtn()
    }
}

function colorBtn(){

}

function rainbowBtn(){
    const rainbow = "";
    e.target.style.backgroundColor = rainbow;
}

function blackBtn(e){
    e.target.style.backgroundColor = "black";
}

function eraseBtn(e){
    e.target.style.backgroundColor = "white";
}

function clearBtn(){
    const gridSize = prompt("Enter the desired grid size!", "16");
    document.getElementById("grid").remove();
    populateGrid(gridSize);
}

function initializeGrid(x){
    const main = document.getElementById('main');
    const newGrid = document.createElement("div");
    newGrid.className = "grid"
    newGrid.id = "grid"
    main.appendChild(newGrid);
}

function populateGrid(x){
    initializeGrid(x);
    const gridContainer = document.getElementById("grid");
    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridContainer.style.gridTemplateRows =  `repeat(${x}, 1fr)`;
    for (i = 1; i<=(x**2); i++){
        const gridItem = document.createElement("div");
        gridItem.className = "grid-cell grid";
        gridContainer.appendChild(gridItem);
    }
}

populateGrid(16);


const gridCells = document.querySelectorAll('.grid-cell');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', btnSelection));

