// naive solution: O(N^2)
// const largestRectangularArea = function (histogram) {
//   let largest = 0;
//   // 모든 연속된 부분 히스토그램을 고려한다.
//   // 밑변의 길이를 부분 히스토그램의 길이로 고정하면, 높이는 가장 낮은 막대의 높이가 된다.
//   for (let left = 0; left < histogram.length; left++) {
//     // 길이가 1인 막대로 만들 수 있는 직사각형의 넓이는 막대의 높이와 같다.
//     let min = histogram[left];
//     for (let right = left; right < histogram.length; right++) {
//       // left부터 right까지의 히스토그램의 막대 중 가장 낮은 막대의 높이를 구한다.
//       if (histogram[right] < min) min = histogram[right];
//       // 해당 구간(left ~ right)의 막대를 전부 포함해서 만들 수 있는 직사각형의 넓이를 구한다.
//       let area = min * (right - left + 1);
//       // 매번 구한 면적을 기존의 면적과 비교해 갱신한다.
//       if (area > largest) largest = area;
//     }
//   }
//   return largest;
// };

// divide and conquer: O(N * logN)
const largestRectangularArea = function (histogram) {
  const createMinIdxTree = (arr, ts, te) => {
    // 가장 작은 값의 '인덱스'를 구하기 위한 구간 트리
    if (ts === te) return { idx: ts, val: arr[ts] };

    const mid = parseInt((ts + te) / 2);
    const left = createMinIdxTree(arr, ts, mid);
    const right = createMinIdxTree(arr, mid + 1, te);

    return {
      val: Math.min(left.val, right.val),
      idx: left.val < right.val ? left.idx : right.idx,
      left,
      right,
    };
  };
  const tree = createMinIdxTree(histogram, 0, histogram.length - 1);
  // 범위가 딱 안 맞아도 최소 값을 가지는 index를 구한다.
  const getMinIdx = (ts, te, rs, re, tree) => {
    if (rs <= ts && te <= re) return tree.idx;
    if (te < rs || re < ts) return rs;

    const mid = parseInt((ts + te) / 2);
    const left = getMinIdx(ts, mid, rs, re, tree.left);
    const right = getMinIdx(mid + 1, te, rs, re, tree.right);
    return histogram[left] < histogram[right] ? left : right;
  };

  const getRangeArea = (start, end) => {
    if (start > end) return 0;
    // 현재 구간에서 가장 작은 막대를 찾는다.
    // 가장 작은 막대이므로 구간의 길이 * 높이만큼의 직사각형을 만들 수 있다. (첫번째 후보)
    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);

    // 가장 작은 막대를 기준으로 왼쪽, 오른쪽 부분에 존재하는 모든 막대의 높이가 더 크다.
    // 재귀적으로 왼쪽 부분과 오른쪽 부분,
    // 즉 해당 구간에서 가장 작은 막대를 제외해서 만들 수 있는 가장 큰 직사각형의 넓이를 구한다.
    return Math.max(
      (end - start + 1) * histogram[minIdx], // 첫번째 후보
      getRangeArea(start, minIdx - 1),
      getRangeArea(minIdx + 1, end)
    );
  };

  return getRangeArea(0, histogram.length - 1);
};

/**
 * 구분선
 * @param {*} arr
 * @param {*} ts
 * @param {*} te
 * @returns
 */

const createMinIdxTree = (arr, ts, te) => {
  // 가장 작은 값의 '인덱스'를 구하기 위한 구간 트리
  if (ts === te) return { idx: ts, val: arr[ts] };

  const mid = parseInt((ts + te) / 2);
  const left = createMinIdxTree(arr, ts, mid);
  const right = createMinIdxTree(arr, mid + 1, te);

  return {
    val: Math.min(left.val, right.val),
    idx: left.val < right.val ? left.idx : right.idx,
    left,
    right,
  };
};

const histogram = [3, 2, 5];
const tree = createMinIdxTree(histogram, 0, histogram.length - 1);
console.log(tree);

// Tree 탐색
const getMinIdx = (ts, te, rs, re, tree) => {
  if (rs <= ts && te <= re) return tree.idx;
  if (te < rs || re < ts) return rs;

  const mid = parseInt((ts + te) / 2);
  const left = getMinIdx(ts, mid, rs, re, tree.left);
  const right = getMinIdx(mid + 1, te, rs, re, tree.right);
  return histogram[left] < histogram[right] ? left : right;
};

const minIdx = getMinIdx(
  0,
  histogram.length - 1,
  (start = 0),
  (end = histogram.length - 1),
  tree
);

console.log(minIdx);
