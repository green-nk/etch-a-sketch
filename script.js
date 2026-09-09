let numSquaresPerSide = 16;
const numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

const pad = document.querySelector(".pad");
createGrid();

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.classList.add("hovered");
    });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    numSquaresPerSide = +prompt("Grid Size?");
});

function createGrid() {
    const padSize = pad.clientWidth;
    const squareSize = padSize / numSquaresPerSide;

    for (let i = 0; i < numSquaresTotal; i++) {
        const cell = document.createElement("div");
    
        cell.classList.add("cell");
        cell.style.width = `${squareSize}px`;
        cell.style.height = `${squareSize}px`;
    
        pad.appendChild(cell);
    }
};