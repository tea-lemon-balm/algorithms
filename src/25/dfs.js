function bfs(V, E) {
  const S = [V[0]]
  const setV = new Set(V);
  const setVp = new Set(V[0]);
  const setE= new Set(E.map(el => el.join('')));
  const setEp = new Set();
  while (true) {
    for (let x of S) {
      for (let y of subtraction(setV, setVp)) {
        if(setE.has([x,y].join(''))) {
          setEp.add([x,y].join(''));
          setVp.add(y);
        }
      }
    }
  }
}

function subtraction(set1, set2) {
  return new Set([...set1].filter(x => !set2.has(x)));
}
