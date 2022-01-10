const rotateMatrix = function (matrix, iter = 1) {
  // TODO: 여기에 코드를 작성합니다.
  if (matrix.length === 0 || matrix === undefined) {
    return [];
  }
  const outputMat = [];
  // matrix를 iter 홀수와 짝수로 나눈다. 짝수 m x n => 홀수 n x m ... 반복 된다.
  const max = [0, 0];
  if (iter % 2) {
    max[0] = matrix[0].length;
    max[1] = matrix.length;
  } else {
    max[0] = matrix.length;
    max[1] = matrix[0].length;
  }
  for (let m = 0; m < max[0]; m++) {
    outputMat.push(Array(max[1]).fill(0));
  }
  // 4배수 만큼 돌면 360 degree 이기 때문에 input matrix를 return
  if (iter % 4 === 0) {
    return matrix;
  }
  // matrix를 90도 회전한다. iter 값 만큼 회전한다.
  if (iter % 4 === 1) {
    for (let m = 0; m < max[0]; m++) {
      for (let n = 0; n < max[1]; n++) {
        outputMat[m][n] = matrix[max[1] - 1 - n][m];
      }
    }
  } else if (iter % 4 === 2) {
    for (let i = 0; i < max[0]; i++) {
      matrix[max[0] - i - 1].reverse();
      outputMat[i] = matrix[max[0] - i - 1];
    }
  } else if (iter % 4 === 3) {
    for (let m = 0; m < max[0]; m++) {
      for (let n = 0; n < max[1]; n++) {
        outputMat[m][n] = matrix[n][max[0] - 1 - m];
      }
    }
  }
  return outputMat;
};