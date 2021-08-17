let arr = [
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
];
arr = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
];
// console.log(identifier(arr));
console.log(decompression(arr));

function decompression(image, resultStr = "") {
  if (image.length === 1) {
    return image[0];
  }
  const check = identifier(image);
  if (check === "1") {
    resultStr += check;
    return check;
  } else if (check === "0") {
    resultStr += check;
    return check;
  } else if (check === "X") {
    /**
     * * X는 쪼개고 다시 확인을 해야한다.
     * * 4등분을 효율적이게 해야 한다.
     * * 어떻게 해야할까?
     * * 4등분하기 성공.
     * * 4등분하고 압축표시 X를 언제 입력할 것인가가 문제다.
     */
    resultStr += check;
    const halfWidth = parseInt(image.length / 2);
    const halfHeight = parseInt(image[0].length / 2);
    const width = image.length;
    const height = image[0].length;
    const part1 = image
      .slice(0, halfHeight)
      .map((el) => el.slice(0, halfWidth));
    const part2 = image
      .slice(0, halfHeight)
      .map((el) => el.slice(halfWidth, width));
    const part3 = image
      .slice(halfHeight, height)
      .map((el) => el.slice(0, halfWidth));
    const part4 = image
      .slice(halfHeight, height)
      .map((el) => el.slice(halfWidth, width));
    resultStr += decompression(part1);
    resultStr += decompression(part2);
    resultStr += decompression(part3);
    resultStr += decompression(part4);
  }
  return resultStr;
}

function identifier(image) {
  let sum = 0;
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[0].length; j++) {
      sum += image[i][j];
    }
  }
  if (sum / Math.pow(image.length, 2) === 1) {
    return "1";
  } else if (sum / Math.pow(image.length, 2) === 0) {
    return "0";
  } else {
    return "X";
  }
}
