const DEFAULT_GRID_SIZE = 16;
const DEFAULT_PEN_COLOR = '#000000';

let mouseDown = 0;
let rainbowMode = 0;
let gridSize =  DEFAULT_GRID_SIZE;
let penColor = DEFAULT_PEN_COLOR;

const board = document.querySelector(".board");
const tiles = document.querySelectorAll(".tile");
const gridSlider = document.querySelector("#grid-slider");
const rainbowButton = document.querySelector("#rainbow-button")

document.addEventListener("DOMContentLoaded", createGrid(gridSize))

document.body.onmousedown = function() {
  ++mouseDown;
}

document.body.onmouseup = function() {
  --mouseDown;
}

board.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains('tile') && (mouseDown === 1)) {
    e.target.style.backgroundColor = penColor;
  }
})

gridSlider.addEventListener("mouseup", () => {
  gridSize = gridSlider.value;
  clearGrid();
  createGrid(gridSize);
})

rainbowButton.addEventListener("click", () => {
  rainbowMode == 0 ? rainbowMode = 1 : rainbowMode = 0;
})

function clearGrid() {
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
}

function createGrid(size) {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add('row');
    for (let i = 0; i < gridSize; i++) {
      let div = document.createElement("div");
      div.classList.add('tile');
      row.appendChild(div);
    }
    board.appendChild(row);
  }
}
