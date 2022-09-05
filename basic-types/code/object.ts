/* eslint-disable prefer-const */
let employee: object;

employee = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    jobTitle: "Web Developer",
};



const employee2: {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string,
    haveAJob: boolean
} = {
    firstName: "Dimas",
    lastName: "Saputra",
    age: 17,
    jobTitle: "Front End Web Developer",
    haveAJob: true
}

console.log(employee)
console.log(employee2)
