//distance converted frm cm to m
const charges = [
  { left: 5, right: 8, distance: 0.03 },
  { left: 5, right: 8, distance: 0.04 },
  { left: 5, right: 8, distance: 0.05 },
  { left: 5, right: 8, distance: 0.06 },
  { left: 5, right: 8, distance: 0.07 },
  { left: 5, right: 8, distance: 0.08 },
  { left: 5, right: 8, distance: 0.09 },
  { left: 5, right: 8, distance: 0.1 },
];

charges.forEach((charge, index) => {
  const k = 9e9;
  const q1 = charge.left * 1e-6;
  const q2 = charge.right * 1e-6;
  const r = charge.distance ** 2;

  const result = ((k * q1 * q2) / r).toFixed(2);
  console.log(
    `for distance ${(charge.distance * 100).toFixed(0)}cm: Force = ${result}`
  );
  console.log("-".repeat(40));
});
