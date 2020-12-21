function isIPv4Address(inputString) {
  const array = inputString.split(".");

  if (array.length !== 4) {
    return false;
  }
  const result = array
    .map((currValue, index) => {
      if (
        currValue &&
        currValue >= 0 &&
        currValue <= 255 &&
        parseInt(currValue).toString().length == currValue.length
      ) {
        return true;
      } else {
        return false;
      }
    })
    .every((v) => v === true);

  console.log(result);
  return result;
}
