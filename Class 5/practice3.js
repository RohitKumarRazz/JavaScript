//1st question
let marks = [97, 87, 76, 87, 94, 100];
let value = marks.filter((val) => {
    return val > 90;
});
console.log(value);

//2nd question
let n = prompt("enter a number: ");
let arr =[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);

//sum 
let sum=arr.reduce((res, curr) => {
    return res + curr;
});
console.log(sum);

//factorial
let factorial=arr.reduce((res, curr) => {
    return res*curr;
});
console.log(`the factorial of Number is ${factorial}`);

