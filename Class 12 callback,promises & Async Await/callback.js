// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// } 

// calculator(1,3, sum);

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 5000);


//*********Nesting */

// let age = 19;
// if(age>=18){
//     if(age>= 60){
//         console.log("senior");
//     }else{
//         console.log("middle");
//     }
    
// }else{
//     console.log("child");
// }



// *****CallBack Helllllllll ********

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },  5000);
}
getData(1, () => {
    console.log("Getting data 2...........")
    getData(2, () => {
    console.log("Getting data 3...........")
        getData(3);
    });
});