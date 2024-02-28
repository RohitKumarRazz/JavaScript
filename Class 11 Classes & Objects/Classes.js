class TataCar{
    constructor(brand, milege){
        console.log("Creating new Object");
        this.brandName = brand;
        this.milege = milege;
    }
    start(){
        console.log("Star");
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}
let fortuner = new TataCar("fortuner", 10);
console.log(fortuner);
//fortuner.setBrand("Fortuner");
let Thar = new TataCar("Thar", 20);
//Thar.setBrand("Mahindra ");
console.log(Thar);


