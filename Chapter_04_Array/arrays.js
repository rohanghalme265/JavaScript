//// ##Arrays:-- An array is a special variable that can store multiple values in a single variable.
               // Instead of creating many variables we store all values in one array.
               // Arrays are Mutable in javascript.

// let marks = [50,60,70,77,45,79];
// console.log(marks);
// console.log(typeof marks);  //object (array is not type of anything, array is a object type)

// /// Arrays Indices:--

// console.log(marks[3]);
// console.log(marks[100]);   // If we want index that doesn't exist yhen we get dndefined

// marks[4] = 100;
// console.log(marks);


// let heroes = ["Ironman","Hulk","Krish","Thanos","shaktiman","spiderman","Thor"];
// for(let idx = 0; idx <= heroes.length; idx++) {
//     console.log(heroes[idx]);
 

// for-of loop

// let cities = ["Pune","Delhi","Mumbai","Chennai","Kolkatta" ];

// for(let city of cities) {
//     console.log(city);
// }


// let cities1 = ["Pune","Delhi","Mumbai","Chennai","Kolkatta" ];

// for(let city1 of cities1) {
//     console.log(city1.toUpperCase());
// }


///////////////////////////////////////////////////////////////////////////////////

//Practice Questions

//Q1).For given array with marks of students ->[85,97,44,37,76,60] find the average marks of the entire class.

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for(let val of marks) {
//     sum +=val;
// }

// let avg = sum/marks.length;
// console.log(avg);

//Q2).For given array with prices of 5 items ->[250,645,300,900,50]. All items have an offer of 10% off on them.Change the array to store final price after applyinf offer 

// let items = [250,645,300,900,50];
// i = 0;

// for(let val of items) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// for(let i = 0; i < items.length; i++) {
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);


///////////////////////////////////////////////////////////////////////

////## Arrays Methods:--

//for push()

let friends = ["Rohan", "Sumit","Omkar","NIkhil","Siddhesh"];

// friends.push("Pratik");    // push() Method add elements at the end
// console.log(friends);

// for pop()

// friends.pop(friends);        // pop() Method remove elements from end
// console.log(friends);

// friends.pop();
// let deletedItem = friends.pop();
// console.log(friends);
// console.log("Deleted items",deletedItem);


/// for toString()

// console.log(friends);
// console.log(friends.toString());   // toString() Method converts array into string

//for concat()

// let friends1 = ["Ajay","Tukaram","Abhishek","Abhinav","Pranav"];
// let friends2 = ["Prathmesh","Pratik","Sudarshan","Aniket"]
// let fre = friends.concat(friends1,friends2);                       // concat() Method is used to join two or more arraya into one array
// console.log(fre);

// for unshift()

// let marvel = ["Ironman","Thor","Hulk","Doctar Strange"];            
// console.log(marvel.unshift("Black Panther"));                             // unshift() Method is used to add elements at start

// for shift()

// let deleted = marvel.shift();
// console.log("Deleted value", deleted);

//for slice()

// let marvel = ["Ironman","Thor","Hulk","Doctar Strange","DareDevil"];            

// console.log(marvel.slice(0,4));
// console.log((marvel.slice(0,4)).toString(marvel));
 
//for splice()

// let num = [1,2,3,4,5,6,7];
// let num1 = num.splice(2,3,100,1000,10000);
// console.log("removed elements", num1);
// console.log("updated array", num);

///////////////////////////////////////////////////////////////////////////////////

//Practice Question


//Q1).Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
       //i).Remove the first company from the array
       //ii).Remove uber & add Ola in its place
       //iii).Add Amazon at the end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// For i).

// console.log(companies.shift());
// console.log(companies);

// For ii).

// let ch = companies.splice(2,1,"Ola");
// console.log(ch);
// console.log(companies);

// For iii).

// let com = companies.push("Amazon");
// console.log(companies);




































