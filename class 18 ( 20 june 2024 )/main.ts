console.log("Hello World");

// All New Topics

// 1) Object Oriented Programming 
// 2)
// 3)
// 4)
// 5)


// 1 - Object Oriented Programming

// Defination :

// 1) Yahan har cheez object hoti hai, ye almost har language mai hoti hai like in python, C sharp etc.
// 2) 2 chezoun pe focus zyada hota hai ek Class or dosra Object. Class or Object main hai. 
// 3) Yahan class ek blur print hai us object ka, asan alfaz mai ek naqsha. Es object mai kya kya data hoga konsa methode konsa function ya konsa varibale. ye sab ye naqsha hai es class ka.
// 4) Class is reuseable. same object bar bar use kr sakte hein wahi same structure.
// 5) Class ka naa hamesha capital hota hai, the first letter of the word. Class k andar variable or methods hukm declare krte hein.

// Practice_1
class Car {
    //variable
    name : string = "Civic"
    make : string = "Honda"
    year : number = 2024
}

// ab yahan se es naqshay ki construction shuru hogi
// yahan ab class k baad hum object baneinge

let myCar = new Car () // new keyword makes an object 
// new ne object  bana ya meri Car class k lia 
console.log(myCar);


// Practice_2
//ye class bana raha houn simple ek naqsha
class Banda {
    name : string = "Sufyan"
    age : number = 21
}
// ab object bana raha houn 
let p = new Banda()
console.log(p);


// Practice_3
class Person {
    //class properties
    name : string 
    age : number 
    gender : string
//constructor class k andar ek function hota hai jis mai hum class properties refer krte hein
// constructor function class k andar hi banega
// this. refer krte class property ko
constructor (n:string , a:number , g:string ) {
        this.name = n // this.name refer kar raha hai class properties ko
        // ye n mere constructor ka parameter hai 
        this.age = a // ye a bhi ek parameter hai
        this.gender = g
    }
    getDetails () : string {
        return `My name is ${this.name} and my age is ${this.age}, gender is ${this.gender}` 
    }

    favFood (food:string):string {
        return`, Moreover my fav food is ${food}`
    }
}
// ab object bana raha houn 
let pp = new Person( "Saniya", 25 , "F") // new ka keyword ne yahan ek object bana ya hai
let pp2 = new Person( "Jamal", 20 , "M") // jamal yahan par argument hai
let pp3 = new Person( "Raheel", 62 , "M") // new jse hi likheinge tw ye constructor function ko call krta hai
console.log(pp2 , pp3.getDetails() , pp.favFood("Biryani"));

// Practice_4

// inheritance 
// parent class se child class k andar ate hein
// parent / base / super class
// child class / derived class

//this is parent class or name is base class or super class
 class Vehicle {
    enigne : string
    tyre : number
    name : string

    constructor(e : string , t : number , n : string){
        this.enigne = e
        this.tyre = t
        this.name = n
    }
}
// now making child classs
 class Carr extends Vehicle {
    constructor ( enigne : string , tyre : number , name : string) {
        super(enigne,tyre,name) // super yahan constructor ko indication de raha hai k ye 3 chezein parent class se arahi hein.
    }
 }
let car = new  Carr ("2800" , 4 , "Revo")
console.log(car);

// Practice_5

class truck {
    colour : string 
    Capacity : number
    model: string 

    constructor(c : string , c2 : number , m : string){
        this.colour = c
        this.Capacity = c2
        this.model = m
    }
}

class motorBike extends truck {
    constructor (    colour : string ,
        Capacity : number ,
        model: string ) {
            super(colour,Capacity,model)
        }
}

let mototruck = new motorBike ("Black" , 2 , "2024")
console.log(mototruck);

// Practice_6

// HOMEWORK : 
// parent class : person
// child student : emloyee









