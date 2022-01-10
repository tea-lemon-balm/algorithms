const rotateMatrix = function (matrix, rot=1) {
  // TODO: 여기에 코드를 작성합니다.
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


let matrix = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
];
console.log(rotateMatrix(matrix));