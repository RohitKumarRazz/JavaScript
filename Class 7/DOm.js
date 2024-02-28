//Attribute
//*********get******** */
// let div = document.querySelector("div");
// console.log(div);

// let id =div.getAttribute("id");
// console.log(id);

// let p = document.querySelector("p");
// console.log(div);

// let para =p.getAttribute("class");
// console.log(para);

//*************set********* */

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));

//*********STYLE******** */


// let div = document.querySelector("div");
// //div.style.visibility="hidden";
// div.style.backgroundColor="red";
// div.style.fontSize="26px";
// div.innerText="Hello!";


//New Button//add new things
let btn = document.createElement("Button");
btn.innerText="click me";
console.log(btn);

let div = document.querySelector("div");
//div.append(btn);
//div.prepend(btn);
//div.before(btn);
div.after(btn);

//new heading
let heading = document.createElement("h1");
heading.innerHTML = "<i>Hi, I am New!!!</i>";

document.querySelector("body").prepend(heading)

//delete

let para = document.querySelector("p");
para.remove();