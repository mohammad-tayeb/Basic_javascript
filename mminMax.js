// we find the min/ max number using Math.min() or Math.max()
function minNum(num1,num2,num3){
    minimumNum = Math.min(num1,num2,num3);
    return minimumNum;
}
let output = minNum(10,20,30);
console.log('min number is:',output);


function maxNum(num1,num2,num3){
    maximumNum = Math.max(num1,num2,num3);
    return maximumNum;
}
let output1 = maxNum(10,20,30);
console.log('max number is:',output1);
