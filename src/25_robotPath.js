const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const adj = {};
  const roomX = room[0].length;
  const roomY = room.length;
  // record the visited node in the visited
  const visited = {};
  // make a adjacent list - Start
  for (let n = 0; n < roomX; n++) {
    for (let m = 0; m < roomY; m++) {
      const mn = String(m) + String(n);
      adj[mn] = [];
      if (!room[m][n]) {
        if (m + 1 < roomY) if (!room[m + 1][n]) adj[mn].push([m + 1, n]);
        if (m - 1 > -1) if (!room[m - 1][n]) adj[mn].push([m - 1, n]);
        if (n + 1 < roomX) if (!room[m][n + 1]) adj[mn].push([m, n + 1]);
        if (n - 1 > -1) if (!room[m][n - 1]) adj[mn].push([m, n - 1]);
      }
    }
  }
  // make a adjection list - End
  // BFS
  const result = bfs(adj, src, dst);
  return result;
};

// function dfs(adj, src, dst, visited = {}) {
//   for (let next of adj[src.join("")]) {
//     if (!visited[next.join("")]) {
//       visited[next.join("")] = true;
//       dfs(adj, next, dst, visited);
//     }
//   }
// }

function bfs(adj, src, dst) {
  const queue = adj[src.join("")];
  const searched = [src.join("")];
  let count = 0;
  while (queue.length > 0) {
    let node = queue.shift();
    if (!searched.includes(node.join(""))) {
      count++;
      if (node === dst.join("")) {
        return count;
      } else {
        queue.push(...adj[node.join("")]);
        searched.push(node.join(""));
      }
    }
  }
  return count;
}

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
