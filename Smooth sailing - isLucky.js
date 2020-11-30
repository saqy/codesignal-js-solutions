function isLucky(n) {
  let str = n.toString();
  let mid = str.length / 2;

  const firstHalf = str.slice(0, mid);
  const secondHalf = str.slice(mid, str.length);
  return calculateSum(firstHalf) === calculateSum(secondHalf);
}

function calculateSum(s) {
  return s.split("").reduce((accum, value) => {
    return accum + parseInt(value);
  }, 0);
}
