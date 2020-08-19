const grid = document.querySelector("#div-grid");
let squares;
const ScoreDisplay = document.querySelector("#score");
const StartBtn = document.querySelector("#start-button");

let currentPosition = 165;
let currentRotation = 0;
let currentTetramino =
  allTetraminos[Math.floor(Math.random() * allTetraminos.length)];

const main = () => {
  renderGameBoard();
  draw();
};

const renderGameBoard = () => {
  let boxes = "";
  for (let i = 0; i < 200; i++) {
    boxes += `<div ${i < 10 ? "class='taken top'" : ""}></div>`;
  }
  grid.innerHTML = boxes;
  squares = Array.from(document.querySelectorAll(".grid div"));
  gameListeners();
};

const draw = () => {
  currentTetramino[currentRotation].forEach((index) => {
    squares[currentPosition + index].classList.add("tetramino");
  });
};

const erase = () => {
  currentTetramino[currentRotation].forEach((index) => {
    squares[currentPosition + index].classList.remove("tetramino");
  });
};

const hitRightWall = () => {
  const tetPositions = currentTetramino[currentRotation].map((index) =>
    parseInt((index + currentPosition).toString().slice(-1))
  );
  const upperBound = Math.max(...tetPositions);
  return upperBound === 9;
};

const freeze = () => {
  if (
    currentTetramino[currentRotation].some((index) =>
      squares[index + currentPosition - columnsPerRow].classList.contains(
        "taken"
      )
    )
  ) {
    console.log("hit");
    currentTetramino[currentRotation].forEach((index) => {
      squares[currentPosition + index].classList.add("taken");
    });
    currentPosition = 165;
    let random = Math.floor(Math.random() * allTetraminos.length);
    currentRotation = 0;
    currentTetramino = allTetraminos[random];
    draw();
  }
};

const gameListeners = () => {
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ShiftRight":
        if (currentRotation === 3) {
          erase();
          currentRotation = 0;
          draw();
        } else {
          erase();
          currentRotation += 1;
          draw();
        }
        break;
      case "ShiftLeft":
        if (currentRotation === 0) {
          erase();
          currentRotation = 3;
          draw();
        } else {
          erase();
          currentRotation -= 1;
          draw();
        }
        break;
      case "ArrowLeft":
        erase();
        currentPosition -= 1;
        draw();
        break;
      case "ArrowRight":
        erase();
        hitRightWall()
          ? (currentPosition = currentPosition)
          : (currentPosition += 1);
        draw();
        break;
      case "ArrowUp":
        erase();
        currentPosition -= 10;
        draw();
        freeze();
        break;
      default:
    }
  });
};

main();
