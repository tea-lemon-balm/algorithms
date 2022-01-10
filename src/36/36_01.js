// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
// O(n^2)
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.round(Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2)) * 100);
}

const closestPairOfPoints = function (points) {
  // TODO: 여기에 코드를 작성합니다.
  if(points.length > 300) return false;
  const all = findCombs(points, 2);
  let min = Infinity;
  for (let twoP of all) {
    const dis = calculateDistance(twoP[0], twoP[1])
    if (min > dis) min = dis
  }
  return min
};

function findCombs(set, n) {
  const combs = [];
  function pushCombs(set, comb = []) {
    if (comb.length === n) {
      combs.push(comb);
      return 0;
    }
    for (let i = 0; i < set.length; i++) {
      pushCombs(set.slice(i + 1), comb.concat([set[i]]));
    }
  }

  pushCombs(set);
  return combs;
}