const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  /**
   * * bfs를 구현했으나 중요한 건 해당 위치에 왔을 때 tree level를 return value로 줘야 하지만 안 된다.
   */
  const digitLen = Math.max(
    String(room.length).length,
    String(room[0].length).length
  );
  const adjList = findAdjacencyList(room);
  let minCount = Infinity;
  // TODO DFS로 풀면 쉽게 풀릴 것 같다.
  // TODO efficient algorithm을 써야 한다. 현재 20x20이 오래 걸리는 걸로 나온다.
  /**
   * * efficient algorithm 문제인지 알았지만 다른 문제가 있었다.
   * * 현재 문자로 node를 구문하는데 [1,12], [11,2]가 구분이 안 된다.
   * * 이유는 [1,12] == '112', [11,2] == '112'라서 나중에 입력한 값으로 대체된다.
   * * room의 최대 가로 세로 길이를 구하고 digits의 갯수를 구하고 digits가 부족하면 0으로 체운다.
   */
  dfs(join(src, digitLen));
  return minCount;
  function dfs(root, count = 0, visited = []) {
    if (visited.includes(root)) {
      return count;
    }
    if (root === join(dst, digitLen)) {
      if (minCount > count) minCount = count;
      return count;
    }
    visited.push(root);
    for (let i = 0; i < adjList[root].length; i++) {
      dfs(adjList[root][i], count + 1, visited.slice(0));
    }
    return count;
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
// console.log(robotPath(room, src, dst));

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
// console.log(robotPath(room, src, dst));

room = [
  [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
];
src = [0, 12];
dst = [13, 7];
test = [0, 10];
console.log([test[0], test[1]].join(""), ":", room[test[0]][test[1]]);
console.log(robotPath(room, src, dst));

function findAdjacencyList(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const digitLen = Math.max(String(height).length, String(width).length);
  const adjacencyList = {};
  for (let m = 0; m < height; m++) {
    for (let n = 0; n < width; n++) {
      const pos = join([m, n], digitLen);
      adjacencyList[pos] = [];
      if (grid[m][n] === 0) {
        if (m - 1 > -1) {
          if (grid[m - 1][n] === 0)
            adjacencyList[pos].push(join([m - 1, n], digitLen));
        }
        if (m + 1 < height) {
          if (grid[m + 1][n] === 0)
            adjacencyList[pos].push(join([m + 1, n], digitLen));
        }
        if (n - 1 > -1) {
          if (grid[m][n - 1] === 0)
            adjacencyList[pos].push(join([m, n - 1], digitLen));
        }
        if (n + 1 < width) {
          if (grid[m][n + 1] === 0)
            adjacencyList[pos].push(join([m, n + 1], digitLen));
        }
      }
    }
  }
  return adjacencyList;
}

function join(arr, numDigits) {
  arr = arr.map((el) => toString(el, numDigits));
  return arr.join("");
}

function toString(num, numDigits) {
  const str = String(num);
  let result = "";
  if (str.length === numDigits) {
    result += str;
    return str;
  } else {
    for (let i = 0; i < numDigits - str.length; i++) {
      result += "0";
    }
    result += str;
    return result;
  }
}
