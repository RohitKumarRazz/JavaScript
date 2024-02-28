// print 1 to 5
for(let i=0; i<=5; i++){
    console.log("Rohit Kumar")
}

//print sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum+i;
}
console.log(sum);

//Infinite loops
//Never do this any time because it is take more memory


//While loops
let i=1;
while(i<5){
    console.log("Rohit Kumar");
    i++;
}

//Do while Loops

do {
    console.log("rohit ");
    i++;
}while(i<3);

//for-of loops

let str = "Rohit kumar";
for(let i of str){
    console.log(i);
    
}

//for-in loops
let student = {
    name : "Rahul",
    age: 20,
    cgpa:7.5,
    isPass:true
};
for(let i in student){
    console.log(i, student[i]);
}