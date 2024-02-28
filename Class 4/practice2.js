let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//Remove 1st Company
let change = companies.shift();
//companies.splice(0, 1,);
console.log(companies);

//remove Uber & add ola on its place
companies.splice(2,1, "Ola")
console.log(companies);

//Add Amazon at the End
companies.push("Amazon");
console.log(companies);