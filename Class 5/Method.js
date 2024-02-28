//for ecah method

// function myfun(acb){
//     return abc;
// }
// function abc(){
//     console.log("hello");
// }

//let arr = [1, 2, 3, 4, 5];

let arr = ["delhi", "pune", "bihar"];
arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val) => {
    console.log(val.toUpperCase());
} );

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
} );


//// Other method of Array Method

//Map method : similar to for each
let num = [1, 2, 3, 4, 5];
num.map((val) => {
    console.log(val);
});

let newArr =num.map((val) => {
    return val*2;
});
console.log(newArr);


//filter Method 

let arra = [1, 2, 3, 4, 5];
let evenArr = arra.filter((val) => {
    return val%2===0;
});
console.log(evenArr);


//reduce method 

let output=arra.reduce((res, curr) => {
    return res + curr;
});
console.log(output);

let highest=arra.reduce((res, curr) => {
    return res > curr ? res: curr;
});
console.log(highest);
