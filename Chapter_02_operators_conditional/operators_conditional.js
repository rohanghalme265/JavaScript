// Airthmatic Operatorss:--(+, -, *, /)
a = 20;
b = 10;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a - b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);     //This Operators is Modulus
// console.log("a**b =", a ** b);     //This Operators is Exponentiation

// Unary Operators:--1).Increment(++). 2).Decrement
// console.log("a++ =", a++);  // In this case first it use past value and then 
// console.log("a =", a);      // later he uses current change value

// console.log("++a =", ++a); 

// Also for the --a
// console.log("a-- =", a--);
// console.log("a =", a);
// console.log("--a =", --a);

// ##Assignment Operators:--(=,+=,-=,*=,%=,**=)

// a+=4;
// console.log("a =", a);

// a-=4;
// console.log("a =", a);

// a*=4;
// console.log("a =",a);

// a%=4;
// console.log("a =", a);

// a**=4;
// console.log("a =", a);


//## Comparision Operator:--(Equal to(==), Not Equal to(!=), Equal to & type(===), Not Equal to & type(!==)) (>,>=,<,<=)

c = 10;
d = 5;

// console.log("c == d", c == d);  //false
// console.log("c != d", c != d);  //true

e = 15;
f = "20";

// console.log("e === f", e === f);   //false
// console.log("e !== f", e !== f);      //true


// ## Logical Operator:-- (&&,||,!)

let a1 = 6;
let a2 = 5;

// console.log("Cond1 && Cond2 = ",a1 < a2 && a1 == 6);      //false    (if both condition are true then the o/p will be true)
// console.log("Cond1 || Cond2 = ",a1 == 5 || a2 < a1);      //true     (In this if one of both condition is true then o/p will be true)
// console.log(!(a1<a2));                                    //true     (In this case if condition is true or false then because of this operator we will get opposite this)         



// ## Conditional Statements:--

// let age = 22;

// if (age >= 18)  {
//     console.log("You can Vote");
// }

// if (age < 18) {
//     console.log("You Cannot vote");
// }


// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "White";
// }

// console.log(color); 

// let age = 16;

// if (age >= 18) {
//     console.log("You can Vote");
// } else {
//     console.log("You Cannot Vote");
// }

// For Odd or Even
// let num = 21;


// if (num%2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num,"is Odd");
// }

//for else if statement
// let age1 = 90;

// if (age1 < 18) {
//     console.log("You are a junior");
// } else if (age1 >= 50) {
//     console.log("You are a Senior");
// } else {
//     console.log("You are a Middle man");
// }


// Ternary Operators:--

// let age2 = 25;

// let result = age >= 18 ? "Adult" : "Not Adult";

// console.log(result);



/// Practice questions

// Q1).get user input a number using prompt("Enter a number:").check if the number is a multiple of 5 or not.

// alert("Hello Rohan")

// let name = prompt("Hello!");
// console.log(name);

let num = prompt("Enter a Number: ");

if (num % 5 == 0 ) {
    console.log(num, "is Multiple of 5");
} else {
    console.log(num, "is Not multiple of 5")
}





























