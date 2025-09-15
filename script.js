const grid = document.getElementById("grid");

function createGrid(size) {

    for (let i = 0; i < size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = "16px";
        cell.style.height = "16px";

        grid.appendChild(cell);
    }
}

createGrid(16);
