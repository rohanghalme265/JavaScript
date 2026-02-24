//this code is run in index1.html file
// ii)innerText: It returns the text content of the element and all its children 
               //It returns only visible text not hidden text
let mydiv = document.querySelector("div");
// console.log(mydiv);
console.dir(mydiv);

console.log(mydiv.innerText);

// iii).innerHTML: It returns the plain text or HTML contents  in the elements
                // It returns also innerHTML inside the elements.
console.log(mydiv.innerHTML);


// iv).textContent: It returns textual content even for hidden elements

let heading = document.querySelector("h1");
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);


















































































































