

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.
//function that creates a grid of square divs the size of the input using flexbox inside a container div that already exists in the HTML
function createGrid() {
    let container = document.querySelector('#container');
    let squaresPerSide = prompt("How many squares per side would you like?");
    let squareSize = (960 / squaresPerSide) + "px";
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize;
        square.style.height = squareSize;
        // Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
        function changeColor() {
            square.style.backgroundColor = "black";
        }
        container.appendChild(square);
    }
}
  
createGrid();
