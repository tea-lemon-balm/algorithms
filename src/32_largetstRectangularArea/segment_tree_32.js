function segmentTree(arr) {
  const len = arr.length;
  const patition = Math.ceil(len / 2);
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(arr.toString(), sum);
  if (arr.length === 1) {
    return;
  }
  segmentTree(arr.slice(0, patition));
  segmentTree(arr.slice(patition, len));
}
const arr = [1, 3, -2, 8, -7];
segmentTree(arr);
