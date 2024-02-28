// let promise = new Promise((resolve, reject) => {
//     console.log("Im a promises");
//     //resolve("sucess");
//     reject("error ocur");
// });


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Sucess");
//             if(getNextData){
//                 getNextData();
//             }
//         },  5000);
//     })
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I'm a promises");
//         //resolve("sucess");
//         reject("Error");
        
//     });
// };
// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fulfilled")
// });
// promise.catch(() => {
//     console.log("Rejectd");
// });

//***********promise chain */



function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Sucess");
            if(getNextData){
                getNextData();
            }
        },  5000);
    })
}
console.log("Getting data 1...........");
getData(1).then((res) =>{
    console.log("Getting data 2...........")
    return getData(2);
}).then((res) =>{
    console.log(res);
});