const largestRectangularArea = function (arr) {
  if (arr.length === 0) return 0;
  const minValue = Math.min(...arr);
  const minIdx = arr.indexOf(minValue);
  const left = largestRectangularArea(arr.slice(0, minIdx));
  const right = largestRectangularArea(arr.slice(minIdx + 1, arr.length));
  return Math.max(minValue * arr.length, left, right);
};
