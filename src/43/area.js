function rectangleArea(rec1, rec2) {
  const isOverlap = isRectangleOverlap(rec1, rec2);
  let area = rec1[2] * rec1[3] + rec2[2] * rec2[3];
  if (!isOverlap) {
    return area;
  } else {
    const recs = [rec1, rec2];
    recs.sort((a, b) => a[0] - b[0]);
    const width = recs[0][0] + recs[0][2] - recs[1][0];
    recs.sort((a, b) => a[1] - b[1]);
    const height = recs[0][1] + recs[0][3] - recs[1][1];
    const overlap = width * height;
    return area - overlap;
  }
}