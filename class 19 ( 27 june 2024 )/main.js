"use strict";
// Today All Classes
Object.defineProperty(exports, "__esModule", { value: true });
// 1- Inteface use in classes
// 2- Read Only
// 3- Encapsulation
// 4- Static
// Revision
// Classes is only a blue print
// class Person {
//     name : string
//     constructor (name : string) {
//         this.name = name
//     }
// }
// let person = new Person ("Sharoz")
// console.log(person);
// Inheritance
// class Person {
//     name : string
//     age : number
//     constructor (name : string, age : number){
//         this.name = name
//         this.age = age
//     }
// }
// class Employee extends Person {
//     Salary : number
//     constructor (name : string, age : number, salary : number){
//         super (name, age)
//         this.Salary = salary
//     }
// }
// let emp = new Employee ("Ahmad",23,30000)
// 1- Interface
// Defination
// 1) jab bh interface ko use karna ho to class or interface ko jorne k lye 1 key word use hota hai (implements) , ye interface or class ko jor deta hai,
// 2) Interface jab bh use kya jaye to ye zaroori hai k jo properties interface me hain wo sari properties class me bh honi chahye however class me extra properties bh define kar skte hain.
// Syntax 
// interface Person {
//     name : string
// }
// class Employee implements Person {
//     name : string 
//     constructor (name : string){
//         this.name = name
//     }
// }
// let p = new Employee ("Salman")
// console.log(p);
// Practice_1
// interface StudentProps {
//     name : string
//     rollNo : number
// }
// class Student implements StudentProps {
//     name: string 
//     rollNo: number
//     constructor (name: string , rollNo: number){
//         this.name = name
//         this.rollNo = rollNo
//     }
// }
// let stu = new Student ("Ahmad",309553)
// console.log(stu);
// Practice_2
// interface Cars {
//     make : string
//     model : number
// }
// class Honda implements Cars {
//     make: string 
//     model: number
//     constructor (make: string , model: number){
//         this.make = make
//         this.model = model
//     }
// }
// let c = new Honda ("Honda Civic",2023)
// console.log(c); // complete object
// console.log(c.make = "Lamborghini"); // updation is valid in interface
// Practice_3
// interface Calulation {
//     n1 : number
//     n2 : number
// }
// class Cal implements Calulation {
//     n1 : number
//     n2 : number
//     sign : any
//     constructor (n1: number, n2: number, sign : any){
//         this.n1 = n1
//         this.n2 = n2
//         this.sign = sign
//     }    
//     myCal (n1: number, n2: number, sign : any){
//         if (sign == "+"){
//             console.log(n1 + n2);
//         } else if (sign == "-"){
//             console.log(n1 - n2);
//         } else if (sign == "*"){
//             console.log(n1 * n2);
//         }  else if (sign == "/"){
//             console.log(n1 / n2);
//         }
//     }
// }
// let c = new Cal (6,8,"-")
// c.myCal(16,3,"*");
// 2- Read Only
// Defination
// 1) TypeScript me readonly keyword ka use ek property ko read-only banane ke liye kiya jata hai. Matlab, once a property is initialized, uske value ko change nahi kiya ja sakta. Yeh mainly immutability ensure karne ke liye use hota hai.
// 2) Readonly function sirf oop me hi nh different data type me use hota hai.
// Classes: readonly properties ko initialize karne ke baad change nahi kiya ja sakta jese
// Interfaces: readonly properties ko define karne ke baad modify nahi kiya ja sakta.
// Arrays: readonly arrays me elements ko change nahi kiya ja sakta aur usme new elements add nahi kiya ja sakta.
// 3) readonly propertie compile time per error deti hai but phir bh result aa jata hai.
// Syntax 
// class Person {
//     readonly name: string; // This is read only propertie
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
//   const person = new Person("Ahmad");
//   console.log(person.name); // Output: Ahmad
//   person.name = "Sharoz"; // Error: Cannot assign to 'name' because it is a read-only property.
// Practice_1
// class student {
//     name: string 
//     rollNo: number
//     readonly marks: number      
//     constructor (name: string , rollNo: number, marks: number ){
//         this.name = name
//         this.rollNo = rollNo
//         this.marks = marks
//     }
// }
// let student1 = new student ("Ahmad",309553,90)
// console.log(student1);
// console.log(student1.marks = 100); // Error the value is not change because it is readonly propertie
// Practice_2
// interface Account {
//     readonly accNumber : number
// } 
// class MyAccount implements Account {
//     readonly accNumber: number = 1234000
// }
// let acc = new MyAccount ()
// console.log(acc);
// acc.accNumber = 789000 // Cannot assign to 'accNumber' because it is a read-only property.
// console.log(acc);
// Practice_3
// let myArry : readonly number [] = [1,2,3,4,5]
// console.log(myArry);
// console.log(myArry[1] = 20); // Error
// 3- Encapsulation
// Defination
// 1) Encapsulated properties wo properties hoti hain jo ek class ke andar define ki jaati hain aur unhe directly access nahi kiya ja sakta. Instead, unhe access karne ke liye class ke methods (getters aur setters) ka use kiya jata hai. Isse data safe rehta hai aur controlled manner me access hota hai.
// 2)  Read visibilities 3 tarah ki  hoti hain,
//   1) Public
//      Ye properties har jagah accesable hoti hain. 
//   2) Private
//      Ye propertie sirf apni original class me use ho skti hai child class me bh use nh
//      ho skti hain. 
//   3) Protected
//      Ye propertie sirf apni class or child class me accesable ho skti hai out side the class
//      use nh ho skti hain.
// 3) Getter function and Setter function
// 1- Getter function
// Getter function ka simple matlab hai ek aisa function jo ek object ki private property ko access karne ke liye use hota hai. Is function ka kaam hai property ki value ko return karna bina usse directly access kiye. getter function me values return bh ho skti hain
// 2- Setter funcion
// Setter function ka simple matlab hai ek aisa function jo ek object ki private property ko modify karne ke liye use hota hai. Is function ka kaam hai property ki value ko set (ya update) karna bina usse directly access kiye.
// 4)
// 5)
// Syntax 
// class Person {
//     private name: string; // private data
//     constructor(name: string) {
//         this.name = name;
//     }
//     // public method to set name
//     public setName(name: string): void {
//         console.log(this.name = name);
//     }
//     // public method to get name
//     public getName(): string {        
//         return this.name;
//     }
// }
// const person = new Person("Ahmad");
// console.log(person);
// person.setName("Sharoz"); // Output: "Sharoz"
// For Public
// Note : Ye properties har jagah accesable hoti hain.
// Practice_1
// class Bank {
//     public balance : number = 2000
// }
// let b = new Bank ()
// console.log(b.balance);
// For Private 
// Note : Ye propertie sirf apni original class me use ho skti hai child class me bh use nh
// ho skti hain.
// Practice_1
// Getter function
// Note : Getter function ka simple matlab hai ek aisa function jo ek object ki private property ko access karne ke liye use hota hai. Is function ka kaam hai property ki value ko return karna bina usse directly access kiye. getter function me values return bh ho skti hain
// class Bank {
//     private _balance : number // this is private propertie
//     constructor (b: number){
//         this._balance = b
//     }
//     get myBallance (){ // this is getter function for get the data of private properties
//         //  console.log (this._balance) // it's not valid because get function must return a value 
//         return this._balance
//     }
// }
// let b = new Bank (3200)
// console.log(b.myBallance); // consider karyn k getter function ko execute krte wqt () bracket nh lagate
// Practice_2
// Setter function for deposit
// Note : Setter function ka simple matlab hai ek aisa function jo ek object ki private property ko modify karne ke liye use hota hai. Is function ka kaam hai property ki value ko set (ya update) karna bina usse directly access kiye.
// class Bank {
//     private _balance : number = 10000
//     get getData (){
//     return this._balance
//     }
//     set setData (dep : number){ // setter function must at least 1 parameter
//         this._balance += dep
//     }
// }
// let b = new Bank ()
// b.setData = 2000
// console.log(b.getData); 
// Practice_3
// Setter function for withdraw 
// class Bank {
//     private _balance : number = 20000
//     set setData (withdraw : number){ // this is setter function for set the data of private properties
//         console.log( this._balance - withdraw ); //  valid
//         return this._balance -= withdraw // this is not valid because return keyword is not use in the setter funcion
//     }
// }
// let b = new Bank () 
// b.withDraw = 5000
// For Protected
// Note : Ye propertie sirf apni class or child class me accesable ho skti hai out side the class
// use nh ho skti hain.
// Practice_1
// class Student {
//     name: string 
//     rollNo: number
//     protected marks: number
//     constructor (name: string , rollNo: number, marks: number ){
//         this.name = name
//         this.rollNo = rollNo
//         this.marks = marks
//     }
// }
// let stu1 = new Student ("Ahmad",309553,100)
// console.log(stu1);
// // Inheritance
// class Student2 extends Student {
//     constructor (name: string , rollNo: number, marks: number ){
//         super (name,rollNo,marks)
//     }
// }
// let stu2 = new Student2 ("Sufyan",12238,90)
// console.log(stu2);
// console.log(stu2.marks); // not valid because marks is protected
// 4- Static
// Defination
// 1) Static propertie direct class ko use karti hai iska constructor banane ki zaroorat nh hoti or isey execute krne k lye object nh class k name k bad . likh kr execute kra jata hai. 
// Syntax
// class Person {
//     static name : string  = "Ahmad"
// }
// let p = new Person ()
// console.log(Person.name); // Valid
// // p.name = "Sharoz" // Error becuase static propertie ko direct class k name k sath hi update kya ja skta hai.
// Person.name = "Sharoz" // Valid because yahan class k name k sath update kya gaya hai.
// console.log(Person.name); // Valid
// Practice_1
// class Bank {
//     private _balance : number
//     static myPin : number = 1234 // this is static propertie 
//     constructor (b: number){
//         this._balance = b
//     }
//     set withDraw (amount : number){
//         console.log(`This is my current balance : ${this._balance - amount}` );   
//     }
// }
// if (Bank.myPin == 1234) {
//     let b = new Bank (5000) // instance of a class
//     b.withDraw = 1000
//     console.log( `This is my pincode : ${Bank.myPin}` // it is execute only after the class name
// );
// } else {
//     console.log("Invalid Creds.");   
// }
