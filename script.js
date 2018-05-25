let reset = document.getElementById('reset');
let x = document.getElementById('x-dimension');
let y = document.getElementById('y-dimension');

x.addEventListener('change', changeX);
y.addEventListener('change', changeY);

function clear() {
  let cells = document.querySelectorAll('.cell');
  let area = document.querySelector('.drawing-area');
  cells.forEach(function(cell) {
    area.removeChild(cell);
  })
}

function draw(grid) {
  for (x = 0; x < xDim; x++) {
    for (y = 0; y < yDim; y++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      let width = (512 / xDim);
      let height = (512 / yDim);

      cell.style.width = width + 'px';
      cell.style.height = height + 'px';
      cell.style.opacity = 0;
      document.querySelector('.drawing-area').appendChild(cell);
      cell.addEventListener('mouseover', darken);
    };
  };
}

function darken(event) {
  event.target.style.opacity = 1;
}

function changeX(event) {
  xDim = event.target.value;
  if (isNaN(xDim) || xDim > 100) {
    xDim = 12;
    event.target.value = 12;
  };
  clear();
  draw(xDim, yDim);
};

function changeY(event) {
  yDim = event.target.value;
  if (isNaN(yDim) || yDim > 100) {
    yDim = 12;
    event.target.value = 12;
  };
  clear();
  draw(xDim, yDim);
};


let xDim = document.getElementById('x-dimension').value;
let yDim = document.getElementById('y-dimension').value;
console.log(xDim);
console.log(yDim);
draw(xDim, yDim);
