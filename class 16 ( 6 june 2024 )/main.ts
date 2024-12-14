// Quiz Exercise

// 1) Node projects complete karyn.

// 2) What is syntax error ?
// Ans : TypeScript k kisi bh resorved keyword me mistake ho to usey syntax error kehte hain.

// 3) What is type error ?
// Ans : TypeScript ek strongly typed superset hai JavaScript ka, jo compile time pe type checking provide karta hai. Type error tab hota hai jab code me type mismatch hoti hai, yaani jab hum kisi variable ko galat type assign karte hain ya usko galat tareeke se use karte hain. Type errors humein compile time pe milte hain, jo humein run time errors se bachne me madad dete hain.

// 4) What is assignbility error ?

// 5) Why have we used interface and what is the usage and purpose of type interface?
// Ans : TypeScript me "interface" use hota hai kisi object ya class ke structure ko define karne ke liye. Yeh specify karta hai ki object ya class me kaunse properties aur methods honi chahiye, aur unke types kya honge. Interface ki madad se hum ensure karte hain ki objects ya classes ek certain structure follow karein, jo hamari code ko organized aur error-free banata hai. 

// 6) What is the optional parameter?
// Ans : Optional parameeter typescript ka 1 feature hai jo optional hota hai that mean k function ko call karte wqt isey as a argument dena zarori nh hota iske bagher bh function execute karta hai, isey ? mark se define karte hain, isey koi bh nam de skte hain, rest parameter or optional parameter function defination me sab se last me define hota hai.


// Today All New Topics

// in this class we have covered following topics :

// 1) Optional Parameters
// 2) Rest Parameter
// 3) Explicit Casting 
// 4) Structural Typing
// 5) Inline Index Signature

// 1 - Optional Parameters

// Defination

// 1) Optional parameters TypeScript me wo parameters hote hain jo function ko call karte waqt dena zaroori nahi hota.
// 2) Ye parameters function ke definition me question mark (?) ke saath likhe jaate hain. Agar inhe pass nahi kiya jaata to function phir bhi
// theek se kaam karta hai aur usually in optional parameters ka default value undefined hota hai.
// 3) question mark se bataya jata hai k ye optional parameter hai.
// 4) rest parameter or optional parameter always funcion defination k end me define hote hai.

// Syntax
// function (normalpara : string, optionalPara? : string) {
//     console.log (normalpara) // valid 
//     console.log (normalpara, optionalPara) // valid
// }

// Practice_1

// function Form (name:string, feedback? : string) { // optional parameter ko koi sa bh name or data type de skte hain
//     console.log (name, feedback)
// }

// Form ("Ahmad")
// Form ("Salam How are you?","I am fine.")

// Practice_2

// Using type interface

// interface Product {
//     name : string
//     model : number | string
//     price? : number
// }

// let product : Product = {
//     name : "Vivo",
//     model : 2024
// }

// console.log (product

// Practice_3

// Using type alias

// type Room = {
//     teacherName : string
//     exp : string | number
//     isHonest? : boolean
// }

// let classRoom : Room = {
//     teacherName : "Ali Jawwad",
//     exp : "4 Years",
//     // sHonest : true  
// }

// console.log (classRoom)


// 2 - Rest Parameter

// Defination

// 1) TypeScript (aur JavaScript) me "rest parameters" ka use hota hai jab hume ek function me unknown number of arguments pass karne hote hain
// 2) Ye ek array ke roop me sare extra arguments ko collect kar leta hai. Rest parameters function definition me last parameter ke roop me likhe jaate hain, aur inke aage teen dots (...) lagaye jaate hain.
// 3) console.log bh rest parameter or optional parameter hota hai.
// 4) jab indefinent number of argument hon to iska use hota hai.


// Practice_1

// function FileUpload (...file : string []) {
//     console.log ()
// }

// FileUpload ()

// let whatsApp = (...pic : string []) => {
//     console.log ()
// }

// whatsApp ()

// Practice_2

// Using arrow function

// let shopping = (dress : number, ...items : string []) => {
//     console.log (dress, ...items)
// }

// shopping (2,"Kurta pajama","Paint Shirt","Shoes")


// 3 - Explicit Casting


// Defination

// 1) Explicit casting ka matlab hai k khud se kisi cheez ki type define karna,TypeScript (aur general programming) me "explicit casting" ka matlab hota hai manually ek type ko dusre type me convert karna. 
// 2) jis data ki hamynn type na pata ho to usko unknown type kehte hain.
// 3) zabardasti kisi variable ko koi type assing karne ko explicit casting kehte hain.
// 4) iska use data lane ya api se date lene k lye use hota hai.
// 5) Explicit casting k lye "as" keyword use hota hai.

// Syntax

// let isPresent : unknown

// console.log (
//     (isPresent as true) // "as" explicit casting ka keyword hai jo data type assign karne k lye use hota hai.
// )

// Practice_1

// let age : unknown
// age = 24

// console.log (
//     (age as number).toFixed(0)
// )

// Practice_2

// Using arrow function and if else statment

// let check = (name : string, model? : unknown) => {
//     let carName = name.charAt(0).toUpperCase() + name.slice(1)
//     if (model) {
//         console.log (carName,(model as number))
//     } else {
//         console.log (carName)
//     }
// }

// check ("ferrari")

// 4 - Structural Typing

// Defination

// 1) TypeScript mein structural typing ka matlab hota hai ke agar do objects ka structure (properties aur unki types) same hain, to TypeScript unhein compatible maanti hai, chahe unka naam alag ho.
// 2) ye multiple present objects ki properties or unki data types ko compare karta hai. 
// 3) 2 tarah ki typing hoti hai nominal and structurl typing.


// Syntax

// interface Person {
//     name: string;
//     age: number;
// }
// interface Employee {
//     name: string;
//     age: number;
//     employeeId: number;
// }
// let person: Person = { name: "Alice", age: 30 };
// let employee: Employee = { name: "Bob", age: 40, employeeId: 12345 };
// person = employee; // Ye kaam karta hai kyunki Employee ka structure Person ke structure se match karta hai


// Practice_1

    // interface Ball {
    //     diameter : number
    // }

    // interface Sphere {
    //     diameter : number
    // }

    // let ball : Ball = {
    //     diameter : 10
    // }
    // let sphere : Sphere = {
    //     diameter : 12
    // }

    // ball = sphere // Ok because RHS me wo sari properties hain jo LHS me hai.

    // console.log (ball)


// Practice_2

// interface Tube {
//     diameter : number
//     length : number
// }

// const tube : Tube = {
//     diameter : 150,
//     length : 25
// }

// LHS = RHS // right hand side me minimum itni properties honi chahye jitni left hand side me hai, 
// ball = tube // OK this is stel object

// Practice_3

// let myType = {
//     id : 234,
//     firstName : "Ahmad"
// }

// myType = { // Reassign Valid
//     id : 23,
//     firstName : "raza"
// }

// myType = {
//     Id : 23, // error becuase property name id ka I capital kar dya hai.
//     firstNae : "Sharoz"
// }

// console.log (myType)


// 5 - Inline Index Signature

// Defination

// 1) TypeScript me "index signature" ka use hota hai jab hume kisi object me dynamic properties ko allow karna hota hai, jinhe hum runtime par define karte hain. Index signature ke through hum specify kar sakte hain ki ek object me key-value pairs kis type ke hone chahiye.
// 2) index signature ka matlab hai jab apko properties or uski data types na pata hon to advance me isko use karte hain.
// 3) index signature me properties ko koi bh naam or value de skte hain.

// Syntax

// let variable : {
//     [y : string] : string // ye index signature ka syntax hai
// }

// variable = {
//     key : value, // OK
//     key : value, // OK
//     key : value // OK because hamyn pata nh tha properties, unki data type or values kya thi.
// }


// Practice_1

// var x : {
//     id :number,
//     [y:string] : any // ye index signature ka syntax hai
// }

// x = {
//     id : 12,
//     fullName : "Ahmad", 
//     address : "liaquatabad",
//     sports : "cricket",
//     food : "biryani",
//     isLogin : () => true  // ye index signature hai q k hamyn properti id k bad ye nh pata tha k properties k name, values or kitni properties hain isi lye humne index signature ka use kara hai.
// }

// console.log (x)

// Practice_2

// Using type interface

// interface Arr  {
//     [element : number ] : string 
// }

// let arr : Arr = ["Burger","Fries","Sandwich"]

// console.log (arr)
// console.log (arr[1])

// Practice_3

// interface Object {
//     [y:string] : string | number
// }

// let myObject : Object = {
//     name : "Sharoz",
//     roll : 1234
// }

// console.log (myObject)

// 6 - Stale object

// Defination

// 1) jab 2 object ki propertis and values ko comparison karte hain to usey stale object kehte hain jese =>
// ball = tube
// 2) stale objects me rhs pr properties ziada hon to error nh aata
// 3) typescript stale object k case me strict checking nh karta


// Practice_1

// interface Tube {
//     diameter : number
//     length : number
// }

// const tube : Tube = {
//     diameter : 150,
//     length : 25
// }

// LHS = RHS // right hand side me minimum itni properties honi chahye jitni left hand side me hai, 
// ball = tube // OK this is stel object

// Practice_2

// interface Student1 {
//     name : string
//     age : number
// }
// interface Student2 {
//     name : string
//     age : number
//     roll : number
// }
// let student1 : Student1 = {
//     name : "Sharoz",
//     age : 23
// }
// let student2 : Student2 = {
    
//     name : "Sufyan",
//     age : 22,
//     roll : 12345
// }

// student2 = student2
// console.log (student1)


// 7 - Fresh Object

// Defination

// 1) TypeScript mein fresh object ek aisa object hai jo naya banaya gaya ho aur usmein sirf wahi properties hon jo uske type mein define ki gayi hain. Matlab, jab aap ek object ko pehli baar banate hain aur uske andar extra properties nahi hoti, toh woh fresh object kehlaata hai.
// 2) or jahan pr objects compare ho rahe hote hain usey stale objects kehte hain
// 3) typescript fresh object k case me strict checking karta hai.


// Practice_1

// interface Person {
//     name: string;
//     age: number;
// }

// let freshPerson: Person = { name: "Alice", age: 30 }; // Yeh ek fresh object hai


// 7 - Synchronous and Asynchronous 

// Defination

// 1) Synchronous programing line by line column by column chalti hai or asynchronous programing me cheezyn chalne me thora time leti hain.
// 2) asynchrounus ka use database pr request bhejne or data lane k lye hota hai.
// 3) synchronous programing me agr koi asynchronouns programing ka koi code aa jaye to pura code complete nh chal pata.

// Syntax

// Synchronous Programing

// 1) Call Stack // 

// Asynchronous Programing

// 2) Call Back Queue
// jo code time taken ho to wo call back queue kehlata hai or usey code se alag kar dya jata hai.

// Practice_1

// This is synchronus Programing

// console.log (1)
// console.log (2)
// function add () {
//     let result = 1 + 2
//     return result
// }
// let result = add ()
// console.log (44)
// console.log (result)

// Practice_2

// Call Back Function
// jo function argument me kisi function ko pass kare usey call back kehte hain,

// Main Higher Order Function (HOC)

// function One ( cb : () => string) {
//     console.log ("Higher Order Function")
//      cb () // calling the call back function
// }

// function Two () {
//     return "Async Function"
// }

// One (Two) // HOC me jab call back function ko call karte hi to round bracket k andar call back function k sath round bracket nh lagate wrna wo foran se execute ho jata hai.

// Practice_3

// function add (n1 : number , n2 : number , callback : () => void) {
//     console.log (n1 + n2)
//     return callback ()
// }

// function res () {
//     console.log ("Result")
// }

// let result = add (6,12,res)
// console.log (result)

// Home Work :
// explain in simple words what is SetTimeOut and Call Back

// function higherOrderFunction(callback : any) {
//     console.log("Inside higher-order function");
//     callback();
// }

// function simpleFunction() {
//     setTimeout(() => {
//         console.log("Inside callback function")    
//     }, 3000);
//     ;
// }

// Usage
// higherOrderFunction(simpleFunction);

// Output:
// Inside higher-order function
// Inside callback function

