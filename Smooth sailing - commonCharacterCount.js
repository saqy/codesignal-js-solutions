function commonCharacterCount(s1, s2) {
  s1counts = countFreq(s1);
  s2counts = countFreq(s2);
  const result = Object.keys(s1counts).reduce((accum, value) => {
    accum +=
      s1counts[value] && s2counts[value]
        ? Math.min(s1counts[value], s2counts[value])
        : 0;
    return accum;
  }, 0);

  return result;
}

function countFreq(s) {
  return s.split("").reduce((accum, val) => {
    if (accum[val]) {
      accum[val]++;
    } else {
      accum[val] = 1;
    }
    return accum;
  }, {});
}
