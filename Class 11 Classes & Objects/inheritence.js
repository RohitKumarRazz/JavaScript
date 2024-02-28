// class parent {
//     hello(){
//         console.log("Hello");
//     }
// }
// class child extends parent {
    
// }
// let obj = new child();


// class Person {
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class Engineer extends Person {
//     work() {
//         console.log("Solve problems , build somthing");
//     }
// }

// let ram = new Engineer();


//Super KeyWord
class Person {
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("Eat");
    }
}

class Engineer extends Person {
    constructor(branch){
        super(); //to invoke super class constructor
        this.branch = branch;
    }
    work() {
        super.eat();
        console.log("Solve problems , build somthing");
    }
}

let eng = new Engineer("CSE");