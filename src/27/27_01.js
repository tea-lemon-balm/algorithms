const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  // 처음 시작점을 숫자로 기록한다.
  let mat=createMatrix(village);
  mat[row][col] = 0;
  let max, value, isSpread = [];
  const queue = [[row, col]];
  while (queue.length > 0) {
    const idx = queue.shift();
    [mat, isSpread, value] = spread(mat, idx[0], idx[1]);
    if (value) max = value;
    if(isSpread.length>0) {
      queue.push(...isSpread);
    }
  }
  return max;
};

function spread(village, i, j) { // i => m, j=> n
  const sizes = [village.length, village[0].length];
  const isSpread = [];
  let max = 0;
  // U D R L
  // U
  const up = i - 1;
  if (!isOut(up, j, sizes) && !isGroundOrVisited(village[up][j])) {
    village[up][j] = village[i][j] + 1;
    isSpread.push([up, j]);
    max = village[up][j];
  }
  //  D
  const down = i + 1;
  if (!isOut(down, j, sizes) && !isGroundOrVisited(village[down][j])) {
    village[down][j] = village[i][j] + 1;
    isSpread.push([down, j]);
    max = village[down][j];
  }
  //  R
  const right = j + 1;
  if (!isOut(i, right, sizes) && !isGroundOrVisited(village[i][right])) {
    village[i][right] = village[i][j] + 1;
    isSpread.push([i, right]);
    max = village[i][right];
  }
  //  L
  const left = j - 1;
  if (!isOut(i, left, sizes) && !isGroundOrVisited(village[i][left])) {
    village[i][left] = village[i][j] + 1;
    isSpread.push([i, left]);
    max = village[i][left];
  }
  // return
  return [village, isSpread, max];
}

function isOut(i, j, sizes) {
  // return sizes;
  return i < 0 || j < 0 || i >= sizes[0] || j >= sizes[1]
}

function isGroundOrVisited(value) {
  if (value === '1') return false;
  return true;
}

let village = [
  '0101', // 첫 번째 줄
  '0111',
  '0110',
  '0100',
];
let row = 1;
let col = 2;
let output = gossipProtocol(village, row, col);
console.log(output);
// console.log(!isGroundOrVisited('1'));
// console.log(!isOut(0, 2, [village.length, village[0].length]));
// let row = 1;
// let col = 2;
// let output = gossipProtocol(village, row, col);
// console.log(output);