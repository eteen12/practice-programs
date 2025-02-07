const data = [
  { value: 0, num: 0 },
  { value: 9.75, num: 1 },
  { value: 19, num: 2 },
  { value: 28, num: 3 },
  { value: 35, num: 4 },
  { value: 40, num: 5 },
  { value: 44, num: 6 },
  { value: 47, num: 7 },
  { value: 50, num: 8 },
  { value: 52, num: 9 },
  { value: 53.5, num: 10 },
  { value: 54, num: 11 },
  { value: 54.5, num: 12 },
  { value: 54.6, num: 13 },
  { value: 54.5, num: 14 },
  { value: 54.7, num: 15 },
];

for (let i = 0; i < data.length; i++) {
  let accel = 9.8 - (0.231 / 70) * Math.pow(data[i].value, 2);
  console.log([data[i].num, accel]);
}
