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

let totalDisplacement = 0;

for (let i = 0; i < data.length - 1; i++) {
  const vOld = data[i].value;
  const vNew = data[i + 1].value;
  const accel = 9.8 - (0.231 / 70) * Math.pow(vOld, 2);
  const vAvg = (vOld + vNew) / 2;
  const displacement = vAvg * 1;
  totalDisplacement += displacement;

  console.log(
    `Time: ${data[i].num} to ${
      data[i + 1].num
    } s | Acceleration: ${accel.toFixed(
      2
    )} m/s² | Displacement: ${displacement.toFixed(
      2
    )} m | Total Displacement: ${totalDisplacement.toFixed(2)} m`
  );
}
