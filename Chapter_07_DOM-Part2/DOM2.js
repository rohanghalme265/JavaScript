//Attributes:--
//i).getAttribute(attr)--//to get attribute value

// let para = document.querySelector("p");
// console.log(para);
// console.log(para.getAttribute("class"));

// let divs = document.querySelector("div");
// console.log(divs);
// console.log(divs.getAttribute("Id"));

// let nav = document.querySelector("div");
// console.log(nav);
// console.log(nav.getAttribute("name"));

//ii).setAttributes(attr,value)

    // let para1 = document.querySelector("p");
    // console.log(para1);
    // console.log(para1.setAttribute("class","parameter"));


////Insert Elements

//i). node.append(el):--- add at the end of node (inside)

////suppose we want to create a button 

// let newbut = document.createElement("button");
// newbut.innerText = "Click!";
// console.log(newbut);

// let divs = document.querySelector("div");  
// divs.append(newbut);

// //suppose we want this button after node-ul  we have to just write node which we want to 
// let nod = document.querySelector("ul");     
// nod.append(newbut);


//ii). node.prepend(el):-- Add at the Start of the node(inside)

// let newbut1 = document.createElement("button");
// newbut1.innerText = "Click!";
// console.log(newbut1);

// let uls = document.querySelector("ul");
// uls.prepend(newbut1);

//iii). node.before(el):-- Add before the node(outside)

// let newbut1 = document.createElement("button");
// newbut1.innerText = "Click!";
// console.log(newbut1);

// let div1 = document.querySelector("div");
// div1.before(newbut1);

//iv). node.after(el):-- adds after the node(outside)

// let newbut2 = document.createElement("button");
// newbut2.innerText = "Click!";
// console.log(newbut2);

// let ul1 = document.querySelector("ul");
// ul1.before(newbut2);

// Delete Element
 // i). node.remove():--It removes the node

// let div2 = document.querySelector("p");
// div2.remove()

//If we want to remove this is div then

// let div3 = document.querySelector("#box");
// div3.childNodes[0].remove();













































































































