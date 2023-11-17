var price1 = 10;
var price2 = 20;
var totalPrice = price1 + price2;
var orangePrice = price1 * price2;
console.log(totalPrice);
console.log(orangePrice);
console.log(typeof price1);

var value1 = 0.1;
var value2 = 0.2;
var sum = value1 + value2;
sum = sum.toFixed(1); // after floating point only one value will be shown. but the vaue will turn into string.
sum = parseFloat(sum);  //in this case perse the number from string that is crated by using to- fixed 
console.log(sum);

// console.log(price1);
// console.log(price2);
// console.log(price1 + price2);