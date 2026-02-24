//// DOM(Document Object Model): When a webpage loads the browser converts HTML into objects
                             //Javascript uses the DOM to read and change the webpage

// Using DOM ,JavaScript can:-- 1).change text 2).Change Colour 3).Add/Remove elements 4).respond to buttons clicks

// When web page is loaded, the browser creates a Document Object Model(DOM) of the page


// console.log("hello!");
// alert("Sinhgad college");
                            
//// Window object:--
                    // The window object represents an open window in a browser.
                    // It is browser's object (not Javascript's) and is automatically created by browser
                    // It is global object with lots of properties and methods.

// console.log("hello!");
// window.console.log("Hello!");    // We can write this also 


// console.dir(document.body);


//// DOOM Manipulation:--

/// 1).Selecting with id 

// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);
// console.dir(heading1);

/// 2).Slecting with class

let headings = document.getElementsByClassName("Heading");
console.log(headings);
console.dir(headings);

// let buttons = document.getElementsByClassName("myId");
// console.log(buttons);
// console.dir(buttons); 

/// 3).Selecting with Tags

// let para = document.getElementsByTagName("p");

// console.log(para);
// console.dir(para);

/// 4).Query Selector
// let select = document.querySelector("p");   // querySelector means it select only one elements means first element

// console.log(selal);
// console.dir(selal);

// let selectall = document.querySelectorAll("p");   // (querySelectorAll) when we want to select all elements

// console.log(selectall);
// console.dir(selectall);

/// For class

// let select = document.querySelector(".Heading");
// console.dir(select);

// let selectall = document.querySelectorAll(".Heading");
// console.dir(selectall);

/// for button

// let select1 = document.querySelector("#myId");
// console.dir(select1);

//// Properties of DOM:--
                        // i).tagName : returns tag for elements nodes
                        // ii).innerText : returns the text content of the element and all its children
                        // iii).innerHTML : returns the plain text or HTML contents in the element
                        // iv).textContent : returns textual content even for hidden elements 


// i)tagName:
// let select1 = document.querySelector("#myId");
// console.dir(select1);
// console.log(select1.tagName);

// //
// let select = document.querySelector(".Heading");
// console.dir(select);
// console.log(select.tagName);














































                        





















































































