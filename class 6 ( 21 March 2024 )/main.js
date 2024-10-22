"use strict";
// Creating login system
let email = "sufyan@gmail.com"; // I have made variable string, assigned myself
// This is called strong typing 
// When TypeScript assigns the type itself then it is called inference 
let pwd = "12345";
if (email === "sufyan@gmail.com" && pwd === "1234") {
    console.log("Valid Credentials");
} // && is used when we want both to be checked properly
else {
    console.log("Invalid Credentials");
}
// Example of a weather-based decision-making system
let weather = "Rainny"; // Declaring and initializing the weather variable
// Checking the weather condition
if (weather === "cloudy") {
    console.log("You wear a light jacket"); // Output if the weather is cloudy
}
else if (weather === "Rainny") {
    console.log("You wear a raincoat"); // Output if the weather is rainy
}
else {
    console.log("You wear sunglasses"); // Output if the weather is neither cloudy nor rainy
}
// Conditional Greeting based on the time of day
let greeting = "After noon"; // Declaring and initializing the greeting variable
// Checking the value of the greeting variable
if (greeting === "Morning") {
    console.log("Good Morning"); // Output if the greeting is "Morning"
}
else if (greeting === "After noon") {
    console.log("Good After noon"); // Output if the greeting is "After noon"
}
else if (greeting === "Evening") {
    console.log("Good Evening"); // Output if the greeting is "Evening"
}
else {
    console.log("Good Night Bye"); // Default output if the greeting does not match any of the above
}
// Declaring and initializing the percentage variable
let percentage = 56;
// Checking the value of the percentage variable and assigning grades accordingly
if (percentage >= 90) {
    console.log("A+ Grade"); // Output if the percentage is 90 or above
}
else if (percentage >= 80 && percentage <= 89.99) {
    console.log("A Grade"); // Output if the percentage is between 80 and 89.99
}
else if (percentage >= 70 && percentage <= 79.99) {
    console.log("B Grade"); // Output if the percentage is between 70 and 79.99
}
else if (percentage >= 60 && percentage <= 69.99) {
    console.log("C Grade"); // Output if the percentage is between 60 and 69.99
}
else if (percentage >= 50 && percentage <= 59.99) { // Corrected the range to 59.99
    console.log("D Grade"); // Output if the percentage is between 50 and 59.99
}
else {
    console.log("FAIL"); // Default output if the percentage is below 50
}
// A Simple Calculator using if else condition without prompt or inquirer
// Step 1: Declare and initialize variables
let num1 = 6; // Declare a variable num1 of type number and assign it the value 6
num1 = 8; // Change the value of num1 to 8
num1 = 4; // Change the value of num1 to 4 (this is the final value of num1)
let num2 = 6; // Declare a variable num2 of type number and assign it the value 6
// Step 2: Compare num1 and num2 using if-else conditions
if (num1 == num2) {
    // If num1 is equal to num2
    console.log(num1 + num2); // Output the result of adding num1 and num2
}
else if (num1 > num2) {
    // If num1 is greater than num2
    console.log(num1 - num2); // Output the result of subtracting num2 from num1
}
else if (num1 < num2) {
    // If num1 is less than num2
    console.log(num1 * num2); // Output the result of multiplying num1 and num2
}
else {
    // This else block will not be executed in this code, but it's good to have a fallback
    console.log(num1 / num2); // Output the result of dividing num1 by num2
}
// Key Points:
// The final value of num1 is 4, and the value of num2 is 6.
// Since 4 is less than 6, the code will execute the multiplication branch (num1 * num2), resulting in 24.
/* Note:
When using if-else conditions, make sure that the operators are consistent and appropriate for the data type you are working with.
For strings, use only equality (==, ===) and inequality (!=, !==) operators, and avoid using comparison operators like less than (<) and greater than (>).
In summary, when dealing with strings, it's important to use appropriate comparison operators, mainly equality and inequality, rather than less than or greater than. This ensures that your conditional checks are logical and valid for the data type you are working with. */
