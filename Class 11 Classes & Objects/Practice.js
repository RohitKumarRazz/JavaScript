//1st Question
let DATA = ("Secret Information");
class User {
    constructor(name, email){
        this.name=name;
        this.email = email;
    }

    viewData() {
        console.log("Data = ", DATA);
    }
}



let stu1 = new User("Rohit", "rohitthestar2003@gmail.com");
let stu2 = new User("Aarohi", "aarohirohit@gamil.com");

let teacher = new User("chandan", "chandan@gamil.com");
//2nd question
class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new value";
    }
}

let admin1 = new Admin("Ram", "ram@gmail.com");