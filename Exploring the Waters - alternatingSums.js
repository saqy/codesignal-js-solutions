function alternatingSums(a) {
  let flag = true;
  const sum = a.reduce(
    (accum, currentValue) => {
      if (flag) {
        flag = false;
        accum[0] += currentValue;
      } else {
        flag = true;
        accum[1] += currentValue;
      }

      return accum;
    },
    [0, 0]
  );

  return sum;
}
