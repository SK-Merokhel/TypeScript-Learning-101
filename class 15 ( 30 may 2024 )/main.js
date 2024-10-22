"use strict";
// Today All New Topics
Object.defineProperty(exports, "__esModule", { value: true });
// In this class we have covered following all topics:
// 1) Enum
// 2) Const Enum
// 3) Tupple and Destructuring
// 4) Modules
// 5) Union Type
// 6) Narrowing
// 7) Any and Unknown Type
// 8) Rest Parameter
// 1 - Enum
// Defination
// 1) Enum, string literals ki tarah hota hai jab hamyn pehle se hi variable ki values pata hon to inka use hota hai,
// 2) enum ko object ki tarah hi execute karte hain pehle enum ka name then . laga kr uska key name,
// 3) enum coma separate hota hai,
// 4) Agr square [] baracket k throw index nikalna ho to enum ko value nh deni, is tarah wo sirf enum ka key name print karwayega uska syntax
// ye hai...
// console.log (Fuel)
// enum Fuel {
//     Petrol = "Rupees 280",
//     Diesel = "Rupees 300"
// }
// console.log (Fuel.Petrol) // execute using indexing
// console.log (Fuel.Diesel) // execute using indexing
// 2 - Const Enum
// Defination
// 1 const enum me index ka use krke value nh le skte sirf . ka use krke execute kar skte hain, 
// 2) best way ye hai k const enum hi use karyn...
// Syntax
// const enum Destination {
//     East ,
//     West ,
//     North ,
//     South 
// }
// let earthDirection : Destination = Destination.East
// console.log (Destination.East)
// 3 - Tupple and Destructuring
// Tupple Defination
// 1) jab apko sequentially data chahye ho to iska use hota hai,
// 2) sabse pehle data type ko sequance me define karte hain,
// 3) agar kisi data type ki jagah koi dusri data type ki value laga di to error aa jayega.
// 
// Syntax 
// let variable : [dataType, dataType,dataType] for single array
// let variable : [dataType, dataType,dataType][] for nested array
// variable = [values ]
// Practice_1
// let Fruits : [string,number,boolean]
// Fruits = ["Apple", 250, true]
// console.log (Fruits)
// Practice_2
// let studentInfo : [string, number, boolean]
// studentInfo = ["Ahmad",1234,true]
// console.log (studentInfo) // full array
// console.log (studentInfo[0]) // index 0
// console.log (studentInfo[1]) // index 1
// console.log (studentInfo[2]) // index 2
// Practice_3
// Nested array using tupple
// let studentInfo : [string , number , boolean,][] 
// studentInfo = [
//     ["Ahmad",1234,true],
//     ["Hamid",5678, false],
//     ["Furqan",7890,"true"] // give an error Type 'string' is not assignable to type 'boolean
// ]
// console.log (studentInfo[0],studentInfo[1])
// Destructuring Defination
// Destructuring ek programming concept hai jo data structures ko unpack karta hai, jaise ki arrays ya objects, aur unke individual elements ya
// properties ko alag alag variables me assign karta hai. JavaScript aur TypeScript jaise languages me destructuring bahut common hai aur
// coding me flexibility aur readability provide karta hai.
// Syntax :
// let variableName = [values,values,values,] // creat a variable and asign it a values
// let [variable name1,variable name2,variable name3,] = variableName // use the same keyword then declare variable names in the square
// brackets and after the equal sign declare the main variable name.
// Array Destructuring
// let numbers = [1,3,5,7.9] // create variable and asign values in the square bracket.
// let [a, b, c, d, e] = numbers // declare vairable names
// console.log (a)  // Output: 1
// console.log (b)  // Output: 3
// console.log (c)  // Output: 5
// 4 - Modules
// Defination
// 1) jab apne work ko need and clean or another place pr use karna ho to modules use karte hain,
// 2) jab bh dusri jagah kisi bh work ko use karna ho to pehle us work ko export ki key se export karyn,
// 3) jahan bh use karna chahte hain to wahan import ki key lagayn or curly brackets me apne work ka nam batate hain, phir batate hain k ye kam
// kahan se import ho raha hai.
// Syntax
// Practice_1
// export function add (a: number,b: number) {
//     return a+b;
// }
// Practice_2
// export function multi (a: number, b: number) {
//     console.log (a * b)
// }
// Practice_3
// export let result = console.log ("Salam Ahmad")
// Practice_4
// export type Product = string []
// export let product : Product = ["Fruits","Vegetables"]
// console.log (product)
// 5 - Union Type
// Defination
// 1) Union type ka use hum tb krte hain jub humne multi type of data store karana ho,
// 2) Union type TypeScript me ek type hai jo do ya do se zyada types ko represent karta hai. Ye multiple types ko ek variable me allow karta
// hai. Union types TypeScript me flexibility provide karte hain, allowing variables ko multiple types ke values store karne ki permission dete
// hain.
// Syntax :
// let UnionType = Type1 | Type2 | Type3; // Yahan Type1, Type2, Type3 aise koi bhi types ho sakte hain, jaise primitive types (number, string, boolean), custom types, ya phir other built-in types.
// Practice_1
// let age : string | number
// age = "24" // valid
// age = 24  // valid
// age = true //  Error: Type 'boolean' is not assignable to type 'string | number'.
// Practice_2
// // Example of object with union type property
// let user: { name: string, age: number | string };
// user = { name: "Ahmad", age: 30 }; // Valid
// user = { name: "Sharoz", age: "Twenty" }; // Valid
// // user = { name: "Raza", age: true }; // Error: Type 'boolean' is not assignable to type 'string | number'.
// 6) Narrowing 
// Defination
// 1) Narrowing ka matlab hai k diffirent data types k apne build in functions or methods.
// 2) isme pehle ye check karte hain k variable ki data type konsi hai then functions or methods ko use karte hain.
// Practice_1
// let age : string | number // This is union type
// age = 25.038979
// TypeOf Method
// [Ye method variable ki type maloom krne k lye use hota hai.]
// console.log (typeof age)
// if (typeof age == "number") {
//     console.log ("This is Number")
// } else {
//     console.log ("This is String")
// }
// Practice_2
// Number data type all methods
// 1) toFixed
// [ ye tab use hota hai jab humne decimal me values leni hon isme 1 argument bh dena parta hai k decimal k bad kitne numbers chahye hain.]
// if (typeof age == "number") {
//     age.toFixed(2) // ye batata hai k number me kitni decimal values aani chahye
//     console.log (`Befor Addition : ${age.toFixed(2)}`)
//     console.log (age + 5) // first way
//     age += 5 // second way
//     console.log (`After Addition : ${age.toFixed(2)}`)
// } else {
//     console.log ("This is String")
// }
// Practice_3
// String data type all methods
// 1) toUpperCase ()
// [jab values ko capital karna ho to iska use hota hai.]
// let age : string = "Twenty Five"
//   console.log (age.toLowerCase()) // toLowerCase()
// 2) toLowerCase ()
// [jab values ko lower case me krna ho to iska use hota hai.]
//   console.log (age.toUpperCase())
// 3) toString ()
// [Ye kisi bh data type ko string me convert kar deta hai.]
// let arr = [1,2,3]
// console.log (arr.toString())
// 4) charAt ()
// [Specific index par character return karta hai ye index ka argument leta hai.]
// let str = "Hello";
// console.log(str.charAt(1)); // "e"
// 5) concat ()
// [Multiple strings ko concatenate karta hai.]
// let str = "Hello"
// let concatination = str.concat (" Ahmad")
// console.log (concatination)
// 6) repeat ()
// [String ko specific number of times repeat karta hai.]
// console.log ("Allah ".repeat (4))
// 7) slice ()
// [String ka specific part return karta hai, isme ending point add nh hota.]
// console.log ("Ahmad Raza".slice (1,7))
// 8) split ()
// [String ko array of substrings me split karta hai.]
// console.log ("Ahmad".split (""))
// 9) trim ()
// [String ke aage aur peeche ke whitespace ko remove karta hai lekin darmiyan ki remove nh karta.]
// console.log ("       Hello World   ".trim ())
// 7) Any and Unknown
// Defination
// 1) Type any ka matlab h ke isme ap kisi bh tarah ki data type rakh skte hain.
// 2) any use karna bad practice hai.
// 3) agar kisi variable ki type nh pata to type unknown use karna chahye.
// 4) agar variable ki type unknown hai to wo compatable hain.
// Practice_1
// Type Any
// let firstName : any = "Ahmad"
// firstName = 26 // Ok
// firstName = ["Ahmad"] // Ok
// firstName = true // Ok
// firstName = { // Ok
//     name : "ahmad"
// }
// Practice_2
// Type Unknown
// let val : unknown
// let val1 : unknown = val // Ok
// let val2 : any = val // Ok type any bh compatable hoti hai type unknown k sath ...
// let firstName : string = val // Error
// firstName : string = val2 // agr kisi variable ki type any ho or ap usey string k sath compare karwayn to wo compatable ho jayega lekin
// type unknown compatible nh hota.
// Practice_3
// For type Never
// jab bh koi aesa function ho jo kuch bh kam na kre ya kuch bh return na kr raha ho to uske lye Type Never Use karte hain ye sirf apko error return karta hai.
// function _Error (): never{
//     throw new Error 
// }
// _Error ()
// Practice_4
// function  neverFun (): never {
//     throw new Error 
// }
// neverFun ()
// 8) Rest Operators
// Defination
// 1) jab apko pata na ho k kitne arguments lenge to rest operator ka use karte hain
// 2) isme indefinite parameters or arguments use hote hain iski type array hoti hai.
// 3) rest parameter hamesha parameters k last me aata hai.
// Syntax
// function functionName (...rest : string []) {
//     console.log (...rest)
// }
// functionName (arg,arg,arg,arg,arg,)
// Practice_1
// function Wallet (color : string, ...items : string [] ) {
//     console.log (color, ...items)
// }
// Wallet ("red","blue","nic","currency","atm card") // indefinit arguments
// Practice_2
// function shopping (item : string, ...items : string []) {
//     console.log (item, ...items)
// }
// shopping ("Paint","Shoes","Watch","Kurta","Jacket")
