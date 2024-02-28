let str = "Jai shree Ram";
console.log(str[8]);

//Template literals
let sentence = `THis is a special string`;
console.log(sentence);

let obj = {
    price:10,
    item:"pen"
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("THe cost of ", obj.item, "  is ", obj.price);

//string Interpolation
let sentences = `THis is a special string ${1+2+3}`;
console.log(sentences);

console.log("ROhit\nKumar");
console.log(str.length);

//String Methods
//to upper case
let a = "Rohit Kumar";
a = a.toUpperCase();
console.log(a);
//lower case
a=a.toLowerCase();
console.log(a);
//trim
let b = "        Jai Shree Ram          ";
console.log(b.trim());

//slice
let c = "abcdefg";
c = c.slice(3, 5);
console.log(c);

//concatination

let d = "Rohit ";
let e = "Kumar";
let res = d.concat(e);
let rest = d+e;
console.log(rest);
console.log(res);

//Replace
let f = "abcdefgh";
console.log(f.replace("a", "R"));

//Character at 

let r = "i love coding";
console.log(r.charAt(4));