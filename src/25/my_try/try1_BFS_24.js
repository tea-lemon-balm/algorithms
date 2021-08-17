const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  /**
   * * bfs를 구현했으나 중요한 건 해당 위치에 왔을 때 tree level를 return value로 줘야 하지만 안 된다.
   */
  const adjList = findAdjacencyList(room);

  // TODO DFS로 풀면 쉽게 풀릴 것 같다.
  bfs(src.join(""));
  function bfs(root) {
    let count = 0;
    const visited = [];
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      [queue[0], queue[queue.length - 1]] = [queue[queue.length - 1], queue[0]];
      const node = queue.pop();
      /**
       * * 왔던 길 다시 돌아가는 경우를 없애기 위해서 썼다.
       */
      if (visited.includes(node)) {
        continue;
      } else {
        visited.push(node);
      }
      // TODO tree level을 return value로 주는 걸 시도 해봤으니 실패했다.
      // TODO 원인은 count가 child node를 추가할 때 마다 올라간다.
      // TODO node의 tree level을 아는 방법은 무엇인가.
      if (adjList[node].length > 0) count++;
      if (adjList[node].includes(dst.join(""))) return count;
      // TODO tree level을 구하자.

      queue.push(...adjList[node]);
    }
  }
};

let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
robotPath(room, src, dst);

function findAdjacencyList(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const adjacencyList = {};
  for (let m = 0; m < height; m++) {
    for (let n = 0; n < width; n++) {
      const pos = [m, n].join("");
      adjacencyList[pos] = [];
      if (grid[m][n] === 0) {
        if (m - 1 > -1) {
          if (grid[m - 1][n] === 0)
            adjacencyList[pos].push([m - 1, n].join(""));
        }
        if (m + 1 < height) {
          if (grid[m + 1][n] === 0)
            adjacencyList[pos].push([m + 1, n].join(""));
        }
        if (n - 1 > -1) {
          if (grid[m][n - 1] === 0)
            adjacencyList[pos].push([m, n - 1].join(""));
        }
        if (n + 1 < width) {
          if (grid[m][n + 1] === 0)
            adjacencyList[pos].push([m, n + 1].join(""));
        }
      }
    }
  }
  return adjacencyList;
}
