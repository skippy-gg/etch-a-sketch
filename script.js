
function initializeGrid(x){
    const gridContainer = document.getElementById("grid");
    return gridContainer;
}

function populateGrid(x){
    const gridContainer = initializeGrid(x);
    for (i = 1; i<=(x**2); i++){
        const gridItem = document.createElement("div");
        gridItem.className = "grid-cell grid";
        gridContainer.appendChild(gridItem);
    }
}

populateGrid(16);
