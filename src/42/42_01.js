const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line, idx) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol2 = function (village, num) {
  if(check(village)) return 0;
  const arr = getPos(village);
  const combs = findCombs(arr, num);
  let min = Infinity;
  for (let comb of combs) {
    let mat = createMatrix(village, num);
    for (let pos of comb) mat[pos[0]][pos[1]] = 0;
    let [curMat,curVal] = gossipProtocol(mat, comb);
    if (min > curVal && check(mat)) min = curVal;
  }
  return min;
}

function check(mat) {
  for(let arr of mat)
    for(let el of arr)
      if(el==='1') return false
  return true;
}

const gossipProtocol = function (mat, queue) {
  // TODO: 여기에 코드를 작성합니다.
  // 처음 시작점을 숫자로 기록한다.
  let max, value, isSpread = [];
  while (queue.length > 0) {
    const idx = queue.shift();
    [mat, isSpread, value] = spread(mat, idx[0], idx[1]);
    if (value) max = value;
    if (isSpread.length > 0) {
      queue.push(...isSpread);
    }
  }
  if (max === undefined) return 0;
  return [mat, max];
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

function getPos(village) {
  const list = [];
  village.forEach((line, idx) => {
    for (let i = 0; i < line.length; i++) if (line[i] === '2') list.push([idx, i]);
  })
  return list;
}

function findCombs(set, n) {
  const combs = [];

  function pushCombs(set, comb = []) {
    if (comb.length === n) {
      combs.push(comb);
      return 0;
    }
    for (let i = 0; i < set.length; i++) {
      pushCombs(set.slice(i + 1), comb.concat([set[i]]));
    }
  }

  pushCombs(set);
  return combs;
}

let village = [
  '1001212',
  '1201011',
  '1102001',
  '2111102',
  '0012111',
  '1111101',
  '2121102',
];
let num = 5;
let output = gossipProtocol2(village, num);
console.log(output);
// console.log(!isGroundOrVisited('1'));
// console.log(!isOut(0, 2, [village.length, village[0].length]));
// let row = 1;
// let col = 2;
// let output = gossipProtocol(village, row, col);
// console.log(output);