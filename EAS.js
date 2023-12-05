

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.
//function that creates a grid of square divs the size of the input using flexbox inside a container div that already exists in the HTML
function createGrid() {
  // set max width of container to 960px
  container.style.maxWidth = "960px";
  let container = document.querySelector('#container');
  let squaresPerSide = prompt("How many squares per side would you like?");
  let squareSize = (960 / squaresPerSide) + "px";
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = squareSize;
    square.style.height = squareSize;
    // Set up a “hover” effect via a new class so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    square.addEventListener("mouseover", changeColor);
    function changeColor() {
      square.style.backgroundColor = "black";
    }
    container.appendChild(square);
    
  }
}

// add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before.

function resizeGrid() {
  let container = document.querySelector('#container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // set max width of container to 960px
  container.style.maxWidth = "960px";

  createGrid();
}

let resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", resizeGrid);

createGrid();
