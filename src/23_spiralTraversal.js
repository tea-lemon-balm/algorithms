const spiralTraversal = function (matrix) {
  const processed = [];
  const len = matrix.length;
  while (matrix.length > 0) {
    processed.push(...matrix[0]);
    matrix.shift();
    if (matrix.length > 0) matrix = rotateMatrix(matrix, 1);
  }
  return processed.join("");
};
function rotateMatrix(matrix, iter) {
  // output matrix
  if (iter % 4 === 0) {
    return matrix;
  }
  const resultMat = [];
  let mMax, nMax;
  if (iter % 2 === 0) {
    mMax = matrix.length;
    nMax = matrix[0].length;
  } else {
    mMax = matrix[0].length;
    nMax = matrix.length;
  }

  if (iter % 4 === 1) {
    for (let m = 0; m < mMax; m++) {
      resultMat.push([]);
      for (let n = 0; n < nMax; n++) {
        resultMat[m][n] = matrix[n][mMax - m - 1];
      }
    }
  } else if (iter % 4 === 2) {
    for (let m = 0; m < mMax; m++) {
      resultMat.push([]);
      for (let n = 0; n < nMax; n++) {
        const reverse = matrix[mMax - m - 1].slice(0).reverse();
        resultMat[m] = reverse;
      }
    }
  } else if (iter % 4 === 3) {
    for (let m = 0; m < mMax; m++) {
      resultMat.push([]);
      for (let n = 0; n < nMax; n++) {
        resultMat[m][n] = matrix[n][mMax - m - 1];
      }
    }
  }
  return resultMat;
}

let matrix;
// const matrix = [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5],
// ];
// matrix = [
//   ["A", "B", "C"],
//   ["D", "E", "F"],
//   ["G", "H", "I"],
// ];
matrix = [
  [1, 2],
  [3, 4],
];
console.log(spiralTraversal(matrix));
// console.log(rotateMatrix(matrix, 3));
module.exports = spiralTraversal;
