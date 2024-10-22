"use strict";
// Typescript typeAlias
// const country:string = "Pakistan"
const slip = {
    costumerName: "Ahmad",
    product: {
        productName: "Cake",
        price: 2500,
        isTasty: () => "Yes"
    }
};
// console.log (slip.product.productName)
// Home work 
// 1- creat 10 object in an Array
// 2- property assign karyn color, product or price ka
// 3- is per filter ka function lagana hai or sirf white color wale ko print karwayn phir price pr filter lagayn k jo product 1000 k under ho usey print karwaye....
// 4- interface kya hota hai ye parh kar aana hai.
// Home Work
let mobiles = [
    {
        product: "Qmobile", // 1
        price: 20000,
        color: "gray",
        isAvailable: true
    },
    {
        product: "Qmobile", // 2
        price: 23000,
        color: "black",
        isAvailable: false
    },
    {
        product: "Qmobile", // 3
        price: 25000,
        color: "white",
        isAvailable: true
    },
    {
        product: "Realme", // 4
        price: 30000,
        color: "purple",
        isAvailable: false
    },
    {
        product: "Realme", // 5
        price: 32000,
        color: "blue",
        isAvailable: true
    },
    {
        product: "Realme", // 6
        price: 35000,
        color: "red",
        isAvailable: false
    },
    {
        product: "Oppo", // 7
        price: 40000,
        color: "orange",
        isAvailable: true
    },
    {
        product: "Oppo", // 8
        price: 42000,
        color: "light blue",
        isAvailable: false
    },
    {
        product: "Oppo", // 9
        price: 45000,
        color: "light gray",
        isAvailable: true
    },
    {
        product: "Vivo", // 10
        price: 50000,
        color: "cyan",
        isAvailable: false
    },
    {
        product: "Vivo", // 11
        price: 52000,
        color: "light purple",
        isAvailable: true
    },
    {
        product: "Vivo", // 12
        price: 55000,
        color: "light green",
        isAvailable: false
    }
];
let result = mobiles.filter((val) => {
    return val.product == "Qmobile";
});
console.log(result);
// let result = mobiles.filter ((val) => {
//     return val.price >= 40000 && val.price < 50000
// })
// console.log (result)
// let result = mobiles.filter ((val) => {
//     return val.color == "light gray"
// })
// console.log (result)
// let result = mobiles.filter ((val) => {
//     return val.isAvailable == true
// })
// console.log (result)
