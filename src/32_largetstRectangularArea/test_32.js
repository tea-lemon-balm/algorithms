/**
 * version 1
 * @param {*} arr
 * @returns
 */
function largestRectangularArea(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return 0;
  }
  const minValue = Math.min(...arr);
  const minIdx = arr.indexOf(minValue);
  const left = largestRectangularArea(arr.slice(0, minIdx === 0 ? 1 : minIdx));
  const right = largestRectangularArea(arr.slice(minIdx + 1, arr.length));
  return Math.max(minValue * arr.length, left, right);
}
/**
 * version 2
 * @param {*} arr
 * @returns
 */
function largestRectangularArea(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return 0;
  }
  const minValue = Math.min(...arr);
  const minIdx = arr.indexOf(minValue);
  const left = largestRectangularArea(arr.slice(0, minIdx));
  const right = largestRectangularArea(arr.slice(minIdx + 1, arr.length));
  return Math.max(minValue * arr.length, left, right);
}
/**
 * version 3
 */
const largestRectangularArea = function (arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 0) return 0;
  const minValue = Math.min(...arr);
  const minIdx = arr.indexOf(minValue);
  const left = largestRectangularArea(arr.slice(0, minIdx));
  const right = largestRectangularArea(arr.slice(minIdx + 1, arr.length));
  return Math.max(minValue * arr.length, left, right);
};

/**
 * version 4
 */
const largestRectangularArea = function (arr) {
  if (arr.length === 0) return 0;
  const minValue = Math.min(...arr);
  const minIdx = arr.indexOf(minValue);
  const left = largestRectangularArea(arr.slice(0, minIdx));
  const right = largestRectangularArea(arr.slice(minIdx + 1, arr.length));
  return Math.max(minValue * arr.length, left, right);
};

const arr = [2, 2, 1, 4, 3];
console.log(largestRectangularArea(arr));
