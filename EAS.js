//function that creates a grid of divs the size of the input
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
    }
  }
}
createGrid();
