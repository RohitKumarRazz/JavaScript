//Push: add to end
 let food = ["apple", "patato", "tamato", "lichi"];
 food.push("chips", "burger", "paneer");
 console.log(food);

//pop: delete from end and return

let deletedFood = food.pop();
console.log(food);
console.log(deletedFood);


//toString: converts aray to string

console.log(food);
console.log(food.toString);

//concat() : to join multiple aray & returns result
let marvel = ["thor", "spiderman", "ironman",];
let dc = ["superman", "batman"];
let heros = marvel.concat(dc);
console.log(heros);


//unshift(): add to start
marvel.unshift("Rohit");
console.log(marvel);


//shift(): delete from start & return
let val = marvel.shift();
console.log("deketed", val);

//slice() : returns a piece of the array
let rocks = ["apple", "patato", "tamato", "lichi","thor", "spiderman", "ironman"];
console.log(rocks);
console.log(rocks.slice(1,4));

//splice(): change the original array (add, remove, replace)

let arr =[1, 2, 3, 4, 5, 6, 7, 8];
//arr.splice(2, 2, 101, 102);
console.log(arr);
//add element
//arr.splice(2,0,101);
console.log(arr);

//delete element
//arr.splice(3, 1);
console.log(arr);

//replace element
arr.splice(3,1,101);
console.log(arr);   

