// using slice we can show the specific porsion of an array
// but using splice we slice an array permanently
// spilce(starting point, how many from starting, anything else to add)
let demoArray = [1,2,3,4,5,6,7];
let newArray = demoArray.splice(2,2,1);
console.log(newArray);
console.log(demoArray);