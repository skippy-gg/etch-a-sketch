//==============================================================
//                      DOM ELEMENTS                           |
//==============================================================
//Divs
const main = document.getElementById('main');
const grid = document.getElementById('grid');
//Buttons
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');
//Input
const colorPicker = document.getElementById('colorPicker');

//==============================================================
//                      GRID FUNCTIONS                         |
//==============================================================
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

//==============================================================
//                   INITIALIZE LISTENERS                      |
//==============================================================
function initEventListeners(){
    colorBtn.addEventListener('click',draw);
    rainbowBtn.addEventListener('click',draw);
    eraseBtn.addEventListener('click',draw);
    clearBtn.addEventListener('click',draw);
}

//==============================================================
//                GENERATE RAINBOW COLORS                      |
//==============================================================
function rainbowColor(){
    let rainbowR = Math.random()*255;
    let rainbowG = Math.random()*255;
    let rainbowB = Math.random()*255;
    const rainbowColor = `rgb(${rainbowR}, ${rainbowG}, ${rainbowB})`; 
    return rainbowColor
}

//==============================================================
//                    BUTTON FUNCTIONS                         |
//==============================================================
function draw(e){
    //Color button
    if (e.target.textContent == "Color"){
        document.querySelectorAll('.grid-cell').forEach(cell => {
            cell.addEventListener('mouseover', event => {
                cell.style.backgroundColor = colorPicker.value;
            })
        })
    }
    //Rainbow button 
    else if (e.target.textContent == "Rainbow"){
        document.querySelectorAll('.grid-cell').forEach(cell => {
            cell.addEventListener('mouseover', event => {
                cell.style.backgroundColor = rainbowColor();
            })
        })
    }
    //Erase button
    else if (e.target.textContent == "Erase"){
        document.querySelectorAll('.grid-cell').forEach(cell => {
            cell.addEventListener('mouseover', event => {
                cell.style.backgroundColor = "white";
            })
        })
    }
    //Clear button
    else if (e.target.textContent == "Clear"){
        const gridSize = prompt("Enter your desired grid size: ");
        generateGrid(gridSize);
    }
}

//==============================================================
//                    START-UP FUNCTION CALLS                  |
//==============================================================
generateGrid(16);

initEventListeners();