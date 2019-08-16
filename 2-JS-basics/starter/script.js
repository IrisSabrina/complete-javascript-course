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
// // A ternary operator has three parts called operands
// // it is an alternate way of writing an if statement
// let firstName = 'John';
// let age = 16;
//
// // ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.'); // the condition is first, the if block (after the ?) and the then which comes after the :
//
// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
//
// // if we wrote the above as an if statement it would look like this:
//
// // if (age >= 18) {
// //   let drink = 'beer';
// // } else {
// //   let drink = 'juice';
// // }
//
// // Switch Statement
// let job = 'instructor';
//
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to code.');
//     break; // this stops it from evaluating other cases if the job is true
//   case 'driver':
//     console.log(firstName + ' drives an uber in Lisbon.');
//     break;
//   case 'designer':
//     console.log(firstname + ' designs beautiful websites.');
//     break;
//   default:
//     console.log(firstName + ' does something else.'); // no break is needed because it is the end of the switch
// }
//
// age = 56;
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager.');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man.');
//     break;
//   default:
//     console.log(firstName + ' is a man.');
// }

/////////////////////
// Truthy and Falsy values & equality operators vid # 17
/////////////////////

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy VALUES
// let height;
//
// height = 0;
//
// if (height || height === 0) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }
//
// // Equality Operators
// if (height === 23) {
//   console.log('The == operator does type coercion!');
// }

/////////////////////
// CODING CHALLENGE 2
/////////////////////
//
// let jTeamScore1 = 89;
// let jTeamScore2 = 120;
// let jTeamScore3 = 103;
//
// let mTeamScore1 = 116;
// let mTeamScore2 = 94;
// let mTeamScore3 = 123;
//
// let maryTeamScore1 = 97;
// let maryTeamScore2 = 134;
// let maryTeamScore3 = 105;
//
// let jTeamAverageScore = (jTeamScore1 + jTeamScore2 + jTeamScore3) / 3;
// let mTeamAverageScore = (mTeamScore1 + mTeamScore2 + mTeamScore3) / 3;
// let maryAverageTeamScore = (maryTeamScore1 + maryTeamScore2 + maryTeamScore3) / 3;
//
// if (jTeamAverageScore > mTeamAverageScore) {
//   console.log('John\'s team has the highest average at ' + jTeamAverageScore + '!');
// } else if (mTeamAverageScore > jTeamAverageScore) {
//   console.log('Mark\'s team has the highest average at ' + mTeamAverageScore + '!');
// } else {
//   console.log('It\'s a draw!');
// }

// NOTE: I made this far too complicated. A cleaner solution is provided below
//
// let scoreJohn = (89 + 120 + 103) / 3;
// let scoreMike = (116 + 94 + 123) / 3;
// let scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMary);
//
// // if (scoreJohn > scoreMike) {
// //   console.log('John\'s team wins with ' + scoreJohn + ' points');
// // } else if (scoreMike > scoreJohn) {
// //   console.log('Mike\'s team wins with ' + scoreMike + ' points');
// // } else {
// //   console.log('There is a draw');
// // }
//
// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//   console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//   console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//   console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//   console.log('There is a draw');
// }

/////////////////////
// FUNCTIONS
/////////////////////

// Functions are containers that hold cold. We can pass arguments into them to return the result we're looking for.

// birthYear is the argument that is passed through. It could be named anything, but semantic naming works best.
//
// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }
//
// // When calculateAge is called, whatever is put in the parens here, 1990, gets passed as the birthYear VALUE in the calculateAge function.
// calculateAge(1990);
//
// // use ageJohn to contain the result of calculateAge so that you can log it to see the actual calculation.
// let ageJohn = calculateAge(1990);
// let ageMike = calculateAge(1948);
// let ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);
//
// // the function below is calling another FUNCTIONS
// function yearsUntilRetirement(yearOfBirth, firstName) {
//   let age = calculateAge(yearOfBirth);
//   let retirement = 65 - age;
//
//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years');
//   } else {
//   console.log(firstName + ' is already retired.');
//   }
// }
//
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/////////////////////
// FUNCTION STATEMENTS & EXPRESSIONS vid 21
/////////////////////

// Function declaration:
// function whatDoYouDo(job, firstName) {}

// Function expression:
// let whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives a cab in Lisbon';
//     case 'designer':
//       return firstName + ' designs beautiful websites';
//     default:
//       return firstName + ' does something else';
//   }
// }
//
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

// Javascript expressions always return a value. If it results in a value, it is an expression

// ///////////////////
// ARRAYS vid 22
// ///////////////////
//
// // arrays are like collections of variables or elements. they can also contain different data types
// // arrays are 0 based. meaning the first element is element 0, the next element 1, and so on.
//
// // initialize new array
// let names = ['John', 'Mark', 'Jane'];
// let years = new Array(1990, 1969, 1948);
//
// console.log(names[0]); // returns John
// console.log(names); // returns ["John", "Mark", "Jane"]
// console.log(names.length); // returns 3
//
// // Mutating array data
// names[1] = 'Ben';
// names[5] = 'Mary'; // returns ["John", "Ben", "Jane", empty × 2, "Mary"]
// // names[names.length] = 'Mary'; // this will add Mary as the last element in the array
// console.log(names); // returns ["John", "Ben", "Jane"] it changed position 1 to Ben
//
// // Different data Types
// let john = ['John', 'Smith', 1990, 'teacher', false];
//
// // the .push method adds an element to the end of the array
// // the .unshift method adds an element to the beginning of the array
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
//
// john.pop()
// john.shift();
// console.log(john); // .pop removed 'blue' from the end of the array and .shift removed 'Mr.' from the beginning of the array
//
// console.log(john.indexOf(1990)); // returned 2 as the index position
// // console.log(john.indexOf(23)); // returned -1 because it is not an item in the array
//
// // Use a ternary operator to determine if John is a designer
// let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

/////////////////////
// CODE CHALLENGE 3
/////////////////////

// let bills = [124, 48, 268]
//
//
// function calculateTip(mealTicket){
//   let tip = calculateTip(mealTicket);
//   if (mealTicket < 50){
//     tip = .20;
//   } else if (mealTicket >= 50 && mealTicket < 200){
//     tip = .15;
//   } else if (mealTicket > 200){
//     tip = .10;
//   } else {
//     console.log('Can not calculate.');
//   }
//   return tip * mealTicket;
// };
//
// calculateTip(bills); // got a call stack exceeds maximum value error. This did not work.

// SOLUTION

// function calculateTip(bill) {
//   let percentage;
//   if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//   return percentage * bill;
// }
//
// console.log(calculateTip(100));
//
// let bills = [124, 48, 268];
// let tips = [calculateTip(bills[0]),
//             calculateTip(bills[1]),
//             calculateTip(bills[2])];
// let finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];
//
// console.log(tips, finalValues);

/////////////////////
// OBJECTS & PROPERTIES vid #25
/////////////////////

// Objects contain key/value pairs. This allows you to name items that are in the array of the object. An object literal is a container that holds the key value pairs and is denoted with curly braces {}

// firstName is a property of the object john
// Object literal
// let john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// }
//
// console.log(john);
// // if you want to read the key of the value firstName use . notation as seen below
// console.log(john.firstName); // returns John
// // if you want to see an item in an array contained within an object use brackets as seen below
// console.log(john['lastName']); // returns Smith
// let x = 'birthYear';
// console.log(john[x]); // returns 1990
//
// // you can use . notation and brackets to mutate the original data as well
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// // new Object syntax
// let jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/////////////////////
// OBJECTS & METHODS vid #26
/////////////////////

// let john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function(birthYear) {
//     this.age = 2018 - this.birthYear;
//   }
// }; // this in this context means John. So the "this" is referencing john.birthYear basically
//
// john.calcAge();
// console.log(john);

/////////////////////
// CODE CHALLENGE #4
/////////////////////

let mark = {
  height: 1.9,
  mass: 75,
  calcBMI: function() {
    this.bmi = this.mass / this.height^2
  }
}

// mark.calcBMI();
// console.log(mark);

let john = {
  height: 1.8,
  mass: 63,
  calcBMI: function() {
    this.bmi = this.mass / this.height^2
  }
}

// john.calcBMI();
// console.log(john);

function higherBMI () {
  if (mark.calcBMI > john.calcBMI) {
    return "Mark has the higher BMI."
  } else {
    return "John has the higher BMI."
  }
}

higherBMI();
console.log(higherBMI());

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
