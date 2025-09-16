const grid = document.getElementById("grid");
const resizeButton = document.getElementById("resizeButton"); 

function createGrid(size = 16) {
    // clean previous html
    grid.innerHTML = "";

    const cells = size * size;
    const widthPerc = 100 / size; 

    for (let i = 0; i < cells; i++) {
        const cell = document.createElement("div");
        cell.className = "cell"; 

        // column width in %
        cell.style.flex = `0 0 ${widthPerc}%` // --> 100 / 16 = 6.25
        
        // this is to keep the cells square
        cell.style.aspectRatio = "1/1"; 

        // add the hover effect
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "blue"; 
        })

        // remove the hover effect when the mouse goes onto another cell
        cell.addEventListener("mouseleave", () => {
            cell.style.backgroundColor = "white"; 
        })

        grid.appendChild(cell);
    }
}

// button
resizeButton.addEventListener("click", () => {
    let input = prompt("Enter the number of cells per side (1-100): ");

    let size = parseInt(input);

    if (!Number.isNaN(size) && size >= 1 && size <= 100) {
        createGrid(size); 
    } else {
        alert("Please enter a valid number"); 
    }
})

// build the 16x16 grid once DOM is ready, but createGrid(16) works as well
document.addEventListener('DOMContentLoaded', () => {
  createGrid(16);
});
