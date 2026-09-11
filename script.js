let numSquaresPerSide = 16;
let numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

const pad = document.querySelector(".pad");
createGrid();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    numSquaresPerSide = +prompt("Enter Grid Size (Max 100)");
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
