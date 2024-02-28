//Synchronous 
console.log("one");
console.log("two");
console.log("three");

//Asynchronous
function hello(){
    console.log("hello");
}
setTimeout(hello, 5000);


console.log("one");
console.log("two");
console.log("three");
