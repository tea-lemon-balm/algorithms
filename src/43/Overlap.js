function isRectangleOverlap(rec1, rec2) {
  const recs = [rec1, rec2];
  recs.sort((a, b) => a[0] - b[0]);
  if (recs[0][2] + recs[0][0] > recs[1][0]) return true;
  return false;
}