

function draw(grid) {
  for (i = 0; i < Math.pow(grid, 2); i++) {
    var cell = document.createElement('div');
    cell.className = 'cell';
    var cellSize = (512 / grid);

    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';
    cell.addEventListener('mouseover', darken);
    document.querySelector('.drawing-area').appendChild(cell);
  }
}

function darken(event) {
  
}

draw(12);
