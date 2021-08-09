/**
 * Construct the segment tree from the array of input.
 * This code didn't optimize.
 * And Let's think about big O.
 * O(n)? O(4n)?
 */
segTree = [];
function constructTree(input, low = 0, high = input.length - 1, pos = 0) {
  if (low === high) {
    segTree[pos] = input[low];
    return;
  }
  let mid = Math.floor((low + high) / 2);
  constructTree(input, low, mid, 2 * pos + 1);
  constructTree(input, mid + 1, high, 2 * pos + 2);
  segTree[pos] = Math.min(segTree[2 * pos + 1], segTree[2 * pos + 2]);
}

arr = [-1, 2, 4, 0];
constructTree(arr);
console.log(segTree);
