// we can swap using a "temp" variable or
// we can swap 2 values using distructureing
let num1 = 5;
let num2 = 7;
console.log(num1,num2);
let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1,num2);

// method 2 disturacturing
let first = 33;
let second = 44;
console.log(first,second);
[first, second] = [second, first];
console.log(first,second);