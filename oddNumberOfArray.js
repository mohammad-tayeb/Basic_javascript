
function oddNumber(numbers){
    let oddNumbers = [];
     for(let i=0; i<numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element%2 != 0){
            oddNumbers.push(element);
        }
     }
     return oddNumbers;
}
let demoArray = [20,30,33,77];
let output = oddNumber(demoArray);
console.log(output);


