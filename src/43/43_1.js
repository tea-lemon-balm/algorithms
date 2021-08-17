function shadowOfPapers(papers) {
  // TODO: 여기에 코드를 작성합니다.
  // 모든 직사각형을 담을 수 있는 배열을 만든다.
  let maxM=0;
  let maxN=0;
  let sum=0;
  for(let i=0;i<papers.length;i++) {
    if(maxN < papers[i][0]+papers[i][2]) maxN=papers[i][0]+papers[i][2];
    if(maxM < papers[i][1]+papers[i][3]) maxM=papers[i][1]+papers[i][3];
  }
  // const map= new Array(maxM).fill(0).map(el => new Array(maxN).fill(0));
  let map = Array(maxM).fill(0);

  for (let i = 0; i < map.length; i++) {
    map[i] = new Array(maxN).fill(0);
    if(i==30) return map
  }
  for(let i=0;i<papers.length;i++) {
    for(let m=papers[i][1];m<papers[i][1]+papers[i][3];m++) {
      for(let n=papers[i][0];n<papers[i][0]+papers[i][2];n++) {
        if(map[m][n]!==1) sum++;
        map[m][n]=1;
      }
    }
  }
  return sum
}

result = shadowOfPapers([
  [0, 0, 4, 4],
  [2, 1, 2, 6],
  ]);
console.log(result);