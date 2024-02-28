// const student = {
//     Name:"ROhit",
//     marks:94,
//     printMarks:function() {
//         console.log("marks", this.marks);//student.marks
//     }
// };

const employe = {
    calcTax() {   // function
        console.log("tax rate is 10%");
    },
    calcTax2 : function() {
        console.log("tax rate is 10%");
    },
};
const karan = {
    salary: 5000,
};
const karan1 = {
    salary: 5000,
};
const karan2 = {
    salary: 5000,
};
const karan3 = {
    salary: 5000,
    calTax(){
        console.log("tax is 20%");
    }
};
karan.__proto__ = employe;
karan1.__proto__ = employe;
karan2.__proto__ = employe;
karan3.__proto__ = employe;