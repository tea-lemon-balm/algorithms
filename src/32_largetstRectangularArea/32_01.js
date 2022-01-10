const largestRectangularArea = function (histogram) {
  // TODO: 여기에 코드를 작성합니다.
};

function findTree(arr) {
  const height = Math.ceil(Math.log2(arr.length));
  const size = Math.pow(2, height + 1) - 1;
  const tree = Array(size).fill(null);
  segmentTree(arr, 0, arr.length - 1, tree, 0);
  return tree;

  function segmentTree(arr, rs, re, tree, idx) {
    if (rs === re) {
      tree[idx] = [arr[rs], rs];
      return [arr[rs], rs];
    }
    const half = Math.floor((rs + re) / 2);
    const left = segmentTree(arr, rs, half, tree, 2 * idx + 1);
    const right = segmentTree(arr, half + 1, re, tree, 2 * idx + 2);
    if (left < right) tree[idx] = left;
    if (left > right) tree[idx] = right;
    return tree[idx];
  }
}

// const histogram = [2, 1, 4, 5, 1, 3, 3];
// const height = Math.ceil(Math.log2(histogram.length));
// const size = Math.pow(2, height + 1) - 1;
// const tree = Array(size).fill(null);
// console.log(findTree(histogram, 0, histogram.length - 1, tree, 0));

const arr = [2, 1, 4, 5, 1, 3, 3];
console.log(findTree(arr));

const createMinIdxTree = (arr, ts, te) => {
  // 가장 작은 값의 '인덱스'를 구하기 위한 구간 트리
  if (ts === te) return { idx: ts, val: arr[ts] };

  const mid = parseInt((ts + te) / 2);
  const left = createMinIdxTree(arr, ts, mid);
  const right = createMinIdxTree(arr, mid + 1, te);

  return {
    val: left.val < right.val ? left.val : right.val,
    idx: left.val < right.val ? left.idx : right.idx,
    left,
    right
  };
};
const tree=createMinIdxTree(arr,0, arr.length-1);
console.log(tree.left)