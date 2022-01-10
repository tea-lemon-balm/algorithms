const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    const [row, col] = candi;
    // matrix를 넘어가면 return
    if (row < 0 || row >= M || col < 0 || col >= N) return;

    // 움직인 거리 기록
    if (room[row][col] === 0 || room[row][col] >= step) {
      room[row][col] = step;
    } else {
      // step 보다 작으면 return
      return;
    }
    aux(M, N, [row + 1, col], step + 1); // 상
    aux(M, N, [row - 1, col], step + 1); // 하
    aux(M, N, [row, col - 1], step + 1); // 좌
    aux(M, N, [row, col + 1], step + 1); // 우
  };

  aux(room.length, room[0].length, src, 1);
  const [r, c] = dst;
  return room[r][c] - 1;
};

const room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
const src = [4, 2];
const dst = [2, 2];
// console.log(canMove([0,1], 1, 0, room, room[0].length, room.length))
console.log(robotPath(room, src, dst));