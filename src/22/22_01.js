const rotateMatrix = function (matrix, rot=1) {
  // TODO: 여기에 코드를 작성합니다.
  if(matrix.length<1) return matrix;
  if(rot===0) return matrix;
  const m= matrix.length;
  const n= matrix[0].length;
  const rotatedMat= [];
  for(let j=0;j<n;j++) {
    rotatedMat.push([]);
    for(let i=0;i<m;i++) {
      rotatedMat[j][m-i-1]=matrix[i][j];
    }
  }
  return rotateMatrix(rotatedMat, rot-1);
};
