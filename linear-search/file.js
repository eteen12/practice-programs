function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers = [7, 3, 5, 1, 9, 8];
console.log(linearSearch(numbers, 1));
