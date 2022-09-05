// Typescript union types

// In TypeScript, a union type variable is a variable which can store multiple type of values (i.e. number, string etc). A union type allows us to define a variable with multiple types. The union type variables are defined using the pipe ( '|' ) symbol between the types. The union types help in some special situations

// For example, the following variable is of type number or string:

let result: number | string;
result = 10; // OK
result = "10"; // also OK
// result = false // a boolean value, not ok
