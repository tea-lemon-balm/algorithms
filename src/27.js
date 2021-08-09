const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

// 설계 실수로 보인다.
// BFS를 이용해서 찾을 생각이였다.
// 그렇게 되면 Adjacency list를 생성해야 한다.
// 옳바른 adjacency list를 생성하면 if(!visited[node]) 조건이 결국 count가 matrix에 1의 갯수가 되어야 한다.
// 여기서 count를 어떻게 제대로 출력할지 생각해야 한다.
const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  const town = createMatrix(village);
  const adj = findAdjList(town);
  return dfs(adj, row, col);
};

function dfs(adj, m, n) {
  const start = [m, n].join("");
  const startNode = adj[start];
  const visited = {};
  visited[start] = true;
  const queue = [...startNode];
  let count = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    // const [row, col] = node.split("");
    if (!visited[node]) {
      visited[node] = true;
      queue.push(...adj[node]);
      count++;
    }
  }
  return count;
}

function findAdjList(matrix) {
  const mLen = matrix.length;
  const nLen = matrix[0].length;
  const adj = {};
  for (m = 0; m < mLen; m++) {
    for (n = 0; n < nLen; n++) {
      if (!!matrix[m][n]) {
        const mn = [m, n].join("");
        adj[mn] = [];
        if (m - 1 >= 0) if (matrix[m - 1][n]) adj[mn].push([m - 1, n].join(""));
        if (n - 1 >= 0) if (matrix[m][n - 1]) adj[mn].push([m, n - 1].join(""));
        if (n + 1 < nLen)
          if (matrix[m][n + 1]) adj[mn].push([m, n + 1].join(""));
        if (m + 1 < mLen)
          if (matrix[m + 1][n]) adj[mn].push([m + 1, n].join(""));
      }
    }
  }
  return adj;
}

const village = [
  "1101", //
  "0111",
  "0001",
];
const row = 0;
const col = 0;
console.log(gossipProtocol(village, row, col));
