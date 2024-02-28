
//Print all even number 0 to 100
let n = 100;
for(let i=0; i<=n; i++){
    if(i%2===0){
        console.log(i);
    }
}

//game random game number
let gameNumber = 25;
let user = prompt("Enter your Number:");

while(user != gameNumber){
    user = prompt("You enter incorrect Number , Please try again:");

}
console.log("hence you are greate")