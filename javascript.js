const DEFAULT_GRID_SIZE = 16;
const DEFAULT_PEN_COLOR = '#000000';

let mouseDown = 0;
let rainbowMode = 0;
let eraserMode = 0;
let gridSize =  DEFAULT_GRID_SIZE;
let penColor = DEFAULT_PEN_COLOR;

const board = document.querySelector(".board");
const tiles = document.querySelectorAll(".tile");
const gridSlider = document.querySelector("#grid-slider");
const rainbowButton = document.querySelector("#rainbow-button")
const eraserButton = document.querySelector("#eraser")
const clearButton = document.querySelector("#clear")
const sizingContainer = document.querySelector("#sizing-container")

document.addEventListener("DOMContentLoaded", createGrid(gridSize))

document.body.onmousedown = function() {
  ++mouseDown;
}

document.body.onmouseup = function() {
  --mouseDown;
}

board.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains('tile') && (mouseDown === 1)) {
      if (rainbowMode == 1) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        e.target.style.backgroundColor = "#"+randomColor;
      } else if (eraserMode == 1) {
        e.target.style.backgroundColor = "white";
      } else {
        e.target.style.backgroundColor = penColor;
      }
  }
})

gridSlider.addEventListener("mouseup", () => {
  gridSize = gridSlider.value;
  clearGrid();
  createGrid(gridSize);
})

rainbowButton.addEventListener("click", () => {
  rainbowMode == 0 ? rainbowMode = 1 : rainbowMode = 0;
  eraserMode = 0;
  eraserButton.classList.remove('active');
})

eraserButton.addEventListener("click", () => {
  eraserMode == 0 ? eraserMode = 1 : eraserMode = 0;
  rainbowMode = 0;
  rainbowButton.classList.remove('active')
})

clearButton.addEventListener("click", () => {
  clearGrid();
  createGrid(gridSize);
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
