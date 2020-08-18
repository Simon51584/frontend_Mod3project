const grid = document.querySelector("#div-grid");
let squares;
const ScoreDisplay = document.querySelector("#score");
const StartBtn = document.querySelector("#start-button");

let currentPosition = 165;
let currentRotation = 0;
const currentTetramino = () => allTetraminos[6][currentRotation];

const main = () => {
  renderGameBoard();
  drawTetramino();
};

const renderGameBoard = () => {
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

const eraseTetramino = () => {
  currentTetramino().forEach((index) => {
    squares[currentPosition + index].classList.remove("tetramino");
  });
};

const hitUpperBound = () => {
  const tetPosition = currentTetramino().map((index) =>
    parseInt((index + currentPosition).toString().slice(-1))
  );
  const upperBound = Math.max(...tetPosition);
  return upperBound === 9;
};

const gameListeners = () => {
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ShiftRight":
        if (currentRotation === 3) {
          eraseTetramino();
          currentRotation = 0;
          drawTetramino();
        } else {
          eraseTetramino();
          currentRotation += 1;
          drawTetramino();
        }
        break;
      case "ShiftLeft":
        if (currentRotation === 0) {
          eraseTetramino();
          currentRotation = 3;
          drawTetramino();
        } else {
          eraseTetramino();
          currentRotation -= 1;
          drawTetramino();
        }
        break;
      case "ArrowLeft":
        eraseTetramino();
        currentPosition -= 1;
        drawTetramino();
        break;
      case "ArrowRight":
        eraseTetramino();
        hitUpperBound()
          ? (currentPosition = currentPosition)
          : (currentPosition += 1);
        drawTetramino();
        break;
      case "ArrowUp":
        eraseTetramino();
        currentPosition -= 10;
        drawTetramino();
        break;
      default:
    }
  });
};

main();
