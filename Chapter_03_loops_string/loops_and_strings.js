// Loops:-- lopps are used to run piece of code again and again.

// For loop:--

// Print 1 to 5
// for(let count=1; count<=5; count++) {
//     console.log("Rohan Ghalme")
// }

// Print sm of 1 to 5 

// sum = 0;
// for(let i=1; i<=10; i++) {
//     sum = sum + i;
// }
// console.log("Sum =", sum);

// infinite loop:-- we never use this type of loop in our work

// for(let i=1; i>=0;i++) {
//     console.log("i =", i);
// }

// While loop:--

// let i = 0;
// while(i<=5) {
//     console.log("i=", i);
//     i++;
// }

// do-while loop:-- 1).It executes the code at least once. 2).Then it checks the condition.

// let i = 20;
// do {  
//     console.log("Rohan Ghalme");        // In this case the i is greater than the condition it executes at least once before the condition.
//     i++;
// } while(i<=10);



// let a = 1;
// do {
//     console.log("a =", a);            // In this condition a is smaller than the condition that's why it fullfill the condition.
//     a++;
// } while (a<=10);


// for - of loop:-   the for - of loop is used to iterate over values of an iterable object like i).Arrays ii).string iii).Maps iv).Sets v).Node list

// let str = "Sinhgad Collage of Engineering";
// let size = 0;

// for(let i of str) {
//     console.log("i =", i);
//     size++;
// }

// console.log("string size =", size);

// let info = {
//     name : "Rohan Ghalme",
//     bike : "FZ - S V4",
//     colour : "Mat-Black",
//     price : 154000,
// };

// for(let key in info) {
//     console.log("key =", key, "Value =", info[key]);
// }



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Practice Questions

// //Q1).Print all even/odd numbers from 1 to 100.

// for(let i = 0; i<=100; i++) {
//     if(i % 2 === 0) {
//         console.log("i =", i);
//     }
// }

// for(let a = 1; a<=100; a++) {
//     if(a % 2 !== 0) {
//         console.log("a =", a);
//     }
// }

// //Q2).Create a game where start with any random game number. Ask the user to keep guessing the number until the user enters correct values.

// let gamenum = 26;
// let guessnum = prompt("Guess the right Number : ");

// while (guessnum != gamenum) {
//     guessnum = prompt("You entered the wrong number,guess again : ");
// }

// console.log("Congratulation, you entered the right number");

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // #String in javascript:-- A string in javascript is a sequence of character used to store & represent text data.

// let str = "Rohan Ghalme";  // How to create a string
// let str1 = "JAVASCRIPT";

// To get the length of string--- str.length

// let std = "Sinhgad College of Engineering Vadgaon"
// console.log(std[7]);


// //Template literals:-- template literals are a modern way to create string in javascript using backticks
//                        Template literals allow you to insert a variable inside the string

// let specialstring = `This is a template literals`;
// console.log(specialstring);

// let info = {
//     name : "Rohan",
//     bike : "FZ-S V4",
//     color : "Mat-Black",
    
// console.log("My name is", info.name, "i have", info.bike, "bike", "and color of my bike is", info.color);
// Innstead of this we can write variables in string using backticks

// console.log(`My name is ${info.name} i have ${info.bike} bike and color of my bike is ${info.color}`);
// using backticks we can write variables in string also

// console.log(`This is template literal ${1 + 2 + 3}`);

// escape character
// console.log("sinhgad\nCollege\nof\nEngineering\nVadgaon"); // \n(next line)
// console.log("Sinhgad\tCollege\tof\tEngineering\t\tVadgaon"); // \t(tab space)



// Methods in String

// let str2 = "Sinhgad College of Engineering";
// let std1 = str2.toUpperCase();
// console.log(std1);

// let name = "ROHAN MADHUKAR GHALME";
// let name1 = name.toLowerCase();
//  console.log(name1);


// let College = '       Sinhgad Collage     of   Engineering';
// let college = College.trim();                                    

// console.log(college);      // trim remove space from start and end

// Slicing

// let num = "0123456789"; 
// let num1 = num.slice(4,9);
// console.log(num1);

// let str = "Rohan Ghalme";
// let str1 = str.slice(3, 9);
// console.log(str1);

// let n = "Sinhgad College ";
// let n1 = "of Engineering, Vadgaon";
// let n2 = n.concat(n1);
// console.log(n2);

// let st = "SumitLondhe";
// console.log(st.replace("tLo", "Rohan"));

// let text2 = "I love Java";
// console.log(text2.replace("Java", "JavaScript"));

// let nav = "Rohan Ghalme";
// console.log(nav.charAt(7));



////////////////////////////////////////////////////////////////////////////////////////////////

///Practice Questions on String


// Q1).prompt the user to enter their full name. Generate  a username for them based on the input. Start with @, followed by their full name and ending with the fullname length

let nam = prompt("Enter your name without spaces :");
let nam1 = '@' + nam + nam.length;
console.log(nam1)





































