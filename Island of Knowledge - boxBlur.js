function boxBlur(image) {
  let boxSum = [];
  let result = [];
  let accum;
  for (let x = 0; x < image.length - 2; x++) {
    boxSum = [];
    for (let y = 0; y < image[x].length - 2; y++) {
      accum = 0;
      for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
          accum += image[i][j];
        }
      }
      boxSum.push(Math.floor(accum / 9));
    }
    result.push(boxSum);
  }

  return result;
}
