console.log("Hello World");

// Revision 


// let myName : string = "Sufyan"
// let age : number = 23

// type allias
// given nick name to variable , giving name to my type 
// two friends with same name, Farhan. But when we want to contact farhan both are from different domain so, for the differentiation we name them farhan gali & farhan school
// simply giving name to our type, with that type bname we  can undersatnd what data contain our type allias

type Fullname = string
type Age = number
let myName : Fullname = "Sufyan"
let age : Age = 23

// type allias mai data type nam prte hi pata lag jata hao kya data dena hai example k lia yahan par type Fullname & type age.

// Array
// arrays are coma seperarted values

// let productNames = ["Bread" , "Eggs" , "Milk" , "Sugar"]
// console.log(productNames);

// let productNames : string [] = ["Bread" , "Eggs" , "Milk" , "Sugar", "36" , '21', "true"  , `ZU`]
// // array k type assign krne k baad [] laga na zarori hai
// // double or single quotes both work for string even back ticks also works
// console.log(productNames);

// now doing with type allias and sting together
type ProductNames = string
let productNames : ProductNames [] = ["Bread" , "Eggs" , "Milk" , "Sugar"]
console.log(productNames);

//object
// es mai phele key deinge phir us key ki value
// object mai curly brakets or array mai aquare brakets lagte hein

let saman = {
    name : "Bread", // key phir value 
    price : 120,
    isExpired : false,
}
console.log(saman);
console.log(saman.price);  // object mai ksi khas key k value ko access krne k lia tw dot notation use hoti hai lakin array k case mai index notation use hoti hai
console.log(saman.isExpired , saman.name); // ek saat do value ko bhi get kr sakte hein

// object mai duno type allias or interface use kr sakte hein
// difference b/t type allias and interface:
// both can be used for object structure but differenc eis that type allias can be used in any type e.g like string, number, boolean but interface can only be used in objects
// type allias mai jitne bhi type assing kareinge utni hi value uppar deni hai phir

type SamanNaam = {
    name  : string , 
    price : number , 
    isExpired : boolean 
}
let samann : SamanNaam = {
    name : "Bread", // key phir value 
    price : 120,
    isExpired : false,
}
console.log(samann);
console.log(samann.price);  // object mai ksi khas key k value ko access krne k lia tw dot notation use hoti hai lakin array k case mai index notation use hoti hai
console.log(samann.isExpired , samann.name); // ek saat do value ko bhi get kr sakte hein


interface SamanNaamm { // yahan se ab '=' sign hata dia for interface.
    //interface srif or srif object k saat chalta hai lakin type allias har data type k saat chalta hai
    name  : string , 
    price : number , 
    isExpired : boolean 
}
let samannn : SamanNaamm = {
    name : "Bread", // key phir value 
    price : 120,
    isExpired : false,
}
console.log(samannn);
console.log(samannn.price);  // object mai ksi khas key k value ko access krne k lia tw dot notation use hoti hai lakin array k case mai index notation use hoti hai
console.log(samannn.isExpired , samannn.name); // ek saat do value ko bhi get kr sakte hein

// nested object : object k andar ek object
// nested array : array k andar ek array


let element = {
    name : "Bread", // key phir value 
    price : 120,
    info : { // yahan ye info bhi ek addat object hai or key bhi hai
        isExpired : false,
        coulor : [ "Red" , "Black" , "Blu" ]
    }
}
console.log(element);
console.log(element.info.isExpired); //object k andar object info or info k andar isexpired ki value get ki
console.log(element.info.coulor);
console.log(element.info.coulor[0]); // zero se start hoti hai array count

// promises hamesha return hota hai wrna type void dega 
// jab bhi promise reject hoga te .catch chale ga
// .catch k baad .then dobara lage ga
// .catch ne behinad the scene ek promise create kiya, sucessful response hai tw phir .then lage ga

// synchous

// const Cooking = () => {
//     new Promise (() => {

//     })
// }

let isFood = true
const Cooking = () => {
    return new Promise ((resolve , reject) => {
        console.log("Food in process");
        
        if ( isFood ){
            resolve("Food was tasty") // ye resolve yahan ek function hai
        }
    })
}

Cooking ()
.then((response) => { // promis resolve k baad .then chalta hai
    console.log(response);
    
})


// await hamesha async k key word k saat chalege
// await us .then or .catch k kaam ko simple kar deta hai. lines of code short hoti hai


























































































