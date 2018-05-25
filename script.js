
function draw(grid) {
  for (i = 0; i < Math.pow(grid, 2); i++) {
    let cell = document.createElement('div');
    cell.className = 'cell ' + classes[0];
    let cellSize = (512 / grid);

    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';
    cell.style.opacity = 0;
    document.querySelector('.drawing-area').appendChild(cell);
    cell.addEventListener('mouseover', darken);
  };
}

function darken(event) {
  event.target.style.opacity = 1;
}

draw(12);
