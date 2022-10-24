# Introduction to TypeScript any type

in this case, you want opt-out of the type checking and allow the value to pass trough the compile-time check
To do so, you use the any type. The any type allows you to assignt a value of any type to a variable:

```typescript
// json may come from a 3rd-party API
const json = `{"latitude": 10.11,"longitude": 12.12}`;

// parse JSON to find location

const currentLocation = JSON.parse(json);
console.log(currentLocation);
```

### Output:

```javascript
{ latitude: 10.11, longitude: 12.12 }
```

In this example, the currentLocation variable is assigned to an object returned ny the JSON.parse() function

However, when you use the currentLocation to access object properties, TypeScript also won't carry any check

```typescript
console.log(currentLocation.x);

Output: undefined;
```

## The TypeScript compiler doesn't complain or issue any error.

The any type provides you with a way to work exiting JavaScript code base. it allows you gradually opt-in and opt-out type checking during compilation. Therefore you can use the any type for migrating a JavaScript project over to TypeScript

## TypeScript any: implicit typing

If you declare variable without specifying a type, TypeScript assumes that you use the any type. This feature is called type inference. Basically, TypeScript guesses the type of the variable

### For example:

```typescript
let result;
```

In this example, TypeScript infers the type for you. This practice is called implicit typing

## TypeScript any vs object

If you declare a variable with the object type you can also assign it any value. However, you can call method on it event the method actually doesn't exists. For example:

```typescript
let result1: any;
result1 = 10.123;
console.log(result1.toFixed());
result1.willExist();
```

in this example, the TypeScript compiler doesn't issue any warning even the willExist() method doesn't exist at compile time because the willExist() method might available at runtime

however, if you change the type of the result variable to object, the TypeScript compiler will issue an error:

```typescript
let result2: object;
result2 = 10.123;
result2.toFixed();
```

### Error:

```typescript

Type 'number' is not assignable to type 'object'

error TS2339: Property 'toFixed' does not exist on type 'object'.
```

## Conclusion

~ The TypeScript any type allows you to store a value of any type. it instructs the compiler to skip type checking

~ Use the any type to store a value that you don't actually know it's type at the compile-time or when you migrate a JavaScript project over to a TypeScript project
