const grid = document.querySelector("#div-grid");
let squares;
const ScoreDisplay = document.querySelector("#score");
const StartBtn = document.querySelector("#start-button");
const width = 10;

const main = () => {
  renderGrid();
};

const renderGrid = () => {
  let boxes = "";
  for (let i = 0; i < 200; i++) {
    boxes += "<div></div>";
  }
  grid.innerHTML = boxes;
  squares = Array.from(document.querySelectorAll(".grid div"));
  console.log(squares);
};

main();
