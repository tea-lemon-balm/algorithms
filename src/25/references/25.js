const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    // M, N: Upper case mean the maximum length of a row vector and column vector in matrix.
    // m, n: Lower case mean the current index of the matrix.
    // 현재 위치
    const [m, n] = candi;

    // 배열의 범위를 벗어난 경우
    if (m < 0 || m >= M || n < 0 || n >= N) return;
    // What does mean this code "room[m][n] > step"?
    // The value of step start moving robot at the value 1.
    // When the step value is 2, then room[m][n] with the value 0 is .
    if (room[m][n] === 0 || room[m][n] > step) {
      room[m][n] = step;
    } else {
      // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
      return;
    }

    // dfs로 4가지 방향에 대해 탐색을 한다.
    // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
    // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
    // 약간 더 효율적이다.
    aux(M, N, [m + 1, n], step + 1); // 상
    aux(M, N, [m - 1, n], step + 1); // 하
    aux(M, N, [m, n - 1], step + 1); // 좌
    aux(M, N, [m, n + 1], step + 1); // 우
  };

  // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
  // 바로 옆 통로는 2가 된다.
  // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
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
console.log(robotPath(room, src, dst));
