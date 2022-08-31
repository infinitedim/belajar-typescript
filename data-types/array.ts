// TypeScript array is an ordered list of data. To declare an array that holds values of a specifix type, you use the following the syntax:

/*
let myArray: type[]; 

 // type[] in here representate to type you want to declare like string number etc 
 */

// for example, the following declares an array of strings:

let mySkill: string[] = [];

// and you can add one of more strings to the array:

mySkill[0] = "ReactJS";
mySkill[1] = "JavaScript";

// or use push() method:

/*
mySkill.push("Web Development");
*/

// or this method

let yourSkill: string[];
yourSkill = ["Cloud Computing", "Artificial Inteligence", "Machine Learning"];

// Once you define an array of a specific type, TypeScript will prevent you from adding incompatible values to the array.

// The following will cause an error:

/* skills.push(100);

Error:
    Argument of type 'number' is not assignable to parameter of type 'string'.
*/

// TypeScript array properties and methods
// Typescript arrays can access the properties and methods of a JavaScript.

// length methods

/*
  let series: number[] = [1,2,3];
  // or you can remove number[]
  // the output is same aswell
  console.log(series.length);
*/

// And you can use all the useful array method such as forEach(), map() reduce() and filter(). For example:

let myID = [1, 2, 3];

let multiply = myID.map((e) => e * 2);
console.log(multiply);

// Storing values of mixed types
// the following illustrates how to declare an array that hold both string and numbers:

/*
let soccerScores = ["Chelsea", 3, "Liverpool", 5];
*/

// in this case,Typescript infers the soccerScores array as an array of string | number

// it's equivalent to the following:

let soccerScores: (string | number)[];
soccerScores = ["Chelsea", 3, "Liverpool", 5];

// Notes: uncomment / comment code if you want
