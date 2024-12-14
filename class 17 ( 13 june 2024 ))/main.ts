// console.log("hello world");

// Synchronous Programming 

// 1) Call Stack
// - Jahan synchronous task stright forward chala jae 

// 2) Callback Queue 
// - 

// Asynchronous Programming 


// Callback Functions: Ye function mai ek argument ban kar jata hai 
// jab hum callback function pass krte hein tw round brakets nahi laga te
// function accepting anohter function as argument

// settimeout: We provide time for the code to execute.
// 1000 ms = 1 second
// console.log("1");
// console.log("2");
// setTimeout(() => {
//     console.log("after 3 seconds");
    
// }, 3000);
// console.log("4");

// sychronous task are performed first then asynchronous task are performed

// let product = [
//     {name: " Bread " , price: " 120 "},
//     {name: " Dhanya " , price: " 20 "},
//     {name: " Dahi " , price: " 50 " },
// ];

// function One (cb: () => void  ) {
//     console.log("Fetching...");
//     setTimeout(() =>  {
//         cb ()let product = [
//     {name: " Bread " , price: " 120 "},
//     {name: " Dhanya " , price: " 20 "},
//     {name: " Dahi " , price: " 50 " },
// ];

// function One (cb: () => void  ) {
//     console.log("Fetching...");
//     setTimeout(() =>  {
//         cb ()
//     }, 2500)   
// }
// //callback
// function Two() {
//     console.log(product);
// }
// One(Two)
//     }, 2500)   
// }
// //callback
// function Two() {
//     console.log(product);
// }
// One(Two)

// Promises: to aviod callback hell we use promise 
// resolve and reject both are functions
// Promise resolve func -> .then -> response 
// resolve jab hamara promise sahi chala tw wo .then ko dhounde ga
// .then phir us chezz ko pass karega jo promise k andar ho

// const Myfunc = () => {
//     return new Promise((resolve , reject) => {
//     // resolve("Data fetch");
//     reject ("error")
//     })
// }
// Myfunc()
// .then((res) => {
//     console.log(res);
// }) 
// .catch((err) => {
//     console.log("Failed, err");
// })
// promise reject func -> .catch ->

let isVictory = true
const Criket = () => {
    return new Promise ((resolve , reject) => {
    
        if(isVictory) {
            setTimeout(() => {  
            resolve("we won")
            }, 1500);
        }
        else{
            console.log("match in progess");
            setTimeout(() => {
            reject("we lost")
            }, 1500);
        }
    })
}
Criket()
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err);
})

//we can also do chaining in promises
// passing the pillow concept

async function getData(){
    let response = await Criket()
    console.log(response);
} 
getData()

//try and catch in async




























