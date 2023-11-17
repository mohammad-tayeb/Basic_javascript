var numbers = [10, 20, 30, 40, 50];
var names = ["tayeb", "mamun", "sakib", "rasel", "masum"]
var element = names[0];
console.log(element);
numbers[1] = 100;
console.log(numbers);
var nSize = numbers.indexOf(100);
console.log(nSize);
numbers.push(99);
console.log(numbers);
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.unshift(22); // insert a number in the begining
console.log(numbers);
numbers.shift();
console.log(numbers);// remove the first element of the array