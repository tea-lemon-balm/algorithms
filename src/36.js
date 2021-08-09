// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

const closestPairOfPoints = function (points) {
  // TODO: 여기에 코드를 작성합니다.
  const distances = [];
  const twoPointsArr = allPerms(points);
  for (let points of twoPointsArr) {
    distances.push(calculateDistance(points[0], points[1]));
  }
  const result = mergeSort(distances);
  return Math.trunc(result[0] * 100);
};

function allPerms(str) {
  const arr = [];
  function perms(str, plus = "", strPerms = []) {
    if (plus.length > 0) {
      strPerms.push(plus);
    }
    if (strPerms.length === 2) {
      arr.push(strPerms);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      perms(
        [...str.slice(0, i), ...str.slice(i + 1)],
        str[i],
        strPerms.slice(0)
      );
    }
  }
  perms(str);
  return arr;
}

const mergeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  } else if (arr.length === 2) {
    return arr[0] < arr[1] ? arr : ([arr[0], arr[1]] = [arr[1], arr[0]]);
  }
  const mid = Math.floor((arr.length - 1) / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

function merge(arr1, arr2) {
  const arr = [...arr1, ...arr2];
  const len = arr.length;
  for (let i = 0, j = 0, k = 0; i < len; i++) {
    if (arr2[k] === undefined || (arr1[j] !== undefined && arr1[j] < arr2[k])) {
      arr[i] = arr1[j];
      j++;
    } else {
      arr[i] = arr2[k];
      k++;
    }
  }
  return arr;
}

arr = [
  [0, 0],
  [1, 3],
  [2, 2],
];
arr = [
  [0, 100],
  [3, 4],
  [58, 34],
  [22, 65],
  [121, 132],
  [140, 153],
];
arr = [
  [0, 2],
  [6, 67],
  [42, 81],
  [39, 101],
  [189, 140],
];
arr = [
  [7, 3],
  [12, 30],
  [40, 50],
  [12, 10],
  [3, 4],
];
arr = [
  [0, 0],
  [0, 3],
  [0, 5],
  [0, 9],
  [0, 16],
];
arr = [
  [1, 0],
  [4, 0],
  [5, 0],
  [7, 0],
];
arr = [
  [0, 100],
  [3, 4],
  [58, 34],
  [22, 65],
  [121, 132],
  [140, 153],
];
console.log(closestPairOfPoints(arr));
