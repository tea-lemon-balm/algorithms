const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  let emptyPositions= findEmptyPositon(board);
  return solveSudoku(board, emptyPositions);
};

function findEmptyPositon(board) {
  const emptyPositions=[];
  for(let i=0;i<board.length;i++) {
    for(let j=0;j<board.length;j++) {
      if(board[i][j]===0) {
        emptyPositions.push([i,j]);
      }
    }
  }
  return emptyPositions;
}

function findRow(board, row, value) {
  for(let i=0; i< board.length ;i++) {
    if(value === board[row][i]) {
      return false
    }
  }
  return true;
}

function findCoulmn(board, column, value) {
  for(let i=0;i<board.length;i++) {
    if(board[i][column]===value) {
      return false;
    }
  }
  return true;
}

function findSquare3by3(board, column, row, value) {
  const squareRowIndex= 3*Math.floor(row/3);
  const squareColumnIndex= 3*Math.floor(column/3);
  for(let i=squareRowIndex;i<squareRowIndex+3;i++) {
    for(let j=squareColumnIndex;j<squareColumnIndex+3;j++) {
      if(board[i][j]===value) {
        return false;
      }
    }
  }
  return true;
}

function findValue(board, column, row, value) {
  if(findRow(board, row, value) &&
    findCoulmn(board, column, value) &&
    findSquare3by3(board, column, row, value) ) {
    return true;
  } else {
    return false;
  }
}

function solveSudoku(board, emptyPositions) {
  let i, row, column, value;
  for(i=0; i<emptyPositions.length;) {
    row= emptyPositions[i][0];
    column= emptyPositions[i][1];
    value= board[row][column] +1;
    found= false;
    while(!found && value <= board.length) {
      if(findValue(board, column, row, value)) {
        found= true;
        board[row][column]=value;
        i++;
      } else {
        value++;
      }
    }
    if(!found) {
      board[row][column] =0;
      i--;
    }
  }
  return board;
}