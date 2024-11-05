const binaryNumbers = [
  "00110101",
  "11111000",
  "00011111",
  "10101010",
  "01010101",
  "11111110",
  "11111100",
  "00111011",
  "11001100",
  "00110011",
  "00000111",
  "00111100",
];
const decimalNumbers = [167, 149, 252, 128, 64, 240, 255, 14, 15, 63, 188, 244];

function decimalTobinary(decimalNumber) {
  return (decimalNumber >>> 0).toString(2);
}
function binaryToDecimal(binaryNumber) {
  return parseInt(binaryNumber, 2);
}

const results = [];

decimalNumbers.forEach((number, index) => {
  const binaryNumber = decimalTobinary(number);
  console.log(`Decimal:${number} => binary: ${binaryNumber}`);
  results.push({
    type: "decimal",
    index,
    value: number,
    binary: binaryNumber,
  });
});

binaryNumbers.forEach((binary, index) => {
  const decimalNumber = binaryToDecimal(binary);
  console.log(`binary: ${binary} => Decimal: ${decimalNumber}`);
  results.push({
    type: "binary",
    index,
    value: binary,
    decimal: decimalNumber,
  });
});

console.log("!!!!!!!!!!!!!! RESULTS !!!!!!!!!!!!!!!!!!");
results.forEach((result) => {
  if (result.type === "decimal") {
    console.log(
      `Index: ${result.index}, Decimal: ${result.value}, Binary: ${result.binary}`
    );
  } else {
    console.log(
      `Index: ${result.index}, Binary: ${result.value}, Decimal: ${result.decimal}`
    );
  }
});
