// Today All New Topics

// 1- SetTimeout
// 2- Promises
// 3- Channig
// 4- Async Await


// 1- SetTimeout

// Defination

// 1) setTimeout JavaScript (aur TypeScript) me aik built-in function hai jo specific time ke baad koi function execute karta hai. Ye asynchronous function hai jo humein kuch delay ke baad koi kaam karwane ki sahulat deta hai.
// 2) setTimeout 2 argument leta hai, 
// 1st ) function
//  function wo code hota hai jo hum specific delay ke baad run karwana chahte hain.

// 2nd) delay
// delay wo waqt hota hai (milliseconds me) jo hum wait karna chahte hain function ko execute karne se pehle.

// 3) ye async function hai agr ye sync function k bech me likha hua hai to pehle sync function execute hoga then async function because ya chalne me kuch time leta hia

// Syntax

// setTimeout ((function), delay)

// Practice_1

// function sayHello() {
//     console.log('Hello, duniya!');
// }

// setTimeout(sayHello, 3000); // 3000 milliseconds = 3 seconds

// Practice_2

// Usign HOD and Call Back Function

// let product  = [
//     {name : "Bread", price : 100},
//     {name : "Butter", price : 250},
//     {name : "Milk", price : 220}
// ]

// // Higher Order Function

// function One (cb : () => void) {
//     console.log ("Fetching...")
//     setTimeout (() => {
//         cb ()
//     }, 2500)
// }

// // Call Back Function

// function Two () {
//     console.log (product)
// }

// One (Two) // Execute Function

// Practice_3

// function eid () {
//     console.log ("Eid Mubarak...")
// }

// setTimeout (eid),3000

// Practice_4

// setTimeout (function () {
//     console.log ("I want to go to umrah")
// },2000)

// 2- Promises

// Defination

// 1) Typescript me Promise aik object hota hai jo future me hone wale kisi kaam ke result ko represent karta hai. Yeh aik asyncronous operation ko handle karne ka ek tareeqa hai jo humay code ko zyada readable aur manageable banane me madad deta hai,Promises asynchronous operations ko handle karne ke liye callbacks ka aik behtareen alternative hain.
// 2) call back function se bachne k lye promise ko use kya jata hai, iska syntax ye hai k function k andar return key lagate hain then javascript ka built in key word hota hai jiska name hota hai (new) new likhne k bad Promise likha jata hai.
// 3) Promise ki teen states hoti hain:

// Pending: Jab promise create hota hai lekin abhi tak complete nahi hua.
// Fulfilled: Jab asynchronous operation successfully complete hota hai aur resolve function call hota hai.
// Rejected: Jab asynchronous operation fail hota hai aur reject function call hota hai. 

// Syntax

// let myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation yahan perform hota hai
//     if (/* operation successful */) {
//         resolve('Operation successful');
//     } else {
//         reject('Operation failed');
//     }
// });


// Practice_1

// const myFunc = () => {
//     return new Promise ((resolve, reject) => {
//             resolve ("Data Successfully Fetched")
//             reject ("Error")   
//     })
// }

// myFunc()
// .then ((result) => {
//     console.log ("Succesed",result)
// })
// .catch ((err) => {
//     console.log ("Faild",err)
// })


// Practice_2

// let isVictory = false 

// const Cricket = () => {
//     return new Promise ((resolve, reject) => {
//     if (isVictory) {
//         resolve ("We Won.")
//     } else {
//         reject ("We Lost.")
//     }     
//     })
// }

// Cricket ()
// .then ((res) => {
//     console.log (res)
// })
// .catch ((err) => {
//     console.log (err)
// })

// Practice_3

// let isVictory = false 

// const Cricket = () => {
//     return new Promise ((resolve, reject) => {
//     if (isVictory) {
//         console.log ("Match in progress")
//         setTimeout (() => {
//             resolve ("We Won.")
//         },2000)
        
//     } else {
//         console.log ("Match in progress")
//         setTimeout (() => {
//             reject ("We lost tum se na ho payega.")
//         }, 1500)
        
//     }     
//     })
// }

// Cricket ()
// .then ((res) => {
//     console.log (res)
// })
// .catch ((err) => {
//     console.log (err)
// })

// Practice_4

// let percentage = 50

// const myGrad = () => {
//     return new Promise ((response , reject) => {
//         if (percentage > 100) {
//             response ("Invalid Marks")
//         } else if (percentage >= 91 && percentage <= 100) {
//             response ("A+ Grade")
//         } else if (percentage >= 81 && percentage <= 90) {
//             response ("A Grade")
//         } else if (percentage >= 71 && percentage <= 80) {
//             response ("B Grade")
//         } else if (percentage >= 61 && percentage <= 70) {
//             response ("C Grade")
//         } else {
//             reject ("Fail.")
//         }
//     })
// }

// myGrad ()
// .then ((res) => {
//     console.log (res)
// })
// .catch ((err) => {
//     console.log (err)
// })


// 3- Channig

// Defination

// 1) Chaining ka matlab hai ek ke baad ek methods ko sequence me call karna, jahan har method apna result return karta hai jo agle method ko pass hota hai. JavaScript aur TypeScript me chaining ko ziada tar promises aur array methods ke sath use kiya jata hai.
// 2) Channig ka use ye hai k jab promise resolve hoga to code .then ko search karega and wahan pr apna code execute karwayega but hum isko chan ki tarah bh use kar skte hain that mean k .then k bad bh .then use kar skte hain uska syntax ye hai
// 3) Promises me chaining bohot useful hoti hai jab humein multiple asynchronous operations sequentially perform karne hote hain. Har promise ka then method ek naya promise return karta hai, jise hum agle then me chain kar sakte hain.

// Syntax

// let myPromise = new Promise ((resolve,reject) => {
//     resolve ("Good Morning")
//     reject ("Error")
// })
// .then ((result) => {
//     console.log (result)
// })
// .catch ((err) => {
//     console.log (err)
// })

// Practice_1

// let isVictory = true 

// const Cricket = () => {
//     return new Promise ((resolve, reject) => {
//     if (isVictory) {
//         console.log ("Match in progress")
//         setTimeout (() => {
//             resolve ("We Won.")
//         },2000)
        
//     } else {
//         console.log ("Match in progress")
//         setTimeout (() => {
//             reject ("We lost tum se na ho payega.")
//         }, 1500)
//     }     
//     })
// }

// Cricket ()
// .then ((res) => {
//     console.log (res)
//     return "Amir you are great"
// })
// .then ((res) => {
//     console.log ("2nd Res = ",res)
//     return "3/12 in 4 overs"
// })
// .then ((res) => {
//     console.log (res)
// })


// Practice_2

// let isVictory = false 

// const Cricket = () => {
//     return new Promise ((resolve, reject) => {
//     if (isVictory) {
//         console.log ("Match in progress")
//         setTimeout (() => {
//             resolve ("We Won.")
//         },2000)
        
//     } else {
//         console.log ("Match in progress")
//         setTimeout (() => {
//             reject ("We lost tum se na ho payega.")
//         }, 1500)
//     }     
//     })
// }

// Cricket ()
// .then ((res) => {
//     console.log (res)
// })
// .catch ((err) => {
//     console.log (err)
// })
// .finally (() => { // .finally har haal me chalta hai.
//     console.log ("Flight Pakro.")
// })


// Practice_3

// let qurbani = (price : number) => {
//     return new Promise ((resolve, reject) => {
//         // let cow = 160000
//         console.log ("Finding my cow...")
//         if (price >= 150000) {
//             setTimeout (() => {
//                 resolve ("I have finally purchased my Cow.")
//             },2000)
//         } else {
//             setTimeout (() => {
//                 reject ("Oops! I could not find my cow, we will try again tomorrow.")
//             },3000)
//         }
//     })
// }
// qurbani (10000)
// .then ((res) => {
//     console.log (res)
//     return new Promise ((resolve) => {
//         console.log ("Calling the truck...")
//         setTimeout (() => {
//           resolve  ("The truck will arrive in 10 minutes")  
//           },2000) 
//     }) 
// })
// .then ((res) => {
//     console.log (res)
//     console.log  ("The truck has arrived, so we are loading the cow now.")
//     return new Promise ((resolve) => {
//         setTimeout (() => {
//             resolve ("The cow has been successfully loaded onto the truck, so we are heading home.")
//         },2000)
//     })
// })
// .then ((res) => {
//     console.log (res)
// })
// .catch ((err) => {
//     console.log (err)
// })


// 4- Async Await

// Defination

// 1) async me try  ka kaam hota hai error catch
// // Syntax

// // Practice_1

// async function getData () {
//     try {
//         let response = await Cricket () 
//         console.log ()
//     }
//     catch (err){
//         console.log ("error",err)
//     }
// }

// Practice_2

// function fetchFirstData(): Promise<string> {
//     return new Promise((resolve) => {
//         console.log ("First data...")
//         setTimeout(() => resolve('Pehla data'), 1000);
//     });
// }

// function fetchSecondData(): Promise<string> {
//     return new Promise((resolve) => {
//         console.log ("Second data...")
//         setTimeout(() => resolve('Dosra data'), 1000);       
//     });
// }

// async function getAllData() {
//     try {
//         let firstData = await fetchFirstData();
//         console.log(firstData); // Pehla data
        
//         let secondData = await fetchSecondData();
//         console.log(secondData); // Dosra data
//     } catch (error) {
//         console.log('Error: ' + error);
//     }
// }

// getAllData();


// Practice_3

// let email = (email : any) => {
//     return new Promise ((resolve, reject) => {
//         if (email.length >= 8) {
//             console.log ("Email checking...")
//             setTimeout (() => {
//                 resolve ("Email length is vaild.")
//             },2000)
//         } else {
//             console.log ("Email checking...")
//             setTimeout(() => {
//                 reject ("Email length is not valid")
//             },2000)
//         }
//     })
// }

// async function checkEmail () {
//     try {
//     let result = await email ("ar339497@gmail.com")
//     console.log (result)
//     } catch (error) {
//         console.log ("Error : " + error )
//     }
// }

// checkEmail ()
