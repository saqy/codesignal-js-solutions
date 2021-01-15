function minesweeper(matrix) {
  let count = 0;
  let mineCounts = [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    mineCounts = [];
    for (let j = 0; j < matrix[i].length; j++) {
      count = 0;
      if (matrix[i][j + 1] !== undefined) {
        if (matrix[i][j + 1] === true) {
          count++;
          mineCounts.push(count);
        }
      }
      if (matrix[j - 1] !== undefined) {
        if (matrix[i][j - 1] === true) {
          count++;
          mineCounts.push(count);
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j] === true) {
          count++;
          mineCounts.push(count);
        }
      }
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j] === true) {
          count++;
          mineCounts.push(count);
        }
      }

      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j + 1] === true) {
          count++;
          mineCounts.push(count);
        }
      }

      if (matrix[j + 1] !== undefined) {
        if (matrix[i + 1][j - 1] === true) {
          count++;
          mineCounts.push(count);
        }
      }
    }
    console.log(mineCounts);
    result.push(mineCounts);
  }
  return result;
}
