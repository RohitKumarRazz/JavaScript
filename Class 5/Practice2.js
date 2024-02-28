let num = [1, 2, 3, 4, 5];

num.forEach((num) => {
    console.log(num*num);
});

let n = [1, 2, 3, 4, 5];
//another method of callback
let calSqr=(num) => {
    console.log(num*num);
};
n.forEach(calSqr);