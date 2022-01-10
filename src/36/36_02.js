// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.round(100 * Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2)));
}

const closestPairOfPoints = function (points) {
  // TODO: 여기에 코드를 작성합니다.
  if (points.length === 1) return Infinity;
  if (points.length === 2) return calculateDistance(points[0], points[1]);
  const len = points.length;
  const half = Math.ceil(len / 2);
  // const m = (points[half - 1][0] + points[half][0]) / 2;
  const S1 = points.slice(0, half);
  const S2 = points.slice(half, len);
  const dis1 = closestPairOfPoints(S1);
  const dis2 = closestPairOfPoints(S2);
  let dis = Math.min(dis1, dis2);
  const P1 = S1.filter(point => point[0] - dis < point < point[0] + dis);
  P1.sort((a, b) => a[0] - b[0]);
  const P2 = {};
  //Check
  S2.forEach(point => {
    if (!P2[point[1]]) {
      P2[point[1]] = point;
    } else if (P2[point[1]][0] > point[0]) {
      P2[point[1]] = point;
    }
  });
  const mag = Math.floor(dis / 100);
  P1.forEach(point => {
      for (let y = point[1] - mag + 1; y < point[1] + mag; y++) {
        if (P2[y]) dis = Math.min(dis, calculateDistance(point, P2[y]));
      }
    }
  )
  return dis;
};