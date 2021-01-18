function minesweeper(matrix) {
  let mineCounts = [];
  for (let i = 0; i < matrix.length; i++) {
    mineCounts.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      mineCounts[i][j] = 0;
      //above

      if (matrix[i][j - 1] === true) {
        mineCounts[i][j]++;
      }

      //below
      if (matrix[i][j + 1] !== undefined) {
        if (matrix[i][j + 1] === true) {
          mineCounts[i][j]++;
        }
      }
      //left
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j] === true) {
          mineCounts[i][j]++;
        }
      }

      //right
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j] === true) {
          mineCounts[i][j]++;
        }
      }

      //down right

      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j + 1] === true) {
          mineCounts[i][j]++;
        }
      }

      // down left
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j - 1] === true) {
          mineCounts[i][j]++;
        }
      }

      //top right
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j + 1] === true) {
          mineCounts[i][j]++;
        }
      }

      //top left
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1] === true) {
          mineCounts[i][j]++;
        }
      }
    }
  }
  return mineCounts;
}
