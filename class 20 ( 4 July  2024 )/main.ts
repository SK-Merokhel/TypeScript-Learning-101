class ACTem {
    private _tem : number         //for javascript we add this underscore which means it is private beacuse java don't have private key word
    constructor( t : number) {
        this._tem = t
    }
}

const temp = new ACTem (25)  // new keyword make object and second it activates constructor 
console.log(temp);


// getter function is used to get a privaet property 

class AcTem {
    private _temp : number   
    constructor( t : number) {
        this._temp = t
    }
    get getTemp () {
        return this._temp
    }
}
// get ki tarah hamare passs set ka bhi hota hai ek
const tempp = new AcTem (25) 
console.log(tempp.getTemp);

// polymorphism / methode overriding 
// poly means many and morphism means forms
// methode same hoga lakin use krne ka tariqa alag alag hoga
// ek parent class or ek child class, inhiretence ho jati hai child mai parent class se. same name k 2 functions ek parent mai or ek child class mai

class Animal {
    name : string
    constructor ( n : string ) {
        this.name = n 
    }
    makeSound () {
        console.log("Animal making sound");
        
    }
}

class Lion extends Animal {
    isKing : boolean
    constructor ( name : string , king:boolean ) {
        super (name)
        this.isKing = king
    }
    // makeSound () {
    //     console.log("Roaring Sound");
    // }
}
const lion = new Lion ("sheeroooo", true)
console.log(lion);
lion.makeSound();

// Abstraction 
//  there is never instance for absract class, never ever 
// agr koi function class mai bnana ho or usse se phele abstract key use kar rahe hein tw wahi function child class mai hona zarori hai hr haal mai

abstract class Laptop {
    ram : string
    screen : number
    constructor ( ram : string , screen : number) {
        this.ram = ram
        this.screen = screen
    }
    
}

class Hp extends Laptop {
    constructor ( ram : string , screen : number ){
        super(ram,screen)
    }
}
const hp = new Hp ("16 GB " , 14.5)
console.log(hp);

// const laptop = new Laptop 


// Ternary Operators
// 1. define condition
// 2. if statment

let result = 50 < 40 ? true : false
console.log(result);

let teacher  : string = "male"
let result2 = teacher == "male" ? "Sir" : "Miss"
console.log(result2);




// undefined : for instance we don't have the value in furture we will get the value. 
let a // abhi a ki koi value nahi hai 
console.log(a);
a=5 // value future mai add ki hai 
console.log(a);


// null :  we don't have the value and later on wards there will be no value 
// null  mai intentionally value khali hoti hai

let b = null // yahan jan poch kar value nahi di
console.log(b);










