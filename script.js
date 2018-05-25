const reset = document.getElementById('reset');
let x = document.getElementById('x-dimension');
let y = document.getElementById('y-dimension');

let colors = document.querySelectorAll('.color-change');
let color = 'blue';
let border = document.querySelector('.drawing-area');

x.addEventListener('change', changeDim);
y.addEventListener('change', changeDim);
reset.addEventListener('click', clear);
colors.forEach(function(btn) {
  btn.addEventListener('click', colorChange);
});

function clear() {
  let cells = document.querySelectorAll('.cell');
  let area = document.querySelector('.drawing-area');
  cells.forEach(function(cell) {
    area.removeChild(cell);
  });
  draw(xDim, yDim);
}

function colorChange(event) {
  color = event.target.innerText.toLowerCase();
  console.log(color);
  clear();
}

function draw() {
  for (x = 0; x < xDim; x++) {
    for (y = 0; y < yDim; y++) {
      let cell = document.createElement('div');
      cell.className = 'cell ' + color;
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

function changeDim(event) {
  if (event.target.id = 'x-dimension') {
    xDim = event.target.value;
    if (isNaN(xDim) || xDim > 100) {
      xDim = 12;
      event.target.value = 12;
    };
  } else {
    yDim = event.target.value
    if (isNaN(yDim) || yDim > 100) {
      yDim = 12;
      event.target.value = 12;
    };
  };
  clear();
}

let xDim = document.getElementById('x-dimension').value;
let yDim = document.getElementById('y-dimension').value;
draw(xDim, yDim);
