function avoidObstacles(inputArray) {
  let jump = 0;
  for (i = 2; ; i++) {
    for (j = 0; j < inputArray.length; j++) {
      if (inputArray[j] % i === 0) {
        jump = 0;
        break;
      } else {
        jump = i;
      }
    }

    if (jump > 0) {
      break;
    }
  }
  return jump;
}
