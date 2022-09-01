// TypeScript Tuple Type
// a tuple works like an array with some addititional consideration

// The number of elements in tuple is fixed
// The types of elements are known, and need not be the same.

// For example, you can use a tuple to represent a value as a pair of a string and a number:

let skill: [string, number];
skill = ["programming", 5];

// The order of values in atuple is important. if you change the order of values of the skill tuple to [5, "programming"], you'll get an error

/* 
  let skill: [string, number];
  skill = [5, "programming"]

  Error:
    error TS2322: Type 'string' is not assignable to type 'number'
*/

// For this reason, it's a good practive to use tuples with data that is related to each other in a specific order

// For example, you can use a tuple to define and RGB color that always comes in a three-number pattern
/* (r,g,b)*/

// For example:

let color: [number, number, number];

// The color[0], color[1] and color[2] would be logicially map to Red, Green And Blue color values

// Optinoal Tuple Elements
// since Typescript 3.0, a tuple can have optional elements specified using the questing mark (?) postfix

// For example, you can define an RGBA tuple with the optional alpha channel value:

let bgColor, navColor: [number, number, number, number?];

bgColor = [0, 34, 75, 0.6];
navColor = [0, 34, 75];
