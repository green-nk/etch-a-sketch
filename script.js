const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;

let numSquaresPerSide = 16;
let numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

const pad = document.querySelector(".pad");
createGrid();

const sizeBtn = document.querySelector("#size-btn");
sizeBtn.addEventListener("click", () => {
    do {
        numSquaresPerSide = +prompt(`Enter grid size between ${MIN_GRID_SIZE} and ${MAX_GRID_SIZE}`);
    } while (!validateGridSize(numSquaresPerSide));
    
    numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

    removeGrid();
    createGrid();
});

function createGrid() {
    const padSize = pad.clientWidth;
    const squareSize = padSize / numSquaresPerSide;
    
    for (let i = 0; i < numSquaresTotal; i++) {
        const cell = document.createElement("div");
        
        cell.classList.add("cell");
        cell.style.width = `${squareSize}px`;
        cell.style.height = `${squareSize}px`;
        
        cell.addEventListener("mouseenter", () => {
            cell.classList.add("hovered");
        });
        
        pad.appendChild(cell);
    }
};

function removeGrid() {
    while (pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
};

function validateGridSize(gridSize) {
    return gridSize && Number.isInteger(gridSize) && (gridSize >= MIN_GRID_SIZE && gridSize <= MAX_GRID_SIZE);
}
