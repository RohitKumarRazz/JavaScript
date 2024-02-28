//1st question
let newBtn = document.createElement("button");
newBtn.innerText="click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);


//2nd Question
let para = document.querySelector("p");
para.classList.add("newCLass");
para.classList.remove("newClass");
