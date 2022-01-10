const robotPath = function (room, src, dst) {
  const behaves=[
    [0,-1],
    [-1,0],
    [1,0],
    [0,1]
  ];
  const aux = (M, N, candi, step) => {
    const [row, col] = candi;
    // matrix를 넘어가면 return
    if ( !isOut(row,col,M,N) ) return;

    // 움직인 거리 기록
    if (canMove(row, col, room, step)) {
      room[row][col] = step;
    } else {
      // step 보다 작으면 return
      return;
    }
    for(let behave of behaves) {
      aux(M, N, [row + behave[0], col + behave[1]], step + 1);
    }
  };

  aux(room.length, room[0].length, src, 1);
  const [r, c] = dst;
  return room[r][c] - 1;
};
function canMove(i, j, room, step) {
  return room[i][j] === 0 || room[i][j] > step
}

function isOut(i, j, height, width) {
  return !(i<0 || j<0 || i >= height || j >= width)
}

const room = [
  [0, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
const src = [0, 0];
const dst = [0, 2];
console.log(robotPath(room, src, dst));