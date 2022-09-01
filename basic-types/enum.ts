// Enum Type
// An enum is a group of named constant values. Enmum stands for enumerated type.

// To define an enum. you follow this steps:
/*
    ~ First, use the enum keyword followed by the name of the enum
    ~ Then define constant value for enum
 */

// The following shows the syntax for deining an enum:

/*
    enum name {constant1, constant2, ...};
*/
// In this syntax, the constant1, etc. are also known as the members of enum

// TypeScript enum example
// The following example creates an enum than represents the months of the year:

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
}

// in this example, the enum name is Month and constant value are Jan, Feb, Mar, etc

// The following declares a functions that uses the month enum as the type of the month parameters:

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
    }
    return isSummer;
}

// And you can call it like so:
console.log(isItSummer(Month.Jun)); //True

// This example uses constant values including Jan, Feb, Mar, ... in the enum rather than magic values like 1,2,3, ... This makes the code more obvious

// How TypeScript enum works
// It's a good practice to use the constant values defined by enum in the code

// However, the following example passes a number instead of an enum to the isItSummer() function. And it works.

console.log(isItSummer(6)); // True

// Specifying enum members' numbers
// TypeScript defines the numeric value of an enum's member based on the order of that member that appears in the enum definition. For examole, Jan takes 0, Feb gets 1, etc.

// It's possible to explicitly specify numbers for the members of an enum like this:

/*
    enum Month {
        Jan = 1,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec
    };
 */

// in this example, the Jan constan value takes 1 instead of 0, etc.

// When to use an enum
//  You should use an enum when you:
/*
      ~ Have a small set of fixed values that are closely related
      ~ And these values are known at compile time
*/

// For example, you can use an enum for the approval status:

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected,
}

// Then, you can use the ApprovalStatus enum like this:

const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: "Please approve this request",
};

if (request.status === ApprovalStatus.approved) {
    // send an email
    console.log("Send email to the Applicant...");
}
