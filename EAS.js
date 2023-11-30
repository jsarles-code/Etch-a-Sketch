//Create a 16x16 grid of square divs
//Create a function that will create a grid
function createGrid(){
    let grid = document.createElement('div');
    grid.className = 'grid';
    document.body.appendChild(grid);
    for (let i = 0; i < 16; i++) {
      let row = document.createElement('div');
      row.className = 'row';
      grid.appendChild(row);
      for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
      }
    }
    
}

