let bt1 = document.querySelector("#btn1");

// bt1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div")
// };

//event object
// bt1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

//Event Listener

bt1.addEventListener("click",(evt) =>{
    console.log("button 1 was clicked");
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);

});
bt1.addEventListener("click",() =>{
    console.log("button 1 was clicked handler2");

});


const handler3 = () => {
    console.log("button 1 was clicked handler4");
}
bt1.addEventListener("click", handler3);

// bt1.addEventListener("click",() =>{
//     console.log("button 1 was clicked handler3");
// });



bt1.addEventListener("click",() =>{
    console.log("button 1 was clicked handler4");
});

bt1.removeEventListener("click", handler3);
   