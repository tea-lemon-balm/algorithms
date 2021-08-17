const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.ㅇㅏㄴㄴㅇㅏㅔㅛㄷㄹ?
  const mat = createMatrix(village);
  // TODO: 안녕하세요.
  mat[row][col] = "x";
};

const village = [
  "1101", //
  "0111",
  "0001",
];
const row = 0;
const col = 0;
gossipProtocol(village, row, col);
