// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//              char === "e" || 
//              char === "i" || 
//              char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }

//     }
//     console.log(count)
// }
// countVowels("apple")

//Type A function ->

// function myFunction(){
//     console.log("today is a good day")
//     console.log("we learn js function")
// }

// myFunction()

// //tyoe B function (parameterize function->

// function myFunction(a,b){ // a&b are the parameter
//     console.log(a+b)
// }

// myFunction(3000,5000)
// myFunction(400,600)
// myFunction(6,8)

//for each loop ->

// let arr =[1,2,3,4,5,6,7,8,9,]
// arr.forEach(function printVal(val){ // normal function
//     console.log(val)
// })

// arr.forEach((val) => { //arow function
//     console.log(val)
// })

// let arr1 = ['goa','pune','thane','mumbai']
// arr1.forEach((val)=>{
//     console.log(val)
// })

//example of map function ->

// let nums = [4,5,6,7,8,9,3,2]
// let newArr = nums.map((val)=> {
//     return val*val
// })
// console.log(nums)
// console.log(newArr)

//example of a filter method =>

    //q.print only even no. in the given array ->

//     let arr = [2,3,4,5,6,7,8,9]
//     let evenArr = arr.filter((val) => {
//         return val % 2 === 0;
//     })
// console.log(arr)
// console.log(evenArr)

//Q. we are given array of marks of stdents . filter out of the 
//marks of the student that scored more than 90.

let mark =[89,86,34,91,32,64,92,45] 

let marks = [89,86,34,91,32,64,92,45]
let highMarks = marks.filter((val) => {
    return val >= 90;
});
console.log(highMarks);