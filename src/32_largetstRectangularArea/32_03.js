const largestRectangularArea = function (histogram) {
  const tree = findTree(histogram);
  return getRangeArea(histogram, tree, 0, histogram.length - 1);
};

function getRangeArea(arr, tree, start, end) {
  if (start > end) return 0;
  const minIdx = getMinIdx(arr, 0, arr.length - 1, start, end, 0, tree);
  console.log("getRangeArea",minIdx, arr);
  return Math.max(
    (end - start + 1) * arr[minIdx],
    getRangeArea(start, minIdx - 1),
    getRangeArea(minIdx + 1, end)
  );
};

function getMinIdx(arr, ts, te, rs, re, idx, tree) {
  console.log(idx);
  if (rs <= ts && te <= re) return tree[idx][1];
  if (te < rs || re < ts) return rs;

  // console.log("??",ts, te);
  const mid = Math.floor((ts + te) / 2);
  const left = getMinIdx(arr, ts, mid, rs, re, 2 * idx + 1, tree);
  const right = getMinIdx(arr, mid + 1, te, rs, re, 2 * idx + 2, tree);
  return arr[left] < arr[right] ? left : right;
};


function findTree(arr) {
  const height = Math.ceil(Math.log2(arr.length));
  const size = Math.pow(2, height + 1) - 1;
  const tree = Array(size).fill(null);
  // console.log(arr);
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
    if (left[0] < right[0]) tree[idx] = left;
    if (left[0] >= right[0]) tree[idx] = right;
    return tree[idx];
  }
}

const histogram = [2, 2, 1, 4, 3];
// console.log(findTree(histogram));
console.log(largestRectangularArea(histogram));