//1st question
// let heading = document.querySelector("h2");
// console.dir(heading.innerText);
// heading.innerText = heading.innerText+" from bihar";


//2nd question
let divs = document.querySelectorAll(".box");
console.log(divs[0]);
let idx=1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";