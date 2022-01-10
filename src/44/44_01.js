// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.floor(dist * 100);
}

const TSP = function (places) {
  // TODO: 여기에 코드를 작성합니다.
  // return calDisForPath(places)
  const allPerms=findPerms(places);
  const allDis=[];
  for(let i=0;i<allPerms.length;i++) {
    allDis.push(calDisForPath(allPerms[i]));
  }
  return Math.min(...allDis);
};

function findPerms(perm) {
  const allPerms = [];
  const len = perm.length;
  function perms(perm, arr = []) {
    if (arr.length === len) {
      allPerms.push(arr.slice(0));
      return;
    }
    for (let i = 0; i < perm.length; i++) {
      arr.push(perm[i]);
      perms([...perm.slice(0, i), ...perm.slice(i + 1, perm.length)], arr);
      arr.pop(perm[i]);
    }
  }
  perms(perm);
  return allPerms;
}

function calDisForPath(path) {
  let sum=0;
  for(let i=0;i<path.length-1;i++) {
    sum+=calculateDistance(path[i],path[i+1]);
  }
  return sum;
}
const place= [
  [0, 0],
  [1, 1],
  [1, 3],
  [2, 2],
];
TSP(place)