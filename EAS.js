
function createGrid(){
    let grid = document.createElement('div');
    grid.className = 'eas-grid';
    document.body.appendChild(grid);
    for (let i = 0; ; i++) {
      let row = document.createElement('div');
      row.className = 'row';
      grid.appendChild(row);
      for (let j = 0; ; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
      }
    }

    
}
createGrid();
//Use flexbox to make the divs appear as a grid
//* /Create a function that will change the color of a div when the mouse hovers over it
/* function changeColor(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black';
        });
    });
}
changeColor(); */ 