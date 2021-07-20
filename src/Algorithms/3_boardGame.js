function boardGame(board, operation) {
  const len = board.length;
  let m = 0,
    n = 0;
  let scoure = 0;
  for (let chr of operation) {
    [m, n] = udlr(chr, m, n);
    if (m < 0 || n < 0 || m >= len || n >= len) {
      return "OUT";
    }
    scoure += board[m][n];
  }
  return scoure;
}

function udlr(chr, m, n) {
  if (chr === "U") {
    m -= 1;
  } else if (chr === "D") {
    m += 1;
  } else if (chr === "R") {
    n += 1;
  } else if (chr === "L") {
    n -= 1;
  }
  return [m, n];
}

const board1 = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
];

const output1 = boardGame(board1, "RRDLLD");
console.log(output1);
