//for loop
//print "web-development"10 times using for loop.
//calculate the sum of 1 to 10 (using for loop)

// for (let i=0; i<10; i++) {
//     console.log("web development");
// }



// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

// console.log("Sum =", sum);

//working ->

// 0 = 0 + 1 = 1
// 1 = 1 + 2 = 3
// 2 = 3 + 3 = 6
// 3 = 6 + 4 = 10
// 6 = 6 + 5 = 15
// 10 = 10 + 5 = 15
// 15 = 15 + 6 = 21
// 21 = 21 + 7 = 28
// 28 = 28 + 8 = 36
// 36 = 36 + 9 = 45
// 45 = 45 + 10 = 55

// while loop -> 
//print "web-bocket" 5 times (using while loop)

// let i=1;
// while (i<=5){
//     console.log("web-bocket");
//     i++;
// }

// let i = 1 ;
// do {
//     console.log("development")
//     i++
// } while (i <= 5);

//note :- statement will print one time then it will check the condition.

// i = 1 , development
// i = 2 , development
// i = 3 , development
// i = 4 , development
// i = 5 , development 

// for-of loop ->

// let str = "web-developmet"
// for(let i of str ){
//     console.log(i)
// }

// let str = "web development"
// let arr = [67,90,43,65,32,20,39]
// let size = 0
// for (let i of arr){
//     console.log(i)
//     size++;
// }
// console.log("size of the given array is : " , size)

//for-in loop ->

let student = {
    name: "babu mishra",
    age: 24,
    CGPA: 8.9,
    ispass: true,
    carrier: "good"
}

for (let i in student){
    console.log("key = ", i, "value = ", student[i])
}