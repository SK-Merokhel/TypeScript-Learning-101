"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
let myName = "Sufyan";
let age = 23;
let productNames = ["Bread", "Eggs", "Milk", "Sugar"];
console.log(productNames);
//object
// es mai phele key deinge phir us key ki value
// object mai curly brakets or array mai aquare brakets lagte hein
let saman = {
    name: "Bread",
    price: 120,
    isExpired: false,
};
console.log(saman);
console.log(saman.price); // object mai ksi khas key k value ko access krne k lia tw dot notation use hoti hai lakin array k case mai index notation use hoti hai
console.log(saman.isExpired, saman.name); // ek saat do value ko bhi get kr sakte hein
let samann = {
    name: "Bread",
    price: 120,
    isExpired: false,
};
console.log(samann);
console.log(samann.price); // object mai ksi khas key k value ko access krne k lia tw dot notation use hoti hai lakin array k case mai index notation use hoti hai
console.log(samann.isExpired, samann.name); // ek saat do value ko bhi get kr sakte hein
let samannn = {
    name: "Bread",
    price: 120,
    isExpired: false,
};
console.log(samannn);
console.log(samannn.price); // object mai ksi khas key k value ko access krne k lia tw dot notation use hoti hai lakin array k case mai index notation use hoti hai
console.log(samannn.isExpired, samannn.name); // ek saat do value ko bhi get kr sakte hein
// nested object : object k andar ek object
// nested array : array k andar ek array
let element = {
    name: "Bread",
    price: 120,
    info: {
        isExpired: false,
        coulor: ["Red", "Black", "Blu"]
    }
};
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
let isFood = true;
const Cooking = () => {
    return new Promise((resolve, reject) => {
        console.log("Food in process");
        if (isFood) {
            resolve("Food was tasty"); // ye resolve yahan ek function hai
        }
    });
};
Cooking()
    .then((response) => {
    console.log(response);
});
// await hamesha async k key word k saat chalege
// await us .then or .catch k kaam ko simple kar deta hai. lines of code short hoti hai
