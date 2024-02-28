let btn1 = document.querySelector("#btn1");
let curr = "light";
let body = document.querySelector("body");


btn1.addEventListener("click", () => {
    //console.log("you are trying to change mode");
    if(curr=="light"){
        curr="dark";
        //document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curr="light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");




    }
    console.log(curr);
});