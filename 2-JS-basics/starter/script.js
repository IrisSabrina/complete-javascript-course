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
//
// let markHeight = 1.9;
//
// let markMass = 75;
//
// let johnHeight = 1.8;
//
// let johnMass = 63;
//
// let markBMI = markMass / markHeight^2
// let johnBMI = johnMass / johnHeight^2
//
// console.log(markBMI); // returned 33
// console.log(johnBMI);
//
// let higherBMI = markBMI > johnBMI
//
// console.log('Is Mark\'s BMI highter than John\'s? ' + higherBMI);

/////////////////////
// SECTION 2: JS Language Basics
/////////////////////

// if statements
//
// let firstName = 'John';
// let civilStatus = 'single';
//
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon.');
// }// This will return true if the civilStatus is married and false if it's not
//
// let isMarried = true; // this creates a Boolean true/false statement that we can plug in to the if statement
//
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon.');
// } // returned John is married!
//
//
// // rewriting the previous coding challenge answer with an if statement to confirm who has the higher BMI
// let markHeight = 1.9;
//
// let markMass = 75;
//
// let johnHeight = 1.8;
//
// let johnMass = 63;
//
// let markBMI = markMass / markHeight^2
// let johnBMI = johnMass / johnHeight^2
//
// if (markBMI > johnBMI) {
//   console.log('Mark\'s BMI is higher than John\'s');
// } else {
//   console.log('John\'s BMI is higher than Mark\'s');
// };

/////////////////////
// BOOLEAN LOGIC vid # 15
/////////////////////

// let firstName = 'John';
// let age = 20;
//
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) { // Between 13 and 20 -- age >= 13 and age <20
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.');
// };

/////////////////////
// Ternary Operators and Switch Statements vid # 16
/////////////////////
// A ternary operator has three parts called operands
// it is an alternate way of writing an if statement
let firstName = 'John';
let age = 16;

// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.'); // the condition is first, the if block (after the ?) and the then which comes after the :

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if we wrote the above as an if statement it would look like this:

// if (age >= 18) {
//   let drink = 'beer';
// } else {
//   let drink = 'juice';
// }

// Switch Statement
let job = 'instructor';

switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break; // this stops it from evaluating other cases if the job is true
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstname + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.'); // no break is needed because it is the end of the switch
}

age = 56;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
