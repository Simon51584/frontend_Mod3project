const columnsPerRow = 10;

const lTetramino = [
  [0, columnsPerRow, columnsPerRow * 2, columnsPerRow * 2 + 1],
  [0, 1, 2, columnsPerRow],
  [0, 1, columnsPerRow + 1, columnsPerRow * 2 + 1],
  [2, columnsPerRow, columnsPerRow + 1, columnsPerRow + 2],
];

const jTetramino = [
  [0, columnsPerRow, columnsPerRow * 2, 1],
  [0, 1, 2, columnsPerRow + 2],
  [columnsPerRow * 2, 1, columnsPerRow + 1, columnsPerRow * 2 + 1],
  [0, columnsPerRow, columnsPerRow + 1, columnsPerRow + 2],
];

const squareTetramino = [
  [0, 1, columnsPerRow, columnsPerRow + 1],
  [0, 1, columnsPerRow, columnsPerRow + 1],
  [0, 1, columnsPerRow, columnsPerRow + 1],
  [0, 1, columnsPerRow, columnsPerRow + 1],
];

const iTetramino = [
  [0, 1, 2, 3],
  [0, columnsPerRow, columnsPerRow * 2, columnsPerRow * 3],
  [0, 1, 2, 3],
  [0, columnsPerRow, columnsPerRow * 2, columnsPerRow * 3],
];

const zTetramino = [
  [0, 1, columnsPerRow + 1, columnsPerRow + 2],
  [columnsPerRow, 1, columnsPerRow + 1, columnsPerRow * 2],
  [0, 1, columnsPerRow + 1, columnsPerRow + 2],
  [columnsPerRow, 1, columnsPerRow + 1, columnsPerRow * 2],
];

const sTetramino = [
  [1, 2, columnsPerRow, columnsPerRow + 1],
  [0, columnsPerRow, columnsPerRow + 1, columnsPerRow * 2 + 1],
  [1, 2, columnsPerRow, columnsPerRow + 1],
  [0, columnsPerRow, columnsPerRow + 1, columnsPerRow * 2 + 1],
];

const tTetramino = [
  [0, columnsPerRow, columnsPerRow + 1, columnsPerRow * 2],
  [0, 1, 2, columnsPerRow + 1],
  [columnsPerRow, 1, columnsPerRow + 1, columnsPerRow * 2 + 1],
  [columnsPerRow, 1, columnsPerRow + 1, columnsPerRow + 2],
];

const allTetraminos = [
  lTetramino,
  jTetramino,
  squareTetramino,
  iTetramino,
  zTetramino,
  sTetramino,
  tTetramino,
];
