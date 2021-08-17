const countIslands = function (grid) {
  // TODO: 여기에 코드를 작성합니다.
  /**
   * * 섬문제이니 adjacency list를 구한다.
   * * 그리고 연결되지 않은 node group의 갯수를 구한다.
   * * adjacency list 구할 때 grid 밖은 undefined가 된다.
   * * 어떻게 처리할 것인지 중요한 문제이다.
   */
  if (grid.length === 0) return 0;
  const adjList = findAdjacencyList(grid);
  const height = grid.length;
  const width = grid[0].length;
  const visited = [];
  let count = 0;
  for (let m = 0; m < height; m++) {
    for (let n = 0; n < width; n++) {
      const root = [m, n].join("");
      if (grid[m][n] === "1") {
        if (dfs(root)) count++;
      }
    }
  }
  return count;
  function dfs(root) {
    // TODO 방문했으면 dfs를 끝내라
    if (visited.includes(root)) {
      return false;
    }
    visited.push(root);
    for (let i = 0; i < adjList[root].length; i++) {
      dfs(adjList[root][i]);
    }
    return true;
  }
};
function findAdjacencyList(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const adjacencyList = {};
  for (let m = 0; m < height; m++) {
    for (let n = 0; n < width; n++) {
      const pos = [m, n].join("");
      adjacencyList[pos] = [];
      if (grid[m][n] === "1") {
        if (m - 1 > -1) {
          if (grid[m - 1][n] === "1")
            adjacencyList[pos].push([m - 1, n].join(""));
        }
        if (m + 1 < height) {
          if (grid[m + 1][n] === "1")
            adjacencyList[pos].push([m + 1, n].join(""));
        }
        if (n - 1 > -1) {
          if (grid[m][n - 1] === "1")
            adjacencyList[pos].push([m, n - 1].join(""));
        }
        if (n + 1 < width) {
          if (grid[m][n + 1] === "1")
            adjacencyList[pos].push([m, n + 1].join(""));
        }
      }
    }
  }
  return adjacencyList;
}

let grid = [
  ["0", "1", "1", "1"],
  ["0", "1", "1", "1"],
  ["1", "1", "0", "0"],
];
console.log(countIslands(grid));
