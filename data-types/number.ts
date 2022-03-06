// number data type
// asigning data type and initialization variable

function numbers() {
  let basicNumber: number = 10;
  let decimalNumber: number = 0,
      otherDecimal: number = 100;
  
  let binaryNumber: number = 0b10101100;
  let octalNumber: number = 0o12173047;
  let hexadecimalNumber: number = 0X27f4ba3c8; // hexadecimal will be undefined if compiled to js 
  console.log(basicNumber, decimalNumber, otherDecimal, binaryNumber, octalNumber, hexadecimalNumber)
}

console.log(numbers())
