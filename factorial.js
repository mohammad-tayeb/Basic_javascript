// finding factorial 
// 4! = 4x3x2x1
function factorial(number){
     let sum = 1;
     for(let i=1; i<=number; i++){
        sum = sum*i;
     }
     return sum;
}
let myNumber = factorial(4);
console.log(myNumber);
