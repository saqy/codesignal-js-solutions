function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  inputArray.forEach((currentValue, index, array) => {
    if (index + 1 <= array.length - 1) {
      const currDiff = Math.abs(currentValue - array[index + 1]);

      if (currDiff > maxDiff) {
        maxDiff = currDiff;
      }
    }
  });
  return maxDiff;
}
