// Date : 23 may 2024

// Today All New Topics

// 1 - Interface
// 2 - Type Intersection
// 3 - Nested Array
// 4 - Loops
// 5 - Enum

// 1 - Interface 

// Defination :

// 1) interface bh same type arias ki tarah hi hai bas usme type alias use hoti thi
// or isme interface use hota hai,
// 2) interface sirf object pr use karne k lye hota hai,
// 3) type alias or interface agar object k lye banaya jate to (,) lagane ki
// zaroorat nh hai without coma bh code execute hota hai. 
// 4) Type Interface jab create kiya jata hai to usme equal use nh hota 

// Syntax : 
// interface Car {
    // key : data type
    // key : data type
// }

// Practice :

// interface MyCar { 
//     make : string,
//     model : number,
// }

// let myCar : MyCar = {
//     make : "land cruiser",
//     model : 2023   
// }

// console.log (myCar)
// console.log (myCar.make) // using dot notation
// console.log (myCar.model) // print key value

// 2 - Type Intersection

// Defination

// 1) Jab 2 ya usse zyda objects ko 1 hi object me merge karke likhna ho to
// Intersection use karte hain.
// 2) 2 ya isse zyda objects ko merge karne k lye (&) ka use karte hain.
// 3) Intersection static hota hai that mean same key ko 2 bar declare nh kar skte
// error deta hai.
// 4) Type Intersection type alias or type interface dono ko support karta hai.

// Practice_1 :

// Using type alias

// type Teacher = { // create an object using type alias
//     teacherName : string
//     exp : number
// }

// type Student = {
//     studentName : string
//     rollNo : number
// }

// const classRoom : Teacher & Student = {
//     teacherName : "Sir Ali Jawwad",
//     exp : 5,
//     studentName : "Ahmad",
//     rollNo : 309553
// }

// console.log (classRoom)

// Practice_2 :

// Using type interface

// interface Manager {
//     managerName : string 
//     education : string
//     isMuslim : boolean
// }

// interface Cashier {
//     cashierName : string,
//     experience : number,
//     isHonest : boolean 
// }

// let bank : Manager & Cashier = {
//     managerName : "Ahmad",
//     education : "Graduate",
//     isMuslim : true,
//     cashierName : "Sharoz",
//     experience : 5,
//     isHonest : true
// }

// console.log (bank)
// console.log (bank.managerName)
// console.log (bank.experience)


// 3 - Nested Array

// Defination

// 1) Nested array us array ko kehte hain jisme array k andar array ho 
// jese  let arr = [[],[]]
// 2) Nested array ki type is tarah hoti hai
// let arr : string [][] define karte hain.
// 3) Agr array me different data type ki values store karni hon to is tarah type
// define karte hain,
// let arr : (string | number | boolean | etc...) = [[],[]] 

// Practice_1

// Using only string data type

// let color : string [][] = [
//    ["white","black"],
//    ["red","blue","orange"],
//    ["purple","pink","cyan","golden"]
// ]

// console.log (color)
// console.log (color[1])
// console.log (color[2][3]) // jab index ka use karte huye 1 array k andar k index ki values print karwani hon to is tarah index ko exicute karte hain.

// Practice_2 :

// Using multiple data type

// const fruit : (string | number | boolean)[][] = [
//     ["mango","peach"],
//     ["watermelon",349],
//     [true , false]
// ]

// console.log (fruit)
// console.log (fruit[0][1])
// console.log (fruit[1][1])


// 4 - Loops

// Defination

// 1) jab kisi kam ko repeat karwana ho bar bar karwana ho to loops ka use karte
// hain.

// 1) for Loop

// Defination and Syntax

// For Loop tab use hota hai jab iteration pata ho,
// For loop That takes Three Expression
// 1- Starting Point
// 2- Ending point
// 3- Steps to reach ending point.

// Syntax :

// for (start point ; end point; upd) {
//   work
// }

// Practice_1 :

// Print Hello Ahmad 5 Times

// for (let i = 1; i <= 5; i++) {
//     console.log (`${i} Hello Ahmad`)
// }

// For multiplication

// for (let i = 3 ; i <= 30; i = i * 3 ) {
//     console.log (i)
// }


// let sum = 0

// for (let i = 1; i <= 5; i++) {
//     sum = sum + i
//     console.log (sum)
// }

// Count Down Using 

// for (let i = 10; i >= 0; i-- ) {
//     console.log (i)
// }

// Using Length Method 

// let persons = ["Babar","Shaheen","Shahid Afridi","Ab Diviliers"] // jab kisi array ya string ki length count karte hain to index 0 se nh 1 se start hota hai.

// let person = "Ahmad"

// for (let i = 0; i < persons.length; i++) {
//     console.log (persons[i])
// }

// 2) While Loop
    
// Defination 

// 1) While loop bh for loop ki tarah hai but isme kuch difference hai,
// 2) While loop tab use hota hai jab number of iteration pata nh ho ...

// While Loop

// 1 - Loop se pehle variable declare karke starting point batate hain,
// 2 - Round baracket k andar ending point batate hain, 
// 3 - Steps to reach Ending Points

// Practice_1 :

// let a = 1 // Starting Point
// while (a <= 10) { // Ending Point
//     console.log (a)
//     a++  
// }

// Practice_2 :

// let i = 10
// while (i > 0) {
//     console.log (i)
//     i--
// }


// 3) For of Loop 

// Defination 
// for of loop for object

// let players = {
//     name : "ahmad",
//     fname : "umar"
// }

// for (let key of players.fname) {
//     console.log (key)
// }

// for of loop for string

// let myName = "Ahmad Raza"

// for (let idx of myName) {
//     console.log (idx)
// }

// for of loop for array

// let players = ["Babar","Afridi","Rizwan"]

// for (let player of players) {
//     console.log (player)
// }

// 4) for in loop

// Exercise_1

// let Student : any = {
//     name : "Ahmad",
//     rollNo : 309553,
//     day : "Thursday",
//     timing : "7pm to 10pm" 
// }

// for (let key  in Student) {
//     console.log (key) // for key names
//     console.log (Student[key]) // for key values
// }


// 5 - Enum

// Defination

// 1) Enum string literals ki tarah hota hai, its mean k jab apko pehle se hi
// values pata hon to uske lye string literals or enum use karte hai.
// 2) Enum ka bh syntax interface ki tarah hi hai jiska syntax ye hai
// Syntax enum Name {
    // key : values
// }

// Exercise_1

// enum Direction {
//     NORTH = "North",
//     SOUTh = "South",
//     EAST = "East",
//     WEST = "West"
// }

// const compass : Direction = Direction.EAST

// console.log (compass)


// Exercise_2

// enum TimeSlot {
//     MORNING = "9 to 12",
//     AFTERNOON = "2 to 5",
//     EVENING = "7 to 10"
// }

// let timeSlot : TimeSlot = TimeSlot.AFTERNOON
// console.log (timeSlot)

// timeSlot : timeSlot = TimeSlot.EVENING
// console.log (timeSlot)

