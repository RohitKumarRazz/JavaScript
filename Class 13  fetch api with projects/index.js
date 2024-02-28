const URL = "https://cat-fact.herokuapp.com/facts";

const getPara = document.querySelector("#fact");
const getBtn = document.querySelector("#btn");

//let promise = fetch(URL);

//console.log(promise);

const getFacts = async () => {
    console.log("Getting data............");
    let response = await fetch(URL);
    console.log(response);  //JSON FORMAT
    let data = await response.json();
    //console.log(data);
    getPara.innerText= data[2].text;
}


//*********UsING PRomisess chain */
// function getFacts(){
//     fetch(URL).then((Response) =>{
//         return Response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         getPara.innerText= data[1].text;
//     });
// }


getBtn.addEventListener("click", getFacts)