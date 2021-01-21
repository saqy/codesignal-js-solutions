function evenDigitsOnly(n) {
  let inString = n.toString();
  const result = Array.from(inString, (currValue) => {
    return parseInt(currValue) % 2 === 0;
  }).every((currValue) => currValue === true);

  return result;
}
