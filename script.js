const grid = document.getElementById("grid");

function createGrid(size = 16) {
    // clean previous html
    grid.innerHTML = "";

    const cells = size * size;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.className = "cell"; 

        // column width in %
        cell.style.flex = "0 0 6.25" // --> 100 / 16 = 6.25
        
        // this is to keep the cells square
        cell.style.aspectRatio = "1/1"; 

        grid.appendChild(cell);
    }
}

createGrid(16);
