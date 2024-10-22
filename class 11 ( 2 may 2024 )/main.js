"use strict";
// Welcome to my 11 IT Class in governor House
// Date : 02/may/2024
// // Note:
// 1) functions me console.log developer ko code read karne me help karta hai jab k return statment JS ko code read krne me help karta hai.
// Arrow functions
// Defination
// arrow function me function keyword use nh hota balke 1 variable de kar = karke seedh () lagatee hain
// let Hello = () => {
//     console.log ("Hello world with arrow functions.")
//     console.log ("Arrow Functions")
// }
// Hello ()
// const fvrtNumber = (number : number) => {
//     return number 
// }
// let number = fvrtNumber (5)
// console.log (number)
// Task : 
// Without return key
// let isEven = (num : number) => {
//     if (num % 2 == 0) {
//         console.log ("This is Even Number")
//     } else {
//         console.log ("This is Odd Number")
//     }
// } 
// isEven (28)
// Using return statment
// let Even = (num : number) => {
//     if (num % 2 == 0) {
//         console.log ("This is Even Number")
//     } else {
//         console.log ("This is Odd Number")
//     }
//     return num
// }
// let result = Even (27)
// Task 2:
// let calculator = (num1 : number, num2 : number , sign  : string ) => {
//     if (sign == "+") {
//         console.log (num1 + num2)
//     } else if (sign == "-") {
//         console.log (num1 - num2)
//     } else if (sign == "*") {
//         console.log (num1 * num2)
//     } else if (sign == "/") {
//         console.log (num1 / num2)
//     }
//     return 
// }
// let result = calculator (3, 8, "a")
// console.log (result)
// const Country = () => {
//     console.log ("Pakistan") // console.log sirf hum developers k lye hota hai
// }
// let result = Country ()
// console.log (result)
// New Topic = Scops
// scops ka mean hota hai k apke variable ki limitation kahan tk hai kya har jagah use kar skte hain ya kisi seprate part me
// 2 types k scops hote hain.
// 1) Global variables
// ye har jagah use ho skte hain.
// var ek global variable hai jo har jagah use ho skta balke 1 hi name bar bar use kar skta hai.
// Example:
// var fname = "Ahmad"
// if (true) {
//     console.log (fname)
// }
// 2) Block scop variables
// ye seprate jagah me hi use ho skte hain.
// {} curly barackets limitation laga dete hain, jo variables curly baracket k between hon wo block scop variable hote haim.
// let fname = "Ahmad"
// function myName () {
//     const lname = "Ahmad"
//     console.log (lname)
// }
// myName ()
// console.log (lname) ye variable curly baracket k beech me hai isi lye ye variable ko read nh kar raha hai error de raha hai isi lye mene comment kar dya hai.
// Block and Global Scop Variable Practice
// let sirAli = () => {
//     let sirA = "Ali Jawwad"
//     console.log (sirA)
//     // console.log (sirH) // it's not valid because this is block scop variable
// }
// sirAli ()
// let sirHamzah = () => {
//     let sirH = "Hamzah Syed"
//     console.log (sirH)
//     // console.log (sirA) // it's not valid because this is block scop variable
// }
// sirHamzah ()
// let police_aut = () => {
//     let police = "Police"
//     console.log (police)
// }
// police_aut ()
// let rangerous = "Rangerous have full Authority"
// let liaquatabad = () => {
//     let police = "Police have only Liaquatabad"
//     console.log (police)
//     // console.log (rangerous)
// }
// console.log (rangerous) // global scope variable
// // console.log (police) // block scope variable
// liaquatabad ()
// let army = "Army"
// let LiaquatabadPS = () => {
//     let police = "Liaquatabad Police"
//     console.log (police)
//     // console.log (police2) // block scop variable
//     console.log (army) // global scop variable
// }
// let SadarPS = () => {
//     let police2 = ("Sadar Police") 
//     // console.log (police) // block scop variable
//     console.log (police2)
//     console.log (army) // global scop variable
// }
// LiaquatabadPS ()
// SadarPS ()
let teacher = "Sir Ameen Alam";
let Session = () => {
    let teacher = "Sir Ali Jawwad";
    console.log(teacher); // agr  1 hi nam k 2 variables hon 1 function k bahar or 1 function k andar jab hu function ko call karenge to jo variable function k andar hoga wohi execute hoga q k JS or TS dono hi sabse pehle curly barackets ko pehle read krta hai or agr 1 hi name ka variable ho to bh function k bahar wale ko execute karta hain na ke function k bahar wale ko...
    // and agr 1 variable function k bahar ho or wohi varible function me update ya reinialize ho raha ho to bh jab function ko invoke karenge to function k andar jo variable hai uski value aayegi....
};
Session();
