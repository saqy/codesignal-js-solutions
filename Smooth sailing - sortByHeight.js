function sortByHeight(a) {
  let treeIndexes = [];
  let result = a
    .filter((currValue, index) => {
      if (currValue === -1) {
        treeIndexes.push(index);
      } else {
        return currValue;
      }
    })
    .sort((a, b) => a - b);

  treeIndexes.forEach((value, index) => {
    result.splice(value, 0, -1);
  });

  return result;
}
