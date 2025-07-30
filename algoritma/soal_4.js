function matrixReduction(matrix) {
  const n = matrix.length;
  let firstDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < n; i++) {
    firstDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][n - 1 - i];
  }

  return firstDiagonal - secondaryDiagonal;
}
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
];
const result = matrixReduction(matrix);
console.log("Hasil:", result);
