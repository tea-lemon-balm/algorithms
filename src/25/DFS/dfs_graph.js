// BFS in th Graph G. the s is the root.
function bfs(G, s) {
  const color = {};
  const distance = {};
  const parent = {};
  const Vm = Object.keys(G)
  Vm.splice(Vm.indexOf(s), 1);
  for (let u of Vm) {
    color[u] = 'white';
    distance[u] = Infinity;
    parent[u] = null;
  }
  color[s] = 'gray';
  distance[s] = 0;
  parent[s] = null;
  const Q = [];
  Q.push(s);
  console.log(Q)
  // return parent;
  // return color;
  // 초기 설정 끝
  while (Q.length !== 0) {
    const u = Q.shift();
    for (let v of G[u]) {
      if (color[v] === 'white') {
        color[v] = 'gray';
        distance[v] = distance[u] + 1;
        parent[v] = u;
        Q.push(v);
      }
    }
    color[u] = 'black';
    console.log(Q)
  }
  return parent;
}


const G = {
  v: ['r'],
  r: ['v', 's'],
  s: ['w', 'r'],
  w: ['s', 't', 'x'],
  t: ['w', 'x', 'u'],
  x: ['w', 't', 'u', 'y'],
  u: ['t', 'x', 'y'],
  y: ['x', 'u']
}
console.log(bfs(G, 's'));