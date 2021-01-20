function evenDigitsOnly(n) {
  let inString = n.toString();
  const result = Array.from(inString, (currValue, index) => {
    return parseInt(currValue) % 2 === 0;
  }).every((currValue, index) => currValue === true);

  return result;
}
