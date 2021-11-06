'use strict';
// ES5
function Product(name,price) {
    this.name = name;
    this.price = price;   
};

Product.prototype.make25PercentDiscount = function(){
    this.price = this.price - this.price * 0.25;
}

// ES6
// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     make25PercentDiscount() {
//         this.price = this.price - (this.price * 0.25)
//     }
// }

let apples = new Product("яблоки", '50');
let pears = new Product("ананасы", '75');
apples.make25PercentDiscount();
console.log(apples);
pears.make25PercentDiscount();
console.log(pears);