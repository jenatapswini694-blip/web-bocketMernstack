// asynchronous program ->

// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello")
// } , 5000 ) // 5000ms = 5ms
// console.log("three")
// console.log("four")

//-----------------------

//callback function example ->

// function sum (a,b) { // normal function
//     console.log(a+b)
// }

// // a & b are the parameter
// // here sum is a normal function 

// function calc(a,b, sumCallback) { // main/ callback function
//     sumCallback(a,b)
// }

// // sumCallback -> a function passed as an arguement. inside calc it 
// // call the callback function

// calc(1,3,sum) // function psssed as an argument - {sum} 

//---------------------

// function great (name) {
//     console.log("hello" + name )
// }

// //great() is a normal function
// // takes name & print the gritting

// function user (name,callback){
//     callback(name)
// }

// user("Tapu", great) // callback -> great()

//---------------------------

// function getData(dataId, getNextdata){
//     setTimeout(() => {
//         console.log("data",dataId)
//         if (getNextdata){
//             getNextdata()
//         }
//     }, 4000); // 5000ms = 4s
// }

// // callback hell problem =>
//     console.log("getting data-1........")
//     getData (1, () => {
//     console.log("getting data-2.......")
//     getdata (2,()=>{
//         console.log("getting data-3........")
//     getdata (3,()=>{  
//         console.log("getting data-4......")
//     getdata(4,()=> {
//         console.log("getting data-5......")
//         getData(5)
//     })
// })
//     })
// })


//promise example----------------------------------------------------->

// let promise = new Promise((resolve,reject)=> {
//     setTimeout(()=>{
//         console.log("i am a promise")
//         // resolve("success")
//         reject("some network issues occured")
//     },8000) //6000ms = 6s
// })

//SOLUTION OF callBack hell ............->

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//             //reject("error")
//         },5000)
//     })
// }

// getData(1)
// .then(()=>{
//     return getData(2)
//     .then(()=>{
//         return getData(3)
//         .then(()=>{
//             return getData(4)
//             .then(()=>{
//                 return getData(5)
//             })
//         })
//     })
// })

//example of .then & .catch methods...............->

// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise")
//         resolve("sucess")
//         // reject("error")
//     })
// }

// let Promise = getPromise();

// Promise.then((result)=>{
//     console.log("promise fulfilled:",result)
// })

// Promise.catch((err)=>{
//     console.log("promise rejected",err)
// })

//async & await.....................>

//function API(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("API call completed")
//             resolve("API sucess")
//         },5000)
//     })
// }


// async function getWhether(){
//     await API
// }

//solution pf callback hell using async & await................

// function getData (dataId) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             console.log("Data",dataId)
//             resolve("sucess")
//         },5000) 
//     })
// }


// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// }