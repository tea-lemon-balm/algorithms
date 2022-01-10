const spiralTraversal = function (matrix, str='') {
  // TODO: 여기에 코드를 작성합니다.
  if(matrix.length===0) return str;
  // 1
  str+=matrix[0].join('')
  // 2
  matrix.shift();
  // 3
  const newMat= rotateMatrix(matrix);
  // 4
  return spiralTraversal(newMat, str);
};

function rotateMatrix(matrix, rot=1) {
  if(matrix.length<1) return matrix;
  if(rot===0) return matrix;
  const m= matrix.length;
  const n= matrix[0].length;
  const rotatedMat= [];
  for(let i=0;i<n;i++) {
    rotatedMat.push([]);
  }
  for(let j=0;j<n;j++) {
    for(let i=0;i<m;i++) {
      rotatedMat[n-j-1][i]=matrix[i][j];
    }
  }
  return rotateMatrix(rotatedMat, rot-1);
};