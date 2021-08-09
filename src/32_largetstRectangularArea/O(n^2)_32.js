const largestRectangularArea = function (histogram) {
  // TODO: 여기에 코드를 작성합니다.
  /**
   * 모든 직사각형의 넓이를 구한다.
   * 한 줄은 이미 구해져 있으므로 2줄 부터 구한다.
   * 1부터 max -1 까지 반복해서 넓이를 구한다.
   * 전체 배열에 (1 부터 (max-1))을 빼고 0이나 음수부분을 영역 분리 칸막이로 생각하고 각 영역을 더하고 넓이 목록에 추가한다.
   * 넓이 목록에서 가장 큰 수를 가져온다.
   */
  const arr = [];
  arr.push(Math.max(...histogram));
  for (let i = 1; i <= arr[0]; i++) {
    const curr = histogram.map((el) => (el - i >= 0 ? 1 : 0));
    const currlen = curr
      .join("")
      .split("0")
      .map((el) => el.length);
    arr.push(i * Math.max(...currlen));
  }
  return Math.max(...arr);
};
const arr = [2, 2, 1, 4, 3];
console.log(largestRectangularArea(arr));
