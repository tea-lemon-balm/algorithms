function shadowOfPapers(papers) {
  // TODO: 여기에 코드를 작성합니다.
// 넓이를 구한다.
  const len = papers.length;
  const comparison = [papers[0]];
  const overlaps = [];
  let area = papers[0][2] * papers[0][3];
  let overlapArea, overlap2Area;
  for (let i = 1; i < len; i++) {
    overlapArea = 0;
    overlap2Area = 0;
    for (let overlapRegion of overlaps) {
      const overlapList = overlap(papers[i], overlapRegion);
      overlap2Area += overlapList[0];
    }
    for (let paper of comparison) {
      const overlapList = overlap(papers[i], paper);
      overlapArea += overlapList[0];
      if (overlapList[0] !== 0) overlaps.push(overlapList[1]);
      console.log("overlap", overlap(papers[i], paper), paper, papers[i]);
      console.log("list", overlaps);
    }
    area += papers[i][2] * papers[i][3] - overlapArea + overlap2Area;
    comparison.push(papers[i]);
  }
  return area;
}

function isRectangleOverlap(rec1, rec2) {
  let result = false;
  const recs = [rec1, rec2];
  // if(isEqualArr(rec1,rec2)) return false;
  recs.sort((a, b) => a[0] - b[0]);
  if (recs[0][2] + recs[0][0] > recs[1][0]) result = true;
  if (result) {
    recs.sort((a, b) => a[1] - b[1]);
    if (recs[0][3] + recs[0][1] > recs[1][1]) result = true;
    else result = false;
  }
  return result;
}

function overlap(rec1, rec2) {
  const isOverlap = isRectangleOverlap(rec1, rec2);
  // let area = rec1[2] * rec1[3] + rec2[2] * rec2[3];
  const overlapRec = Array(4).fill(0);
  if (!isOverlap) {
    return [0, null];
  } else {
    const recs = [rec1, rec2];
    let width, height;
    recs.sort((a, b) => a[0] - b[0]);
    if (recs[0][0] + recs[0][2] > recs[1][0] + recs[1][2]) {
      width = recs[1][2];
      overlapRec[0] = recs[1][0];
      overlapRec[2] = recs[1][2];
    } else {
      width = recs[0][0] + recs[0][2] - recs[1][0];
      overlapRec[0] = recs[1][0];
      overlapRec[2] = width;
    }
    // console.log("1", width);
    recs.sort((a, b) => a[1] - b[1]);
    if (recs[0][1] + recs[0][3] > recs[1][1] + recs[1][3]) {
      height = recs[1][3];
      overlapRec[1] = recs[1][1];
      overlapRec[3] = recs[1][3];
    } else {
      height = recs[0][1] + recs[0][3] - recs[1][1];
      overlapRec[1] = recs[1][1];
      overlapRec[3] = height;
    }
    // console.log("2", height, recs);
    return [width * height, overlapRec];
  }
}

function isEqualArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

let rec1 = [0, 0, 2, 2], rec2 = [1, 1, 3, 3];
console.log(isRectangleOverlap(rec1, rec2));
console.log(overlap(rec1, rec2));
rec1 = [0, 0, 1, 1];
rec2 = [1, 0, 2, 1];
console.log(isRectangleOverlap(rec1, rec2));
console.log(overlap(rec1, rec2));


let result = shadowOfPapers([
  [0, 0, 4, 4],
  [2, 1, 2, 6],
  [1, 5, 5, 3],
  [2, 2, 3, 3],
]);
console.log(result); // --> 36