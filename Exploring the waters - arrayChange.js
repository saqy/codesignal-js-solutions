function arrayChange(inputArray) {
  let flag = true;
  let count = 0;
  let i = 0;
  while (flag) {
    if (inputArray[i] >= inputArray[i + 1]) {
      inputArray[i + 1] = inputArray[i + 1] + 1;
      count++;
    } else {
      i++;
    }
    if (i === inputArray.length - 1) {
      flag = false;
    }
  }
  return count;
}
