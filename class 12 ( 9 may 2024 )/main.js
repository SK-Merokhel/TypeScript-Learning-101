"use strict";
// Welcome to my 11th it class in governor house
// Date : 09/may/2024
// Note :
// 1) variable k andar multiple values store karne k lye array ka use hota hai.
// 2) jab bh kisi array ko update karna ho to 1 method ye bh hai jo bataya gya hai, is me humne variable or jis index ko update krna ho usey declare karte hain or = k sign se new element ko usme store kar dete hai...
// 3) Pop
// jab array k last elemnt ko remove karna ho to (Pop) k method ko 
// use karte hain aese =>   fruits.pop ()
// 4) Push
// jab array k last me kisi new element ko add karna ho to (Push) k method ko
// use karte hain aese => fruits.push (new element)
// 5) Shift
// jab array k start se kisi element ko remove karna ho to (Shift) k method ko
// use karte hain aese => fruits.shift ()
// 6) Unshift 
// jab array k start me kisi new element ko add karna ho to (unshift) k method ko
// use karte hain aese => fruits.unshift (new element)
// 7) Slice
// jab array me se kisi specific part ya portion ko nikalna ho to (Slice) k method ko
// use karte hain aese => fruits.slice (starting point, ending point) 
// slice method original array me koi change nh karta wo sirf array k bech me se kuch part ya portion la kar deta hai jisme 2 argument hote hain, ek starting point jo inclusive hota hai 2nd ending point but ye inclusive nh hota exclusive hota hai.
// 8) Splice 
// 1- jab array me se kisi element ko delet karna ho or uski jagah dusre element ko add karna ho to
// (Splice) method ko use karte hain aese => 
// friend.splice (starting point, kitne element dlt krne hain, konse new element add krne hain)
// 2- splice method me 3 argument hote hain 1st start kahan se karna hai, 2nd kitne remove karne hain or 3rd kon kon se new element add krne hain,
// 3- agr ap sirf dlt krna chahte hain add nh karna chahte to to bh kr skte hain because 3rd argument additional hota hai.
// 4- ye negative index me bh run karta hai.
// 9) Concat
// jab 1 se zyda arrays ko apas me jorna ho to (Concat) method ko
// use karte hain aese => fruits.concat (new array)
// 10) Object
// 1- ye structure data define karne k lye use hota hai jab k array kisi 1 hi type ki value ko 1 hi variable k andar declare karne k lye use hota hai....
// 2- jab bht sare object banane hon to hum usey 1 hi variable k andar store
// karwa skte hain iske lye ye syntax hai => let arry = [{1st obj},{2nd obj},{3rd obj}....]
// 3- jab array wale object ko print karana ho to ye syntax hai =>
//  console.log (arr[ind1].key, arr[ind2].key) etc....
// 11) Nested Array
// hum 1 array k andar hi dusra array bh bana skte hain or isse zyda bh isi ko nested array kehte
// hain, isko hum is tarah print karate hain => arryname = [ 1st [2nd] [3rd] ]
// run krne ka ye syntax hai => console.log (arryname[2][3][4])
// Today topics :
// 1- Array
// 2- TypeScript build in function for an Array
// 3- Object
// 4- Nested Array
//         1- Array
// Defination
// kisi 1 hi type ki multiple values ko 1 sath jama karne k lye use hota hai, ye [] array ka sign hai,
// ye coma , seprate hota hai, iski at the time 1 value use karne k lye index use karte hain,
// 1 variable k andar multiple values store karne k lye array ka use hota hai...
// for create an array and print array using index
// let fruits : string [] = ["apple","orange","watermelon"]
// console.log (fruits) // for print complete array
// console.log (fruits[0]) // index 0
// console.log (fruits[1]) // index 1
// console.log (fruits[2]) // index 2
// for updation array
// fruits[2] = "mango" // jab bh kisi array ko update karna ho to 1 method ye bh hai jo bataya gya hai, is me humne variable or jis index ko update krna ho usey declare karte hain or = k sign se new element ko usme store kar dete hai...
// console.log (fruits) // updated array
//         2- TypeScript build in function for an Array
// 1) Pop // for remove last element of the array
// console.log (fruits) // old array
// fruits.pop() using pop method
// console.log (fruits) // result
// 2) Push // for add new element in end of the array
// console.log (fruits) // old array
// fruits.push ("mango") // using push method
// console.log (fruits) // result
// 3) Shift // for remove first element of the array
// console.log (fruits) // old array
// fruits.shift() // using shift method
// console.log (fruits) result
// 4) Unshift // for add new element start of the array
// console.log (fruits) // old array
// fruits.unshift("strawberrry") // using unshift method
// console.log (fruits) // result
// 5) Slice // for take specific part of the array
// Syntax =>
// 1- First starting points (inclusive)
// 2- Second ending points (exclusive)
// let fruits: string[] = ["apple", "orange", "watermelon", "berry", "cherry"];
// let ans = fruits.slice (2,4) // slice method original array me koi change nh karta wo sirf array k bech me se kuch part ya portion la kar deta hai jisme 2 argument hote hain, ek starting point jo inclusive hota hai 2nd ending point but ye inclusive nh hota exclusive hota hai....
// console.log (ans)
// 6) Splice //
// Syntax =>
// 1- First arg starting point
// 2- Second arg remove elem
// 3- Third arg new element
// fruits.splice (1, 2 , "moli","alu") // index 1 se start karega or 2 element ko dlt kar dega or 2 new element add kar dega
// fruits.splice (1, 2) // index 1 se start karega or 2 element ko dlt kar dega
// console.log (fruits)
// fruits.splice (-1,2, "onion")
// console.log (fruits)
// let fruits: string[] = ["apple", "orange", "watermelon", "berry", "cherry"];
// fruits.splice(1,2, "mango","strawberry")
// console.log (fruits)
// fruits.splice (-5, 2,"potato")
// console.log (fruits)
// 7) Concat
// let vegetables = ["potato","onion","tomatto"]
// let ans = fruits.concat (vegetables)
// console.log (ans)
// family_names.concat (fruits)
// fruits
// console.log (fruits)
// let fruits = ["apple","orange","watermelon",["alu","tomato","onion"]] // nested array
// console.log (fruits[3][0])
//          3 - Object
// Defination:
// ye structure data define karne k lye use hota hai jab k array kisi 1 hi type ki value ko 1 hi
// variable k andar declare karne k lye use hota hai,
// jab bht sare object banane hon to hum usey 1 hi variable k andar store
// karwa skte hain iske lye ye syntax hai => let arry = [{1st obj},{2nd obj},{3rd obj}....]
// kab array wale object ko exicute karna ho to ye syntax hai =>
//  console.log (arr[ind1].key, arr[ind2].key) etc....
// Practice :
// let obj = {
//     fruitName : "apple",
//     price : 200,
//     session : "summer"
// }
// console.log (obj) // full object print
// console.log (obj.fruitName) // only key value print
// console.log (obj.price)
// console.log (obj.session)
// let students = [
//     {
//         name : "sharoz",
//         rollNumber : 1234,
//         timing : "7 to 10"
//     },
//     {
//         name : "junaid",
//         rollNumber : 7890,
//         timing : "7 to 10"
//     }
// ];
// console.log (`My name is : ${students[0].name.charAt(0).toUpperCase () + students[0].name.slice(1)}, my roll number is : ${students[0].rollNumber}, my class time is : ${students [0].timing} \nMy friend name is : ${students[1].name.charAt(0).toUpperCase() + students[1].name.slice(1)}`)
//          4- Nested Arry
// let arry = ["Fruits","apple","mango","banana",["Vegetables","potato","tomato","onion"],["Colors","green","blue","black"]]
// arry = ["Fruits","apple","mango","banana",["Vegetables","potato","tomato","onion"],["Colors","green","blue","black"]]
// console.log (arry[0],arry[2])
// console.log (arry[0][2])
// console.log (arry[5][2][2])
