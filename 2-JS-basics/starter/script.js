// console.log('Hello World!!!');

// /////////////////////
// // Variables and Data Types
// /////////////////////
//
// // a VARIABLE is a container to store a value
//
// let firstName = 'John'; // The VARIABLE name here is firstName and the VALUE assigned to it is John
//
// console.log(firstName); // returns John
//
// let lastName = 'Smith';
// let age = 28;
// console.log(lastName);
// console.log(age);
//
// let fullAge = true;  // This is a BOOLEAN which can only be true or false
// console.log(fullAge); // Returns true
//
// let job; // we declared a VARIABLE, but did not assign a VALUE
// console.log(job); // returns undefined
//
// job = 'Teacher'; // VALUE has been assigned
// console.log(job); // returns Teacher

/////////////////////
// Variable mutation and type coercion
/////////////////////
//
// let firstName = 'John';
// let age = 28;
//
// console.log(firstName + ' ' + age); // JavaScript automatically adds the name and age together in the process of type coercion
//
// let job, isMarried; // declaring multiple variables on the same line
// job = 'teacher'; // here now assigned VALUES
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// // Variable mutation
// age = 'twenty eight'; // let is not required as we've already defined age previously
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); // pops up an alert box
//
// let lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName); // this will log whether or not the lastName stored the info taken in from the user.

/////////////////////
// Basic Operators
/////////////////////
//
// let now, yearJohn, yearMark;
//
// now = 2019;
// ageJohn = 28;
// ageMark = 33;
//
// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
// // Logical Operator
//
// let johnOlder = ageJohn > ageMark; // asks is ageJohn older than ageMark?
// console.log(johnOlder); // returns false
//
// // typeof Operator
//
// console.log(typeof johnOlder); // returns BOOLEAN
// console.log(typeof ageJohn); // returns number
// console.log(typeof 'Mark is older than John'); // returns STRING
// let x;
// console.log(typeof x); // returns undefined

/////////////////////
// Operator Precedence
/////////////////////
//
// let now = 2018;
// let yearJohn = 1989;
// let fullAge = 18;
//
// let isFullAge = now - yearJohn >= fullAge; // asks if John's age (yearJohn) is greater than or equal to the fullAge. The precendence is that the subtraction takes place BEFORE the greater than or equal to so that the comparison may take place
// console.log(isFullAge); // returns true
//
// let ageJohn = now - yearJohn;
// let ageMark = 35;
// let average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// // Multiple assignments
// let x, y;
// x = y = (3 + 5) * 4 - 6; // Steps: 8 * 4 - 6 // 32 - 6 // 26
// // this works because = works right to left. so 26 is assigned to y which is then assigned to x
// console.log(x, y); // returns 26 26
//
// // More Operators
// // x = x * 2;
// x *= 2; // this line will do the same thing as the above line with less code
// console.log(x); // returns 52
// x += 10; // <- equals -> x = x + 10
// console.log(x); // returns 62
// // x = x + 1;
// // x += 1;
// x++ // This will increment x by 1 the same as the two above lines.
// console.log(x);

/////////////////////
// CODING CHALLENGE
/////////////////////

let markHeight = 1.9;

let markMass = 75;

let johnHeight = 1.8;

let johnMass = 63;

let markBMI = markMass / markHeight^2
let johnBMI = johnMass / johnHeight^2

console.log(markBMI); // returned 33
console.log(johnBMI);

let higherBMI = markBMI > johnBMI

console.log('Is Mark\'s BMI highter than John\'s? ' + higherBMI);
