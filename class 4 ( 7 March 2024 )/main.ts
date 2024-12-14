// *** Assignment Operators ***

// Definition:
//  The '=' sign is used to assign a value to a variable.
// The '+=' sign is used for assigning and adding a value to a variable.

let a = 10; // Assigning the value 10 to variable 'a'
a += 5;     // Adding 5 to 'a' and assigning the result back to 'a'
console.log(a); // Output: 15

// *** Combining Operators ***

// Definition:
// Follows the BODMAS rule: Division (/), Multiplication (*), Addition (+), Subtraction (-).

let a1 = 4 + 7 * 9 / 3 - 4;
console.log(a1); // Output: 21

// BODMAS Concept Example:
// Calculates 4 + (7 * 9 / 3) - 4
// First, solves 7 * 9 / 3 = 21
// Then, calculates 4 + 21 - 4 = 21

// *** Unary Operators ***

// Definition:
// Unary operators are used to increment (++), decrement (--), or perform other operations on a single operand.

// Explanation:
// - Unary operators work step by step to increase or decrease a value.
// - Each unary operator can be used in two ways: as a prefix (++a) or as a postfix (a++).
//   - Prefix (++a) increases the value of 'a' before using it.
//   - Postfix (a++) uses the current value of 'a' and then increases it afterward.

// Example:
let num3 = 0;
console.log(num3++); // Output: 0 (Post-increment returns original value first)
console.log(num3);   // Output: 1
console.log(num3);   // Output: 1 (Post-increment effect stored)
console.log(num3);   // Output: 1
console.log(++num3); // Output: 2 (Pre-increment increments first, then uses)


// ***  Modulus ***
// Definition: Provides the remainder (%) after division.

let apples = 5;
let person = 3;
let result = apples % person;
console.log(result); // Output: 2 (5 divided by 3 leaves a remainder of 2)

// Arithmetic Operations

let num1: number = 5;
let num2: number = 10;

console.log(num1 + num2); // Output: 15 (Addition)
console.log(num1 - num2); // Output: -5 (Subtraction)
console.log(num1 * num2); // Output: 50 (Multiplication)
console.log(num1 / num2); // Output: 0.5 (Division)

// Additional Calculation Example

let n1: number = 4;
let n2: number = 6;
let n3: number = 8;
let n4: number = 3;

console.log(n1 * n2 / n3 + n4);      // Output: 4.5 (Follows order of operations)
console.log(n1 * n2 / (n3 + n4));    // Output: 2.25 (Uses parentheses to change order)
console.log(n1 * n2 / n3 + n4 - n4); // Output: 1.5 (Subtracts n4 at the end)

// *** BMI Calculator Example ***

let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
console.log(bmi); // Output: 22.86 (Body Mass Index calculation)

// ***  For Loop Example *** 

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Outputs numbers from 0 to 4 sequentially
