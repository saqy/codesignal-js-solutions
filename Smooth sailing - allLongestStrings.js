function allLongestStrings(inputArray) {
  const maxLength = inputArray.reduce((accum, value) => {
    if (value.length > accum) {
      accum = value.length;
    }
    return accum;
  }, 0);

  const result = inputArray.filter((currValue, index) => {
    return currValue.length === maxLength;
  });
  return result;
}
