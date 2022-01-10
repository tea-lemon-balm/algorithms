/**
 * 현재 코드의 문제점은 slice를 사용한 다는 것이다.
 * slice의 operation time이 얼마나 되는지 알자.
 * O(N)...
 */

/**
 * 1. 전부 같은 숫자인지 확인하다.
 * 2. 같은 숫자면 숫자를 입력하고 끝낸다. 다른 경우 X를 입력한다.
 * 2. 4분할 한다.
 * 3. 1부터 반복하다.
 * 4. 분할한 the length of Array 가 1 이면 숫자를 입력한다.
 */


/**
 * 4분할은 2차원 배열일 때가 쉽다.
 * 전부 같은 숫자인지 확인하는 건 배열이 하나 일때와 없을 경우가 문제이다.
 * 계속 1차원 배열으로 만들어서 확인하자니 operation time 이 커질 수록 너무 크다.
 */

const decompression = function (image, str = '') {
  // TODO: 여기에 코드를 작성합니다.
  writing(image);
  return str;

  function writing(image) {
    const len = image.length;
    // 이미지를 더 이상 쪼갤 필요가 없습니다.
    if (len === 1) {
      str += image[0][0];
      return image[0][0];
    }
    // 이미지를 쪼개면서 X 표시를 넣을지 아니면 안 쪼개고 압축할지 결정합니다.
    const isNotMarkX = isAllSame(image);
    if (Number.isInteger(isNotMarkX)) {
      str += isNotMarkX;
      return isNotMarkX;
    } else {
      str += 'X';
      str += decompression(image.slice(0, len / 2).map(arr => arr.slice(0, arr.length / 2)));
      str += decompression(image.slice(0, len / 2).map(arr => arr.slice(arr.length / 2, arr.length)));
      str += decompression(image.slice(len / 2, len).map(arr => arr.slice(0, arr.length / 2)));
      str += decompression(image.slice(len / 2, len).map(arr => arr.slice(arr.length / 2, arr.length)));
    }
  }
};

function isAllSame(image) {
  for (let arr of image) {
    for (let el of arr) {
      if (el !== image[0][0]){
        return false;
      }
    }
  }
  return image[0][0];
}

let image = [
  [1, 0],
  [0, 1]
];

image = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
];

image = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];

image = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1],
];
console.log(decompression(image));
// image = [
//   [0, 0],
//   [0, 0]
// ];
//
// console.log(isAllSame(image))
