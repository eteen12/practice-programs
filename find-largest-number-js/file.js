let array = [4, 6, 9, 2, 3];
let largestNum = array[0];

for (i = 1; i < array.length; i++) {
  if (array[i] > largestNum) {
    largestNum = array[i];
  }
}
console.log(largestNum);
