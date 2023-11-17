//this is an object
var myPhone = {
    brand: "Redmi",
    price: 25000,
    model: "redmi note 10 pro",
    processor: 730
}

console.log(myPhone);
//to see a single value from an object
console.log(myPhone.brand);
//to change a perticular value of an object
myPhone.brand = "IPhone";
console.log(myPhone);


var shopingCart = {
    pen : 10,
    pencil : 15,
    notebook : 33,
    shopName : "Al Madina"
};
// pen, pecil, notebook etc are called properties and shoppingCart in an object
console.log(shopingCart);
var penPer = shopingCart.pen;
var penPer2 = shopingCart['pen'];
console.log(penPer);
//alternate way to show a property
console.log(penPer2);

// to see the keys of an object
var prop = Object.keys(shopingCart);
var val = Object.values(shopingCart);
console.log(prop);
console.log(val);