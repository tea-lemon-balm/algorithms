const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol2 = function (village, num) {
  // TODO: 여기에 코드를 작성합니다.
  // matrix를 만든다.
  // 전체 matrix를 확인한다.
  // 2이면 2에서 4방향을 iteration 1 동안 2로 바꾼다. 0이면 0으로 둔다.
  // m x n x 4 => O(mn)
  // m x n x 4을 다 전달 될 때까지 반복해야된다.
  // bool으로 한번이라도 전달되었으면 true로 하자. 처음 시작도 true이다.
  // while(bool) 로 bool false가 되면 while이 끝나게 하자.
  // bool의 false과 ture를 판정할 count가 필요하다. numTrans로 하자.
  // mat가 바뀌기 전 후가 필요하다.
  //  전파가 m-vector에서 이루어지면 m+1-vector는 전파가 이루어진 후다a.

  const mat = createMatrix(village);
  let matCurr = createMatrix(village);
  let matAfter = createMatrix(village);
  // matAfter[0][0] = "23";
  // console.log("123");
  const width = mat[0].length;
  const height = mat.length;
  let bool = true;
  let count = 0;
  let numTrans = 0;
  while (bool) {
    for (let m = 0; m < height; m++) {
      for (let n = 0; n < width; n++) {
        if (matCurr[m][n] === "2") {
          for (let dir = 0; dir < 4; dir++) {
            if (m - 1 > -1)
              if (matCurr[m - 1][n] === "1") {
                matAfter[m - 1][n] = "2";
                numTrans++;
              }
            if (n - 1 > -1)
              if (matCurr[m][n - 1] === "1") {
                matAfter[m][n - 1] = "2";
                numTrans++;
              }
            if (m + 1 < height)
              if (matCurr[m + 1][n] === "1") {
                matAfter[m + 1][n] = "2";
                numTrans++;
              }
            if (n + 1 < width)
              if (matCurr[m][n + 1] === "1") {
                matAfter[m][n + 1] = "2";
                numTrans++;
              }
          }
        }
      }
    }
    if (numTrans > 0) {
      count++;
      bool = true;
      matCurr = matAfter.map((el) => el.slice(0));
    } else if (numTrans === 0) bool = false;
    numTrans = 0;
  }
  return count;
};

// const village = [
//   "1001212",
//   "1201011",
//   "1102001",
//   "2111102",
//   "0012111",
//   "1111101",
//   "2121102",
// ];
// const num = 5;

village = [
  "1001212",
  "1201011",
  "1102001",
  "2111102",
  "0012111",
  "1111101",
  "2121102",
];
num = 5;
console.log(gossipProtocol2(village, num));
