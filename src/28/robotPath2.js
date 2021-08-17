const robotPath2 = function (room, src, sDir, dst, dDir) {
  /**
   * * M, N이 2차원 맵의 가로, 세로 크기이다.
   * * 1은 장애물 0은 통로이다.
   * * 로봇은 90도 회전을 시계방향으로 할 수 있다. 처음 방향은 위이다.
   * * 위1, 오른2, 아래3, 왼4 이다.
   * * k칸 직진, 그리고 회전을 한 동작으로 움직인다.
   * * sDir은 시작 방향, dDir은 끝 날때 방향이다.
   * ! 문제는 로봇이 src에서 dst로 이동하는데 걸리는 최소 동작 수를 구하는 것이다.
   */
  /*
   * 1. 시작 위치와 시작 방향을 확인한다. src와 sDir이다. src와 sDir의 길이는 각각 2, 1이다.
   * 2. 시작 방향으로 부터 다시 같은 방향으로 돌아올 때까지 시계방향으로 회전하면서 직진할 수 있는 방향을 탐색한다.
   * 3. 장애물 1이 있기 전까지 k만큼 전진한다.
   * 4. 후진 방향을 제외한 방향을 탐색한다. 직진이 가능하다면 직진한다. 1부터 반복한다.
   * 5. dst에 도착하여 방향을 dDir로 맞추면 종료한다.
   */
  /*
   *
   */
  const M = room.length;
  const N = room[0].length;
  const rot = {
    1: [1, 0],
    2: [0, 1],
    3: [-1, 0],
    4: [0, -1]
  }:closed
  const isValid = (m, n) => m >= 0 && m < M && n >= 0 && n < N;
  let cDir = sDir;
  let csDir = cDir + 1;
  while (cDir !== csDir) {
    csDir = (csDir + 1) % 4
  }
}

console.log(0%4)