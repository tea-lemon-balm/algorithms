function shadowOfPapers(papers) {
  // TODO: 여기에 코드를 작성합니다.
  // 모든 직사각형을 담을 수 있는 배열을 만든다.
  const map = new Map();
  let sum = 0;
  if (papers.length < 5) {
    for (let i = 0; i < papers.length; i++) {
      for (let m = papers[i][1]; m < papers[i][1] + papers[i][3]; m++) {
        for (let n = papers[i][0]; n < papers[i][0] + papers[i][2]; n++) {
          if (map.get([m, n]) !== 1) sum++;
          map.set([m, n], 1);
        }
      }
    }
  }
  return sum;
}