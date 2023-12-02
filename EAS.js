//function that creates a grid of divs the size of the input using flexbox

// Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.
// (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
// Push your project to GitHub!
function createGrid()
{
  var grid = document.getElementById("grid");
  var size = prompt("Enter a number between 1 and 100");
  var width = 100 / size;
  var height = 100 / size;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      var div = document.createElement("div");
      div.style.width = width + "%";
      div.style.height = height + "%";
      div.style.float = "left";
      div.style.border = "1px solid black";
      // Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
      div.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
      });
    }
  }
}
createGrid();
