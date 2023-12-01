
// create a grid of  divs with user defined size and equal width and height
function CreateSquareGrid(size){
    let container = document.querySelector('eas.grid');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size*size; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    changeColor();
}

CreateSquareGrid(16);

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