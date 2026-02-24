// Function in JavaScript:-- What is function
// performs specific task
// Runs only when it is called
// Helps avoid repeating code

// function myfunction() {
//     console.log("(Welcome to Sinhgad College :)");
//     console.log("(we are lerning JS :)");
// }

// myfunction(); 

// function myFunction(msg) {  //parameter -> INPUT
//     console.log(msg); 
// }
// myFunction("My name is Rohan Ghalme");

// // for sum numbers

// function sum(x,y) {
//     console.log(x + y);
// }
// sum(23,45);


// function sum1(a,b) {
//     s = a + b;
//     return s;
// }
// let sum2 = sum1(1234,2345);
// console.log(sum2);

//#Arrow Function:i).it makes code shorter. ii).It makes code cleaner. iii).It is easy to read

// const arrowsum = (a,b) => {
//     console.log(a + b);
// }
// arrowsum(12,21);       

// //
// const multiarrow = (x,y) => {
//     console.log(x * y);
// }
// multiarrow(3,4);

// //
// const multi = (c, d) => {
//     return c * d;
// }

// let result = multi(12,23);
// console.log(result);

// //
// const std = () => {
//     console.log("Hello");
// }
// std();

//////Practice Question

//Q1).Create function using the "function" keyword that takes a stringas an argument & return the numbers of vowels in the string

// function countvowels(str) {
//     let count = 0;
//     for(const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") { 
//             count++;          
//         }
//     }
//     console.log(count);
// }

// countvowels("Sinhgad College of Engineering Vadgaon");

//Q2). Create an arrow function to perform same task as first function

// const countVow = (str) => {
//     let count = 0;
//     for(let ch of str) {
//         if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVow("Rohan Madhukar Ghalme");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////##foreach() loop:--the foreach() method  method is used to loop through each element of an array and perform an operation on every element

// arr.forEach(callBackFunction)


// let arr = [1,2,3,4,5];

// arr.forEach(function printval(val) {
//     console.log(val);

// });

// let arr1 = ["Pune", "Mumbai", "Delhi","Ahilyanagar"];

// arr1.forEach(function printop(val) {
//     console.log(val);
// });

// let city = ["Pune", "Mumbai", "Delhi","Ahilyanagar"];

// city.forEach((val,idx,city) => {
//     console.log(val.toUpperCase(),idx,city);

// });  

// With arrow function 

// let arr2 = [10,20,30,40,50];

// arr2.forEach((val) => {                 // (=>) This is an arrow operator
//     console.log(val);
// });

// const square = num => num*num;
// console.log(square(6));

//////////////////////////////////////////

//// Practice questions.

//Q1).For given array of numbers, print the square of each value using the forEach loop

// let std = [12,34,56,78,90];

// std.forEach((val) => {
//     console.log(val*val);   // we can write also--> (val**2)
// });


/// Some arrays Methods
// i).map() = creates a new array with the result of some operation.The value its callback returns are used to form new array

// let std1 = [88, 67, 84, 46, 56];

// let newstd = std1.map((val) => {
//     return val + val;
// });


// console.log(newstd);

// ii).filter():- creates a new array of element that give true for a condition/filter 


// let m = [12,23,34,45,56,67,78];

// let m1 = m.filter((val) => {
//     return val % 2 === 0 ;
// });
// console.log(m1);

// iii).reduce():--> Performs some operations and reduce the array to a single value. It returns that single value

// let arr = [19,12,8,11,14,106];

// const arr1 = arr.reduce((res, cur) => {
//     return res + cur;
// });

// console.log(arr1);

// To find the largest number among the array

// let st = [1200,543,764,7654,7644];

// const st1 = st.reduce((res, cur) => {
//     return res > cur ? res : cur;
// });

// console.log(st1);

// Practice questions

// Q1). we are given array of marks of students.Filter out of the marks of student that scored 90+

let nums = [100, 36, 78, 89, 54, 99, 98, 91, 69];

const nums1 = nums.filter((val) => {
    return 90 < val;
});

console.log(nums1);

// Q2). Take a number n as input from user. Create an array of numbers from 1 to n
// (Use the reduce the method to calculate sum of all numbers from 1 to n)
// (Use the reduce the method to calculate product of all numbers from 1 to n)

let n = prompt("Enter a number: ");

let store = [];

for (let i = 1; i <= n; i++) {
    store[i - 1] = i;
}

console.log(store);

let n1 = store.reduce((res, cur) => {
    return res + cur;
});

console.log(n1);
    
// for factorial

let n2 = store.reduce((res,cur) => {
    return res * cur;
});

console.log(n2);














































































