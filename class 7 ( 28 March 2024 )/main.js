"use strict";
// If else statment pratices :
// Practice No 1
// let month = "Ramadan"
// month = "Jan"
// if (month == "Ramadan") {
//     console.log ("Water bottele is not allowed.")
// } else if (month == "Jan") {
//     console.log ("Water bottle is allowed in Jan") // else if name rakhne ka ye reason hai k agar if na chale to else if chalega hum aesa nh kar skte k bar bar if hi use karte rahyn.
// }
// else {
//     console.log ("Water bottel is not allowed.")
// }
// Practice No 2
// let age = 18
// if (age < 17) {
//     console.log
// }
// console.log (age < 18, "School") // he wil come to school
// console.log (age >= 18, "Uninversity") // he will come to school
// And && or || Operators Practices :
// Important Notes:
// Or || operator independend hai, it's mean k ye kisi pr depend nh hai isme koi 1 value bh true ho to true print karta hai, and ye left and right and right and left dono sides se code ko read karta hai.
// let KE =  false//"KE ON hai"
// let UPS = "UPS ON hai"
// let bulb = KE || UPS
// console.log (bulb) 
// NOte:
// agr && or || operators 1 sath hon to ye is tarah chalega k && wali agr false bh ho rhi hai to wo || wali condition chala dega, because and jo hai wo dependend hai wo left to right code ko read karta hai but || independend hai ye left to right bh code ko read karega or right to left bh.
// Example 1 :
// let bill =  false //"paid" //   
// let KE =  "KE ON hai"
// let UPS = false //"UPS ON hai" 
// let light = "Light on hai"
// let bulb = bill && KE || UPS || light
// console.log (bulb) // And operator dependend hai.  
// Example 2 :
// let bill = false // "paid"
// let SSG = "Gass aa rahi hai."
// let cylender = "Cylender use ho raha hai."
// let stove = bill && SSG || cylender
// console.log (stove)
// Function 
// Defination :
// jab koi specific kam karwana ho to functions ka use kya jata hai, functions k andar jo bh kam karwana hota hai wo define karta hain then functions k bahar jo functions banaya hai usey call ki jati hai, functions k andar 2 cheezyn use hoti hain. 
// 1st (parameter) :
// parameter wo hota hai k apne agar koi extra kam karwana hota hai to ap functions k round brackets (para) me ap us extra work ka nam de dete hain.
// 2nd (Argument) :
// argument ka mtlab hai jab apne parameter define kar dya hai to jab ap functions ko call karta hain to rount brackets (arg) me jo bh special work karwana hai usey define karta hain.
// Egg , Butter , Salt
// optional options k lye parameter me khud se value assing krni hoti hai
// like this => 
// function HalfFry ( salt : number = 3) {
//     // console.log ( 10 + 3 - 2 * 20 / 3 ) // for bodmass rule
//     console.log ( 1 + 10 + salt  )
//     // let dish = 1 + 2 + salt
//     // console.log (dish)
//     // return HalfFry
// }
// HalfFry ()
// Practice 1 simple method :
// function HalfFry (salt: number) {
//     console.log (1 + 2 + salt)
// }
// HalfFry (3)
// Practice 2 using Return :
// Note :
// agar apne parameter k andar bh value di hui ho or argument me bh to TS argument wali value ko read karega parameter me di hui value ko nh.
// function HalfFry (salt: number = 2 ) {
//     let dish = 1 + 2 + salt
//     return dish
// }
// let ret = HalfFry (5)
// console.log (ret)
// let table1 = HalfFry (1.5) // For ahmad 
// let table2 = HalfFry (3)
// console.log (table1)
// console.log (table2)
// // HalfFry (2) // for sufyan
// Practice 3 :
// function FastFood (fries : any , colddrink : string) {    
//     let order = (`Zinger Burger With ${ fries + " fries"} and ${colddrink} `)
//     return order
// }
// let table1 = FastFood ("100 mg" , "Pakola" )
// console.log (table1)
// let table2 = FastFood ("50 mg" , "Sprite" )
// console.log (table2)
// let table3 = FastFood ("no" , "no colddrink" )
// console.log (table3)
// Practice 4 : 
// Patti, milk , sugar and ilaichi
// function tea (sugar : any , elaichi : any ) {
//     let makeTea = `I want to one tea wich inclueds 2 tbs Patti, 10 mg Milk, ${sugar} , ${elaichi}`
//     return makeTea
// }
// let table1 = tea ("1 tbs", " 2")
// console.log (table1)
// // it's table orderd some biscuites
// let table2 = tea ("1.5 tbs", " 4 elaichies" + " Biscuites")
// console.log (table2)
// // it's table orderd some cakes but no use elaichi 
// let table3 = tea ("2 tbs Sugar", "" + "Cake")
// console.log (table3)
// Atm machine practice :
// function cash (myBal : any, withdraw : any) {
//     let cashBack : any = myBal - withdraw
//     // if (myBal > withdraw  ) {
//     //     console.log (myBal + withdraw)
//     // }
//     // else {
//     //     console.log ("fail")
//     // }
//     return cashBack
// }
// // 1st method to console 
// console.log (cash (20000, 5000))
// // 2nd method to console
// let atm1 = cash (15000, 3000)
// console.log (atm1)
// let atm2 = cash (10000, 2000)
// console.log (atm2)
