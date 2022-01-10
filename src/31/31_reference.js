// solution with segment tree: O(logN) (search only)
// array implementaion
const rangeMinimum = function (arr, ranges) {
  const createMinTree = (arr, ts, te, tree, idx) => {
    if (ts === te) {
      tree[idx] = arr[ts];
      return arr[ts];
    }

    const mid = Math.floor((ts + te) / 2);
    tree[idx] = Math.min(
      createMinTree(arr, ts, mid, tree, idx * 2 + 1), //
      createMinTree(arr, mid + 1, te, tree, idx * 2 + 2)
    );

    return tree[idx];
  };

  // 트리 전체의 높이(루트 노트에서 가장 깊은 리프 노드까지의 거리)를 구하고
  // 전체 배열의 크기를 구한다.
  const height = Math.ceil(Math.log2(arr.length));
  const size = Math.pow(2, height + 1) - 1;
  const tree = Array(size).fill(null);
  createMinTree(arr, 0, arr.length - 1, tree, 0);

  const findMin = (ts, te, rs, re, idx) => {
    if (rs <= ts && te <= re) {
      return tree[idx];
    }

    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    const mid = parseInt((ts + te) / 2);
    return Math.min(
      findMin(ts, mid, rs, re, 2 * idx + 1), //
      findMin(mid + 1, te, rs, re, 2 * idx + 2)
    );
  };

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, 0);
  });
  return mins;
};

const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3]
]);
console.log(mins)