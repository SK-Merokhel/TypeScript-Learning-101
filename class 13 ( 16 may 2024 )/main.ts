// Typescript typeAlias
// const country:string = "Pakistan"

// Today Topics 

// Note

// 1) Type ALias

// Defination :

// Type alias typeScript ka variable hai jo code ko bht readable bana deta hai iske lye hamyn ye syntax 
// use karna chahye => type Name = string then javaScript ka variable create karyn is tarha const fName : Name = "Ahmad" then print karwa dyn... 

// camal case js ka variable hai.


// Type alias typeScript


// jab bh typescript me type define krna ho to type alias use hota hai

// type IrfanFriend = number
// type IrfanOfficePhn = number

// const irfanFriend : IrfanFriend = 8790
// const irfanOffice : IrfanOfficePhn = 9876000

// console.log (irfanFriend)
// console.log (irfanOffice)

// Task 1

// type human = string
// type animal = string

// const humanName : human = "Sharoz"
// const animalName : animal = "Cat"
// const animal : human = "cat"

// console.log (humanName)
// console.log (animalName)
// console.log (animal)

// Task 2

// type Name = string []
// const familyName : Name = ["Ammi","Sis","Bro"]

// console.log (familyName)

// Task 3

// let myName = (Name : ) => {
//     type Name = string
//     return Name
// }

// let result = myName ("Ahmad")
// console.log (result)

// 2) Type Union

// Defination :
// jab kisi variable ko 2 ya isse zyda type assign karni hon to union type ka use karte hain or is | sign se dono ko jorte hain is tarah hum 1 variable ko kafi tarah se print kiya ja skta hai...

// Practice :

// let rollNo : string | number = 309553
// console.log (rollNo)
// rollNo = "309553"
// console.log (rollNo)

// 3) Type Literals 

// Defination :

// Jab apko kisi data variable ki data type pata ho or ye bh pata ho k values kya hai jese days of the week isme pehle se hi pata hai days hain, and hamyn ye bh pata hai k values kya hain jese monday, tuesday, wednesday etc to isko likhne ka
// ye syntax hai let week : "monday" | "tuesday" | "wednesday" = "monday"
// console.log (week)

// Practice :

// let size : "small" | "medium" | "large" = "medium"
// console.log (size)


// let trafficLights : "Red" | "Green" | "Yellow" = "Red"
// console.log (trafficLights)

// Task : 1

// let userCondition : "login" | "logout" = "login"
// console.log (userCondition)

// let isPresent : true | false = false
// console.log (isPresent)

// Task : 2

// let weather : "winter" | "summer" | "autom" | "spring" 
// weather = "winter"

// console.log (weather)

// 4) Objects

// Defination :

// Everything is object, object 1 key value pair hote hain ye basically is lye use hota hai

// const car = {
//     make : "toyota",
//     model : 2023,
//     variant : "1800cc"
// }

// console.log (car)
// console.log (car.make)
// console.log (car.model)
// console.log (car.variant)

// Typing Assigning in an Object

// jis tarah hum different data types ki type assign kar rahe the aese hi


// Practice :

// Using typing assigning

// const car :  {
//     make : string,
//     model : number,
//     variant : string,
//     start : () => void,
//     maxSpeed : () => string,
//     isAc : () => boolean

// } = {
//         make : "toyota",
//         model : 2023,
//         variant : "1800cc",
//         start : () => {
//             console.log ("My car is started")
//         },
//         maxSpeed : () =>   "My car maximum speed is 320kmp",
//         isAc : () => true
//     }

// console.log (car.start() )

// Using Type Arias

// type MyCar = {
//         make : string,
//         model : number,
//         variant : string,
//         start : () => void,
//         maxSpeed : () => string,
//         isAc : () => boolean        
// }

// const car : MyCar = {
//             make : "toyota",
//             model : 2023,
//             variant : "1800cc",
//             start : () => {
//                 console.log ("My car is started")
//             },
//             maxSpeed : () =>   "My car maximum speed is 320kmp",
//             isAc : () => true
//         }
    
//     console.log (car.start())

// 4) Nested Objects

type SlipType = {
    costumerName : string,
    product : {
        productName : string,
        price : number,
        isTasty : () => string
    }
}
const slip : SlipType = {
    costumerName : "Ahmad",
    product : {
        productName : "Cake",
        price : 2500,
        isTasty : () => "Yes"
    }
}

// console.log (slip.product.productName)

// Home work 
// 1- creat 10 object in an Array
// 2- property assign karyn color, product or price ka
// 3- is per filter ka function lagana hai or sirf white color wale ko print karwayn phir price pr filter lagayn k jo product 1000 k under ho usey print karwaye....
// 4- interface kya hota hai ye parh kar aana hai.


// Home Work

let mobiles = [

    {
        product : "Qmobile", // 1
        price : 20000,
        color : "gray",
        isAvailable : true

    },
    {
        product : "Qmobile", // 2
        price : 23000,
        color : "black",
        isAvailable : false
    },
    {
        product : "Qmobile", // 3
        price : 25000,
        color : "white",
        isAvailable : true
    },
    {
        product : "Realme", // 4
        price : 30000,
        color : "purple",
        isAvailable : false
    },
    {
        product : "Realme", // 5
        price : 32000,
        color : "blue",
        isAvailable : true
    },
    {
        product : "Realme", // 6
        price : 35000,
        color : "red",
        isAvailable : false
    },
    {
        product : "Oppo", // 7
        price : 40000,
        color : "orange",
        isAvailable : true
    },
    {
        product : "Oppo", // 8
        price : 42000,
        color : "light blue",
        isAvailable : false
    },
    {
        product : "Oppo", // 9
        price : 45000,
        color : "light gray",
        isAvailable : true
    }, 
    {
        product : "Vivo", // 10
        price : 50000,
        color : "cyan",
        isAvailable : false
    },
    {
        product : "Vivo", // 11
        price : 52000,
        color : "light purple",
        isAvailable : true
    },
    {
        product : "Vivo", // 12
        price : 55000,
        color : "light green",
        isAvailable : false
    }
      
]

let result = mobiles.filter ((val) => {
    return val.product == "Qmobile"
})

console.log (result)

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