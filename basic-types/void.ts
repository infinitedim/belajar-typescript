// TypeScript void type

// The void type denotes the absence of having any type at all. it is a little like the opposite of the any type

// Typically, you use the void type as the return type of functions that do not return a value. For example:

function log(messege): void {
    console.log(messege);
}

// it's a good practice to add the void type as the return type of a function or a method that doesn't return any value. By doing this, you can gain the following benefits:

/*
  ~ Improve clarity of the code: you don't have to read the whole function body to see if it returns anything
  ~ Ensure type-safe: you will never assign the function with the void return type to a variable
 */

let useless: void = undefined;

// useless = 1; // error

// If the --strictNullChecks flags is not specified, you can assign the useless to null.

// useless = null; // Oke if --strictNullChecks is not specified
