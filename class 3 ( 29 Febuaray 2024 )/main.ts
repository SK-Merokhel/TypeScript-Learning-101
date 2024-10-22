// 01 String

let newJourney = "Hello World";
console.log(newJourney);

let favoriteColour = "White";  // White is the initial value of this variable.
console.log(favoriteColour); // Variable names are not enclosed in quotes when logged to the console.

// We will not be using let again for the same variable if we want to change the value.
// Simply write the name of the variable and change the value.
favoriteColour = "Black";
console.log(favoriteColour); 

// Declaring a new variable named day.
let day = "Friday";
console.log(day);

// Updating the day variable.
day = "Friday 2.0";
console.log(day);

// 02 Number 

// 20 is a number, when enclosed in double quotes, it will be a string.
let age = 20; 
// typeof is used to identify if it is a number or a string.
console.log("Type Age ==> ", typeof age);
console.log(age);

// 03 Boolean

let isPresent = true;
console.log(typeof isPresent);
console.log(isPresent);

// We can even define the variable with ':' if it is a string or a number.
let age2: string = '20';
age2 = 'twenty';
console.log(age2);

// 04 Any

let age3: any = 'here 20 is not accepted although 20 is a number 10';
age3 = 10; // Here 'any' is used to accept any value.
console.log(age3);

