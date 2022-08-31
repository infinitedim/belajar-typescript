// Typescript uses type annotations to explicitly specify types for identifiers such variables, functions, objects, etc.

// Typescript uses the : type syntax after an identifier as the type annotation, where type can be any valid type.

// Type annotations in variable and constants example
//  The following syntax shows how to specify type annotations for variables and constants

/*

let variableName: type;
let variableName: type = value;
const variableName: type = value;

In this syntax, the type annotation comes after the variable or constant name and is preceded by a colon (:)

 */

// The following example uses number annotation for a variable

let counter: number;

// After this, you can only assign a number to the counter variable:

counter = 1;

/*
  If You assign a string to the counter variable, you'll get an error:

  let counter: number;
  counter = "hello world" //Compile error

*/

//  You can both use a type annotation for a variable and initialize it in a single statement like this:

// let counter: number = 1;

// notes: you can uncomment the code if you want

// The following shows other examples of primitive type annotations:

let firstName: string = "Dimas";
let age: number = 18;
let active: boolean = true;

// Type annotation in array and object example
// let arrayName : type[];

// For example, the following declares an array of string

let names: string[] = ["Dimas", "Noval", "Suhu Andrian"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Dimas",
  age: 18,
}; // Valid code

// Type annotation example in Function arguments & return types
// The following shows a functions annotation with parameter type annotation and return type annotation:

let greeting: (name: string) => string;

// in this example, you can assign any function that accepts a string and returns a string to the greeting variable:

greeting = function (name: string) {
  return `Hi ${name}`;
};

greeting("Dimas");

// The following causes an error because the function that is assigned to the greeting variable doesn’t match with its function type.

// greeting = function () {
//     console.log('Hello');
// };

// Type '() => void' is not assignable to type '(name: string) => string'
