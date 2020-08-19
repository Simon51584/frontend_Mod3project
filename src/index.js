const grid = document.querySelector("#div-grid");
let squares;
const ScoreDisplay = document.querySelector("#score");
const StartBtn = document.querySelector("#start-button");
let score = 0;
let timerId;

let currentPosition = 195;
let currentRotation = 0;
let currentTetramino =
  allTetraminos[Math.floor(Math.random() * allTetraminos.length)];

const main = () => {
  renderGameBoard();
  startButton();
};

const moveUp = () => {
  erase();
  currentPosition -= 10;
  draw();
  freeze();
};

const startButton = () => {
  StartBtn.addEventListener("click", (event) => {
    if (timerId) {
      erase();
      StartBtn.textContent = "Start";
      clearInterval(timerId);
      timerId = null;
    } else {
      StartBtn.textContent = "Pause";
      draw();
      timerId = setInterval(moveUp, 1000);
    }
  });
};

const renderGameBoard = () => {
  let boxes = "";
  for (let i = 0; i < 240; i++) {
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

const hitPiece = (direction) => {
  return currentTetramino[currentRotation].some((index) =>
    squares[index + currentPosition - direction].classList.contains("taken")
  );
};

const clearRows = () => {
  for (let i = 10; i < 239; i += 10) {
    const row = [
      i,
      i + 1,
      i + 2,
      i + 3,
      i + 4,
      i + 5,
      i + 6,
      i + 7,
      i + 8,
      i + 9,
    ];
    if (row.every((index) => squares[index].classList.contains("taken"))) {
      score += 10;
      ScoreDisplay.textContent = score;
      row.forEach((index) =>
        squares[index].classList.remove("taken", "tetramino")
      );
      let wipedRow = squares.splice(i, 10);
      squares = squares.concat(wipedRow);
      squares.forEach((cell) => grid.appendChild(cell));
    }
  }
};

const freeze = () => {
  if (hitPiece(10)) {
    currentTetramino[currentRotation].forEach((index) => {
      squares[currentPosition + index].classList.add("taken");
    });
    currentPosition = 195;
    let random = Math.floor(Math.random() * allTetraminos.length);
    currentRotation = 0;
    currentTetramino = allTetraminos[random];
    draw();
    clearRows();
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
        if (!hitPiece(1)) {
          currentPosition -= 1;
        }
        draw();
        freeze();
        break;
      case "ArrowRight":
        erase();
        hitRightWall() || hitPiece(-1)
          ? (currentPosition = currentPosition)
          : (currentPosition += 1);
        draw();
        freeze();
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
