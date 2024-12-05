const array = [1, 5, 2, 6, 1, 6, 7, 8, 9];

for (i = 1; i < array.length; i++) { // arrays start counting at 0, so the current index must be 1, leave 1 number to your left
  const temp = array[i]; // will be the 1 we just declared 
  let j = i - 1; // we set j as the index 0 or the one to our left

  while (j >= 0 && array[j] > temp) { // j >=0 is purely to prevent a out of bounds error, and if the current value of j in the array is greater than temp...
    array[j + 1] = array[j]; // move the number to the right
    j--; // decrement j so it can be tested against the next one to the left
  }
  array[j + 1] = temp; // the current temp will now be in the empty spot
}

console.log(array);