const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  /**
   * * bfs를 구현했으나 중요한 건 해당 위치에 왔을 때 tree level를 return value로 줘야 하지만 안 된다.
   */
  const adjList = findAdjacencyList(room);
  let minCount = Infinity;
  // TODO DFS로 풀면 쉽게 풀릴 것 같다.
  // TODO efficient algorithm을 써야 한다. 현재 20x20이 오래 걸리는 걸로 나온다.
  dfs(src.join(""));
  return minCount;
  function dfs(root, count = 0, visited = []) {
    if (visited.includes(root)) {
      return false;
    }
    if (root === dst.join("")) {
      if (minCount > count) minCount = count;
      return count;
    }
    visited.push(root);
    for (let i = 0; i < adjList[root].length; i++) {
      dfs(adjList[root][i], count + 1, visited.slice(0));
    }
    return true;
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
console.log(robotPath(room, src, dst));

room = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
src = [0, 3];
dst = [7, 3];

console.log(robotPath(room, src, dst));

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
