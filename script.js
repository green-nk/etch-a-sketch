const numSquaresPerSide = 16;
const numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

const pad = document.querySelector(".pad");
createGrid();

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

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.classList.add("hovered");
    });
});
