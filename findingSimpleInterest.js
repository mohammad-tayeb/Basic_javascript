function findInterest(principle,time,rate){
    interest = principle * time * rate / 100; 
    return interest;
}
let simpleInterest = findInterest(2000,1,10);
console.log(simpleInterest);

let interest = Math.pow(2,3);
console.log(interest);