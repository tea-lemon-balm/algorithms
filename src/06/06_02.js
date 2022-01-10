const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.

}

function findAll(board, newBoard) {
  // const set= Array(9).fill(1).map((el,idx)=>el+idx);
  for (let i = 0; i < 9; i++) {
    newBoard = findRow(board, newBoard, i);
  }
  return newBoard;
}

function findRow(board, newBoard, i) {
  for (let j = 0; j < 9; j++) {
    if (board[i][j] !== 0) continue;
    for (let value = 1; value <= 9; value++) {
      isFine = isSolution(board, newBoard, i, j, value);
      if (isFine) {
        newBoard = isFine;
        break;
      }
    }
  }
  return newBoard;
}

function isSolution(board, newBoard, i, j, value) {
  const row = newBoard[i];
  const column = newBoard.map(el => el[j]);
  const squarePos = [3 * Math.floor(i / 3), 3 * Math.floor(j / 3)];
  const square = newBoard.slice(squarePos[0], squarePos[0] + 3).map(el => el.slice(squarePos[1], squarePos[0] + 3)).flat();
  if (row.includes(value) || column.includes(value) || square.includes(value) || board[i][j] !== 0) {
    return false;
  } else {
    newBoard[i][j] = value;
    return newBoard;
  }
}

let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let newBoard = board.map(el => el.slice(0));
// let output = sudoku(board);
// console.log(output);
// let i = 3;
// let j = 5;
// let value = 5;
// console.log(isSolution(board, newBoard, i, j, value));
console.log(findAll(board, newBoard, 0));