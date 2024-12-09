const array = [
  [4, 4, 5, 6, 3, 1],
  [14, 2, 5, 4, 8, 2],
  [45, 12, 13, 5, 2, 1],
];

function sumRow(array, row) {
  let sum = 0;
  for (col = 0; col < array[row].length; col++) {
    sum += array[row][col];
  }
  return sum;
}

function sumArray(array) {
  let totalSum = 0;
  for (row = 0; row < array.length; row++) {
    totalSum += sumRow(array, row);
  }
  return totalSum;
}

console.log(sumArray(array));
