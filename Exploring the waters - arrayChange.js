function arrayChange(inputArray) {
  let isChange = true;
  let count = 0;
  let i = 0;
  while (isChange) {
    if (inputArray[i] >= inputArray[i + 1]) {
      inputArray[i + 1] = inputArray[i + 1] + 1;
      count++;
    } else {
      i++;
    }
    if (i === inputArray.length - 1) {
      isChange = false;
    }
  }
  return count;
}
