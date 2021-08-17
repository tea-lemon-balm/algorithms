const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    const [m, n] = candi;
    if (m < 0 || n < 0 || m >= M || n >= N) return;
    else if (room[m][n] === 0 || room[m][n] > step) {
      room[m][n] = step;
    } else {
      return;
    }
    aux(M, N, [m + 1, n], step + 1);
    aux(M, N, [m - 1, n], step + 1);
    aux(M, N, [m, n + 1], step + 1);
    aux(M, N, [m, n - 1], step + 1);
  };
  aux(room.length, room[0].length, src, 1);
  const [r, c] = dst;
  return room[r][c] - 1;
};

// const room = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0],
//   [0, 1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 0],
// ];
// const src = [4, 2];
// const dst = [2, 2];
const room = [
  [0, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
const src = [0, 0];
const dst = [0, 2];
console.log(robotPath(room, src, dst));