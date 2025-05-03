const velocities = [1, 2, 3, 4, 5, 6];

//bottom
for (i = 0; i < velocities.length; i++) {
  let mass = 100;
  let radius = 7;
  let gravity = 9.8;
  let velocity = velocities[i];

  let fn = (mass * velocity ** 2) / radius + mass * gravity;

  fn = fn.toFixed(2);

  console.log(fn);
}
