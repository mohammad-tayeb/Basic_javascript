let mobiles = [
    { brand: 'samsung', price: 120000 },
    { brand: 'MI', price: 130000 },
    { brand: 'Iphone', price: 80000 }
];

function sumCalculation(mobile) {
    let totalPrice = 0;
    for (let i = 0; i < mobile.length; i++) {
        let price = mobile[i].price; // Fix here
        totalPrice = totalPrice + price;
    }
    return totalPrice;
}

let sumation = sumCalculation(mobiles);
console.log(sumation);

let first100 = 100;
let other = 80;
let ticket = 120;
if(ticket <= 100){
    let first100Price = ticket * 100;
    let sum = first100Price;
    console.log(sum);
}
else if(ticket >= 100 && ticket <= 200){
    let first100Price = 100 * first100;
    let otherPrice = (ticket-100) * other;
    let sum = first100Price + otherPrice;
    console.log(sum);
}
