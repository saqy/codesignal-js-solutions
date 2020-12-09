function areSimilar(first, second) {
  count = 0;
  let c = [];
  let d = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i] != second[i]) {
      c.push(first[i]);
      d.push(second[i]);
    }
  }

  if (c.length <= 2 && c.join("") === d.reverse().join("")) {
    return true;
  }

  return false;
}
