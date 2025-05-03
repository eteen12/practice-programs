const array = [1, 5, 2, 6, 1, 6, 7, 8, 9];

for (i = 0; i < array.length - 1; i++) {
  let min = i;
  for (j = i + 1; j < array.length; j++) {
    if (array[min] > array[j]) {
      min = j;
    }
  }
  const temp = array[i];
  array[i] = array[min];
  array[min] = temp;
}



console.log(array);
