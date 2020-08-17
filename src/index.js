const grid = document.querySelector("#div-grid");
let squares;
const ScoreDisplay = document.querySelector("#score");
const StartBtn = document.querySelector("#start-button");
const columnsPerRow = 10;

const lTetramino = [
  [1, columnsPerRow + 1, columnsPerRow * 2 + 1, 2],
  [1, 2, 3, columnsPerRow + 3],
  [columnsPerRow * 2 + 1, 2, columnsPerRow + 2, columnsPerRow * 2 + 2],
  [1, columnsPerRow + 1, columnsPerRow + 2, columnsPerRow + 3],
];
const allTetraminos = [lTetramino];

let currentPosition = 5;
let currentRotation = 0;
const currentTetramino = () => allTetraminos[0][currentRotation];

const main = () => {
  renderGrid();
  drawTetramino();
};

const renderGrid = () => {
  let boxes = "";
  for (let i = 0; i < 200; i++) {
    boxes += "<div></div>";
  }
  grid.innerHTML = boxes;
  squares = Array.from(document.querySelectorAll(".grid div"));
  gameListeners();
};

const drawTetramino = () => {
  currentTetramino().forEach((index) => {
    squares[currentPosition + index].classList.add("tetramino");
  });
};

const removeTetramino = () => {
  currentTetramino().forEach((index) => {
    squares[currentPosition + index].classList.remove("tetramino");
  });
};

const gameListeners = () => {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      removeTetramino();
      console.log(currentRotation);
      if (currentRotation === 3) {
        currentRotation = 0;
        drawTetramino();
      } else {
        currentRotation += 1;
        drawTetramino();
      }
    }
  });
};

main();
