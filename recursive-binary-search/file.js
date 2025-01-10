function rBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] < target) {
    return rBinarySearch(arr, target, mid + 1, right);
  }

  return rBinarySearch(arr, target, left, mid - 1);
}

const numbers = [1, 3, 5, 7, 8, 9];
console.log(rBinarySearch(numbers, 7));
