// number data type
// asigning data type and initialization variable

function numbers() {
  const basicNumber = 10;
  const decimalNumber = 0,
      otherDecimal = 100;
  
  const binaryNumber = 0b10101100;
  const octalNumber = 0o12173047;
  const hexadecimalNumber = 0X27f4ba3c8; // hexadecimal will be undefined if compiled to js 
  console.log(basicNumber, decimalNumber, otherDecimal, binaryNumber, octalNumber, hexadecimalNumber)
}

console.log(numbers())
