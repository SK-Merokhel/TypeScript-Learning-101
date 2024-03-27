/* 
When we want to declare a variable, we can declare it using these 3 keywords:
let (These variable values can be changed)
const (These variable values cannot be changed)
var (Back then, var was used, but now let has overtaken var and var is rarely used now)

The biggest disadvantage of var is that it always allows us to use the same variable name again and again,
but let does not allow us to use the same variable name again ever.
const is used only when we want that data not to be changed ever again,
such as account numbers, roll numbers, or CNIC.
Account numbers cannot be changed, but the balance in that account can be changed.
We will be making the bank balance a let variable.

In variable declaration, the var keyword is used for easy naming to indicate that it is a variable.

All these 3 are variables. All these 3 can have any, boolean, string, or number.

But let boolean, number, and string can be changed whereas const cannot.

Keywords in programming languages are already defined, such as when we say "Hey Google!",
then only Google will respond to us.
In programming, we store all values in dedicated variables.
Storing the value in a variable helps other developers to not repeat them.

INFERENCE: Whenever TypeScript assigns the type of a value, it is called inference.
STRONG TYPING: We ourselves allocate the type of the value, called implicit/strong typing.

Variable name is favoriteColour.
Make sure to keep the second name's first letter capital (Camel Case).

*/
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

// 20 is a number, when enclosed in double quotes, it will be a string.
let age = 20; 
// typeof is used to identify if it is a number or a string.
console.log("Type Age ==> ", typeof age);
console.log(age);

// Boolean
let isPresent = true;
console.log(typeof isPresent);
console.log(isPresent);

// We can even define the variable with ':' if it is a string or a number.
let agee: string = '20';
agee = 'twenty';
console.log(agee);

// Using 'any' type.
let ageee: any = 'here 20 is not accepted although 20 is a number 10';
ageee = 10; // Here 'any' is used to accept any value.
console.log(ageee);