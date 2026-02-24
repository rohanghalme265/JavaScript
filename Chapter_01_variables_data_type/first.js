// fullname ="Tony Stark";
// age = 24;
// price = 99.99
// x = null;
// y = undefined;
// console.log(x)
// console.log(y)
// console.log(fullname)

// console.log("Rohan");
// console.log("Sinhgad Collage of Engineering")
// console.log("I love Pune ")

// // For boolean
// let isFollow = false;
// console.log(isFollow);
 


// // # let, const and var
// let name = "Tony stark";
// var age = 22;
// age = 20;
// let totalprice = 100000;
// console.log(name);
// console.log(age);
// console.log(totalprice);

// //CONST

// const PI = 3.14;
// console.log(PI); 



// let a;
// a = 10
// console.log(a);

// {
//     let a=11;
//     console.log(a);
// }

// {
//     let a = 14;
//     console.log(a); 
// }

// Data types in Javascript
// 1)Number. 2)String. 3)Boolean. 4)Undefined.5)Null. 6)Biglnt. 7)Symbol

//This are Primitive Data types
//1)Number
let age = 24;
let price = 100.5;
 
//2)String
let fullname = "Tony Stark";
let fullName = "Rohan Ghalme"

//3)Boolean
isFollow = true;

//4)Undefined
let x;
let a;

//5)Null
let y = null;
let b = null;

//6)biglnt
let z = BigInt("1234")
let c = BigInt("858439")

//7)Symbol
let t = Symbol("Hello!")

// # Non-Premitive Data types 
// It stored multiple values and this are mutable
// it is a collection of various data type

const student = {
    fullName :"Rohan Ghalme",
    age : 22,
    CGPA : 8.5,
    isPass : true
};

// how to acces a particular vriable

// student ["fullanme"]   --- for particular variable access

//also we can write 
console.log(student["age"]);

// For update 
student["age"] = student["age"] + 1 ;
console.log(student["age"]);

student["fullName"] = "Sumit Londhe";                      // we can change const in constant objects keys but we cannot change in constant variable
console.log(student["fullName"]);



// #** PRACTICE QUESTIONS

// Q1).Create a const object called "product" to store information shown i n fig
const product = {
    title : "Ball pen",
    rating : 4,
    offer : 5,
    price : 270
};

console.log(product);

// Q2).Create a const object called "profile" to store information shown in the picture.

const profile = {
    username : "@rohan_ghalme_25",
    isFollow : true,
    followers : 577,
    following : 560
}

console.log(profile);










































