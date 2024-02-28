// async function hello() {
//     console.log("hello");
// }


// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data ");
//             resolve(200);
//         },  5000);
//     })
// }

// async function getWeatherData(){
//     await api();//1st call
//     await api(); //2nd call
// }


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

async function getAllData(){
    console.log("Getting data 1...........");
    await getData(1);
    console.log("Getting data 2...........");
    await getData(2);
    console.log("Getting data 3...........");
    await getData(3);
}