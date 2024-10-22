"use strict";
// *** Comparison Operator ***
// There are 6 basic types of comparison operators:
// 1) Equal to ==
// 2) Not Equal to !=
// 3) Greater than >
// 4) Less than <
// 5) Greater than or Equal to >=
// 6) Less than or Equal to <=
// 1) Equal to ==
let num1 = 10;
let num2 = 15;
console.log(num1 == num2); // Output: false
// Example:
// Checks if num1 is equal to num2. Since num1 (10) is not equal to num2 (15), it returns false.
// 2) Not Equal to !=
console.log(num1 != num2); // Output: true
// Example:
// Checks if num1 is not equal to num2. Since num1 (10) is not equal to num2 (15), it returns true.
// 3) Greater than >
let num3 = 12;
let num4 = 10;
console.log(num3 > num4); // Output: true
// Example:
// Checks if num3 (12) is greater than num4 (10). Since 12 is greater than 10, it returns true.
// 4) Less than <
console.log(num3 < num4); // Output: false
// Example:
// Checks if num3 (12) is less than num4 (10). Since 12 is not less than 10, it returns false.
// *** Logical Operators ***
// There are 3 basic types of logical operators:
// 1) And &&
// 2) Or ||
// 3) Nor !
// 2 - Logical Operators
// 1) And &&
// Definition: Requires all conditions on both sides to be true for the overall expression to be true.
let a = 5 > 0 && 2 < 0;
console.log(a); // Output: false
let num5 = 9;
let num6 = 8;
console.log(num5 > num6 && num6 < num5); // Output: true
// Example (a):
// Evaluates whether 5 is greater than 0 AND 2 is less than 0. Since 2 is not less than 0, the expression is false (a is false).
// Example (num5 > num6 && num6 < num5):
// Checks if num5 (9) is greater than num6 (8) AND if num6 is less than num5. Both conditions are true, so the expression is true.
// 2) Or ||
// Definition: Requires at least one condition on either side to be true for the overall expression to be true.
console.log(10 > 3 || 5 !== 5); // Output: true
// Example:
// Checks if 10 is greater than 3 OR if 5 is not equal to 5. Since 10 is greater than 3, the overall expression is true.
// 3 - Nor Operator (!)
// Definition: The ! (not) operator inverts the boolean value of the operand. If the operand is true, ! makes it false; if the operand is false, ! makes it true.
// Note: To use the nor operator, you must use this syntax [console.log(!(5 < 6))]
console.log(5 < 6); // Output: true
console.log(!(5 < 6)); // Output: false
// *** If and else-if Condition ***
// Definition:
// This means "if this condition is true, do this; otherwise, do that." It depends on conditions given beforehand, specifying what action to take.
let age = 24;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}
let marks = 95;
if (marks >= 90) {
    console.log("Your Grade is A+.");
}
else if (marks >= 80) {
    console.log("Your Grade is B.");
}
else if (marks >= 70) {
    console.log("Your Grade is C.");
}
else {
    console.log("You have failed.");
}
